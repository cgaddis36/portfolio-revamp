import styles from '../styles/list.module.css'
import ListItem from './listItem';
import { useState } from 'react';
import EducationDetails from './education';
import ExperienceDetails from './experience'
import ProjectDetails from './projects';
import Header from './header';

function List() {
    const items = ["Projects", "Experience", "Education"]
    const [active, setActive] = useState(0)
    
    return(
      <div className={styles.main}>
        <Header/>
        <div className={active === 0 ? styles.list : styles.noList}>
          <ListItem 
            title={items[0]}
            details={<ProjectDetails/>}
            active={active}
            setActive={setActive}
            items={items}
            />
          <ListItem 
            title={items[1]}
            details={<ExperienceDetails/>}
            active={active}
            setActive={setActive}
            items={items}
            />
          <ListItem 
            title={items[2]}
            details={<EducationDetails/>}
            active={active}
            setActive={setActive}
            items={items}
            />
        </div>
      </div>
    )
}

export default List