const patterns = {
    "^look$": () => ({ action: 'look'}),
    "^inventory$": () => ({ action: 'inv'}),
    "^(go )?(northeast|northwest|southeast|southwest|north|south|east|west|up|down)$": (m) => ({action: 'go', direction: m[2]}),
    "^(grab|pick up|take|get) ((the|a) )?([a-z\\-]*)$": (m) => ({action: 'get', thing: m[4]}),
    "^(drop|put down|leave|get rid of) ((the|a) )?([a-z\\-]*)$": (m) => ({action: 'drop', thing: m[4]}),
    "^(look at|examine|) ((the|a) )?([a-z\\-]*)$": (m) => ({action: 'exam', thing: m[4]})
}

export default patterns