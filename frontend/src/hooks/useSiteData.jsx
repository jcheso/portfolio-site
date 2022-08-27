import { graphql, useStaticQuery } from 'gatsby'

export const useSiteData = () => {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        backgroundImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        subtitle
        description
        keywords
      }
      profile: sanityProfile {
        name
        portrait {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        location
        job
        education
        aboutMe
        skills {
          title
          skillType
          icon {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      projects: allSanityProject {
        edges {
          node {
            title
            projectUrl
            previewImage {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            description
            skills {
              title
              skillType
              icon {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      experience: allSanityExperience {
        edges {
          node {
            company
            endDate
            location
            logo {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            startDate
            role
            order
          }
        }
      }
    }
  `)

  return {
    site: data.site,
    profile: data.profile,
    projects: data.projects.edges,
    experience: data.experience.edges,
  }
}
