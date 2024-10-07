import './App.css';
import GitHubInfo from './github_data';
import users from './user';

function App() {
  return (
    <div>
      <header>
      <h1>Sample Github Reppositories</h1>
      <ol>
      {users.filter((user) => user.followers > 10000).map((user) => {
          return (
              <li>
              <GitHubInfo userInfo={user}/>
              </li>
          );
        })}
        </ol>
      </header>
    </div>
  );
}

export default App;
