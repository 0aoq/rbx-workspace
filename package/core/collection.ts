export let _G = []

// CollectionService functions
const QueryObject = function (name: string) {
    for (let x of _G) {
        if (_G.ins.FullName === name) {
            return x
        }
    }
}

const RegisterObject = function (prop) {
    // create object full name, and push to _G list
    _G.ins.FullName = `${_G.ins.Parent}.${_G.ins.Name}`
    _G.ins.Path = _G.ins.FullName.split(".")
    _G.push(prop)
}

const DestroyObject = function (name: string) {
    const obj = QueryObject(this.ins.Name)
    if (obj) { obj.ins.Active = false }
}

// export
export default {
    QueryObject,
    RegisterObject,
    DestroyObject,
    _G
}