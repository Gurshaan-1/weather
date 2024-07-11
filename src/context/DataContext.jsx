import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { db, auth } from "../Services/firebase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [Sundata, setSunData] = useState(null);
  const [Dailydata, setDailyData] = useState(null);
  const apiSecret = "1560e8cb2f0044dcb51182112240607";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isManualCoordinates, setIsManualCoordinates] = useState(false);
  const [starredCities, setStarredCities] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        loadStarredCities(user.uid);
      } else {
        setUser(null);
        setStarredCities([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadStarredCities = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setStarredCities(docSnap.data().starredCities || []);
    } else {
      await setDoc(docRef, { starredCities: [] });
    }
  };

  const updateStarredCities = async (newStarredCities) => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { starredCities: newStarredCities });
    }
    setStarredCities(newStarredCities);
  };
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const fetchData = async (latitude, longitude) => {
    setIsLoading(true);
    console.log("fetchdata..." + latitude + " " + longitude);

    try {
      const [currentRes, sunRes, dailyRes] = await Promise.all([
        axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiSecret}&q=${latitude},${longitude}&aqi=yes`
        ),
        axios.get(
          `https://api.weatherapi.com/v1/astronomy.json?key=${apiSecret}&q=${latitude},${longitude}&dt=${formattedDate}`
        ),
        axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiSecret}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`
        ),
      ]);

      setData(currentRes.data);
      setSunData(sunRes.data);
      setDailyData(dailyRes.data);
      return { currentRes, sunRes, dailyRes };
    } catch (error) {
      setError(error);
      toast.error("Error fetching data: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isManualCoordinates && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchData(latitude, longitude);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
          console.error("Error fetching location:", error.message);
        }
      );
    } else {
      setIsLoading(false);
      if (!navigator.geolocation) {
        setError(new Error("Geolocation is not supported by your browser."));
      }
    }
  }, [isManualCoordinates]);

  const addStarredCity = (city, lat, lon) => {
    const newStarredCity = { name: city, latitude: lat, longitude: lon };
    const newStarredCities = [...starredCities, newStarredCity];
    updateStarredCities(newStarredCities);
    toast.success("Successfully added in Starred Places");
  };

  const removeStarredCity = (city) => {
    const newStarredCities = starredCities.filter((c) => c.name !== city);
    updateStarredCities(newStarredCities);
    toast.success("Successfully removed from Starred Places");
  };

  const isCityStarred = (city) => {
    return starredCities.some((starredCity) => starredCity.name === city);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        Sundata,
        Dailydata,
        isLoading,
        fetchData,
        setIsManualCoordinates,
        addStarredCity,
        removeStarredCity,
        isCityStarred,
        starredCities,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
