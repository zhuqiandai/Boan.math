import buffer from "src/buffer/buffer";

class vec_buffer extends buffer{
    private readonly _x: number
    private readonly _y: number
    private readonly _z: number

    constructor(dim: number, x?: number, y?: number, z?: number) {
        super(dim)

        this._x = x ?? 1
        this._y = y ?? 1
        this._z = z ?? 1
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    get z() {
        return this._z
    }
}

export default vec_buffer
