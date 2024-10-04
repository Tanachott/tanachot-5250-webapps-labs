import GitHubAvatar from "./GitHubAvatar";
import GitHubRepoURL from "./GitHubRepoURL";

export default function GitHubInfo({userInfo}) {

    return (
        <div className="App">
        <h1>{userInfo.alt}</h1>
        <GitHubAvatar ImageURL={userInfo.imgURL}/>
        <br></br>
        <GitHubRepoURL link={userInfo.url}/>
        </div>
    );
}
