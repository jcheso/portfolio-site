import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const SkillList = ({ skills, type }) => {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4">
      {skills
        .filter((skill) => skill.skillType === type)
        .map((filteredSkill, index) => {
          const icon = getImage(filteredSkill.icon.asset.gatsbyImageData)
          return (
            <div
              key={index}
              className="flex flex-col justify-evenly items-center text-gray-400 mr-2 my-2"
            >
              <GatsbyImage
                className="h-14 w-14"
                image={icon}
                alt={filteredSkill.title}
              />
              <div className="pt-1 text-center text-sm">
                {filteredSkill.title}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export const Skills = ({ skills }) => {
  const skillTypes = ['languages', 'frontend', 'backend', 'tools']
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="skills">
      <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 ">
            <h1 className="sm:w-2/5 text-white font-medium title-font sm:text-4xl text-3xl mb-2 sm:mb-0">
              Skills
            </h1>
          </div>
          <div className="h-1 bg-gray-800 rounded overflow-hidden mb-12">
            <div className="w-24 h-full bg-red-500"></div>
          </div>
          <div className="flex flex-col space-y-2">
            {skillTypes.map((type, index) => {
              return (
                <div key={index}>
                  <p className="inline-block py-1 mb-2 px-2 rounded bg-gray-800 text-gray-400 text-sm font-medium tracking-widest">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </p>
                  <SkillList skills={skills} type={type} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
