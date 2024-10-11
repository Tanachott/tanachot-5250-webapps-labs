import './App.css';

function GitHubAvatar({ ImageURL , size = 50}) {

    return (
        <img className="App"
        src={ImageURL} 
        alt="GitHub Avatar"
        width={size} 
        height={size}/>
    );
}

export default GitHubAvatar;