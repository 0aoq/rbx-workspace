export let objs = []

// CollectionService functions
const QueryObject = function(name: string) {
    for (let x of objs) {
        if (objs.ins.FullName === name) {
            return x
        }
    }
}

const RegisterObject = function(prop) {
    // create object full name, and push to objs list
    objs.ins.FullName = `${objs.ins.Parent}.${objs.ins.Name}`
    objs.ins.Path = objs.ins.FullName.split(".")
    objs.push(prop)
}

const DestroyObject = function(name: string) { 
    const obj = QueryObject(this.ins.Name)
    if (obj) { obj.ins.Active = false }
}

// export
export default {
    QueryObject,
    RegisterObject,
    DestroyObject,
    objs
}