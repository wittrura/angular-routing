"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_crises_1 = require("./mock-crises");
var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () {
        return Promise.resolve(mock_crises_1.CRISES);
    };
    CrisisService.prototype.getCrisis = function (id) {
        return this.getCrises()
            .then(function (crises) { return crises.find(function (crisis) { return crisis.id === id; }); });
    };
    // See the "Take it slow" appendix
    CrisisService.prototype.getCrisesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getCrises()); }, 2000);
        });
    };
    return CrisisService;
}());
CrisisService = __decorate([
    core_1.Injectable()
], CrisisService);
exports.CrisisService = CrisisService;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis.service.js.map