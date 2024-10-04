import './App.css';
import GitHubInfo from './github_info';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';

function App() {
  const user = [
    {
      url: "https://github.com/Tanachott",
      imgURL: "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
      alt: "Tanachot Siritrakulmangkang"
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
    <header>
      <GitHubInfo userInfo={user[0]}/>
      <GitHubInfo userInfo={user[1]}/>
      <GitHubInfo userInfo={user[2]}/>
      {/* <GitHubInfo />
      <GitHubAvatar />
      <br></br>
      <GitHubRepoURL /> */}
    </header>
  </div>
);
}

export default App;
