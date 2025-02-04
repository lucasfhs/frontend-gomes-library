import React, { useEffect, useState } from "react";

function NotificationBar({ message, type, duration = 2500, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0));
    }, 100);

    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 w-80 p-4 rounded-lg shadow-md text-black font-bold border-2  border-black 
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      <p className="text-sm">{message}</p>
      <div className="w-full h-1 bg-gray-200 border border-black mt-2 rounded-md">
        <div
          className="h-1 bg-white transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default NotificationBar;
