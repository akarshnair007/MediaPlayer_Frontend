import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="row p-5 my-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>{" "}
          </h3>
          <p className="mt-4" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla quisquam velit odio. Voluptatum placeat ut, fuga
            fugiat laboriosam eius deserunt, rerum quaerat inventore qui
            excepturi modi et explicabo dolor?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fuga nihil voluptatem, et, magnam
            dolorem mollitia laboriosam illum vitae maxime non deleniti
            repellendus commodi nostrum officiis dolor voluptatum facilis quis
            maiores?
          </p>
          <Link to={"/home"}>
            {" "}
            <button className="btn btn-warning mt-3">Get Started</button>
          </Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3 d-flex justift-content-center align-items-center">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG0yem1pOW8yZGNsdGZkN2drbmFkMWYxbzIwZm9veHZyYXh1cWQxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4oMoIbIQrvCjm/giphy.gif"
            alt=""
            className="w-75"
          />
        </div>
      </div>

      <div className="mb-5 mt-5 py-5">
        <h3 className="text-center my-5">Features</h3>
        <Row className="mb-5 mt-3 pt-0 pt-md-4">
          <Col md={1}></Col>
          <Col md={3} className="p-5 p-md-0">
            <Card style={{ width: "100%" }} className="p-4">
              <Card.Img
                variant="top"
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnJ0bjY2cGlibmxrbDAzOHY2eGVlMXp3aGc2bXZoYnRkNWgyemhjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduT2UVPqe3my3Di/giphy.gif"
                style={{ width: "100%", height: "300px" }}
              />
              <Card.Body>
                <Card.Title>Managing Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card style={{ width: "80%" }} className="p-4">
              <Card.Img
                variant="top"
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtuazdsczZkbTRqY2ZhYnM0M3E3dXlkdDhxcXJ0emttZ2RuM29odCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s6Xu40pJ9ZHfsmKOb4/giphy.gif"
                style={{ width: "100%", height: "300px" }}
              />{" "}
              <Card.Body>
                <Card.Title>Categorized Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="p-5 p-md-0">
            <Card style={{ width: "100%" }} className="p-4">
              <Card.Img
                variant="top"
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjFldzRleHV5aThwb25hZGpuMnpjOWdqNmx3eWk2MXFkaDR5NjVibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pViWHLiQBA1q0/giphy.gif"
                style={{ width: "100%", height: "300px" }}
              />{" "}
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
      <div className="my-5 pt-0 row pt-md-4 mb-md-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 border p-4 rounded border-2">
          <Row>
            <Col md={6} className="p-3">
              <h3 className="text-warning mb-5">Simple fast and Powerful</h3>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-4">Play Everything</span>: sit amet
                consectetur adipisicing elit. Suscipit pariatur tenetur,
                consequuntur alias voluptatum accusantium repellendus .
              </p>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-4 mt-3">Play Everything</span>: Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Suscipit pariatur
                tenetur, consequuntur alias voluptatum accusantium
              </p>
              <p style={{ textAlign: "justify" }}>
                <span className="fs-4 mt-3">Play Everything</span>: Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Suscipit pariatur
                tenetur, consequuntur alias voluptatum accusantium
              </p>
            </Col>
            <Col md={6} className="p-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VAjtYdE70YY?si=zeFdRhAMQJpUj5mV"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default LandingPage;
