import * as React from 'react'
import { SEO } from '../components/seo'
import { useSiteData } from '../hooks/useSiteData'
import { Navbar } from '../components/navbar'
import { About } from '../components/profile'
import { Footer } from '../components/footer'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'

const IndexPage = () => {
  const { site, profile, projects } = useSiteData()
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  return (
    <div className="bg-gray-900">
      <Navbar />
      <About profile={profile} />
      <Skills skills={profile.skills} />
      <Projects projects={projects} />
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <SEO title="About Me" />
