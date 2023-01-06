function getName() {
    return roomName
}

function getDescription(isLight, isLongDesc) {
    return description
}

function directions(inventory) {
     return {
         "west": inventory.rope ? "Glade" : null
     }
}

function messages(inventory) { 
    return {
        "west": climbCliff(inventory),
        "north": "The river is to fast and deep to cross",
        "south": "The river is to fast and deep to cross",
        "east": "The river is to fast and deep to cross"
    }
}

function climbCliff(inventory) {
    if (inventory.rope)
        return "Thankfully you have a rope to help climb the cliff"
    else
        return "The cliff is very steep, if only you had a rope!"
}

export default { getName, getDescription, directions, messages }

const roomName = 'Cliff Beach'

const description = `You are on a small stretch of pebbly beach next to a river.
There is a steep cliff to the west, and a fast running river`