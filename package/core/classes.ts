import * as types from './types.js'
import * as CollectionService from './collection.js'

// clsses for instances

const DeleteInstance = function(x) {
    CollectionService.DestroyObject(x.ins.FullName)
}

export class Instance {
    public Destroy = DeleteInstance(this)
    public FindFirstChild = function() {
        for (let x of CollectionService._G) {
            if (x.path.includes(this.props.ins.Name)) {
                return x
            }
        }
    }
}

export class Part extends Instance {
    constructor(props: types.Part) { this.props = props }
}

class Workspace extends Instance {
    // private class, cannot be created with new from outside classes.ts
    constructor(props: types.Default) { this.props = prop }
}

export class RemoteEvent extends Instance {
    constructor(props: types.Default) { this.props = prop }
    public FireServer = function(Player, props) {
        // set up RemoteEvent API for FireServer
    }
    public OnClientEvent = function(props) {
        // set up RemoteEvent API for OnClientEvent
    }
}


export class game {
    constructor(props: types.Default) { 
        this.props = props
        this.services = [
            "Workspace"
        ]
    }

    public GetService = function(name: string) {
        // return service from array
        return this.services.find(name)
    }

    public _G = function() { return CollectionService._G }
}

// export
export default {
    Part, game, RemoteEvent
}