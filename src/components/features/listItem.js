import styles from '../styles/listItem.module.css';

function ListItem({title}) {

    return(
        <div className={styles.item}>
            {title}
        </div>
    )
}
export default ListItem