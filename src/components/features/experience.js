import styles from '../styles/experience.module.css'

function Experience() {
    const userExperience = [
      {
        name: 'Game Drive',
        teamSize: 1,
        startDate: '7/2021',
        endDate: '7/2022',
        position: 'Full-Stack Engineer',
        description: 'Developed, designing and implementing web applications linked to Salesforce to optimize processes within their internal operations.',
      },
      {
        name: 'ChessMeito',
        teamSize: 3,
        startDate: '9/2023',
        endDate: '1/2023',
        position: 'Full-Stack Mobile Engineer',
        description: 'Remote back-end engineering apprenticeship paired with a Front-end engineer to deploy a micro-service on Heroku designed to help Veterans locate the most affordable physicians in their area.',
      },
      {
        name: 'Leap',
        teamSize: 1,
        startDate: '7/2021',
        endDate: '7/2022',
        position: 'Full-Stack Engineer',
        description: 'Developed, designing and implementing web applications linked to Salesforce to optimize processes within their internal operations.',
      },
      {
        name: 'Promenade',
        teamSize: 3,
        startDate: '1/2021',
        endDate: '4/2021',
        position: 'Back-End Engineer',
        description: 'Remote back-end engineering apprenticeship paired with a Front-end engineer to deploy a micro-service on Heroku designed to help Veterans locate the most affordable physicians in their area.',
      },
    ]

    const renderExperience = (experience) => {
      return experience.map((exp) => 
      <div>
        {
          exp.name
        }
      </div>
      )
    }

  return(
    <div className={styles.details}>
      {renderExperience(userExperience)}
    </div>
  )
}

export default Experience