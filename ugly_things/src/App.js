import './App.css';
import react, { useContext } from 'react';
import { UglyContext} from "./uglyThingsProvider"
import EditItem from './EditItem';
import ListMaker from './ListMaker';
import AddUglyThing from './AddUglyThing';


function App() {

  const {submit} = useContext(UglyContext)

  return (
    <div className="App">
        <AddUglyThing submit={submit} />
        <ListMaker />
        {/* <EditItem /> */}
    </div>
  );
}

export default App;
