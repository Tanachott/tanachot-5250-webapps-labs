import './App.css';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';

function App() {
  return (
    <div className="App">
      <header>
        <p>My Github Infomation</p>
      <GitHubAvatar/>
      <br></br>
      <GitHubRepoURL/>
      </header>
    </div>
  );
}

export default App;
