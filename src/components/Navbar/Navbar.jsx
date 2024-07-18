import React, { useContext, useRef, useState, useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { auth } from "../../Services/firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";
import { DataContext } from "../../context/DataContext";
import { AiOutlineDelete } from "react-icons/ai";

const Navbar = ({ handleviews, citiesopen }) => {
  const {
    starredCities,
    removeStarredCity,
    fetchData,
    setIsManualCoordinates,
  } = useContext(DataContext);
  const [showStarredCities, setShowStarredCities] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const name = localStorage.getItem("username");
  const starredCitiesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        starredCitiesRef.current &&
        !starredCitiesRef.current.contains(event.target)
      ) {
        setShowStarredCities(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlelogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged Out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleselectcity = async (lat, lon) => {
    setIsManualCoordinates(true);
    fetchData(lat, lon);
    setShowStarredCities(false);
  };

  const handlecities = () => {
    setShowStarredCities(!showStarredCities);
    citiesopen(!showStarredCities);
  };

  const handledeletecity = (city) => {
    removeStarredCity(city);
  };

  return (
    <>
      <div className="d-flex p-4 justify-content-lg-start navbar">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <button
              className="px-2 button-29"
              onClick={() => handleviews("Weather")}
            >
              Weather
            </button>
          </li>
          <li>
            <button
              className="px-2 button-29"
              onClick={() => handleviews("Analysis")}
            >
              Analysis
            </button>
          </li>
          <li>
            <button className="button-29" onClick={handlecities}>
              Starred Cities
            </button>
          </li>
          {windowWidth >= 585 && (
            <li>
              <button className="greetname box">Hi {name}!!&nbsp;</button>
            </li>
          )}
          <li>
            {windowWidth >= 350 ? (
              <button className="button-29 logout" onClick={handlelogout}>
                Logout &nbsp; <IoLogOutOutline />
              </button>
            ) : (
              <li>
                <IoLogOutOutline className="logout" onClick={handlelogout} />
              </li>
            )}
          </li>
        </ul>
      </div>

      {showStarredCities && (
        <div className="starred-cities-overlay">
          <div className="starred-cities-popup" ref={starredCitiesRef}>
            <h3>Starred Cities</h3>
            <ul>
              {starredCities.map((city, index) => (
                <li key={index} className="city-item">
                  <span
                    onClick={() =>
                      handleselectcity(city.latitude, city.longitude)
                    }
                  >
                    {index + 1}. {city.name}
                  </span>
                  <button
                    className="delete-city"
                    onClick={() => handledeletecity(city.name)}
                  >
                    <AiOutlineDelete />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
