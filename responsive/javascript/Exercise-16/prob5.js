function filtersShortString(string) {
    return string.filter(word => word.length > 3);
}

console.log(filtersShortString(["hi", "hello", "hey", "world"]));
console.log(filtersShortString(["a", "ab", "abc", "abcd"]));