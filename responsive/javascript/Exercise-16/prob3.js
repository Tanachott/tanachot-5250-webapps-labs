let userCount = 0;

function incrementUserCount() {
    userCount++;
    return userCount;
}

function incrementUserCount2(count) {
    count++;
    return count;
}

console.log(incrementUserCount());
console.log(incrementUserCount());
userCount = 0;
userCount = incrementUserCount2(userCount);
console.log(userCount);
userCount = incrementUserCount2(userCount);
console.log(userCount);