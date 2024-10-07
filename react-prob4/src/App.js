import './App.css';
import GitHubInfo from './github_data';
import users from './user';

function App() {
  return (
    <div>
      <header>
        <h1>Sample Github Reppositories</h1>
        <ol>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <p></p>
                <GitHubInfo userInfo={user} />
              </li>
            );
          })}
        </ol>
      </header>
    </div>
  );
}

export default App;
