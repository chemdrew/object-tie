'use strict';

var expect = require('chai').expect,
     sinon = require('sinon');

process.env.OBJTIE_DEVELOPMENT = true;
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

    describe('newLink with a function passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.newLink( function(){return 'nope'} );
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
            expect( typeof(objReturn) ).to.equal( 'function' );
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

    describe('newLink with a single layer object passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var testObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3'
        };

        var objReturn = object_tie.newLink( testObj );
        it('an error should be printed to stderr', function(){
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

        // describe('changing a value in the object', function(){
        //     testObj.key2 = 'changed value2';

        //     it('should modify the key', function(){
        //         expect( testObj.key2 ).to.equal( 'changed value2' );
        //     });
        //     it('file printing should be called for every key', function(){
        //         expect( FileStub.callCount ).to.be.equal(4);
        //     });

        // });

        describe('adding a value in the object', function(){

        });

        describe('deleting a value in the object', function(){

        });

        describe('untie the object', function(){

        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });

    xdescribe('newLink with a triple layer object passed in', function(){
        var FileStub = sinon.stub( require('fs'), "writeFileSync" ),
            ErrStub  = sinon.stub( process.stderr, 'write' );

        var objReturn = object_tie.newLink(    undefined );
        it('an error should be printed to stderr', function(){
            expect( ErrStub.called ).to.be.true;
        });
        it('file printing should not be called', function(){
            expect( FileStub.called ).to.be.false;
        });
        it('should return the object that was passed in', function(){
            expect( objReturn ).to.equal(  undefined );
        });

        require('fs').writeFileSync.restore();
        process.stderr.write.restore();
    });
});

// xdescribe('unlink', function(){
//     it('should return -1 when the value is not present', function(){
//         expect(0).to.equal(0);
//     });
// });

// xdescribe('retrieve', function(){
//     it('should return -1 when the value is not present', function(){
//         expect(0).to.equal(0);
//     });
// });

// xdescribe('addKey', function(){
//     it('should return -1 when the value is not present', function(){
//         expect(0).to.equal(0);
//     });
// });

// xdescribe('deleteKey', function(){
//     it('should return -1 when the value is not present', function(){
//         expect(0).to.equal(0);
//     });
// });

describe('Warning', function(){

    it('WARNINGS variable should be set to true by default', function(){
        expect( object_tie.WARNINGS() ).to.be.true;
    });

    it('WARNINGS variable should be set to false if the noWarnings function is called by default', function(){
        object_tie.noWarnings();
        expect( object_tie.WARNINGS() ).to.be.false;
    });
});