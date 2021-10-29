let assert = require('chai').assert;
let async = require('async');

import { ICache } from 'pip-services3-components-node';

let KEY1: string = "key1";
let KEY2: string = "key2";
let KEY3: string = "key3";
let KEY4: string = "key4";
let KEY5: string = "key5";
let KEY6: string = "key6";

let VALUE1: string = "value1";
let VALUE2 = { val: "value2" };
let VALUE3 = new Date();
let VALUE4 = [1, 2, 3, 4];
let VALUE5 = 12345;
let VALUE6 = null;

export class CacheFixture {
    private _cache: ICache = null;

    public constructor(cache: ICache) {
        this._cache = cache;
    }

    public testStoreAndRetrieve(done: any): void {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY2, VALUE2, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY3, VALUE3, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY4, VALUE4, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY5, VALUE5, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.store(null, KEY6, VALUE6, 5000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, 500);
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE1, val);

                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY2, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE2.val, val.val);

                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY3, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE3.toISOString(), val);

                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY4, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.lengthOf(val, 4)
                    assert.equal(VALUE4[0], val[0]);

                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY5, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNotNull(val);
                    assert.equal(VALUE5, val);

                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY6, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val);

                    callback();
                });
            }
        ], done);
    }

    public testRetrieveExpired(done: any): void {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 1000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, 1500);
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val || null);

                    callback();
                });
            }
        ], done);
    }
    
    public testRemove(done: any): void {
        async.series([
            (callback) => {
                this._cache.store(null, KEY1, VALUE1, 1000, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.remove(null, KEY1, (err) => {
                    assert.isNull(err || null);
                    callback();
                });
            },
            (callback) => {
                this._cache.retrieve(null, KEY1, (err, val) => {
                    assert.isNull(err || null);
                    assert.isNull(val || null);

                    callback();
                });
            }
        ], done);
    }

}
