class buffer {
    private readonly _dim: number
    private readonly _memo: ArrayBuffer

    constructor(dim: number) {
        this._dim = dim
        this._memo = buffer._alloc(dim)
    }

    private static _alloc(dim: number) {
        return new Float32Array(dim)
    }

    protected get memo () {
        return this._memo
    }
}

export default buffer
