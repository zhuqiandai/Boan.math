import VecBuffer from "src/buffer/VecBuffer";
import vecBuffer from "src/buffer/VecBuffer";

/**
 * boan.math vector3
 */
class vec3 {
    private static readonly dim: number = 3

    /**
     * Create a new vector
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public static create(x?: number, y?: number, z?: number): VecBuffer {
        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Set vector x, y, z
     * @param {VecBuffer} u
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public static set(u: VecBuffer, x: number, y: number, z: number): void {
        u.x = x
        u.y = y
        u.z = x
    }

    public static setX(u: VecBuffer, k: number) {
        u.x = k
    }

    public static setY(u: VecBuffer, k: number) {
        u.y = k
    }

    public static setZ(u: VecBuffer, k: number) {
        u.z = k
    }

    /**
     * Generate a zero vec3
     */
    public static zero(): vecBuffer {
        return new VecBuffer(vec3.dim, 0, 0, 0)
    }

    /**
     * Measure vector length
     * @param {VecBuffer} u
     */
    public static length(u: VecBuffer): number {
        const r = u.x ** 2 + u.y ** 2 + u.z ** 2
        return Math.sqrt(r)
    }

    /**
     * Is u and v have the same length
     * @param {number} u
     * @param {number} v
     */
    public static equal(u: VecBuffer, v: VecBuffer): boolean {
        return vec3.length(u) === vec3.length(v)
    }

    /**
     * Is u and v have the same coordinate
     * @param u
     * @param v
     */
    public static strictEqual(u: VecBuffer, v: VecBuffer): boolean {
        return u.x === v.x && u.y === v.y && u.z === v.z
    }

    /**
     * Add u and v vector
     * @param u first vector
     * @param v second vector
     *
     * @returns The result of u add v
     */
    public static add(u: VecBuffer, v: VecBuffer): VecBuffer {
        const x = u.x + v.x
        const y = u.y + v.y
        const z = u.z + v.z

        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Subtract u and v vector
     * @param u
     * @param v
     */
    public static sub(u: VecBuffer, v: VecBuffer): VecBuffer {
        const x = u.x - v.x
        const y = u.y - v.y
        const z = u.z - v.z

        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Multiply u and constant k
     * @param u
     * @param k
     */
    public static multi(u: VecBuffer, k: number): VecBuffer {
        const x = u.x * k
        const y = u.y * k
        const z = u.z * k

        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Dot result u and v
     * @param u
     * @param v
     */
    public static dot(u: VecBuffer, v: VecBuffer): number{
        return u.x * v.x + u.y * v.y + u.z * v.z
    }

    /**
     * Cross result u and v
     * @param u
     * @param v
     */
    public static cross(u: VecBuffer, v: VecBuffer) {
        const x = u.y * v.z - u.z * v.y
        const y = u.z * v.x - u.x * v.z
        const z = u.x * v.y - u.y * v.x

        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Normalize u
     * @param u
     */
    public static normalize(u: VecBuffer): VecBuffer {
        const len = vec3.length(u)
        const x = u.x / len
        const y = u.y / len
        const z = u.z / len

        return new VecBuffer(vec3.dim, x, y, z)
    }

    /**
     * Distance of u and v
     * @param u
     * @param v
     */
    public static distance(u: VecBuffer, v: VecBuffer): number {
        const r = (u.x - v.x) ** 2 + (u.y - v.y) ** 2 + (v.z - u.z) ** 2
        return  Math.sqrt(r)
    }
}

export default vec3
