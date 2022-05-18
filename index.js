// Code your solution here
function findMatching(drivers, criteria) {
    return drivers.filter(function(drivers) {
        return drivers.toUpperCase() === criteria.toUpperCase();
    })
}

function fuzzyMatch(drivers, criteria) {
    return drivers.filter(function(drivers) {
        return drivers.startsWith(criteria)
    })

}

function matchName(drivers, criteria) {
    return drivers.filter(function(drivers) {
        return drivers.name === criteria
    })

}