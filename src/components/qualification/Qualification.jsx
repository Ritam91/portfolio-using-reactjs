import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              ToggleState === 1
                ? "qualification__button qualification__active button__flex"
                : "qualification__button  button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              ToggleState === 2
                ? "qualification__button qualification__active button__flex"
                : "qualification__button  button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Training
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              ToggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech CSE</h3>
                <span className="qualification__subtitle">
                  Lovely Professional University, Jalandhar
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Higher Secondary (12th Grade)
                </h3>
                <span className="qualification__subtitle">
                  Patna Central School, Patna
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Secondary School (10th Grade)
                </h3>
                <span className="qualification__subtitle">
                  DAV Public School, Munger
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>
            </div>
          </div>

          <div className={
              ToggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Data Structures and Algorithms
                </h3>
                <span className="qualification__subtitle">CipherSchools</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  June'23 - July'23
                </div>
              </div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>

              <div>
                <h3 className="qualification__title">Reactjs Bootcamp</h3>
                <span className="qualification__subtitle">CipherSchools</span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Jan'23 - Feb'23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
