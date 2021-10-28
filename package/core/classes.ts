import * as types from './types.js'
import * as CollectionService from './collection.js'

// clsses for instances

const DeleteInstance = function(x) {
    CollectionService.DestroyObject(x.ins.FullName)
}

export class Part {
    constructor(props: types.Part) { this.props = props }
    public Destroy = DeleteInstance(this)
    public FindFirstChild = function() {
        for (let x of CollectionService.objs) {
            if (x.path.includes(this.props.ins.Name)) {
                return x
            }
        }
    }
}

class Workspace {
    // private class, cannot be created with new from outside classes.ts
    constructor(props: types.Default) {
        
    }
}

export class game {
    constructor(props: types.Default) { 
        this.props = props
        this.services = [
            {s: "Workspace", }
        ]
    }
}

// export
export default {
    Part, game
}