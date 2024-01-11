import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="text-center p-lg-6 hero-sec">
        <div className="col-xxl">
          <div className="text-hero">
            <h2>It's Time To Learn</h2>
            <h4>Unlock the full potential of your online presence by learning web development today.</h4>
            <div className="sec-select m-4">
              <div className="group-btn">
                <button className="btn">
                  <Link to={"/category"}>
                    <i className="bi bi-play-fill"></i> Get Start
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-layer"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
