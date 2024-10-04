import React from 'react';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';

const GitHubInfo = ({ owner, repo }) => {
    return (
        <div>
            <GitHubAvatar owner={owner} />
            <GitHubRepoURL owner={owner} repo={repo} />
        </div>
    );
};

export default GitHubInfo;