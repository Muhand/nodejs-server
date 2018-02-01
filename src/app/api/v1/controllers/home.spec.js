//FOR MORE INFO VIEW: https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/

// import fs from 'fs'
// import request from 'request'
// import expect from 'chai'.expect
// import webpage from './home'
//
// describe('The homepage module', function () {
//   it('Views the current homepage', function * () {
//     const url = 'google.com'
//     const content = '<h1>title</h1>'
//     const writeFileStub = this.sandbox.stub(fs, 'writeFile', function (filePath, fileContent, cb) {
//       cb(null)
//     })
//
//     const requestStub = this.sandbox.stub(request, 'get', function (url, cb) {
//       cb(null, null, content)
//     })
//
//     const result = yield webpage.saveWebpage(url)
//
//     expect(writeFileStub).to.be.calledWith()
//     expect(requestStub).to.be.calledWith(url)
//     expect(result).to.eql('page')
//   })
