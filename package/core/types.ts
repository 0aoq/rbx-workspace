// types

export interface Instance {
    Name: string,
    Parent: Instance,
    FullName?: string,
    Path?: Array[string],
    Active?: boolean = true
}

export interface Vector3 {
    x: number, y: number, z: number,
}

export interface Part {
    ins: Instance,
    Color: string, // hex
    Size: Vector3,
    Position: Vector3
}

export interface Default { ins: Instance } // applies to all

export default {
    Instance,
    Vector3,
    Part,
    Default
}