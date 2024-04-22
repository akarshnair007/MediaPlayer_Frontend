import React, { useState } from "react";
import Add from "../components/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import View from "../components/View";
import Category from "../components/Category";
import { Link } from "react-router-dom";

const Home = () => {
  const [videoUploadStatus, setVideoUploadStatus] = useState({});

  const [dragOurVideoStatus, setVideoDragOutStatus] = useState(false);

  return (
    <>
      <div className="my-5 container d-flex">
        <Add setVideoUploadStatus={setVideoUploadStatus} />
        <Link
          to={"/watch-history"}
          className="ms-auto"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <h5>
            <span className="wh">Watch History</span>{" "}
            <FontAwesomeIcon className="ms-2" icon={faClockRotateLeft} />
          </h5>
        </Link>
      </div>
      <div className="row mt-5 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View
            videoUploadStatus={videoUploadStatus}
            setVideoDragOutStatus={setVideoDragOutStatus}
          />
        </div>
        <div className="col-md-3 px-4">
          <Category
            dragOurVideoStatus={dragOurVideoStatus}
            setVideoDragOutStatus={setVideoDragOutStatus}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
