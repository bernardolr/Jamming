import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';


function App() {
  return (
    <div className='App'>
      <header className="App-Header">
        
        
      </header>
      <div  className='Search-Bar'>
      <SearchBar/>
      </div>
      <div className='Row'>
        <div className='Card'> <SearchResults/> </div>
        <div className='Card'> <Playlist/></div>


      </div>
      
      
      
    </div>
  );
}

export default App;
