import GitHubAvatar from "./GitHubAvatar";
import GitHubRepoURL from "./GitHubRepoURL";
import users from "./user";

export default function GitHubInfo({userInfo}) {

    function checkButtons() {
        const index = users.indexOf(userInfo);

        if (index === 0) {
            return (
                <div>
                    <button disabled>Previous</button>
                    <button onClick={() => handleNextButton()}>Next</button>
                </div>
            );
        }

        if (index === users.length - 1) {
            return (
                <div>
                    <button onClick={() => handlePreviousButton()}>Previous</button>
                    <button disabled>Next</button>
                </div>
            );
        }

        return (
            <div>
                <button onClick={() => handlePreviousButton()}>Previous</button>
                <button onClick={() => handleNextButton()}>Next</button>
            </div>
        );
    }
    
    function handlePreviousButton() {
        const index = users.indexOf(userInfo);
        const previousIndex = index - 1;
    }
    
    function handleNextButton() {
        const index = users.indexOf(userInfo);
        const nextIndex = index + 1;
    }
    
    function checkFollowers () {
        if (userInfo.followers > 10000) {
            return ` (${userInfo.followers} followers)`;
        }
        return false;
    }

    return (
        <div>
        <a href={userInfo.url} target="_blank">{userInfo.alt}</a>
        <br></br>
        <GitHubAvatar ImageURL={userInfo.imgURL}/>
        <GitHubRepoURL link={userInfo.alt}/>
        <br></br>
        <button onClick={checkFollowers}>hide followers</button>
        {checkFollowers()}
        <br></br>       
        {checkButtons()}
        </div>
    );
}
