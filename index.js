// Code your solution here
function findMatching(driversNames, query){
    query = query.toLowerCase();
    const matchingDrivers =  driversNames.filter(function(driver){
        return driver.toLowerCase().includes(query);
    });
    return matchingDrivers;
}

function fuzzyMatch(driversNames, query){
    query = query.toLowerCase();
    const matchingDrivers =  driversNames.filter(function(driver){
        return driver.toLowerCase().startsWith(query);
    });
    return matchingDrivers;
}
function matchName(driversInfo, query){
    const matchingDrivers = driversInfo.filter(function(driver){
        return driver.name.includes(query);
    })
    return matchingDrivers;
}