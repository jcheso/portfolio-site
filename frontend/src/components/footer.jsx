import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 Jarryd Cheso
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <OutboundLink
            aria-label="GitHub"
            href="https://github.com/jcheso"
            target="_blank"
          >
            <FaGithubSquare className="h-6 w-6 hover:animate-pulse hover:text-opacity-80" />
          </OutboundLink>
          <OutboundLink
            aria-label="linkedin"
            href="https://www.linkedin.com/in/jcheso/"
            target="_blank"
          >
            <FaLinkedin className="ml-4 h-6 w-6 hover:animate-pulse hover:text-opacity-80" />
          </OutboundLink>
        </span>
      </div>
    </footer>
  )
}
