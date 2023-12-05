import './App.css';
import ListItem from './components/features/listItem';
import { useState } from 'react';
import EducationDetails from './components/features/educationDetails';
import ExperienceDetails from './components/features/experienceDetails'
import ProjectDetails from './components/features/projectDetails';

function App() {
  const items = ["Projects", "Experience", "Education"]
  const [active, setActive] = useState(0)
  return (
    <div className="App">
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
  );
}

export default App;
