import './App.css';
import GitHubInfo from './github_data';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';

function App() {
  const userInfo = {
    url: "https://github.com/Tanachott",
    imgURL : "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
    alt : "Tanachot Siritrakulmangkang"
  }

  return (
    <div className="App">
      <header>
        <GitHubInfo user={userInfo.alt}/>
         <GitHubAvatar ImageURL={userInfo.imgURL}/>  {/* default size = 50 */}
        <br></br>
        <GitHubRepoURL link={userInfo.url}/>
      </header>
    </div>
  );
}

export default App;
