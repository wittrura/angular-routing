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
require("rxjs/add/operator/map");
var selective_preloading_strategy_1 = require("../selective-preloading-strategy");
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(route, preloadStrategy) {
        this.route = route;
        this.modules = preloadStrategy.preloadedModules;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        // capture the session ID if available
        this.sessionId = this.route.queryParams.map(function (params) { return params['session_id'] || 'None'; });
        // capture the fragment if available
        this.token = this.route.fragment.map(function (fragment) { return fragment || 'None'; });
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    core_1.Component({
        template: "\n    <p>Dashboard</p>\n    <p>Session ID: {{ sessionId | async }}</p>\n    <a id=\"anchor\"></a>\n    <p>Token: {{ token | async }}</p>\n\n    Preloaded Modules\n    <ul>\n      <li *ngFor=\"let module of modules\">{{ module }}</li>\n    </ul>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, selective_preloading_strategy_1.SelectivePreloadingStragey])
], AdminDashboardComponent);
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin-dashboard.component.js.map