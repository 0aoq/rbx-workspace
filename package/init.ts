// import * as RBXWorkspace from './core/classes.js'
import { 
    Part, 
    game, 
    RemoteEvent, 
    CFrame, 
    Udim2, 
    Vector3 
} from './core/classes.js'
import { print, warn, error } from './core/luau.js'

const ins = new game({
    ins: {
        Name: "game",
        Parent: "_G"
    }
})

const GameObjects = ins.Objects()
print(GameObjects)

// follows type for part, vector3, and color3
const test_part = new Part({
    ins: {
        Name: "Baseplate",
        Parent: "Workspace"
    },
    Size: new Vector3({x: 100, y: 5, z: 100}),
    Position: new Vector3({x: 0, y: 0, z: 0}),
    Color: new Color3({r: 15, g: 15, b: 15})
})