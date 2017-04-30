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
    CrisisListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let crisis of crises | async\"\n      (click)=\"onSelect(crisis)\"\n      [class.selected]=\"isSelected(crisis)\">\n        <span class=\"badge\">{{crisis.id}}</span>\n        {{crisis.name}}\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  "
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