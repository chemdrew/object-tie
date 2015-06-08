var WARNINGS = true;
function Warning ( string ) {
    if ( WARNINGS ) {
        process.stderr.write( "\033[1;33m[WARNING] "+string+"\033[0m\n" );
    };
};

'use strict';

var fs = require('fs');
var filePath = process.cwd() + '/saved_object.json';

function noWarnings () {
    WARNINGS = false;
};

function newLink ( obj ) {
    this.OBJECT = obj;
    if ( typeof( obj ) !== 'object' ) {
        Warning( 'invalid request, an object must be supplied - no link created' );
        return obj;
    } else {
        return objectTie( obj );
    };
};

function unlink ( obj ) {
    if ( typeof( obj ) !== 'object' ) {
        Warning( 'invalid request, an object must be supplied - link not destroyed' );
        return obj;
    } else {
        return objectUntie( obj );
    };
};

// TEST THIS HEAVILY
function retrieve ( file ) {
    var obj;

    if ( fs.existsSync( file ) ) {
        obj = fs.readFileSync( file, 'utf8' );
    } else {
        Warning( 'invalid request, file path ['+file+'] does not exist - no link created' );
        return obj;
        // error for now
        // once additions to obj can be handled => mkdir & obj = {}
    };
    try {
        obj = JSON.parse(obj);
    } catch ( error ) {
        Warning( 'invalid request, file does not contain a valid object - no link created' );
        return obj;
    };
    this.OBJECT = obj;
    filePath = file;
    return objectTie( obj );
};

// this is to get around the inability to watch the entire object
function addKey ( obj, key ) {
    if ( typeof( obj ) !== 'object' || typeof( key ) !== 'object' ) {
        Warning( 'invalid request, an object must be supplied - no additions made' );
        return obj;
    } else {
        var tempKey = JSON.parse( JSON.stringify( key ) );
        for ( var innerKey in key ) {
            obj[innerKey] = undefined;
            defineObjectProperties( obj, innerKey );
            if ( typeof( tempKey[key] ) === 'object' ) {
                addKey( tempKey[key] );
            };
            obj[innerKey] = tempKey[innerKey];
        };
        return obj;
    };
};

// this is to get around the inability to watch the entire object
function deleteKey ( obj, key ) {
    var self = this;
    if ( typeof( obj ) !== 'object' || typeof( key ) !== 'string' ) {
        Warning( 'invalid request, an object and a string must be supplied - no key deleted' );
        return obj;
    } else {
        if ( key in obj ) {
            delete obj[key];
            fs.writeFileSync( filePath, JSON.stringify( self.OBJECT, null, '    ' ) );
            // add async version in next release
        };
        return obj;
    };
};

function objectTie ( obj ) {
    var tempObj = JSON.parse( JSON.stringify( obj ) );
    for ( var key in obj ) {
        defineObjectProperties( obj, key );
        if ( typeof( tempObj[key] ) === 'object' ) {
            objectTie( tempObj[key] );
        };
        obj[key] = tempObj[key];
    };
    return obj;
};

function defineObjectProperties ( obj, key ) {
    var self = this;
    var values = {};
    Object.defineProperty( obj, key, {
        set: function ( val ) {
            values[key] = val;
            if ( typeof( val ) === 'object' ) {
                objectTie( val );
            };
            fs.writeFileSync( filePath, JSON.stringify( self.OBJECT, null, '    ' ) );
            // add async version in next release
            return values[key];
        },
        get: function () { return values[key]; }
    });
    return obj;
};

function objectUntie ( obj ) {
    var tempObj = JSON.parse( JSON.stringify( obj ) );
    for ( var key in obj ) {
        resetObjectProperties( obj, key );
        if ( typeof( tempObj[key] ) === 'object' ) {
            objectUntie( tempObj[key] );
        };
        obj[key] = tempObj[key];
    };
    return obj;
};

function resetObjectProperties ( obj, key ) {
    var values = {};
    Object.defineProperty( obj, key, {
        set: function ( val ) {
            values[key] = val;
            if ( typeof( val ) === 'object' ) {
                objectUntie( val );
            };
            return values[key];
        },
        get: function () { return values[key]; },
    });
    return obj;
};

module.exports = newLink;
module.exports = unlink;
module.exports = retrieve;
module.exports = addKey;
module.exports = deleteKey;
module.exports = noWarnings;