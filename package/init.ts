import * as RBXWorkspace from './core/classes.js'
import { print, warn, error } from './core/luau.js'

const ins = new RBXWorkspace.game({
    ins: {
        Name: "game",
        Parent: "_G"
    }
})

const GameObjects = ins.Objects()
print(JSON.stringify(GameObjects))