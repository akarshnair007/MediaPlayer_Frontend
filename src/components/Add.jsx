import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { uploadVideoApi } from "../services/allAPI";

const Add = ({ setVideoUploadStatus }) => {
  //state to video details
  const [video, setVideo] = useState({
    caption: "",
    imageUrl: "",
    embedLink: "",
  });
  console.log(video);

  const [show, setShow] = useState(false);
  const handleshow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getEmbbedLink = (e) => {
    const text = e.target.value;
    console.log(text);
    // "https://www.youtube.com/embed/dAnLij5Mw5w"
    // "https://www.youtube.com/embed/dAnLij5Mw5w"
    //https://www.youtube.com/watch?v=8uLJT4FyneI&ab_channel=Future
    //https://youtu.be/8uLJT4FyneI?si=9BO3iuAzL4B0FEH9
    if (text.startsWith("https://youtu.be/")) {
      console.log(text.slice(17, 28));
      const link = `https://www.youtube.com/embed/${text.slice(17, 28)}`;
      setVideo({ ...video, embedLink: link });
    } else {
      const link = `https://www.youtube.com/embed/${text.slice(32, 43)}`;
      setVideo({ ...video, embedLink: link });
    }
  };

  //function to upload video details
  const handleUpload = async () => {
    const { caption, imageUrl, embedLink } = video;
    console.log(video);
    if (!caption || !imageUrl || !embedLink) {
      toast.info("Please fill the form completely");
    } else {
      const res = await uploadVideoApi(video);
      // toast.success("Proceed");
      if (res.status >= 200 && res.status < 300) {
        toast.success("Video uploaded successfully");
        setVideoUploadStatus(res.data);
        setVideo({
          caption: "",
          imageUrl: "",
          embedLink: "",
        });
      } else {
        console.log(res);

        toast.error("Video is not uploaded");
      }
    }
  };

  return (
    <>
      <div>
        {" "}
        <h5>
          Upload New Video
          <FontAwesomeIcon
            onClick={handleshow}
            icon={faCloudArrowUp}
            className="ms-2"
          />
        </h5>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faFilm} className="me-2 text-warning" />
            Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>Please fill the following details</p>
          <form className="border p-3 mt-3 rounded p-2">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter the Video Caption"
                className="form-control"
                value={video.caption}
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
                // onChange={}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter the Image URL"
                className="form-control"
                value={video.imageUrl}
                onChange={(e) =>
                  setVideo({ ...video, imageUrl: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter the Youtube Video Link"
                className="form-control"
                onChange={(e) => getEmbbedLink(e)}
              />
            </div>
          </form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="dark" position="top-right" autoClose={2000} />
    </>
  );
};

export default Add;
