import './App.css';
import users from './user'; 

function GitHubRepoURL({link}) {
    return (
        <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {users.alt}
      </a>
    )
}

export default GitHubRepoURL;
