import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import RamadanPlannerPDF from "./RamadanPlannerPDF";

const RamadanDashBoard = () => {
  // Task definitions
  const tasks = [
    "☪️ Fasting",
    "🕌 Fajr",
    "🕌 Zuhr",
    "🕌 Asr",
    "🕌 Magrib",
    "🕌 Isha",
    "📖 Read Quran",
    "🤲 Do Dhikr",
    "🌟 Help Others",
    "😊 Act of Kindness",
    "🕋 Make Dua",
    "🎁 Give Sadqa",
    "🕌 Taraweeh",
  ];
  const tasksPdf = [
    "Fasting",
    "Fajr",
    "Zuhr",
    "Asr",
    "Magrib",
    "Isha",
    "Read Quran",
    "Do Dhikr",
    "Help Others",
    "Act of Kindness",
    "Make Dua",
    "Give Sadqa",
    "Taraweeh",
  ];

  // Tooltips for each task message
  const taskTooltips = {
    "☪️ Fasting":
      "Fasting in Ramadan teaches patience, self-discipline, and empathy for those less fortunate.",
    "🕌 Fajr": "Pray Fajr early to start your day with spiritual energy.",
    "🕌 Zuhr":
      "Praying Zuhr helps maintain your connection with Allah during a busy day.",
    "🕌 Asr": "The two cool prayers (Fajr and Asr) bring great rewards.",
    "🕌 Magrib": "Break your fast with gratitude during Maghrib prayer.",
    "🕌 Isha": "Isha prayer during Ramadan is especially rewarding.",
    "📖 Read Quran": "Reading the Quran in Ramadan brings multiplied rewards!",
    "🤲 Do Dhikr":
      "Remember Allah often—the difference is like the living and the dead.",
    "🌟 Help Others":
      "Be beneficial to others; it's one of the most beloved acts in Islam.",
    "😊 Act of Kindness": "Even a smile is charity. Small acts matter!",
    "🕋 Make Dua":
      "Dua is most likely accepted while fasting, before breaking fast, and in the last third of the night.",
    "🎁 Give Sadqa":
      "Charity does not decrease wealth—give generously in Ramadan.",
    "🕌 Taraweeh":
      "Praying Taraweeh completes the recitation of the Quran during Ramadan.",
  };

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleDaysCount, setVisibleDaysCount] = useState(30);
  const [progress, setProgress] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPdfReady, setIsPdfReady] = useState(false);
  const gridRef = useRef(null);

  // Handle logout
  const handleLogout = () => {
    navigate("/ramadan-planner");
  };

  // Clear localStorage if it's corrupted
  const resetLocalStorageIfCorrupted = useCallback(() => {
    try {
      // Try to parse the accounts data
      const accountsStr = localStorage.getItem("ramadanAccounts");
      if (accountsStr) {
        JSON.parse(accountsStr);
      }

      // Try to get the current user email
      localStorage.getItem("currentUserEmail");
    } catch (error) {
      console.error("Corrupted localStorage detected, resetting:", error);
      localStorage.removeItem("ramadanAccounts");
      localStorage.removeItem("currentUserEmail");
      navigate("/login");
    }
  }, [navigate]);

  // Load user data
  const loadUserData = useCallback(() => {
    const currentUserEmail = localStorage.getItem("currentUserEmail");

    try {
      if (currentUserEmail) {
        // User is logged in, try to load user data
        const accounts =
          JSON.parse(localStorage.getItem("ramadanAccounts")) || [];
        const user = accounts.find((acc) => acc.email === currentUserEmail);

        if (user) {
          // Valid user found, initialize dashboard
          setCurrentUser(user);

          // Ensure progress array is the correct size
          if (!user.progress || user.progress.length !== tasks.length * 30) {
            const newProgress = new Array(tasks.length * 30).fill(false);
            setProgress(newProgress);

            // Update user with new progress
            user.progress = newProgress;
            saveUserProgress(user, newProgress);
          } else {
            setProgress(user.progress);
          }

          // Set PDF as ready once we have user data
          setIsPdfReady(true);
        } else {
          // User email exists but no matching account found
          navigate("/login");
        }
      } else {
        // No user logged in
        navigate("/login");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      navigate("/login");
    }
  }, [navigate, tasks.length]);

  // Save progress back to localStorage
  const saveUserProgress = (user, updatedProgress) => {
    try {
      // Get accounts from localStorage
      const accountsStr = localStorage.getItem("ramadanAccounts");
      let accounts = accountsStr ? JSON.parse(accountsStr) : [];

      // Ensure accounts is an array
      if (!Array.isArray(accounts)) {
        accounts = [];
      }

      // Create updated user object
      const updatedUser = {
        ...user,
        progress: updatedProgress,
      };

      // Find and update the current user in the accounts array
      const i = accounts.findIndex((acc) => acc.email === user.email);
      if (i >= 0) {
        accounts[i] = updatedUser;
      } else {
        accounts.push(updatedUser);
      }

      // Save back to localStorage
      localStorage.setItem("ramadanAccounts", JSON.stringify(accounts));

      // Update state
      setCurrentUser(updatedUser);
    } catch (error) {
      console.error("Error saving progress:", error);
      alert("There was an error saving your progress. Please try again.");
    }
  };

  // Handle checkbox click
  const handleCheckboxClick = (taskIndex, day) => {
    const idx = taskIndex * 30 + day;
    const newProgress = [...progress];
    newProgress[idx] = !newProgress[idx];
    setProgress(newProgress);

    // Save updated progress
    if (currentUser) {
      saveUserProgress(currentUser, newProgress);
    }
  };

  // Calculate score for a day
  const calculateScore = (day) => {
    let completed = 0;
    tasks.forEach((_, taskIndex) => {
      const idx = taskIndex * 30 + day;
      if (progress[idx]) completed++;
    });

    return Math.round((completed / tasks.length) * 100);
  };

  // Get score cell styling
  const getScoreCellStyle = (percentage) => {
    if (percentage === 100) {
      return "bg-emerald-600 text-white";
    } else if (percentage >= 75) {
      return "bg-emerald-500 text-white";
    } else if (percentage >= 50) {
      return "bg-emerald-200 text-emerald-600";
    } else if (percentage < 50 && percentage > 0) {
      return "bg-red-200 text-red-700";
    }
    return "bg-emerald-100 text-emerald-600";
  };

  // Pagination handlers
  const handleNext = () => {
    const maxPages = Math.ceil(30 / visibleDaysCount) - 1;
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Update visible days based on window width
  const updateVisibleDays = useCallback(() => {
    if (windowWidth < 480) {
      setVisibleDaysCount(3);
    } else if (windowWidth < 768) {
      setVisibleDaysCount(7);
    } else if (windowWidth < 1024) {
      setVisibleDaysCount(10);
    } else if (windowWidth < 1280) {
      setVisibleDaysCount(15);
    } else {
      setVisibleDaysCount(30);
    }
  }, [windowWidth]);

  // Handle window resize with debounce
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    let timeoutId = null;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Update visible days when window width changes
  useEffect(() => {
    updateVisibleDays();
  }, [windowWidth, updateVisibleDays]);

  // Load user data on component mount
  useEffect(() => {
    resetLocalStorageIfCorrupted();
    loadUserData();
  }, [resetLocalStorageIfCorrupted, loadUserData]);

  // Calculate days to display
  const startDay = currentPage * visibleDaysCount;
  const endDay = Math.min(startDay + visibleDaysCount, 30);
  const daysToShow = Array.from(
    { length: endDay - startDay },
    (_, i) => startDay + i
  );

  // Generate dynamic grid columns CSS based on number of visible days
  const gridColumnsStyle = {
    gridTemplateColumns: `minmax(90px, 130px) repeat(${daysToShow.length}, minmax(40px, 1fr))`,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-emerald-600 py-4 text-center shadow-md h-20">
        {/* <img src="/logo.png" alt="EmanTime Logo" className="h-14" /> */}
      </header>

      {/* Dashboard */}
      <div className="flex-1 flex flex-col p-4 md:p-5">
        <div className="flex justify-between items-center mb-4">
          {isPdfReady ? (
            <PDFDownloadLink
              document={
                <RamadanPlannerPDF
                  tasks={tasksPdf}
                  progress={progress}
                  currentUser={currentUser}
                />
              }
              fileName={`${currentUser?.name || "User"}_Ramadan_Planner.pdf`}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center"
            >
              {({ loading }) =>
                loading ? (
                  "Preparing PDF..."
                ) : (
                  <>
                    <span className="mr-2">📄</span> Download PDF
                  </>
                )
              }
            </PDFDownloadLink>
          ) : (
            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed flex items-center"
              disabled
            >
              <span className="mr-2">📄</span> Preparing PDF...
            </button>
          )}

          <a
            className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors"
            href={"/"}
          >
            Back To Home
          </a>
        </div>

        {/* User Header */}
        <div className="text-center mb-5 p-4 bg-emerald-100 rounded-lg border-l-4 border-emerald-600 shadow-sm relative">
          <h1 className="m-0 text-xl md:text-2xl text-emerald-600 flex items-center justify-center">
            <span>🌙</span>{" "}
            <span className="mx-2">
              {currentUser?.name || "User"}'s Ramadan Planner
            </span>{" "}
            <span>☀️</span>
          </h1>
        </div>

        {/* Pagination Controls */}
        {visibleDaysCount < 30 && (
          <div className="mt-2 mb-3 text-center flex justify-center items-center">
            <button
              className="px-2 sm:px-3 py-1 sm:py-2 bg-emerald-600 text-white border-none rounded-lg cursor-pointer mx-1 text-xs sm:text-sm font-medium hover:bg-emerald-700 transition-colors"
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              ◀️ Previous
            </button>
            <span className="inline-block px-2 py-1 font-semibold text-emerald-600 text-xs sm:text-sm">
              Days {startDay + 1}-{endDay}
            </span>
            <button
              className="px-2 sm:px-3 py-1 sm:py-2 bg-emerald-600 text-white border-none rounded-lg cursor-pointer mx-1 text-xs sm:text-sm font-medium hover:bg-emerald-700 transition-colors"
              onClick={handleNext}
              disabled={currentPage >= Math.ceil(30 / visibleDaysCount) - 1}
            >
              Next ▶️
            </button>
          </div>
        )}

        {/* Planner Grid */}
        <div className="flex-1 relative bg-white rounded-lg p-2 sm:p-3 w-full shadow-sm border border-gray-200 overflow-x-auto">
          <div
            ref={gridRef}
            className="grid gap-1 pb-2 w-full"
            style={gridColumnsStyle}
          >
            {/* Header cell */}
            <div className="flex items-center justify-center text-center h-8 sm:h-10 p-1 rounded-md bg-emerald-100 text-emerald-600 font-semibold left-0 z-10 text-xs sm:text-sm">
              Tasks →
            </div>

            {/* Date cells */}
            {daysToShow.map((day) => (
              <div
                key={`day-${day}`}
                className="flex items-center justify-center text-center h-8 sm:h-10 p-1 rounded-md bg-emerald-600 text-white font-semibold  top-0 z-20 text-xs sm:text-sm"
              >
                {day + 1}
              </div>
            ))}

            {/* Score cell header */}
            <div className="flex items-center justify-center text-center h-8 sm:h-10 p-1 rounded-md bg-emerald-100 text-emerald-600 font-semibold  left-0 z-10 text-xs sm:text-sm">
              Score
            </div>

            {/* Score cells */}
            {daysToShow.map((day) => {
              const score = calculateScore(day);
              return (
                <div
                  key={`score-${day}`}
                  className={`flex items-center justify-center text-center h-8 sm:h-10 p-1 rounded-md font-semibold  top-8 sm:top-10 z-20 text-xs sm:text-sm ${getScoreCellStyle(
                    score
                  )}`}
                >
                  {score}%
                </div>
              );
            })}

            {/* Task rows with checkboxes */}
            {tasks.map((task, taskIndex) => (
              <React.Fragment key={taskIndex}>
                {/* Task cell */}
                <div
                  className="flex items-center justify-center text-center h-10 p-1 rounded-md bg-emerald-100 text-emerald-600 font-semibold left-0 z-10 text-sm relative"
                  onMouseEnter={() => setHoveredTask(taskIndex)}
                  onMouseLeave={() => setHoveredTask(null)}
                  onClick={() => {
                    if (windowWidth < 768) {
                      setHoveredTask(
                        hoveredTask === taskIndex ? null : taskIndex
                      );
                    }
                  }}
                >
                  {task}
                  {hoveredTask === taskIndex && (
                    <div className="absolute left-full top-0 w-48 bg-amber-700 text-white text-left rounded-md p-2 text-xs font-normal z-50 shadow-lg overflow-auto whitespace-normal sm:left-full sm:top-0 sm:w-48 lg:w-64">
                      {taskTooltips[task] ||
                        "Complete this task daily during Ramadan"}
                    </div>
                  )}
                </div>

                {/* Checkboxes for each day */}
                {daysToShow.map((day) => {
                  const idx = taskIndex * 30 + day;
                  return (
                    <div
                      key={`check-${taskIndex}-${day}`}
                      className={`flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 border-2 rounded-lg cursor-pointer mx-auto transition-all ${
                        progress[idx]
                          ? "bg-emerald-200 border-emerald-600"
                          : "bg-white border-amber-700"
                      }`}
                      onClick={() => handleCheckboxClick(taskIndex, day)}
                    >
                      {progress[idx] && (
                        <span className="text-emerald-600 font-bold text-base sm:text-lg">
                          ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Current Page Indicator on Mobile */}
        {visibleDaysCount < 30 && (
          <div className="fixed bottom-4 left-4 z-50">
            <div className="p-2 bg-emerald-600 text-white text-xs rounded-full shadow-lg">
              {startDay + 1}-{endDay}
            </div>
          </div>
        )}

        {/* Tooltip for Mobile Tap Instruction */}
        {windowWidth < 768 && (
          <div className="text-center mt-2 text-xs text-gray-600">
            Tap on a task name to see more information
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 w-full text-center text-sm text-white bg-black mt-auto">
        © 2025 EMANTIME | Strengthen Your Faith Daily
      </footer>
    </div>
  );
};

export default RamadanDashBoard;
