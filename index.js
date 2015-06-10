/*
The MIT License (MIT)

Copyright (c) 2015 Andrew Pratt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var WARNINGS    = true;
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
    if ( typeof( obj ) !== 'object' || Array.isArray( obj ) || obj === null ) {
        Warning( 'invalid request, an object must be supplied - no link created' );
        return obj;
    } else {
        return objectTie( obj );
    };
};

function unlink ( obj ) {
    if ( typeof( obj ) !== 'object' || Array.isArray( obj ) || obj === null ) {
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
    if ( typeof( obj ) !== 'object' || Array.isArray( obj ) || obj === null || typeof( key ) !== 'object' ) {
        Warning( 'invalid request, an object must be supplied - no additions made' );
        return obj;
    } else {
        var tempKey = JSON.parse( JSON.stringify( key ) );
        for ( var innerKey in key ) {
            obj[innerKey] = undefined;
            defineObjectProperties( obj, innerKey );
            obj[innerKey] = tempKey[innerKey];
        };
        return obj;
    };
};

// this is to get around the inability to watch the entire object
function deleteKey ( obj, key ) {
    var self = this;
    if ( typeof( obj ) !== 'object' || Array.isArray( obj ) || obj === null || typeof( key ) !== 'string' ) {
        Warning( 'invalid request, an object and a string must be supplied - no key deleted' );
        return obj;
    } else {
        if ( key in obj ) {
            delete obj[key];
            fs.writeFileSync( filePath, JSON.stringify( self.OBJECT, null, 4 ) );
            // add async version in next release
        };
        return obj;
    };
};

function objectTie ( obj ) {
    var tempObj = JSON.parse( JSON.stringify( obj ) );
    for ( var key in obj ) {
        defineObjectProperties( obj, key );
        obj[key] = tempObj[key];
    };
    return obj;
};

function defineObjectProperties ( obj, key ) {
    var self = this;
    var values = {};
    Object.defineProperty( obj, key, {
        set: function ( val ) {
            // gets called initially by the number of keys present
            // could avoid this using the arguments.callee.caller.toString() but not supported by a lot of things
            values[key] = val;
            if ( typeof( val ) === 'object' ) {
                objectTie( val );
            };
            fs.writeFileSync( filePath, JSON.stringify( self.OBJECT, null, 4 ) );
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
        obj[key] = tempObj[key];
    };
    return obj;
};

function resetObjectProperties ( obj, key ) {
    var values = {};
    Object.defineProperty( obj, key, {
        set: function ( val ) {
            values[key] = val;
            return values[key];
        },
        get: function () { return values[key]; },
    });
    return obj;
};

function getWarnings() {return WARNINGS;};
module.exports.WARNINGS   = getWarnings; // for unit testing
module.exports.noWarnings = noWarnings;
module.exports.newLink    = newLink;
module.exports.unlink     = unlink;
module.exports.retrieve   = retrieve;
module.exports.addKey     = addKey;
module.exports.deleteKey  = deleteKey;