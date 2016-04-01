/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var config = require('../config/tests');
var util = require('../util/test-util');

var SBGClient = require('../lib/sbg');

var errFn = util.errFn;

describe('User Client Test', function () {

    var SBG, project,
        billing_group = '';

    this.timeout(config.testTimeout);

    before(function(done) {

        SBG = new SBGClient();

        SBG.Billing.list().then(function(res) {

            expect(res.items.length).to.be.at.least(1);

            billing_group = res.items[0].id;

            SBG.Projects.create({
                'name': 'My extra test project ' + Date.now(),
                'description': 'A project for testing my apps in a very cool way',
                'billing_group': billing_group
            }).then(function (res) {

                console.log('Successfully created project');
                project = res;
                done();

            }).catch(errFn);

        }).catch(errFn);

    });

    after(function() {
        // runs after all tests in this block
        SBG.Projects.delete(project.id).then(function() {
            console.log('Successfully deleted project');
            done();
        }).catch(errFn);;
    });

    it('Can list files in project.', function (done) {
        //TODO
        done();
    });

    it('Can delete file.', function (done) {
        //TODO
        done();
    });

    it('Can get file details.', function (done) {
        //TODO
        done();
    });

    it('Can update file details.', function (done) {
        //TODO
        done();
    });

    it('Can copy file from project to project.', function (done) {
        //TODO
        done();
    });

    it('Can get file download url.', function (done) {
        //TODO
        done();
    });

    it('Can get file metadata.', function (done) {
        //TODO
        done();
    });

    it('Can update file metadata.', function (done) {
        //TODO
        done();
    });

    it('Can overwrite file metadata.', function (done) {
        //TODO
        done();
    });

});
