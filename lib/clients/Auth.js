"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base_1 = require('./Base');
var Auth = (function (_super) {
    __extends(Auth, _super);
    function Auth() {
        _super.call(this);
    }
    return Auth;
}(Base_1.Base));
exports.Auth = Auth;
