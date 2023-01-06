function getName() {
    return thingName
}

function getDescription(isLight, isLongDesc) {
    return description
}

const state = {
    location: "Forest Entrance",
    wear: 10,
    givesLight: false,
    damage: 0,
    protection: 0
}

export default { getName, getDescription, state }

const thingName = 'Rope'

const description = `About 30 feet of old, but servicable climbing rope`