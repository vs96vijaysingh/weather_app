/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "./Api/FetchListingData";
import InfoCard from "./InfoCard";

function WeatherInfo() {
  const [data, setData] = useState({});
  const [searchKey, setSearchKey] = useState("");

  const [bgImage, setBGImage] = useState(
    "https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif"
  );
  const fetchData = async () => {
    let data = await fetchWeatherData({}, { q:searchKey?searchKey: "Noida" });
    console.log(data);
    setData(data?.data);
    let main = data?.data?.weather?.[0]?.main;
    switch (main) {
      case "Snow":
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif"
        );
        break;
      case "Clouds":
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif"
        );
        break;
      case "Fog":
        setBGImage("https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif");
        break;
      case "Rain":
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif"
        );
        break;
      case "Clear":
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
        );
        break;
      case "Thunderstorm":
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif"
        );
        break;
      default:
        setBGImage(
          "https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif"
        );
        break;
    }
  };
  const handleSearch=async(e)=>{
    e.preventDefault();
await fetchData()
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section
        className="main-container"
        style={{ backgroundColor: "#f5f6f7", backgroundImage: `url(${bgImage})` }}
      >
        <div className="search-field">
          <input
            type="text"
            className="city-name"
            placeholder="Search by city name"
            name="searchKey"
            value={searchKey}
            onChange={(e)=>setSearchKey(e.target.value)}
          />
          <div className="">
            <button className="App-link search-icon" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <InfoCard data={data} bgImage={bgImage} />
      </section>
    </>
  );
}

export default WeatherInfo;
