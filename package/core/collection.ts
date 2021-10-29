export let _G = []

// CollectionService functions
const QueryObject = function (name: string) {
    for (let x of _G) {
        if (_G.ins.FullName === name) {
            return x
        }
    }
}

const RegisterObject = function (props) {
    // create object full name, and push to _G list
    props.FullName = `${props.Parent}.${props.Name}`
    props.Path = props.FullName.split(".")
    props.Active = true
    _G.push(props)
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