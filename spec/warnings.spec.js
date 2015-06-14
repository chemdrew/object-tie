'use strict';

var expect = require('chai').expect,
     sinon = require('sinon');

var object_tie = require(process.cwd() + '/index.js');

describe('index.js warnings', function(){
    var WriteStub, WriteStubSync, ReadStub, ReadStubSync, ExistsStub, ErrStub;

    describe('newLink with a string passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.newLink('invalid');
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });
    });

    describe('newLink with an array passed in', function(){
        var argument, objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            argument = ['val1','val2']
            objReturn = object_tie.newLink( argument );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });
    });

    describe('newLink with null passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.newLink( null );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });
    });

    describe('unlink with a string passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.unlink('invalid');
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });
    });

    describe('unlink with an array passed in', function(){
        var argument, objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            argument = ['val1','val2'];
            objReturn = object_tie.unlink( argument );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });
    });

    describe('unlink with null passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.unlink( null );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - link not destroyed\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });
    });

    describe('addKey with a string passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.addKey( 'invalid' );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });
    });

    describe('addKey with an array passed in', function(){
        var argument, objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            argument = ['val1','val2'];
            objReturn = object_tie.addKey( argument );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });
    });

    describe('addKey with null passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.addKey( null );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object must be supplied - no additions made\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });
    });

    describe('deleteKey with a string passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.deleteKey( 'invalid' );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal('invalid');
        });
    });

    describe('deleteKey with an array passed in', function(){
        var argument, objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            argument = ['val1','val2'];
            objReturn = object_tie.deleteKey( argument );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( argument );
        });
    });

    describe('deleteKey with null passed in', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            objReturn = object_tie.deleteKey( null );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, an object and a string must be supplied - no key deleted\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( null );
        });
    });

    describe('retrieving an object from a non-existant file', function(){
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
            ExistsStub.withArgs('fileDoesNotExist.json').returns(false);
            objReturn = object_tie.retrieve( 'fileDoesNotExist.json' );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, file path [fileDoesNotExist.json] does not exist - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.be.undefined;
        });
    });

    describe('retrieving an invalid object from an existing file', function(){
        var objReturn;

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            ReadStub.returns( 'not an object passed in' );
            ExistsStub.withArgs('fileExists.json').returns(true);
            objReturn = object_tie.retrieve( 'fileExists.json' );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( WriteStub.called ).to.be.false;
        });
        it('file printing should return this string', function(){
            expect( ErrStub.lastCall.args[0] ).to.be.equal('\u001b[1;33m[WARNING] invalid request, file does not contain a valid object - no link created\u001b[0m\n');
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal( 'not an object passed in' );
        });
    });

    describe('Warnings', function(){

        before(function(){
            WriteStub     = sinon.stub( require('fs'), "writeFile" );
            WriteStubSync = sinon.stub( require('fs'), "writeFileSync" );
            ReadStub      = sinon.stub( require('fs'), "readFile" );
            ReadStubSync  = sinon.stub( require('fs'), "readFileSync" );
            ExistsStub    = sinon.stub( require('fs'), "existsSync" );
            ErrStub       = sinon.stub( process.stderr, 'write' );
            object_tie.config( { warnings: false } );
        });
        after(function(){
            require('fs').writeFile.restore();
            require('fs').writeFileSync.restore();
            require('fs').readFile.restore();
            require('fs').readFileSync.restore();
            require('fs').existsSync.restore();
            process.stderr.write.restore();
        });

        it('WARNINGS variable should be set to false if the warnings is set to false function is called by default', function(){
            expect( object_tie.WARNINGS() ).to.be.false;
        });
    });
});