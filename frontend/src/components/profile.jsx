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
  const avatar = getImage(profile.portrait.asset.gatsbyImageData)
  return (
    <section className="text-gray-400 body-font" id="profile">
      <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
        <div className="w-48 h-48 md:hidden flex">
          <GatsbyImage
            image={avatar}
            className="object-cover object-center rounded-full"
            alt="avatar"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:pt-0 pt-8">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there, I'm <br className="hidden lg:inline-block" />
            <span className="text-red-500">{profile.name}</span>
          </h1>
          <div className="text-xs md:text-sm leading-normal mb-2 text-white font-medium flex align-middle flex-col">
            <span>
              <FaMapPin className="inline-block h-4 w-4 mr-2 my-1" />
              {profile.location}
            </span>
            <span>
              <FaBriefcase className="inline-block h-4 w-4 mr-2 my-1" />
              {profile.job}
            </span>
            <span>
              <FaUniversity className="inline-block h-4 w-4 mr-2 my-1" />
              {profile.education}
            </span>
          </div>

          <p className="mb-8 leading-relaxed text-justify">{profile.aboutMe}</p>
          <div className="flex justify-center text-white">
            <OutboundLink href="https://github.com/jcheso" target="_blank">
              <FaGithubSquare className="h-12 w-12 hover:animate-pulse hover:text-opacity-80" />
            </OutboundLink>
            <OutboundLink
              href="https://www.linkedin.com/in/jcheso/"
              target="_blank"
            >
              <FaLinkedin className="ml-4 h-12 w-12 hover:animate-pulse hover:text-opacity-80" />
            </OutboundLink>
          </div>
        </div>
        <div className="md:h-96 md:w-96 w-48 h-48 hidden md:flex">
          <GatsbyImage
            image={avatar}
            className="object-cover object-center rounded-full"
            alt="avatar"
          />
        </div>
      </div>
    </section>
  )
}
