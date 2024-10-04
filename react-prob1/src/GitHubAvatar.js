import './App.css';
function GitHubAvatar({ username }) {
    // Fetch the avatar URL from GitHub API
    const avatarUrl = `https://avatars.githubusercontent.com/u/96067144?v=4&size=64`;

    return (
        <img src={avatarUrl} alt={`Avatar of tanachot`}/>
    );
}

export default GitHubAvatar;