import './App.css';

function GitHubRepoURL({link}) {
    return (
        <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        { link.alt && link.followers > 10000 && <p>({link.followers} followers)</p>} 
      </a>
    )
}

export default GitHubRepoURL;
