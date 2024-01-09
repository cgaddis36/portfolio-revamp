import styles from '../styles/projects.module.css'
import scCircle from '../images/scCircle.png'
import shrimpRepublicLogo from '../images/shrimpRepublicLogo.png'
import cyberShrimpLogo from '../images/cyberShrimpLogo.png'

function Projects() {
  const userProjects = [
    {
      name: 'Shrimp Republic',
      teamSize: 2,
      techStack: 'Ruby on Rails, GraphQL, React, postgres',
      features: [],
      hostedUrl: 'https://shrimp-republic.com',
      githubFe: 'https://github.com/cballrun/shrimp-republic-frontend-2',
      githubBe: 'https://github.com/cballrun/shrimp-republic-projects-api',
      description: 'Web application designed to showcase all software produced under the Shrimp Republic Studios name. An LLC formed to contract software consulting, development and project management.',
      image: shrimpRepublicLogo,
    },
    {
      name: 'ShoreCasts',
      teamSize: 1,
      techStack: 'Ruby on Rails, GraphQL, React, postgres',
      features: ["Fishing Shop Locator", "Fly Shop Services & Locator", "Marina Services", "Tidal Predictions", "Weather Forecasts"],
      hostedUrl: 'https://shorecasts.com',
      githubFe: 'private',
      githubBe: 'private',
      description: 'Recreational fishing application designed to centralize the necessary tools for anglers to plan their days on the water.',
      image: scCircle,
    },
    {
      name: 'Cyber Shrimp',
      teamSize: 1,
      techStack: 'Unity, C#, Blender',
      features: ['Micro-runner', 'Custom 3D Modeling', '3D Animation'],
      hostedUrl: 'https://shorecasts.itch.io/cyber-shrimp',
      githubFe: 'private',
      githubBe: 'private',
      description: 'Desktop game featuring custom 3d models for Sailfish, marlin, tourists, and the main character: Cyber Shrimp. Developed for macOS',
      image: cyberShrimpLogo,
    },
  ]
  const renderFeatures = (features) => {
    return features.map(feature => 
      <li className={styles.feature}>
        {
          feature
        }
      </li>

      )
  }
  const renderProjects = (projects) => {
    return projects.map(project => 
      <div className={styles.projectContainer}>
        {
          <div className={styles.project}>
            <img 
              src={project.image} 
              className={styles.projectLogo}
              onClick={()=>window.open(project.hostedUrl)}/>
            <div className={styles.projectColumn}>
              <div 
                className={styles.name}
                onClick={()=>window.open(project.hostedUrl)}>
                {project.name}
              </div>
              <div className={styles.description}>
                {project.description}
              </div>
              {
                project.features.length !== 0 ?
                <div className={styles.features}>
                  Features:
                  <ul className={styles.featureList}>
                    {renderFeatures(project.features)}
                  </ul>
                </div>
                :
                null
              }
              {
                project.githubBe !== 'private' ?
                
                <div className={styles.gitRow}>
                  <div className={styles.githubLinks}
                    onClick={()=>window.open(project.githubFe)}>
                    Front-End Source Code
                  </div>
                  <div className={styles.githubLinks}
                    onClick={()=>window.open(project.githubBe)}>
                    Back-End Source Code
                  </div>
                </div> 
                :
                <div className={styles.gitRow}>
                
              </div> 
              }
            </div>
          </div>
        }
      </div>
    )
  }

  return(
    <div className={styles.main}>
      {renderProjects(userProjects)}
    </div>
  )
}

export default Projects