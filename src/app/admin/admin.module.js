"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_component_1 = require("./admin.component");
var admin_dashboard_component_1 = require("./admin-dashboard.component");
var manage_crises_component_1 = require("./manage-crises.component");
var manage_heroes_component_1 = require("./manage-heroes.component");
var admin_routing_module_1 = require("./admin-routing.module");
var auth_guard_service_1 = require("../auth-guard.service");
var auth_service_1 = require("../auth.service");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_dashboard_component_1.AdminDashboardComponent,
            manage_crises_component_1.ManageCrisesComponent,
            manage_heroes_component_1.ManageHeroesComponent
        ],
        providers: [
            auth_guard_service_1.AuthGuard,
            auth_service_1.AuthService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map