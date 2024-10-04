import "./App.css";

export default function GitHubInfo() {
    const userInfo = {
        url: "https://github.com/Tanachott",
        imgURL : "https://avatars.githubusercontent.com/u/96067144?v=4&size=64",
        alt : "Tanachot Siritrakulmangkang"
    }
    return (
        <div className="App">
            <h1>{userInfo.alt}</h1>

        </div>
    );
}
