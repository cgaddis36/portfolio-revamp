import styles from '../styles/experience.module.css'

function Experience() {
    const userExperience = [
      {
        name: 'ChessMeito',
        teamSize: 2,
        startDate: '9/2023',
        endDate: '1/2024',
        position: 'Full-Stack Mobile Engineer',
        description: 'Remote back-end engineering apprenticeship paired with a Front-end engineer to deploy a micro-service on Heroku designed to help Veterans locate the most affordable physicians in their area.',
      },
      {
        name: 'Game Drive',
        teamSize: 1,
        startDate: '7/2021',
        endDate: '7/2022',
        position: 'Full-Stack Engineer',
        description: 'Developed, designing and implementing web applications linked to Salesforce to optimize processes within their internal operations.',
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
      <div className={styles.experience}>
        <div className={styles.namePositionRow}>
          <div className={styles.name}>
            {exp.name} 
          </div>
          <div className={styles.position}>
            {exp.position} 
          </div>

        </div>
        <div className={styles.description}>
          {exp.description} 
        </div>
        <div className={styles.dateTeamRow}>
          <div className={styles.teamSize}>
            Team Size: {exp.teamSize} 
          </div>
          <div className={styles.date}>
            {`${exp.startDate} - ${exp.endDate}`} 
          </div>
        </div>
      </div>
      )
    }

  return(
    <div className={styles.main}>
      {renderExperience(userExperience)}
    </div>
  )
}

export default Experience