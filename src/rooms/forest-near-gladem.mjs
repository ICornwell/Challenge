function getName() {
    return roomName
}

function getDescription(isLight, isLongDesc) {
    return description
}

function directions(inventory) { 
    return {
        "south": "Glade"
    }
}

function messages(inventory) { 
    return {
        "south": "You leave the forest...",
        "north": "The forest is too thick!"
    }
}

export default { getName, getDescription, directions, messages }

const roomName = 'Forest Entrance'

const description = `You are surrounded by small trees.
A path leads south towards an open area and heads north into deeper forest`