import React, { useState } from "react";
import { Calendar } from "react-calendar";

export default function Form() {
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = useState(new Date());

  function onChange(newDate) {
    setDate(newDate);
  }
  return (
    <div className="mt-5 mx-auto" style={{ maxWidth: 600 }}>
      <form action="" className="needs-validation" novalidate>
        <div className="mb-3" id="location">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <select
            name="location"
            className="form-select"
            aria-label="select"
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
          >
            <option disabled value="">
              Select a store
            </option>
            <option value="London Soho">London Soho</option>
            <option value="London Covent Garden">London Covent Garden</option>
          </select>
        </div>
        <div id="calendar">
          Date and time
          <Calendar className="mt-4" onChange={onChange} minDate={new Date()} />
        </div>

        <div className="mt-3" id="time-pick">
          <label htmlFor="time" class="form-label">
            Time
          </label>
          <select
            name="time"
            class="form-select"
            aria-label="select"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option disabled value="">
              Select a time
            </option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
          </select>
        </div>
        <div id="personal-details" className="mt-4">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-5 fw-bold">
          You're booking an appointment for {date.toDateString()} at{" "}
          {selectedTime} in {selectedStore}
              </div>
              <div className="mt-4"><button className="btn btn-dark" type="submit">CONFIRM APPOINTMENT</button></div>
      </form>
    </div>
  );
}
