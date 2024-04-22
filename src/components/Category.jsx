import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import VideoCard from "./VideoCard";
import {
  addToCategoryApi,
  deleteCategoryApi,
  getAllCategoryApi,
  getAvideo,
  updateCategoryApi,
} from "../services/allAPI";
import { toast } from "react-toastify";

const Category = ({ dragOurVideoStatus, setVideoDragOutStatus }) => {
  const [show, setShow] = useState(false);
  const handleshow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addCategoryStatus, setAddCategoryStatus] = useState(false);
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false);

  const handleAddCategory = async () => {
    let reqBody = {
      category: categoryName,
      allVideos: [],
    };
    if (allCategory.length == 0) {
      const response = await addToCategoryApi(reqBody);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Category Added Successfully");
        setAddCategoryStatus(true);
        setCategoryName("");
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    } else {
      let existingCategory = allCategory.find(
        (item) => item.category == categoryName
      );
      if (existingCategory) {
        toast.warning("Category already exists");
        setCategoryName("");
        handleClose();
      } else {
        const response = await addToCategoryApi(reqBody);
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          toast.success("Category Added Successfully");
          setAddCategoryStatus(true);
          setCategoryName("");
          handleClose();
        } else {
          toast.error("Something went wrong");
        }
      }
    }
  };

  const getAllCategory = async () => {
    const response = await getAllCategoryApi();
    setAllCategory(response.data);
  };
  console.log(allCategory);

  const handleDelete = async (id) => {
    const response = await deleteCategoryApi(id);
    console.log(response);

    if (response.status >= 200 && response.status < 300) {
      setDeleteCategoryStatus(true);
    } else {
      toast.error("Something went wrong");
    }
  };

  const dragStart = (e, categoryId, videoId) => {
    console.log(categoryId);
    console.log(videoId);
    let sharedData = {
      categoryId,
      videoId,
    };
    e.dataTransfer.setData("sharedData", JSON.stringify(sharedData));
  };

  useEffect(() => {
    getAllCategory();
    setAddCategoryStatus(false);
    setDeleteCategoryStatus(false);
    setVideoDragOutStatus(false);
  }, [addCategoryStatus, deleteCategoryStatus, dragOurVideoStatus]);

  // function to prevent data loss
  const dragOver = (e) => {
    // avoid refresh using e.preventDefault()
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    console.log("inside drop function");
    console.log(`category id is: ${categoryId}`);
    const videoId = e.dataTransfer.getData("videoId");
    console.log(videoId);

    // api to get the details of video that is dragged
    const { data } = await getAvideo(videoId);
    console.log(data);

    const selectedCategory = allCategory.find((item) => item.id == categoryId);
    if (selectedCategory.allVideos.find((item) => item.id == data.id)) {
      toast.error("video already exist");
    } else {
      selectedCategory.allVideos.push(data);
    }

    await updateCategoryApi(categoryId, selectedCategory);
    getAllCategory();
  };

  // console.log(categoryName);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5">
        <button onClick={handleshow} className="btn btn-warning w-100">
          Add New Category
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <FontAwesomeIcon className="text-warning" icon={faPen} />
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-3 border rounded p-3">
            <label htmlFor="cname">Category Name</label>
            <input
              id="cname"
              type="text"
              placeholder="Enter Category name"
              className="form-control"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="border border-secondary w-100 p-3 rounded mt-3"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, item?.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p>{item?.category}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item?.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <Row>
              {item.allVideos.length > 0
                ? item.allVideos.map((card) => (
                    <Col
                      sm={12}
                      draggable="true"
                      onDragStart={(e) => dragStart(e, item.id, card.id)}
                    >
                      {" "}
                      <VideoCard displayVideo={card} isPresent={true} />
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-warning mt-5">No Category added Yet....</p>
      )}
    </>
  );
};

export default Category;
