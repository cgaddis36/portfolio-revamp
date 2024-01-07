import styles from '../styles/experience.module.css'

function Experience() {
    const userExperience = [
        {
            name: 'Game Drive',
            teamSize: 8,
            techStack: 'Go.js, React, postgres, Notion',
            hostedUrl: 'https://shrimp-republic.com',
            githubFe: '',
            githubBe: '',
        },
        {
            name: 'ChessMeito',
            teamSize: 2,
            techStack: 'React Native, React, MongoDB, Python',
            hostedUrl: 'https://shrimp-republic.com',
            githubFe: 'private',
            githubBe: 'private',
        }

    ]
    return(
        <div className={styles.details}>
            Details experience
        </div>
    )
}

export default Experience