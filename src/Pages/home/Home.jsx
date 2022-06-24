import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./home.css";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Home = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //habdling the options to choose adults, children and rooms
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  //handling the incresse and decrease operations

  const handleCount = (name, count) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: count === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="home">
      <Navbar />
      <div className="lander">
        <div className="lander__content">
          <h1>Need to Maximise the use of your money?</h1>
          <p>
            Get the best of reservations, car rentals and bookings with our
            service
          </p>
          <Link to="">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      <div className="search">
        <div className="searchItem">
          <input type="search" placeholder="Where are you going to?" />
        </div>

        <div className="searchItem">
          <span onClick={() => setOpenDate(!openDate)}>{`${format(
            date[0].startDate,
            "MM/dd/yy"
          )} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>

          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="searchItem">
          <span
            onClick={() => setOpenOptions(!openOptions)}
          >{`${options.adults} adult . ${options.children} children . ${options.rooms} rooms`}</span>
          {openOptions && (
            <div className="options">
            <div className="optionsItem">
                <span className="optionText">Adults</span>
                <div className="optionCounter">
                  <button
                  disabled={options.adults <=1}
                    className="optionCounterButton"
                    onClick={() => handleCount("adults", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleCount("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                  disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleCount("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleCount("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button
                  disabled={options.rooms}
                    className="optionCounterButton"
                    onClick={() => handleCount("rooms", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.rooms}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleCount("rooms", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="searchItem">
          <button className="searchButton">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
