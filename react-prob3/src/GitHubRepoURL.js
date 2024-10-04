import './App.css';

function GitHubRepoURL({link}) {
    return (
        <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub repository
      </a>
    )
}

export default GitHubRepoURL;
