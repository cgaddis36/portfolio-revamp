import styles from '../styles/projects.module.css'
import Text from 'react'
function Projects() {
  

    const userProjects = [
        {
            name: 'ShoreCasts',
            teamSize: 1,
            techStack: 'Ruby on Rails, GraphQL, React, postgres',
            hostedUrl: 'https://shorecasts.com',
            github: '',
        },
        {
            name: 'Shrimp Republic',
            teamSize: 2,
            techStack: 'Ruby on Rails, GraphQL, React, postgres',
            hostedUrl: 'https://shrimp-republic.com',
            github: '',
        },
    ]

    const renderProjects = (projects) => {
        return projects.map(project => 
            <ul>
                {
                    project.name
                }
                </ul>)
    }

    return(
        <div className={styles.details}>
            {renderProjects(userProjects)}
                
            
        </div>
    )
}

export default Projects