import React from "react";
import Modal from "react-modal";
import { NetflixLogo } from "assets/images/";
import ProfileCard from "components/UI/ProfileCard/ProfileCard";
import "./ProfileModal.css";

import { Weird, Profile, Smile, Normal } from "assets/images/";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}

const profileModal = (props) => {
  const { modalOpen, profileClickHandler } = props;

  return (
    <Modal
      className="ProfileModal"
      isOpen={modalOpen}
      contentLabel="Modal is open"
      shouldCloseOnEsc={false}
    >
      <img src={NetflixLogo} alt="Logo" />
      <div className="ProfileDiv">
        <h1>Who's watching?</h1>

        <div className="horizontalComp">
          <ProfileCard
            profileImage={Profile}
            username="Profile 1"
            onClick={profileClickHandler}
          />
          <ProfileCard
            profileImage={Weird}
            username="Profile 2"
            onClick={profileClickHandler}
          />
        </div>

        <button className={"ProfileButton"}>MANAGE PROFILES</button>
      </div>
    </Modal>
  );
};

export default profileModal;
