import './App.css';
import GitHubInfo from './github_data';
import users from './user';

function App() {
  return (
      <header className="App">
      <h1>Sample Github Reppositories</h1>
      <GitHubInfo userInfo={users[0]}/>
      </header>
  );
}

export default App;
