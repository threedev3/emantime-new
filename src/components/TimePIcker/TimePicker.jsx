import React, { useState } from "react";
import { Dialog, DialogTitle } from "@headlessui/react";

const TimePicker = ({ onTimeSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const generateTimeSlots = () => {
    const slots = [];
    let start = new Date();
    start.setHours(0, 0, 0, 0); // Set time to 12:00 AM

    for (let i = 0; i < 48; i++) {
      const end = new Date(start.getTime() + 30 * 60 * 1000); // Add 30 minutes
      const formatTime = (time) =>
        time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

      slots.push(`${formatTime(start)} to ${formatTime(end)}`);
      start = end; // Move to the next 30-minute slot
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsModalOpen(false);
    onTimeSelect(time); // Pass the selected time to the parent component
  };

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full text-left py-3 px-4 bg-gray-100 rounded-xl text-black/80 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {selectedTime || "Select a Time"}
      </button>

      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <DialogTitle className="text-lg font-bold mb-4">
              Select a Time Slot
            </DialogTitle>
            <div className="max-h-[300px] overflow-y-auto flex flex-col gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleTimeSelect(slot)}
                  className="py-2 px-4 rounded-lg text-black/80 hover:bg-gradOne hover:text-white transition"
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-gradTwo to-gradThree text-white rounded-lg hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default TimePicker;
