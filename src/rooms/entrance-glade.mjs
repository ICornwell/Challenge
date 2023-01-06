function getName() {
    return roomName
}

function getDescription(isLight, isLongDesc) {
    return description
}

function directions(inventory) { 
    return {
        "east": inventory.rope ? "Cliff Beach" : null,
        "north": "Forest Entrance"
    }
}

function messages(inventory) { 
    return {
        "east": inventory.rope ? "You climb down the cliff, hope you can get back up again!"
            : "You start to climb down, but without a rope it's impossible"
    }
}

export default { getName, getDescription, directions, messages }

const roomName = 'Glade'

const description = `You are standing in a small glade. All around you are wild flowers and bees.
There is a steep cliff to the east, and a path that winds northward into a forest`