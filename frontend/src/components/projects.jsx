import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { FaLayerGroup, FaArrowRight } from 'react-icons/fa'

export const Project = ({ project }) => {
  const image = getImage(project.previewImage.asset.gatsbyImage)
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <GatsbyImage
          className="h-72 w-full object-cover object-center"
          image={image}
          alt="Project Image"
        />
        <div className="p-6 flex flex-grow flex-col">
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed mb-3">{project.description}</p>
          <div className="items-center flex-wrap justify-start grid grid-rows-2 space-y-4">
            <div className="text-gray-400 inline-flex leading-none text-sm mt-2 md:mt-0">
              <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <FaLayerGroup className="w-6 h-6 mr-2"></FaLayerGroup>
                Tech Stack
              </span>
              <div className="flex flex-wrap justify-evenly items-center align-middle space-x-1">
                {project.skills.map((skill, index) => {
                  const icon = getImage(skill.icon.asset.gatsbyImageData)
                  return (
                    <GatsbyImage
                      key={index}
                      className="w-6 h-6 my-1"
                      image={icon}
                      alt="Skill"
                    />
                  )
                })}
              </div>
            </div>
            <OutboundLink
              href={project.projectUrl}
              target="_blank"
              className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
              name={project.title}
            >
              Learn more about {project.title}
              <FaArrowRight className="w-4 h-4 ml-2" />
            </OutboundLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Projects = ({ projects }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="projects">
      <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
            <h1 className="sm:w-2/5 text-white font-medium title-font sm:text-4xl text-3xl mb-2 sm:mb-0">
              Projects
            </h1>
          </div>
          <div className="h-1 bg-gray-800 rounded overflow-hidden mb-12">
            <div className="w-24 h-full bg-red-500"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <Project key={index} project={project.node} />
          ))}
        </div>
      </div>
    </section>
  )
}
