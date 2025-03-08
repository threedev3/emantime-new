import { useState, useEffect } from "react";

const RamadanLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("ramadanAccounts")) || [];
    if (accounts.length > 0 && localStorage.getItem("currentUserEmail")) {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleLogin = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in all fields!");
      return;
    }

    const response = await fetch(
      "https://ramdan-backend-1sl971jhc-hasans-projects-44d1f730.vercel.app/api/v1/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      }
    );

    if (!response.ok) {
      alert("Failed to create user. Please try again.");
      return;
    }

    const accounts = JSON.parse(localStorage.getItem("ramadanAccounts")) || [];
    let currentUser = accounts.find((acc) => acc.email === email);

    if (!currentUser) {
      currentUser = {
        id: Date.now(),
        name,
        email,
        phone,
        progress: new Array(12 * 30).fill(false),
      };
      accounts.push(currentUser);
      localStorage.setItem("ramadanAccounts", JSON.stringify(accounts));
    }

    localStorage.setItem("currentUserEmail", email);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-11/12 max-w-md">
        <h1 className="text-2xl font-bold mb-5">🌙 Ramadan Planner 🌟</h1>
        <input
          type="text"
          className="w-full p-3 border-2 border-green-400 rounded-lg mb-4 text-lg text-center"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-3 border-2 border-green-400 rounded-lg mb-4 text-lg text-center"
          placeholder="Parent's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          className="w-full p-3 border-2 border-green-400 rounded-lg mb-4 text-lg text-center"
          placeholder="Parent's Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          className="bg-green-700 text-white px-6 py-3 rounded-full text-lg mt-3 transition-transform transform hover:scale-105"
          onClick={handleLogin}
        >
          Let's Start! 🚀
        </button>
      </div>
    </div>
  );
};

export default RamadanLogin;
