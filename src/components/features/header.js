import styles from '../styles/header.module.css'
import shoreCastsLogo from '../images/scLogo.png'

function Header () {
  return(
    <div className={styles.main}>
      <img src={shoreCastsLogo} className={styles.headerLogo0}/>
      <div className={styles.headerText}>
        Chase's Developer Portfolio 
      </div>
      <img src={shoreCastsLogo} className={styles.headerLogo1}/>
    </div>

  )
}

export default Header