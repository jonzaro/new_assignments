import './App.css';
import EditItem from './EditItem';
import ListMaker from './ListMaker';
import AddUglyThing from './AddUglyThing';


function App() {
  return (
    <div className="App">
        <AddUglyThing />
        <ListMaker />
        {/* <EditItem /> */}
    </div>
  );
}

export default App;
