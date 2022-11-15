import VecBuffer from "src/buffer/VecBuffer";

/**
 * boan.math vector3
 */
class vec3 {
    private static readonly dim: number = 3

    /**
     * Create a new vector
     * @param x
     * @param y
     * @param z
     */
    public static create(x?: number, y?: number, z?: number): VecBuffer {
        return new VecBuffer(vec3.dim)
    }


    /**
     * Set vector x, y, z
     * @param {VecBuffer} u
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public static set(u: VecBuffer, x: number, y: number, z: number) {

    }

    public static setX(u: VecBuffer, k: number) {

    }

    public static setY(u: VecBuffer, k: number) {

    }

    public static setZ(u: VecBuffer, k: number) {

    }

    /**
     * Generate a zero vec3
     */
    public static zero() {
        return new VecBuffer(vec3.dim, 0, 0, 0)
    }

    public static length(u: VecBuffer) {

    }


    public static equal(u: VecBuffer, v: VecBuffer): boolean {
        return false
    }

    public static strictEqual(u: VecBuffer, v: VecBuffer): boolean {
        return false
    }

    /**
     * Add to vector
     * @param u first vector
     * @param v second vector
     *
     * @returns The result of u add v
     */
    public static add(u: VecBuffer, v: VecBuffer): VecBuffer {
        return u
    }

    public static sub(u: VecBuffer, v: VecBuffer): VecBuffer {
        return u
    }

    public static multi(u: VecBuffer, k: number) {

    }

    public static dot(u: VecBuffer, v: VecBuffer): VecBuffer {
        return u
    }

    public static cross(u: VecBuffer) {

    }

    public static distance(u: VecBuffer, v: VecBuffer) {

    }
}

export default vec3
