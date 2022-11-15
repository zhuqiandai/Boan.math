import buffer from "src/buffer/buffer";

class VecBuffer extends buffer{
    constructor(dim: number, x?: number, y?: number, z?: number, w?: number) {
        super(dim)

        super.memo[0] = x ?? 1
        super.memo[1] = y ?? 1
        dim > 2 && ( super.memo[2] = z ?? 1 )
        dim > 3 && ( super.memo[3] = w ?? 1 )
    }

    public get x() {
        return this.memo[0]
    }

    public get y() {
        return this.memo[1]
    }

    public get z() {
        return this.memo[2] ?? null
    }

    public get w() {
        return this.memo[3] ?? null
    }

    public set x(k: number) {
        this[0] = k
    }

    public set y(k: number) {
        this[1] = k
    }

    public set z(k: number) {
        this[2] = k
    }

    public set w(k: number) {
        this[3] = k
    }
}

export default VecBuffer
