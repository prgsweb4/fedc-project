import React, { useState } from "react";
import Button from "../util/Button";
import "../assets/style/Booking.css";
import Image from "../assets/images/restaurant.jpg";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];
  
  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
    fullname: "",
    email: "",
    mobile: "",
    request: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

    const [rangeValue, setRangeValue] = useState(0);
    const [error, setError] = useState('');
    const handleRangeChange = (event) => {
        const newValue = event.target.value;
        if (newValue < 0 || newValue > 100) {
        setError('Range must be between 0 and 100');
        } else {
        setError('');
        }
        setRangeValue(newValue);
    }
  const minGuest = 1;
  const maxGuest = 20;

  return (
    <>
        <section className="reservation">
        <div className="container">
        <section className="reservation-wrap">
            <div className="form-wrap">
            <h2>Table reservation</h2>
            <form onSubmit={(e) => onFormSubmit(e, formValues)}>
                <section className="booking-details">
                <h3>Booking Details</h3>
                    <select
                    id="occasion"
                    name="occasion"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.occasion ? "error" : ""}
                    >
                    <option value="">Please select Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                    </select>
                    <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.date ? "error" : ""}
                    />
                 <input
                  type="number"
                  name="people"
                  id="people"
                  min={minGuest}
                  max={maxGuest}
                  placeholder="No of Guests"
                  onChange={handleInputChange}
                  className={isFormSubmitted && !formValues.people ? "error" : ""}
                />
                <select
                    id="time"
                    name="time"
                    value={formValues.time}
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.time ? "error" : ""}
                    >
                    {availableTimes.map(time => 
                        <option key={time}>
                        {time}
                        </option>
                    )}
                    </select>
                </section>
                <section className="booking-details">
                <h3>Personal Details</h3>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    maxLength="30"
                    placeholder="Full Name"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.fullname ? "error" : ""}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail Id"
                    maxLength="30"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.email ? "error" : ""}
                />
                <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    minLength="5"
                    maxLength="10"
                    placeholder="(+91) Mobile Number"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.mobile ? "error" : ""}
                />{" "}
                <input
                    type="text"
                    name="request"
                    id="request"
                    placeholder="Special Request ?"
                    onChange={handleInputChange}
                    className={isFormSubmitted && !formValues.request ? "error" : ""}
                />
                </section>
                <Button title="Book a table" type="submit" />
            </form>
            </div>
            <div className="img-wrap">
            <img src={Image} alt="Restaurant" />
            </div>
        </section>
        </div>
        </section>
    </>
  );
};

export default BookingForm;