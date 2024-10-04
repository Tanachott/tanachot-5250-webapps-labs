import './App.css';
import GitHubInfo from './github_data';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';

function App() {
  return (
    <div className="App">
      <header>
        <GitHubInfo />
         <GitHubAvatar />  {/* default size = 50 */}
        <br></br>
        <GitHubRepoURL />
      </header>
    </div>
  );
}

export default App;
