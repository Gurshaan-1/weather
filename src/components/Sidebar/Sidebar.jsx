import React, { useState, useEffect, useContext, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import "./Sidebar.css";
import SideMain from "../SideMain/SideMain";
import SunPositionGauge from "../Sunpos/Sunpos";
import axios from "axios";
import { DataContext } from "../../context/DataContext";
import { LoaderIcon } from "react-hot-toast";
import toast from "react-hot-toast";

const Sidebar = ({ baropen }) => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { fetchData, setIsManualCoordinates } = useContext(DataContext);
  const [isLoad, setisLoad] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const apiKey = "pk.57b9c9943dc1c4f473a5d7600b83e49f";
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setAddress("");
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchCoordinates = async (address) => {
    const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(
      address
    )}&format=json`;

    try {
      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat, lon };
      } else {
        throw new Error("No data found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const fetchAutocomplete = async (query) => {
    const url = `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${encodeURIComponent(
      query
    )}&limit=5&dedupe=1`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
      return [];
    }
  };

  const handleAddressChange = async (e) => {
    const query = e.target.value;
    setAddress(query);

    if (query.length > 2) {
      const results = await fetchAutocomplete(query);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = async () => {
    if (address === "") {
      toast.error("Select a Place");
      return;
    } else {
      setisLoad(true);
      const result = await fetchCoordinates(address);
      if (result) {
        setIsManualCoordinates(true);
        const d = await fetchData(result.lat, result.lon);
        if (d) {
          setAddress("");
          toast.success("Weather Data Updated Successfully");
          setisLoad(false);
        }
      }
    }
  };

  const handleSelectSuggestion = async (suggestion) => {
    setAddress(suggestion.display_name);
    setSuggestions([]);
  };

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    baropen(newState);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        <FiMenu />
      </div>
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`flex-column flex-shrink-0 p-4 sidebar ${
          isSidebarOpen ? "show" : ""
        }`}
        style={{ width: "30%" }}
      >
        <div className="Search" ref={inputRef}>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Search For Places..."
          />
          <div className="search-icon" onClick={handleSearch}>
            {isLoad ? <LoaderIcon /> : <BsSearch />}
          </div>
        </div>
        {suggestions.length !== 0 && (
          <div className="suggestions" ref={suggestionsRef}>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <SideMain />
        <div className="side-main-b">
          <SunPositionGauge />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
