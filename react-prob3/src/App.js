import './App.css';
import GitHubInfo from './github_data';
import users from './user'

function App() {

return (
  <div className="App">
    <header>
      <GitHubInfo userInfo={users[0]}/>
      <GitHubInfo userInfo={users[1]}/>
      <GitHubInfo userInfo={users[2]}/>
    </header>
  </div>
);
}

export default App;
