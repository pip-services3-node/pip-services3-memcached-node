/** @module build */
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';
/**
 * Creates Redis components by their descriptors.
 *
 * @see [[MemcachedCache]]
 * @see [[MemcachedLock]]
 */
export declare class DefaultMemcachedFactory extends Factory {
    static readonly Descriptor: Descriptor;
    static readonly MemcachedCacheDescriptor: Descriptor;
    static readonly MemcachedLockDescriptor: Descriptor;
    /**
     * Create a new instance of the factory.
     */
    constructor();
}
