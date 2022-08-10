function findMatching(drivers, string) {
    return drivers.filter(word => word.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(word => word[0] === string[0])
}

function matchName(drivers, string) {
    let driver = drivers[0].name;
    return drivers.filter(word => word.name === string);
}