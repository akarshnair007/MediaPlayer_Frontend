import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteWatchHistroyApi, getDataHistoryApi } from "../services/allAPI";

const WatchHistory = () => {
  const [videoHistory, setVideoHistory] = useState([]);
  const [watchHistroyStatus, setWatchHistroyStatus] = useState(false);

  const getAllVideo = async () => {
    const response = await getDataHistoryApi();
    setVideoHistory(response.data);
  };

  console.log(videoHistory);

  const handleDelete = async (id) => {
    const res = await deleteWatchHistroyApi(id);
    console.log(res);
    setWatchHistroyStatus(true);
  };

  useEffect(() => {
    getAllVideo();
    setWatchHistroyStatus(false);
  }, [watchHistroyStatus]);

  return (
    <>
      <div className="d-flex align-items-center mx-4 mb-5 mt-5">
        <h4>Watch History</h4>
        <Link to="/home" className="ms-auto" style={{ textDecoration: "none" }}>
          <h5>
            <FontAwesomeIcon icon={faArrowLeft} beat className="me-2" />
            <span className="back">Back Home</span>
          </h5>
        </Link>
      </div>
      <div className="row mx-4">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-4" style={{ overflowX: "auto" }}>
          {videoHistory.length > 0 ? (
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>TImeStamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td>
                      <a href={item?.url} target="_blank">
                        {item?.url}
                      </a>
                    </td>
                    <td>{item?.timeStamp}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(item?.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-warning mt-5 fs-5">Watch history is clean</p>
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default WatchHistory;
