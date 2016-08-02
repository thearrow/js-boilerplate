/* eslint-disable */
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

var context = require.context('.', true, /.test\.js$/);
context.keys().forEach(context);
