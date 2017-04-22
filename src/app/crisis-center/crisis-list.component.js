"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var crisis_service_1 = require("./crisis.service");
var CrisisListComponent = (function () {
    function CrisisListComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    // getCrises(): void {
    //   this.crisisService.getCrises().then(crises => this.crises = crises);
    // }
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getCrises();
        this.crises = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getCrises();
        });
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this.selectedId = crisis.id;
        // Navigate with a relative link
        this.router.navigate([crisis.id], { relativeTo: this.route });
    };
    CrisisListComponent.prototype.isSelected = function (crisis) {
        return crisis.id === this.selectedId;
    };
    return CrisisListComponent;
}());
CrisisListComponent = __decorate([
    core_1.Component({
        template: "\n    <ul class=\"crises\">\n      <li *ngFor=\"let crisis of crises | async\"\n        <a [routerLink] = \"crisis.id\"\n           [class.selected]=\"isSelected(crisis)\">\n          <span class=\"badge\">{{crisis.id}}</span>\n          {{crisis.name}}\n        </a>\n      </li>\n    </ul>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .crises {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .crises li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .crises li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .crises li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .crises .text {\n      position: relative;\n      top: -3px;\n    }\n    .crises .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
        providers: [crisis_service_1.CrisisService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        crisis_service_1.CrisisService])
], CrisisListComponent);
exports.CrisisListComponent = CrisisListComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-list.component.js.map