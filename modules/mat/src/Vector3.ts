import Buffer from './Buffer'
import VertorBuffer from './VectorBuffer'

type VBuf = VertorBuffer

class Vector3 {
    /**
     * Create a new vector3
     *
     * @returns The vector which created
     */
    public static create (): Buffer {
        const buffer = new Buffer()

        return buffer
    }

    /**
     * Add two vector3 `a` and `b`
     *
     * @param a - The first input vector
     * @param b - The second input vector
     * @returns The add result of `a` and `b`
     *
     */
    public static add (a: VBuf, b: VBuf): VBuf {
        return a
    }

    public static set (a: VBuf, x: number, y: number, z: number): void {}

    public static dot (a: VBuf, b: VBuf): number {
        return 1
    }

    public static cross (a: VBuf, b: VBuf): VBuf {
        return a
    }
}

export default Vector3
