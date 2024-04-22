import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { addHistoryApi, deleteVideoApi } from "../services/allAPI";

const VideoCard = ({ displayVideo, setDeleteVideoStatus, isPresent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    let caption = displayVideo?.caption;
    let url = displayVideo?.embedLink;
    let time = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);
    console.log(caption, url, timeStamp);

    const reqBody = {
      caption,
      url,
      timeStamp,
    };

    const response = await addHistoryApi(reqBody);
    console.log(response);
  };

  const handleDelete = async (id) => {
    const res = await deleteVideoApi(id);
    console.log(res);
    setDeleteVideoStatus(true);
  };
  const videoDrag = (e, id) => {
    console.log("Inside videodrag function");
    console.log(`Dragged card id:${id}`);
    e.dataTransfer.setData("videoId", id);
  };

  return (
    <>
      <Card
        onClick={handleShow}
        style={{ width: "100%" }}
        className="mt-5"
        draggable="true"
        onDragStart={(e) => videoDrag(e, displayVideo?.id)}
      >
        {!isPresent && (
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={displayVideo?.imageUrl}
            width={"100%"}
            height={"280px"}
          />
        )}
        <Card.Body className="d-flex justify-content-between">
          <Card.Text>{displayVideo?.caption}</Card.Text>

          {!isPresent && (
            <Button
              variant="danger"
              onClick={() => handleDelete(displayVideo?.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src={`${displayVideo?.embedLink}?autoplay=1`} //'?' means when we get data then only move forward
            title={`${displayVideo?.caption}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
