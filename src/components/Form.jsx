import * as PropTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faInfo } from "@fortawesome/free-solid-svg-icons";

const curr = new Date();
curr.setDate(curr.getDate());
const date = curr.toISOString().substr(0, 10);

function Form(props) {
  return (
    <div>
      <div className="form-container flex flex-col justify-between h-screen shadow-2xl w-full mx-auto /*px-6 pt-8*/ bg-white rounded shadow-xl ">
        <div className={"w-full"}>
          <div className="bg-red-600 px-2 py-10">
            <h1 className="title text-3xl text-white md:text-4xl font-semibold text-center">
              What's your
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                alt="Pokemon logo"
                className={
                  "mx-auto w-36 md:w-36 my-2 transition duration-150 transform hover:scale-105"
                }
              />
              based on your birthday?
            </h1>
          </div>
          <form action={""} onSubmit={props.onSubmit}>
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                id="date-picker"
                className={
                  "date-picker w-full p-4 mb-4 border-4 border-gray-400 bg-gray-200 appearance-none text-center focus:outline-none text-gray-700 text-xl transition duration-150 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-900"
                }
                onInput={props.onInput}
                required
                defaultValue={date}
                maxgit={date}
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </label>
            <button
              type={"submit"}
              className={
                "py-3 px-6 bg-gray-900 text-white font-semibold text-xl block mx-auto mt-4 rounded-full h-20 w-20 focus:outline-none transition duration-150 hover:bg-blue-600 transform hover:scale-95"
              }
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className={
                  "ml-2 text-white text-3xl align-middle animate-lrbounce"
                }
              />
            </button>
          </form>
        </div>
        <button
          className={
            "appearance-none border-2 border-gray-700 focus:outline-none text-2xl text-gray-700 block ml-auto h-12 w-12 rounded-full mb-2 mr-3 transition duration-150 hover:border-blue-500 hover:text-blue-500 transform hover:scale-95"
          }
          onClick={props.onInfo}
        >
          <FontAwesomeIcon icon={faInfo} />
        </button>
      </div>
    </div>
  );
}

Form.propTypes = { onInput: PropTypes.func };

export default Form;
