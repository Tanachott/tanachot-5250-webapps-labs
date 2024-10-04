import "./App.css";
import GitHubAvatar from "./GitHubAvatar";
import GitHubRepoURL from "./GitHubRepoURL";

export default function GitHubInfo() {
    const userInfo = [{
        url: "https://github.com/Tanachott",
        imgURL : "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
        alt : "Tanachot Siritrakulmangkang"
    },
    {
      url: "https://github.com/Tanachott",
      imgURL: "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
      alt: "react"
    },
    {
      url: "https://github.com/Tanachott",
      imgURL: "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
      alt: "next.js"
    }];
    return (
        <div className="App">
            <h1>{userInfo.alt}</h1>
            <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} />
            <br></br>
            <GitHubRepoURL url={userInfo.url} />
        </div>
    );
}
