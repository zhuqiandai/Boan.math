import vec_buffer from "src/buffer/vec_buffer";

/**
 *  Static Class vector3 build and methods
 */
class vec3 {
    private static readonly dim: number = 3

    /**
     *  Construct Vector
     */

    /**
     * Create a new vector
     * @param x
     * @param y
     * @param z
     */
    public static create(x?: number, y?: number, z?: number): vec_buffer {
        return new vec_buffer(vec3.dim)
    }


    public static set(x: number, y: number, z: number) {

    }

    public static setX() {

    }

    public static setY() {

    }

    public static setZ() {

    }

    public static multiply(k: number) {

    }

    public static equal(u: vec_buffer, v: vec_buffer): boolean {
        return false
    }

    /**
     * Calculate -- Add to vector
     * @param u first vector
     * @param v second vector
     *
     * @returns The result of u add v
     */
    public static add(u: vec_buffer, v: vec_buffer): vec_buffer {
        return u
    }

    public static dot(u: vec_buffer, v: vec_buffer): vec_buffer {
        return u
    }

    public static cross() {

    }
}

export default vec3
