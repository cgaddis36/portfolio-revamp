import styles from '../styles/listItem.module.css';
import chevronRight from '../images/chevronRight.svg'

function ListItem({
    title, 
    details,
    active,
    setActive,
    items
}) {
  
  const activeIndexer = items.findIndex((t) => t === title) + 1
  const setActiveItem = (title) => {
    if(active === title) {
      return 0
    } else {
      return activeIndexer
    }
  }
  return(
    <div className={styles.main}>
      {
        active !== 0 ? 
        <div className={styles.item}>
          <div 
            className={active === activeIndexer ? styles.activeTitle : styles.invisibleTitle}
            onClick={() => setActive(setActiveItem(activeIndexer))}
            >
            {title}
            <img src={chevronRight} className={active === activeIndexer ? styles.activeArrow : styles.inActiveArrow}/>
          </div>
          
          {
            active === activeIndexer ?
            details
            :
            null
          }
        </div>
        :
        <div className={styles.item}>
          <div 
            className={styles.inactiveTitle}
            onClick={() => setActive(setActiveItem(activeIndexer))}
            >
            {title}
          </div>
          {
            active === activeIndexer ?
            details
            :
            null
          }
        </div>
      }
    </div>
  )
}
export default ListItem