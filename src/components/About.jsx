import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import memoji1 from "../assets/memoji1.PNG";
import memoji2 from "../assets/memoji2.PNG";

const About = (props) => {
  const [creator, setCreator] = useState({ img: memoji1 });

  const handleMouse = (e) => {
    const img = creator.img === memoji1 ? memoji2 : memoji1;
    setCreator({ img: img });
  };

  const socialIconsStyles =
    "text-4xl m-2 transition transform duration-150 hover:scale-95 text-black";

  const copyrightLinksStyles =
    "text-red-500 transition transform duration-100 hover:text-gray-800 hover:scale-105";

  return (
    <div className={"flex flex-col h-screen w-full bg-white z-40"}>
      <div className="bg-gray-800 py-4">
        <h1
          className={
            "w-11/12 text-2xl mx-auto text-white text-center font-bold"
          }
        >
          <FontAwesomeIcon
            onClick={props.onBack}
            className={
              "float-left text-4xl text-white cursor-pointer transform duration-150 hover:scale-95 hover:text-blue-600"
            }
            icon={faChevronLeft}
          />{" "}
          About
        </h1>
      </div>

      <div className="py-6 px-2 bg-gray-200 text-center">
        <h1 className={"text-4xl font-bold text-purple-500"}>PokeGen v0.1</h1>
        <h1 className={"text-xl font-bold mb-2"}>Developed by:</h1>
        <img
          src={creator.img}
          className={
            "w-3/5 sm:w-1/4 mx-auto transition transform duration-150 hover:scale-105"
          }
          onMouseOver={handleMouse}
          onMouseLeave={handleMouse}
          alt="Memoji of the creator"
        />
        <h2 className={"text-3xl"}>
          Raul <span className={"font-semibold"}>Luis</span>
        </h2>
        <h3 className={"text-xl text-teal-600 font-semibold"}>
          Front-End Developer
        </h3>
        <div className="mx-auto flex justify-center w-11/12">
          <a
            href={"https://github.com/devCayacoa"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={socialIconsStyles + " hover:text-purple-600"}
            />
          </a>
          <a
            href={"https://twitter.com/cayacoa_"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={socialIconsStyles + " hover:text-blue-400"}
            />
          </a>
        </div>
      </div>
      <div
        className={
          "h-full flex flex-col justify-center place-content-center items-center w-full text-justify align-middle mx-auto py-6 px-3"
        }
      >
        <div className={"mb-2"}>
          &copy; All Pokemon pictures and info were extracted from{" "}
          <a href={"https://pokeapi.co/"} className={copyrightLinksStyles}>
            PokeAPI
          </a>{" "}
          and{" "}
          <a
            href="https://pokeres.bastionbot.org/"
            className={copyrightLinksStyles}
          >
            Pokeres
          </a>
        </div>
        <div className={""}>
          &copy; Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/those-icons"
            title="Those Icons"
          >
            Those Icons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
