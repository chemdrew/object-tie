'use strict';

var expect = require('chai').expect,
     sinon = require('sinon');

var object_tie = require(process.cwd() + '/index.js');

describe('index.js method calls', function(){
    var WriteStub, WriteStubSync, ReadStub, ReadStubSync, ExistsStub, ErrStub;

    describe('newLink with a single layer object passed in', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(3);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
    });

    describe('newLink with a single layer object passed in and a value changed', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            testObj.key2  = 'changed value2';
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key2 ).to.equal( 'changed value2' );
        });
    });

    describe('newLink with a single layer object passed in and a value changed then unlinked and changed again', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            testObj.key2  = 'changed value2';
            object_tie.unlink( testObj );
            testObj.key2  = 'not printed value2';
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(4);
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( testObj );
        });
        it('should return the new value in the changed key', function(){
            expect( testObj.key2 ).to.equal( 'not printed value2' );
        });
    });

    describe('newLink with a single layer object passed in and a value added to it', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            object_tie.addKey( testObj, { key4: 'added value4' } );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(4);
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
    });

    describe('newLink with a single layer object passed in and an object added to it', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            object_tie.addKey( testObj, { key4: { innerkey4: 'double deep value4' } } );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(5);
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
    });

    describe('newLink with a single layer object passed in and a value deleted from it', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            object_tie.deleteKey( testObj, 'key3' );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(4);
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
    });

    describe('newLink with a deep layer object passed in and a value changed, one added to it, and another from it', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: {
                level2: {
                    level3_1: 'val1 inside level3',
                    level3_2: 'val2 inside level3'
                }
            }
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn     = object_tie.newLink( testObj );
            testObj.key2.level2.level3_1 = 'I changed val1 to this';
            object_tie.deleteKey( testObj.key2.level2, 'level3_2' );
            object_tie.addKey( testObj.key2.level2, { thisIsMyLevel: 'thisIsMyValue' } );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(8);
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
    });

    describe('retrieving an object from existing file', function(){
        var objReturn;
        var testObj = {
            key1: 'value1',
            key2: {
                level2: {
                    level3_1: 'val1 inside level3',
                    level3_2: 'val2 inside level3'
                }
            }
        };

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            ReadStub.returns( JSON.stringify( testObj, null, 4 ) );
            ExistsStub.withArgs('fileExists.json').returns(true);
            objReturn     = object_tie.retrieve( 'fileExists.json' );
            objReturn.key2.level2.level3_1 = 'I changed val1 to this';
            object_tie.deleteKey( objReturn.key2.level2, 'level3_2' );
            object_tie.addKey( objReturn.key2.level2, { thisIsMyLevel: 'thisIsMyValue' } );
            setTimeout(function(){},200);
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should not be printed to stderr', function(){
            expect( ErrStub.called ).to.be.false;
        });
        it('file printing should be called', function(){
            expect( WriteStub.called ).to.be.true;
        });
        it('file printing should be called on the existing file path provided', function(){
            WriteStub.args.forEach(function(arg){
                expect( arg[0] ).to.be.equal( 'fileExists.json' )
            });
        });
        it('file printing should be called for every key', function(){
            expect( WriteStub.callCount ).to.be.equal(8);
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
    });
});