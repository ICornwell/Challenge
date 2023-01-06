import cliffBeach from './rooms/cliff-beach.mjs'
import entranceGlade from './rooms/entrance-glade.mjs'
import forestNearGlade from './rooms/forest-near-gladem.mjs'

const rooms = {}

rooms[cliffBeach.getName()] = cliffBeach
rooms[entranceGlade.getName()] = entranceGlade
rooms[forestNearGlade.getName()] = forestNearGlade

export default rooms