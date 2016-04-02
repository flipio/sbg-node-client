/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var SBGClient = require('../lib/sbg');

var config = require('../config/tests');
var util = require('../util/test-util');


var errFn = util.errFn;

describe('Projects Client Test', function () {

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

    after(function(done) {
        // runs after all tests in this block
        SBG.Projects.delete(project.id).then(function() {
            console.log('Successfully deleted project');
            done();
        }).catch(errFn);
    });

    it('Can get project details', function(done) {

        SBG.Projects.getDetails(project.id).then(function (data) {

            expect(data).not.to.be.null;
            expect(data.id).to.be.equal(project.id);
            done();

        }).catch(errFn);
    });

    it('Can list projects', function (done) {

        SBG.Projects.list().then(function (data) {

            expect(data).not.to.be.null;
            expect(data.items.length).to.be.within(0, 50);
            done();

        }).catch(errFn);

    });
});
