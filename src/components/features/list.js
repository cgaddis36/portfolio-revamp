import styles from '../styles/list.module.css'
import ListItem from './listItem';
import { useState } from 'react';
import EducationDetails from './educationDetails';
import ExperienceDetails from './experienceDetails'
import ProjectDetails from './projectDetails';

function List() {
    const items = ["Projects", "Experience", "Education"]
    const [active, setActive] = useState(0)
    
    return(
        <div className={styles.main}>
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
    )
}

export default List