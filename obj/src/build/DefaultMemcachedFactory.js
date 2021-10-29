"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMemcachedFactory = void 0;
/** @module build */
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const MemcachedCache_1 = require("../cache/MemcachedCache");
const MemcachedLock_1 = require("../lock/MemcachedLock");
/**
 * Creates Redis components by their descriptors.
 *
 * @see [[MemcachedCache]]
 * @see [[MemcachedLock]]
 */
class DefaultMemcachedFactory extends pip_services3_components_node_1.Factory {
    /**
     * Create a new instance of the factory.
     */
    constructor() {
        super();
        this.registerAsType(DefaultMemcachedFactory.MemcachedCacheDescriptor, MemcachedCache_1.MemcachedCache);
        this.registerAsType(DefaultMemcachedFactory.MemcachedLockDescriptor, MemcachedLock_1.MemcachedLock);
    }
}
exports.DefaultMemcachedFactory = DefaultMemcachedFactory;
DefaultMemcachedFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "factory", "memcached", "default", "1.0");
DefaultMemcachedFactory.MemcachedCacheDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "cache", "memcached", "*", "1.0");
DefaultMemcachedFactory.MemcachedLockDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "lock", "memcached", "*", "1.0");
//# sourceMappingURL=DefaultMemcachedFactory.js.map