import './App.css';
import PostRequestHooks from './PostRequestHooks';
import ListMaker from './ListMaker';
import AddUglyThing from './AddUglyThing';


function App() {
  return (
    <div className="App">
        <AddUglyThing />
        <PostRequestHooks />
        <ListMaker />
    </div>
  );
}

export default App;
