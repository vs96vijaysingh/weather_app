/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function InfoCard({ data, bgImage }) {
  return (
    <>
      <div className="weather-icon my-2">
        <div
          className="card mb-4 gradient-custom"
          style={{ borderRadius: "25px" }}
        >
          <div className="card-body p-4">
            <div id="demo1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-between mb-4 pb-2">
                    <div>
                      <h2 className="display-2">
                        <strong>
                          {(data?.main?.temp - 273.15)?.toFixed(1)}°C
                        </strong>
                      </h2>
                      <p className="text-muted mb-0">{data?.name}</p>
                    </div>
                    <div>
                      <img
                        src={
                          bgImage
                            ? bgImage
                            : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                        }
                        width="100px"
                        className="rounded-circle"
                      />
                      <p>{data?.weather?.[0]?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mb-4 gradient-custom"
        style={{ borderRadius: "25px" }}
      >
        <div className="card-data card-body p-4">
          <div className="element">
            {/* <img src="" className="icon" alt="icon" /> */}
            <div className="data">
              <div className="humidity">{data?.main?.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            {/* <img src="" className="icon" alt="icon" /> */}
            <div className="data">
              <div className="humidity">{data?.wind?.speed} km/h</div>
              <div className="text">Wind-speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
