// src/components/EventSection.jsx
import React, { useState, useEffect } from "react";
import colorEffect from "@/assets/bg_footer.png"; // ✅ import your background image

export default function EventSection() {
  const [viewDate, setViewDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [modal, setModal] = useState({ open: false, key: null, text: "" });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events") || "{}");
    setEvents(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const weeks = Math.ceil((daysInMonth + firstDay) / 7);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const makeKey = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const goPrev = () => setViewDate(new Date(year, month - 1, 1));
  const goNext = () => setViewDate(new Date(year, month + 1, 1));

  const openModal = (key, text = "") => setModal({ open: true, key, text });
  const closeModal = () => setModal({ open: false, key: null, text: "" });

  const saveEvent = () => {
    setEvents((prev) => ({ ...prev, [modal.key]: modal.text }));
    closeModal();
  };

  const deleteEvent = (key) => {
    const updated = { ...events };
    delete updated[key];
    setEvents(updated);
  };

  const renderDays = () => {
    const cells = [];
    let day = 1 - firstDay;

    for (let i = 0; i < weeks * 7; i++, day++) {
      const isCurrentMonth = day > 0 && day <= daysInMonth;
      const displayMonth = isCurrentMonth ? month : (day <= 0 ? month - 1 : month + 1);
      const displayYear =
        displayMonth < 0 ? year - 1 : displayMonth > 11 ? year + 1 : year;
      const actualMonth = (displayMonth + 12) % 12;

      const dateKey = makeKey(
        displayYear,
        actualMonth,
        day <= 0
          ? new Date(displayYear, actualMonth + 1, day).getDate()
          : day > daysInMonth
          ? day - daysInMonth
          : day
      );

      const event = events[dateKey];

      cells.push(
        <div
          key={`${dateKey}-${i}`}
          onClick={() => openModal(dateKey, event || "")}
          className={`p-2 border rounded-md h-24 flex flex-col justify-between text-center cursor-pointer 
          ${isCurrentMonth ? "bg-white hover:bg-green-50" : "bg-gray-100 opacity-70"}
          border-green-400`}
        >
          <span className="font-semibold">{isCurrentMonth ? day : ""}</span>
          {event && (
            <div className="text-xs bg-green-200 rounded-md p-1">
              {event.length > 20 ? event.slice(0, 20) + "..." : event}
            </div>
          )}
        </div>
      );
    }

    return cells;
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-gray-800 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0E447A, #0E447A00), url(${colorEffect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White card container */}
        <section className="w-full text-center py-16 relative z-10">
        <h1 className="text-3xl mt-10 font-extrabold text-white tracking-wide drop-shadow-lg">
        Events
        </h1></section>
      <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow-xl p-6 m-4 backdrop-blur-sm bg-opacity-95">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={goPrev}
            className="text-green-600 font-bold hover:text-green-800 text-xl"
          >
            ‹
          </button>
          <h2 className="text-2xl font-bold text-green-700">
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={goNext}
            className="text-green-600 font-bold hover:text-green-800 text-xl"
          >
            ›
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 text-center font-semibold border-b border-green-300 pb-2 mb-2">
          {dayNames.map((d) => (
            <div key={d} className="text-green-700">{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Add / Edit Event</h3>
            <textarea
              className="w-full border rounded-md p-2 mb-3"
              rows={3}
              placeholder="Enter event details..."
              value={modal.text}
              onChange={(e) => setModal((m) => ({ ...m, text: e.target.value }))}
            />
            <div className="flex justify-between">
              <button
                onClick={saveEvent}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => deleteEvent(modal.key)}
                className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500"
              >
                Delete
              </button>
              <button
                onClick={closeModal}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
