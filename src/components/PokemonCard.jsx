import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Loading from "../assets/loading.svg";

const seasons = {
  spring: ["grass", "fairy", "bug", "flying", "normal"],
  summer: ["fire", "fighting", "rock", "ground", "normal"],
  fall: ["psychic", "poison", "ghost", "electric", "dragon", "normal"],
  winter: ["dark", "water", "ice", "steel", "normal"],
};

const typeStyles = {
  defaultStyles: "text-center font-bold px-4 py-1 rounded-full my-4 mx-2 w-1/2",
  customStyles: {
    grass: "bg-green-500",
    fairy: "bg-pink-200 text-black",
    bug: "bg-green-700",
    flying: "text-black bg-blue-200 ",
    normal: "text-black bg-gray-300",
    fire: "bg-orange-500",
    fighting: "bg-red-600",
    rock: "bg-gray-700",
    ground: "bg-yellow-800",
    psychic: "bg-pink-500",
    poison: "bg-purple-600",
    ghost: "bg-purple-800",
    electric: "bg-yellow-400 text-black",
    dragon: "bg-gradient-to-b from-red-600 to-blue-500",
    dark: "bg-gray-900",
    water: "bg-blue-500",
    ice: "bg-blue-200 text-black",
    steel: "bg-gray-400",
  },
};

const Card = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  function randomType(season) {
    const randomNumber = Math.floor(Math.random() * seasons[season].length);
    return seasons[season][randomNumber];
  }

  function randomPokemon(pokemonArrLength) {
    return Math.floor(Math.random() * pokemonArrLength);
  }

  function validNameChooser(pokemon) {
    let isValid = false;
    let validPokemon = null;
    while (!isValid) {
      validPokemon = pokemon[randomPokemon(pokemon.length)].pokemon;
      if (!validPokemon.name.includes("-")) {
        isValid = true;
      }
    }
    return validPokemon;
  }

  const type = randomType(props.season);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}/`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        let error = new Error();
        const responseError = {
          type: "Error",
          message: r.message || "Something went wrong",
          data: r.data || "",
          code: r.code || "",
        };
        error = { ...error, ...responseError };
        throw { error };
      })
      .then((type) => validNameChooser(type.pokemon))
      .then((chosePokemon) => {
        fetch(chosePokemon.url)
          .then((r) => r.json())
          .then((pkmn) => {
            setPokemon(pkmn);
            setPokemon((pokemon) => ({
              ...pokemon,
              img: `https://pokeres.bastionbot.org/images/pokemon/${pkmn.id}.png`,
            }));
            setTimeout(setLoading(false), 1000);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center content-center bg-gray-900 h-screen align-middle">
        <img
          src={Loading}
          alt={"Pokeball spinning"}
          className={"m-auto w-40 animate-spin "}
        />
      </div>
    );
  }

  function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className={"h-screen bg-white shadow-xl rounded"}>
      <div className="bg-gray-800 py-4">
        <h1
          className={
            "w-11/12 text-2xl mx-auto text-white text-center font-regular"
          }
        >
          <FontAwesomeIcon
            onClick={props.onBack}
            className={
              "float-left text-4xl text-white cursor-pointer transform duration-150 hover:scale-95 hover:text-blue-600"
            }
            icon={faChevronLeft}
          />
          <span className={"font-bold text-gray-200"}>{"#" + pokemon.id}</span>
          {" " + titleCase(pokemon.name)}
        </h1>
      </div>
      <div className={"py-8 px-2 bg-gray-200"}>
        <img
          src={pokemon.img}
          alt={pokemon.name + " image"}
          className={"mx-auto w-11/12 sm:w-1/2"}
        />
      </div>
      <div
        className={"flex justify-center sm:w-1/2 mx-auto px-2 py-4 text-white"}
      >
        {pokemon.types.map((elem) => (
          <h2
            key={elem.type.name}
            className={
              typeStyles.customStyles[elem.type.name.toLowerCase()] +
              " " +
              typeStyles.defaultStyles
            }
          >
            {titleCase(elem.type.name)}
          </h2>
        ))}
      </div>
      <button
        className={
          "py-3 px-6 bg-gray-900 text-white focus:outline-none font-semibold text-lg block mx-auto mt-4 rounded transition duration-500 hover:bg-blue-600 transform hover:scale-95"
        }
      >
        <a
          href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Pokedex
        </a>
      </button>
    </div>
  );
};

export default Card;
