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
var animations_1 = require("../animations");
var crisis_service_1 = require("./crisis.service");
var dialog_service_1 = require("../dialog.service");
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, service, dialogService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.dialogService = dialogService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getCrisis(+params['id']); })
            .subscribe(function (crisis) { return _this.crisis = crisis; });
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }, { relativeTo: this.route }]);
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // otherwise ask the user with the dialog service and return its Promise
        // which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    return CrisisDetailComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "routeAnimation", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], CrisisDetailComponent.prototype, "position", void 0);
CrisisDetailComponent = __decorate([
    core_1.Component({
        selector: 'crisis-detail',
        animations: [animations_1.slideInDownAnimation],
        template: "\n    <div *ngIf=\"crisis\">\n      <h2>{{crisis.name}} details!</h2>\n      <div>\n        <label>id: </label>{{crisis.id}}\n      </div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"crisis.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n    <button (click)=\"gotoCrises()\">Back</button>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        crisis_service_1.CrisisService,
        dialog_service_1.DialogService])
], CrisisDetailComponent);
exports.CrisisDetailComponent = CrisisDetailComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=crisis-detail.component.js.map