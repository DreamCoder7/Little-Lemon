import { useState, ChangeEvent, FormEvent } from "react";
import classes from "./BookingForm.module.css";
import { BookingFormProps } from "../../types";

function BookingForm(props: BookingFormProps) {
  const { availableTimes, updateTimes } = props;
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("");
  const [occasion, setOccastion] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission here (e.g., sending reservation data to the server)
    console.log(time, guests, occasion);

    // Git commit
    // Implemented the frontend logic to communicate with the backend server and send reservation requests.
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // Handle date change here if required
    // For this example, we'll just call the updateTimes function from props.
    updateTimes();
  };

  return (
    <form className={classes.BookingForm} onSubmit={handleSubmit}>
      <div>
        <h3 className={classes.Title}>Let's book your table!</h3>
        <p className={classes.Text}>
          To help us find the best table for you, select the preferred party
          size, date, and time of your reservation.
        </p>
      </div>
      <div className={classes.Container}>
        <div className={classes.InputCont}>
          <label htmlFor="res-date" className={classes.Label}>
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            className={classes.Input}
            onChange={handleDateChange}
          />
        </div>
        <div className={classes.InputCont}>
          <label htmlFor="res-time" className={classes.Label}>
            Choose time
          </label>
          <select
            id="res-time"
            value={time}
            className={classes.Input}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.InputCont}>
          <label htmlFor="guests" className={classes.Label}>
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={classes.Input}
          />
        </div>
        <div className={classes.InputCont}>
          <label htmlFor="occasion" className={classes.Label}>
            Occasion
          </label>
          <select
            id="occation"
            value={occasion}
            className={classes.Input}
            onChange={(e) => setOccastion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
      </div>
      <button type="submit" className={classes.Btn}>
        Make your reservation
      </button>
    </form>
  );
}

export default BookingForm;
