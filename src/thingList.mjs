import rope from './things/rope.mjs'
import lantern from './things/lantern.mjs'

const things = {}

things[rope.getName().toLowerCase()] = rope
things[lantern.getName().toLowerCase()] = lantern

export default things