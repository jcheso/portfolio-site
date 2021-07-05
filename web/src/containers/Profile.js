import React from "react";
import AboutMe from "../components/AboutMe";
import SkillsContainer from "./Skills";
import HomeBackground from "../components/HomeBackground";

const Profile = (props) => {
  const profile = (props || {}).profile;

  return (
    <>
      <main className="profile-page">
        <HomeBackground />
        <div className="py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <AboutMe
              name={profile.name}
              location={profile.location}
              job={profile.job}
              education={profile.education}
              aboutMe={profile.aboutMe}
            />
          </div>
        </div>
        <div className="pt-48 pb-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <SkillsContainer skills={profile.skills} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
