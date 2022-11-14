import buffer from "src/buffer/buffer";

class vec_buffer extends buffer{
    constructor(dim: number, x?: number, y?: number, z?: number, w?: number) {
        super(dim)

        super.memo[0] = x ?? 1
        super.memo[1] = y ?? 1
        dim > 2 && ( super.memo[2] = z ?? 1 )
        dim > 3 && ( super.memo[3] = z ?? 1 )
    }

    get x() {
        return this.memo[0]
    }

    get y() {
        return this.memo[1]
    }

    get z() {
        return this.memo[2]
    }

    get w() {
        return this.memo[3]
    }
}

export default vec_buffer
