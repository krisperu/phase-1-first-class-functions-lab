const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]];
}
const returnLastTwoDrivers = (drivers) => {
    return [drivers[2], drivers[3]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (factor) => {
    return x => x * factor;
}
let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, thing) => {
    return thing(drivers);
}