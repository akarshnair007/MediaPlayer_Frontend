import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import {
  getAllCategoryApi,
  getUploadVideoApi,
  updateCategoryApi,
} from "../services/allAPI";

const View = ({ videoUploadStatus, setVideoDragOutStatus }) => {
  const [video, setVideo] = useState([]);

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);
  //js code

  const getVideo = async () => {
    const response = await getUploadVideoApi();
    setVideo(response.data);
  };
  console.log(video);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e) => {
    const { categoryId, videoId } = JSON.parse(
      e.dataTransfer.getData("sharedData")
    );
    console.log(categoryId, videoId);

    //to get all category from the backend
    const { data } = await getAllCategoryApi();
    console.log(data);

    //to get all category from backend
    let selectedCategory = data.find((item) => item.id == categoryId);
    let result = selectedCategory.allVideos.filter(
      (item) => item.id != videoId
    );

    let reqBody = {
      category: selectedCategory.category,
      allVideos: result,
      id: categoryId,
    };

    //update the catefory at the backend

    await updateCategoryApi(categoryId, reqBody);
    setVideoDragOutStatus(true);
  };

  useEffect(() => {
    getVideo();
    setDeleteVideoStatus(false);
  }, [videoUploadStatus, deleteVideoStatus]);

  return (
    <>
      <Row
        draggable="true"
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => videoDrop(e)}
      >
        {video?.length > 0 ? ( // here we are using ? after video because as video is asynhoronus so when datas of the video comes then only proceed
          video?.map(
            (
              item // we are using parathensis instead of curly bracket because curly bracket means js code so code this this will be js code so we r not using curly bracket instead of paranthesis
            ) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard
                  displayVideo={item}
                  setDeleteVideoStatus={setDeleteVideoStatus}
                />
              </Col>
            )
          )
        ) : (
          <h5 className="mt-5 text-warning">
            No Video Uploaded Yet...........
          </h5>
        )}
      </Row>
    </>
  );
};

export default View;
