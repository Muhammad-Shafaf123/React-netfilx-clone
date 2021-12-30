import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals, action} from './urls'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals}/>
      <RowPost title="Action" url={action} isSmall />
    </div>
  );
}

export default App;
