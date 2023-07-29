import { useReducer } from "react";

import classes from "./Booking.module.css";
import { Reservation as ReservationData } from "../../constants";
import { BookingForm } from "../../components";

interface State {
  availableTimes: string[];
}

const initialState: State = {
  availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM", "7:00 PM", "8:00 PM"],
};

type Action = { type: "UPDATE_TIMES" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, we'll just return the same available times regardless of the selected date.
      // In a real-world app, you can implement logic to fetch and update times based on the selected date.
      return { ...state };
    default:
      return state;
  }
};

function Reservation() {
  const { title, highlight, images } = ReservationData;

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = () => {
    dispatch({ type: "UPDATE_TIMES" });
  };

  return (
    <section className={classes.Reservation}>
      <header className={classes.Header}>
        <h2 className={classes.Title}>
          <span>{highlight}</span>
          {title}
        </h2>
      </header>
      <BookingForm
        availableTimes={state.availableTimes}
        updateTimes={updateTimes}
      />
      <div className={classes.ImgCon}>
        {images.map((img) => (
          <img
            src={img}
            alt="Random Food Images"
            key={img}
            className={classes.Img}
          />
        ))}
      </div>
    </section>
  );
}

export default Reservation;
