import React from "react";
import AboutMe from "../components/AboutMe";
import SkillsContainer from "./Skills";
import HomeBackground from "../components/HomeBackground";

const Profile = (props) => {
  const profile = (props || {}).profile;
  const backgroundImage = (props || {}).backgroundImage;

  return (
    <section className="text-gray-600">
      <HomeBackground backgroundImage={backgroundImage.asset.gatsbyImageData} />
      <div className="flex flex-col align-middle items-center content-center bg-gray-300">
        <div className="py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <AboutMe
              portrait={profile.portrait.asset.gatsbyImageData}
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
      </div>
    </section>
  );
};

export default Profile;
