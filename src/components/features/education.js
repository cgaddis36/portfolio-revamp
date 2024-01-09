import styles from '../styles/education.module.css'

function Education() {
  const userEducation = [
    {
      name: 'Turing School of Software & Design',
      location: 'Denver, CO',
      degree: 'Technical Certificate',
      major: 'Back-End Engineering',
      emphasis: '',
      graduationDate: 'November 2020',
      image: 'https://turing-logo.s3.amazonaws.com/turingLogo.png'
    },
    {
      name: 'The University of Georgia',
      location: 'Athens, GA',
      degree: "Bachelor of Science",
      major: 'Consumer Economics',
      emphasis: 'Applied Analytics & Research',
      graduationDate: 'December 2017',
      image: 'https://uga-logo.s3.amazonaws.com/ugaLogo.jpeg'
    }
  ]

  const renderEdu = (education) => {
    return (
      education.map((edu) => 
      <div className={styles.edu}>
        <div className={styles.nameIconRow}>
          <img className={styles.icon} src={edu.image}/>
          <div className={styles.name}>
            {edu.name}
          </div>
          <div className={styles.location}>
            {edu.location}
          </div>
        </div>
        <div className={styles.majorRow}>
          <div className={styles.degreeStack}>
            <div className={styles.degree}>
              {edu.degree}
            </div>
            <div className={styles.major}>
              Major: {edu.major}
            </div>
            {
              edu.emphasis !== '' ?
              <div className={styles.emphasis}>
                Emphasis: {edu.emphasis}
              </div> 
              : 
              null
            }
          </div>
          <div className={styles.graduationDate}>
            Graduation Date: {edu.graduationDate}
          </div>
        </div>
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