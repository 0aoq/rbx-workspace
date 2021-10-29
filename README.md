# rbx-workspace
Virtual workspace for Roblox games.

**STATUS:** UNTESTED

## Basic Usage

Creating a workspace requires a **game** object. A game object can be created with `new game()`
```ts
const ins = new RBXWorkspace.game({
    ins: {
        Name: "game",
        Parent: "_G"
    }
})
```
**game** objects are the source of your workspace, they allow you to use function such as `CollectionService.GetObject()` or `CollectionService.Objects()`

### CollectionService

The internal module, **CollectionService**, is used to store information on all created game objects.

Objects are created from the default **Instance** class, and are added to the service on creation.
```ts
// classes.ts; 2021-10-28;
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
```

Parts can be created easily, and have all the default functions as the **Instance** class!
```ts
// init.ts; 2021-10-29;
const test_part = new Part({
    ins: {
        Name: "Baseplate",
        Parent: "Workspace"
    },
    Size: new Vector3({x: 100, y: 5, z: 100}),
    Position: new Vector3({x: 0, y: 0, z: 0}),
    Color: new Color3({r: 15, g: 15, b: 15})
})

```