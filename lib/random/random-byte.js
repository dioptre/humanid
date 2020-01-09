if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    module.exports = require('react-native-randombytes').randomBytes;
} else {
    /*jshint -W061 */ 
    var crypto = eval("require('crypto');"); //Required for React Native to work
    if (crypto.randomFillSync) {
        // We reuse buffers with the same size to avoid memory fragmentations
        // for better performance
        var buffers = {};
        module.exports = function (bytes) {
            var buffer = buffers[bytes];
            if (!buffer) {
                // `Buffer.allocUnsafe()` faster because it don’t clean memory.
                // We do not need it, since we will fill memory with new bytes anyway.
                buffer = Buffer.allocUnsafe(bytes);
                if (bytes <= 255) {
                    buffers[bytes] = buffer;
                }
            }
            return crypto.randomFillSync(buffer);
        };
    } else {
        module.exports = crypto.randomBytes;
    }
}
 