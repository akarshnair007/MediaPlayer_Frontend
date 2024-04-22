import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row p-5 mt-md-5">
      <div className="col-md-4">
        <h4 className="mb-3">
          {" "}
          <FontAwesomeIcon icon={faVideo} className="text-warning me-3" />
          Media Player
        </h4>
        <p className="mt-3" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          repellendus non nam eum provident cumque, eaque placeat corrupti
          beatae necessitatibus doloremque porro voluptates laboriosam id magnam
          eius fugiat explicabo ratione.
        </p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <h4>Links</h4>
        <Link to={"/"}>
          {" "}
          <p className="mt-3">Landing Page</p>
        </Link>
        <Link to={"/home"}>
          {" "}
          <p>Home Page</p>
        </Link>
        <Link to={"/watch-history"}>
          {" "}
          <p>Watch-History Page</p>
        </Link>
      </div>
      <div className="col-md-2">
        <h4>Guides</h4>
        <p className="mt-3">React</p>
        <p>React Bootstrap</p>
        <p>Bootwatch</p>
      </div>
      <div className="col-md-3">
        <h3>Contacts</h3>
        <div className="d-flex mt-3">
          <input type="text" placeholder="Email Id" className="form-control" />
          <button className="btn btn-warning ms-3">Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
