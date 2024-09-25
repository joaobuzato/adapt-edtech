"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const project_controller_1 = require("./project/project.controller");
const project_service_1 = require("./project/project.service");
const project_module_1 = require("./project/project.module");
const project_providers_1 = require("./project/project.providers");
const database_providers_1 = require("./infra/database.providers");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply().forRoutes(project_controller_1.ProjectController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [project_module_1.ProjectModule],
        controllers: [project_controller_1.ProjectController],
        providers: [...project_providers_1.projectProviders, ...database_providers_1.databaseProviders, project_service_1.ProjectService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map