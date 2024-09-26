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
const task_controller_1 = require("./task/task.controller");
const task_providers_1 = require("./task/task.providers");
const task_service_1 = require("./task/task.service");
const task_module_1 = require("./task/task.module");
const user_controller_1 = require("./user/user.controller");
const database_module_1 = require("./infra/database.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply().forRoutes(project_controller_1.ProjectController);
        consumer.apply().forRoutes(task_controller_1.TaskController);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [project_module_1.ProjectModule, task_module_1.TaskModule, database_module_1.DatabaseModule.forRoot()],
        controllers: [project_controller_1.ProjectController, task_controller_1.TaskController, user_controller_1.UserController],
        providers: [
            ...project_providers_1.projectProviders,
            ...task_providers_1.taskProviders,
            project_service_1.ProjectService,
            task_service_1.TaskService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map