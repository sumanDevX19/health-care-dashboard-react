import React from "react";
import { Card, CardContent } from "../Components/CardComponents";
import { appointments, days } from "../data/AppointmentMockData";
import "../CalenderView.css"; // assuming the CSS is stored here

export default function CalendarView({ selectedDate = 26, selectedTime = "09:00" }) {
  return (
    <div className="appointment-calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-title">October 2021</h2>
        <div className="calendar-nav-buttons">
          <button className="nav-button">⬅️</button>
          <button className="nav-button">➡️</button>
        </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`calendar-day ${day.date === selectedDate ? "selected-day" : ""}`}
          >
            <div className="day-name">{day.day}</div>
            <div className="day-date">{day.date}</div>
            {day.times.map((time, tIdx) => (
              <div
                key={tIdx}
                className={`time-slot ${
                  day.date === selectedDate && time === selectedTime
                    ? "selected-time"
                    : "default-time"
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        {appointments.map((appt, idx) => (
          <Card key={idx} className={`${appt.bg} appointment-card`}>
            <CardContent>
              <div className="card-title">
                {appt.title} <span>{appt.icon}</span>
              </div>
              <div className="card-time">{appt.time}</div>
              <div className="card-doctor">{appt.doctor}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
