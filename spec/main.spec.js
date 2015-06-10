'use strict';

var expect = require('chai').expect,
     sinon = require('sinon');

var object_tie = require(process.cwd() + '/index.js');

describe('index.js functionality and coverage', function(){

    describe('newLink with a string passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.newLink('invalid');
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with an array passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var argument = ['val1','val2']
        var objReturn = object_tie.newLink( argument );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with null passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.newLink( null );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with undefined passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.newLink( undefined );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( undefined );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('unlink with a string passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.unlink('invalid');
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('unlink with an array passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var argument = ['val1','val2']
        var objReturn = object_tie.unlink( argument );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('unlink with null passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.unlink( null );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('unlink with undefined passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.unlink( undefined );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( undefined );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('addKey with a string passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.addKey('invalid');
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('addKey with an array passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var argument = ['val1','val2']
        var objReturn = object_tie.addKey( argument );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('addKey with null passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.addKey( null );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('addKey with undefined passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.addKey( undefined );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( undefined );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('deleteKey with a string passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.deleteKey('invalid');
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('deleteKey with an array passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var argument = ['val1','val2']
        var objReturn = object_tie.deleteKey( argument );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('deleteKey with null passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.deleteKey( null );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('deleteKey with undefined passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.deleteKey( undefined );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( undefined );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(3);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in and a value changed', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        testObj.key2 = 'changed value2';
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key2 ).to.equal( 'changed value2' );
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in and a value changed then unlinked and changed again', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        testObj.key2 = 'changed value2';
        object_tie.unlink( testObj );
        testObj.key2 = 'not printed value2';
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key2 ).to.equal( 'not printed value2' );
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in and a value added to it', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        object_tie.addKey( testObj, { key4: 'added value4' } );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key4 ).to.equal( 'added value4' );
        });
        it('should contain four keys', function(){
            expect( Object.keys( testObj ).length ).to.be.equal(4);
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in and an object added to it', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        object_tie.addKey( testObj, { key4: { innerkey4: 'double deep value4' } } );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(5);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key4.innerkey4 ).to.equal( 'double deep value4' );
        });
        it('should contain four keys', function(){
            expect( Object.keys( testObj ).length ).to.be.equal(4);
        });
        it('inner key should contain one key', function(){
            expect( Object.keys( testObj.key4 ).length ).to.be.equal(1);
        });
        it('inner key should be defined as Getters/Setters, enumerable, and configurable', function(){
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            expect( properties.enumerable ).to.be.true;
            expect( properties.configurable ).to.be.true;
            expect( properties.get ).to.exist;
            expect( properties.set ).to.exist;
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a single layer object passed in and a value deleted from it', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        object_tie.deleteKey( testObj, 'key3' );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return undefined in the deleted key', function(){
            expect( testObj.key3 ).to.be.undefined;
        });
        it('should contain only two keys', function(){
            expect( Object.keys( testObj ).length ).to.be.equal(2);
        });
        for ( var key in testObj ) {
            var properties = Object.getOwnPropertyDescriptor( testObj, key );
            it('all keys should be defined as Getters/Setters, enumerable, and configurable', function(){
                expect( properties.enumerable ).to.be.true;
                expect( properties.configurable ).to.be.true;
                expect( properties.get ).to.exist;
                expect( properties.set ).to.exist;
            });
        };

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('newLink with a deep layer object passed in and a value changed, one added to it, and another from it', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: {
                level2: {
                    level3_1: 'val1 inside level3',
                    level3_2: 'val2 inside level3'
                }
            }
        };

        var objReturn = object_tie.newLink( testObj );
        testObj.key2.level2.level3_1 = 'I changed val1 to this';
        object_tie.deleteKey( testObj.key2.level2, 'level3_2' );
        object_tie.addKey( testObj.key2.level2, { thisIsMyLevel: 'thisIsMyValue' } );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(8);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key2.level2.level3_1 ).to.equal( 'I changed val1 to this' );
        });
        it('should return undefined in the deleted key', function(){
            expect( testObj.key2.level2.level3_2 ).to.be.undefined;
        });
        it('should return the new key where added', function(){
            expect( testObj.key2.level2.thisIsMyLevel ).to.equal( 'thisIsMyValue' );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    describe('retrieving an object from existing file', function(){
        var FileStub   = sinon.stub( require('fs'), "writeFileSync" ),
            ReadStub   = sinon.stub( require('fs'), "readFileSync" ),
            ExistsStub = sinon.stub( require('fs'), "existsSync" ),
            ErrStub    = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: {
                level2: {
                    level3_1: 'val1 inside level3',
                    level3_2: 'val2 inside level3'
                }
            }
        };

        ReadStub.returns( JSON.stringify( testObj, null, 4 ) );
        ExistsStub.withArgs('fileExists.json').returns(true);

        var objReturn = object_tie.retrieve( 'fileExists.json' );
        objReturn.key2.level2.level3_1 = 'I changed val1 to this';
        object_tie.deleteKey( objReturn.key2.level2, 'level3_2' );
        object_tie.addKey( objReturn.key2.level2, { thisIsMyLevel: 'thisIsMyValue' } );
        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( FileStub.called ).to.be.true;
        });
        it('file printing should be called on the existing file path provided', function(){
            FileStub.args.forEach(function(arg){
                expect( arg[0] ).to.be.equal( 'fileExists.json' )
            });
        });
        it('file printing should be called for every key', function(){
            expect( FileStub.callCount ).to.be.equal(8);
        });
        it('should return the new value in the changed key', function(){
            expect( objReturn.key2.level2.level3_1 ).to.equal( 'I changed val1 to this' );
        });
        it('should return undefined in the deleted key', function(){
            expect( objReturn.key2.level2.level3_2 ).to.be.undefined;
        });
        it('should return the new key where added', function(){
            expect( objReturn.key2.level2.thisIsMyLevel ).to.equal( 'thisIsMyValue' );
        });

        require('fs').writeFileSync.restore();
        require('fs').readFileSync.restore();
        require('fs').existsSync.restore();
        process.stderr.write.restore();
    });

    describe('retrieving an object from a non-existant file', function(){
        var FileStub   = sinon.stub( require('fs'), "writeFileSync" ),
            ReadStub   = sinon.stub( require('fs'), "readFileSync" ),
            ExistsStub = sinon.stub( require('fs'), "existsSync" ),
            ErrStub    = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: {
                level2: {
                    level3_1: 'val1 inside level3',
                    level3_2: 'val2 inside level3'
                }
            }
        };

        ReadStub.returns( JSON.stringify( testObj, null, 4 ) );
        ExistsStub.withArgs('fileDoesNotExist.json').returns(false);

        var objReturn = object_tie.retrieve( 'fileDoesNotExist.json' );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, file path [fileDoesNotExist.json] does not exist - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.be.undefined;
        });

        require('fs').writeFileSync.restore();
        require('fs').readFileSync.restore();
        require('fs').existsSync.restore();
        process.stderr.write.restore();
    });

    describe('retrieving an invalid object from an existing file', function(){
        var FileStub   = sinon.stub( require('fs'), "writeFileSync" ),
            ReadStub   = sinon.stub( require('fs'), "readFileSync" ),
            ExistsStub = sinon.stub( require('fs'), "existsSync" ),
            ErrStub    = sinon.stub( process.stderr, 'write' );

        ReadStub.returns( 'not an object passed in' );
        ExistsStub.withArgs('fileExists.json').returns(true);

        var objReturn = object_tie.retrieve( 'fileExists.json' );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, file does not contain a valid object - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( 'not an object passed in' );
        });

        require('fs').writeFileSync.restore();
        require('fs').readFileSync.restore();
        require('fs').existsSync.restore();
        process.stderr.write.restore();
    });

    describe('Warnings', function(){

        it('WARNINGS variable should be set to true by default', function(){
            expect( object_tie.WARNINGS() ).to.be.true;
        });

        it('WARNINGS variable should be set to false if the noWarnings function is called by default', function(){
            object_tie.noWarnings();
            expect( object_tie.WARNINGS() ).to.be.false;
        });
    });
});