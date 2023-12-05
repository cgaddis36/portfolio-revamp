import './App.css';
import ListItem from './components/features/listItem';

function App() {
  return (
    <div className="App">
      <ListItem title={"Projects"}/>
      <ListItem title={"Experience"}/>
      <ListItem title={"Education"}/>
    </div>
  );
}

export default App;
