import readline from 'readline'
import rooms from './roomList.mjs'
import things from './thingList.mjs'
import processInput from './inputProcessor.mjs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// set the first room
let room = rooms['Glade']
let inventory = {}

// start the game
processCommand('look')

function processCommand(input) {
    const command = processInput(input)
    if (command.action === 'look') {
        showRoom()
    }
    else if (command.action === 'go') {

        if (room.messages(inventory)[command.direction]) {
            console.log(room.messages(inventory)[command.direction])
        }
        if (room.directions(inventory)[command.direction]) {
            console.log(`You go ${command.direction}`)
            room = rooms[room.directions(inventory)[command.direction]]
            showRoom()
        }
        else if (!room.messages(inventory)[command.direction]) {
            console.log("You can't go that way")
        }
    }
    else if (command.action === 'get') {
        if (inventory[command.thing])
            console.log(`You already have the ${command.thing}`)
        else if (things[command.thing]?.state?.location === room.getName()) {
            console.log(`You pick up the ${command.thing}`)
            inventory[command.thing] = things[command.thing]
            things[command.thing].state.location = 'inventory'
        }
        else {
            console.log(`There is no ${command.thing} here`)
        }
    }
    else if (command.action === 'drop') {
        if (inventory[command.thing]) {
            console.log(`You drop the ${command.thing}`)
            delete inventory[command.thing]
            things[command.thing].state.location = room.getName()
        }
        else {
            console.log(`You are not holding a ${command.thing}`)
        }
    }
    else if (command.action === 'exam') {
        if (inventory[command.thing] || things[command.thing]?.state?.location === room.getName())
            console.log(`You examine the ${command.thing}, ${things[command.thing].getDescription()}`)
        else {
            console.log(`You can't see a ${command.thing} here`)
        }
    }
    else if (command.action === 'inv') {
        if (Object.keys(inventory).length == 0)
            console.log(`You are empty handed`)
        else {
            console.log(`You are carrying ${Object.values(inventory).map(i => i.getName()).join(', ')}`)
        }
    }
    else {
        console.log('I have no idea what that means')
    }
    rl.question('What next?', (input) => processCommand(input))
}
function showRoom() {
    console.log(room.getDescription());
    const localThings = Object.values(things).filter(thing => thing.state.location === room.getName())
    if (localThings.length > 0)
        console.log(`There is ${localThings.map(t => t.getName()).join(', ')} here`)
}

