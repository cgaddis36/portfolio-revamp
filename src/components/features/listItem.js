import styles from '../styles/listItem.module.css';

function ListItem({
    title, 
    details,
    active,
    setActive,
    items
}) {
  
    const activeIndexer = items.findIndex((t) => t === title) + 1
    const setActiveItem = (title) => {
        if(active === activeIndexer) {
            return 0
        } else {
            return activeIndexer
        }
    }
    return(
        <div className={styles.item}>
            <div 
                className={styles.title}
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
    )
}
export default ListItem