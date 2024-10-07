import GitHubAvatar from "./GitHubAvatar";
import GitHubRepoURL from "./GitHubRepoURL";

export default function GitHubInfo({userInfo}) {

    // create function check followers > 10000
    function checkFollowers () {
        if (userInfo.followers > 10000) {
            return ` (${userInfo.followers} followers)`;
        }
        return false;
    }

    return (
        <div>
        <GitHubAvatar ImageURL={userInfo.imgURL}/>
        <GitHubRepoURL link={userInfo.alt}/>
        <a href={userInfo.url}>{userInfo.alt}{checkFollowers()}</a>
        </div>
    );
}
