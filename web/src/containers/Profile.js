import React from "react";
import AboutMe from "../components/AboutMe";
import SkillsContainer from "./Skills";
import HomeBackground from "../components/HomeBackground";

const Profile = () => {
  return (
    <>
      <main className="profile-page">
        <HomeBackground />
        <div className="grid py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <AboutMe />
          </div>
        </div>
        <div className="grid py-48 bg-gray-300">
          <div className="container mx-auto px-4">
            <SkillsContainer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
