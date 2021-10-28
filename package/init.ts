import * as RBXWorkspace from './core/classes.js'

const ins = new RBXWorkspace.game({
    ins: {
        Name: "game",
        Parent: "_G"
    }
})

const game = ins._G()
console.log(game.GetService("Workspace"))