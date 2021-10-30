import * as types from './types.js'
import * as CollectionService from './collection.js'
import { print, warn, error } from './luau.js'

const DeleteInstance = function (x) {
    CollectionService.DestroyObject(x.ins.FullName)
}

// classes for properties
export class Vector3 {
    props: {}
    constructor(props: types.Vector3) {
        this.props = props
        return props
    }
}

export class Udim2 {
    props: {}
    constructor(props: types.Udim2) {
        this.props = props
        return props
    }
}

export class CFrame {
    props: {}
    constructor(props: types.CFrame) {
        this.props = props
        return prop
    }
}

// default class functions
export class Instance {
    constructor() { CollectionService.RegisterObject(this.props) }
    public Destroy = DeleteInstance(this)
    public GetProps = function () { return this.props }
    public FindFirstChild = function () {
        for (let x of CollectionService._G) {
            if (x.path.includes(this.props.ins.Name)) {
                return x
            }
        }
    }
}

export class GuiObject {
    public Visible = false
}

// specific classes
export class Part extends Instance {
    props: {}
    constructor(props: types.Part) { super(); this.props = props }
}

class Workspace extends Instance {
    // private class, cannot be created with new from outside classes.ts
    props: {}
    constructor(props: types.Default) { super(); this.props = prop }
}

export class RemoteEvent extends Instance {
    props: {}
    constructor(props: types.Default) { super(); this.props = prop }
    public FireServer = function (Player, props) {
        // set up RemoteEvent API for FireServer
    }
    public OnClientEvent = function (props) {
        // set up RemoteEvent API for OnClientEvent
    }
}

export class game {
    // project workspace
    props: {}
    constructor(props: types.Default) {
        super()
        this.props = props
        this.services = []

        this.services.workspace = new Workspace({
            Name: "Workspace",
            Parent: "game"
        })
    }

    public GetService = function (name: string) {
        // return service from array
        return this.services.find(name)
    }

    public Objects = function () { return CollectionService._G }
    public GetObject = function (name: string) {
        return CollectionService.QueryObject(name)
    }
    public Instance = function (props) {
        return CollectionService.RegisterObject(props)
    }
}

// export
export default {
    Part, game, RemoteEvent, CFrame, Udim2, Vector3
}