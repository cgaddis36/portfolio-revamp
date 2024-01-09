import styles from '../styles/experience.module.css'

function Experience() {
    const userExperience = [
      {
        name: 'ChessMeito',
        url: 'https://www.chessmeito.com/',
        teamSize: 2,
        startDate: 'Sep 2023',
        endDate: 'Jan 2024',
        position: 'Mobile Engineer',
        technologies: ["React Native", "React", "Python", "MongoDB", "Elastic Beanstalk", "Amplify"],
        tasks: ["UI Update & Design", "Update Subscriptions on App Store & Play Store", "Android Studio Testing and APK signing", "XCode Testing & XCode Cloud Deployment", "Update Google Target API Level", "SSL Migration from certbot => AWS AMI", "Migrate AWS Architecture from Single EC2 Instance => Amplify FE fed to Elastic Beanstalk Back-End"],
        description: 'Restyle a chess application to help users level-up their skills through predetermined chess scenarios from Grand Master tournaments.',
      },
      {
        name: 'Game Drive',
        url: 'http://gamedev.ucode.run/auth/sign-in',
        teamSize: 1,
        startDate: 'Jul 2021',
        endDate: 'Jul 2022',
        position: 'Project Manager',
        technologies: ["Notion", "Go.js", "Postman", "Typescript"],
        tasks: ["Managed an international dev team with one other Partner", "Provide detailed gaming analytics & statistics for 4 of the worlds largest eSports games", "Design a social media website for eSports including custom gaming communities and teams for each popular game", "Personalized News Portal", "Scrape Riot games & Valve API"],
        description: 'Contracted to project manage a social media application designed to help showcase professional gamers skills in the gaming industry.',
      },
      {
        name: 'Leap',
        url: 'https://www.leapeasy.com/',
        teamSize: 1,
        startDate: 'Jul 2021',
        endDate: 'Jul 2022',
        position: 'Full-Stack Engineer',
        technologies: ["Ruby on Rails", "Node.js", "React", "Jira", "Amplify", "Elastic Beanstalk"],
        tasks: ["Design, develop & host Full-Stack web applications", "User-test apps with Ops team", "Implement Stripe Credit Check on Insurance Forms", "Implement Plaid Payment Portal for insurance products", "Manage tasks & communication with offshore development team"],
        description: 'Developed, designed and implemented web applications linked to Salesforce to optimize processes within their internal operations.',
      },
      {
        name: 'Promenade',
        url: 'https://promenade.ai/',
        teamSize: 3,
        startDate: 'Jan 2021',
        endDate: 'Apr 2021',
        position: 'Back-End Engineer',
        technologies: ["Ruby on Rails", "PostgresQL", "React", "Asana", "Heroku"],
        tasks: ["Design and develop Full-Stack web application", "PayPal Payment portal", "Locate Physicians based on geographical location and price"],
        description: 'Remote back-end engineering apprenticeship paired with a Front-end engineer to deploy a micro-service on Heroku designed to help Veterans locate the most affordable physicians in their area.',
      },
    ]

    const renderTasks = (tasks) => {
      return tasks.map((task) => 
        <li className={styles.task}>
          {task}
        </li>
      )
    }
    const renderTechnology = (technology) => {
      return technology.map((tech) => 
        <div className={styles.tech}>
          {tech}
        </div>
      )
    }
    const renderExperience = (experience) => {
      return experience.map((exp) => 
      <div className={styles.experience}>
        <div className={styles.namePositionRow}>
          <div className={styles.namePos}>
            <div 
              className={styles.name}
              onClick={()=>window.open(exp.url)}
              >
              {exp.name} 
            </div>
            <div className={styles.position}>
              {exp.position} 
            </div>
          </div>
          <div className={styles.date}>
            {`${exp.startDate} - ${exp.endDate}`} 
          </div>

        </div>
        <div className={styles.description}>
          {exp.description} 
        </div>
        <div className={styles.taskList}>
          Responsibilities: 
          <ul className={styles.tasks}>
            {renderTasks(exp.tasks)}
          </ul>
          <div className={styles.teamSize}>
            Team Size: {exp.teamSize} 
          </div>
        </div>
        <div className={styles.techRow}>
          {renderTechnology(exp.technologies)}
        
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