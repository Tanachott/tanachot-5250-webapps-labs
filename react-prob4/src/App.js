import './App.css';
import GitHubInfo from './github_data';
import users from './user';

function App() {
  return (
    <div>
      <header>
      <h1>Sample Github Reppositories</h1>
        {users.map((user) => {
          return (
            <ol>
              <li>
              <GitHubInfo userInfo={user}/>
              </li>
            </ol>
          );
        })}
      </header>
    </div>
  );
}

export default App;
