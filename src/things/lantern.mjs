function getName() {
    return thingName
}

function getDescription(isLight, isLongDesc) {
    return description
}

const state = {
    location: "Cliff Beach",
    wear: 10,
    givesLight: true,
    damage: 0,
    protection: 0
}

export default { getName, getDescription, state }

const thingName = 'Lantern'

const description = `An old battered lantern`