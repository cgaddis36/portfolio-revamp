import styles from '../styles/education.module.css'

function Education() {
  const userEducation = [
    {
      name: 'Turing School of Software & Design',
      location: 'Denver, CO',
      degree: 'Technical Certificate',
      major: 'Back-End Engineering',
      graduationDate: 'November 2020',
    },
    {
      name: 'University of Georgia',
      location: 'Athens, GA',
      degree: "Bachelor of Science",
      major: 'Consumer Economic, Emphasis: Applied Analytics & Research',
      graduationDate: 'December 2017',
    }
  ]

  const renderEdu = (education) => {
    return (
      education.map((edu) => 
      <div className={styles.name}>
        {edu.name}
      </div>
      )
    )
  }
  return(
    <div className={styles.main}>
        {renderEdu(userEducation)}
    </div>
  )
}

export default Education