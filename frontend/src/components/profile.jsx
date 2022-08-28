import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  FaUniversity,
  FaBriefcase,
  FaMapPin,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export const About = ({ profile }) => {
  const avatar = getImage(profile.portrait.asset.gatsbyImage)
  return (
    <section className="text-gray-400 body-font" id="profile">
      <div className="container mx-auto flex px-5 py-6 md:pb-24 md:pt-36 md:flex-row flex-col items-center">
        <div className="md:hidden flex">
          <GatsbyImage
            image={avatar}
            className="object-cover object-center rounded-full w-48 h-48"
            alt="avatar"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:pt-0 pt-8">
          <h1 className="animate-in zoom-in title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there, I'm <br className="hidden lg:inline-block" />
            <span className="text-red-500 animate-fade">{profile.name}</span>
          </h1>
          <div className="text-xs md:text-sm leading-normal mb-2 text-white font-medium flex align-middle flex-col md:items-start w-full items-center">
            <div className="flex flex-row items-center pb-1">
              <FaMapPin className="h-4 w-4 mr-2" />
              {profile.location}
            </div>
            <div className="flex flex-row items-center pb-1">
              <FaBriefcase className="h-4 w-4 mr-2" />
              {profile.job}
            </div>
            <div className="flex flex-row items-center pb-1">
              <FaUniversity className="h-4 w-4 mr-2" />
              {profile.education}
            </div>
          </div>

          <p className="mb-8 leading-relaxed">{profile.aboutMe}</p>
          <div className="flex justify-center text-white">
            <OutboundLink
              aria-label="GitHub"
              href="https://github.com/jcheso"
              target="_blank"
            >
              <FaGithubSquare className="h-12 w-12 hover:animate-pulse hover:text-opacity-80" />
            </OutboundLink>
            <OutboundLink
              aria-label="linkedin"
              href="https://www.linkedin.com/in/jcheso/"
              target="_blank"
            >
              <FaLinkedin className="ml-4 h-12 w-12 hover:animate-pulse hover:text-opacity-80" />
            </OutboundLink>
          </div>
        </div>
        <div className="hidden md:flex">
          <GatsbyImage
            image={avatar}
            className="object-cover object-center rounded-full h-72 w-72"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  )
}
