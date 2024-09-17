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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationalRole = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const operational_role_entity_1 = require("./operational_role.entity");
let UserOperationalRole = class UserOperationalRole {
};
exports.UserOperationalRole = UserOperationalRole;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserOperationalRole.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], UserOperationalRole.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => operational_role_entity_1.OperationalRole, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "operational_role_id" }),
    __metadata("design:type", operational_role_entity_1.OperationalRole)
], UserOperationalRole.prototype, "operational_role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserOperationalRole.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserOperationalRole.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], UserOperationalRole.prototype, "deleted_at", void 0);
exports.UserOperationalRole = UserOperationalRole = __decorate([
    (0, typeorm_1.Entity)()
], UserOperationalRole);
//# sourceMappingURL=user_operational_role.entity.js.map