import { graphql, useStaticQuery } from 'gatsby'

export const useSiteData = () => {
  const data = useStaticQuery(graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        backgroundImage {
          asset {
            gatsbyImage(placeholder: BLURRED, width: 64, height: 64)
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
            gatsbyImage(placeholder: BLURRED, width: 512)
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
              gatsbyImageData(placeholder: BLURRED, width: 64, height: 64)
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
                gatsbyImage(placeholder: BLURRED, width: 240)
              }
            }
            description
            skills {
              title
              skillType
              icon {
                asset {
                  gatsbyImageData(placeholder: BLURRED, width: 64, height: 64)
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
                gatsbyImage(placeholder: BLURRED, width: 64, height: 64)
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
