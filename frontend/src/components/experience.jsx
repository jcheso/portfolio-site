import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaMapPin, FaCalendar } from 'react-icons/fa'
export const ExperienceComponent = ({ experience }) => {
  const logo = getImage(experience.logo.asset.gatsbyImage)
  return (
    <li className="relative mb-6 sm:mb-0 w-full">
      <div className="flex items-center">
        <div className="flex z-10 justify-center items-center w-12 h-12 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
          <GatsbyImage
            className="rounded-full"
            image={logo}
            alt={experience.company}
          />
        </div>
        <div className="hidden md:flex w-full h-0.5 bg-gray-700"></div>
      </div>

      <div className="mt-3 sm:pr-8">
        <h1 className="text-lg font-bold text-white">{experience.role}</h1>
        <p className="text-base font-semibold text-gray-400">
          {experience.company}
        </p>
        <div className="flex flex-row text-sm text-gray-400 items-center pt-2">
          <FaMapPin className="h-4 w-4 mr-2" /> {experience.location}
        </div>
        <div className="flex flex-row  items-center  mb-2 text-sm font-normal leading-none text-gray-400 pt-2">
          <FaCalendar className="h-4 w-4 mr-2" /> {experience.startDate} -{' '}
          {experience.endDate}
        </div>
      </div>
    </li>
  )
}

export const Experience = ({ experience }) => {
  const orderedExperience = experience.sort(
    (a, b) => a.node.order - b.node.order
  )
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="experience">
      <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
            <h1 className="sm:w-2/5 text-white font-medium title-font sm:text-4xl text-3xl mb-2 sm:mb-0">
              Experience
            </h1>
          </div>
          <div className="h-1 bg-gray-800 rounded overflow-hidden mb-12">
            <div className="w-24 h-full bg-red-500"></div>
          </div>
          <div className="flex flex-col">
            <ol className="items-center sm:flex">
              {orderedExperience.map((experience, index) => (
                <ExperienceComponent key={index} experience={experience.node} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
