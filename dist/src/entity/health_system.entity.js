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
exports.HealthSystem = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let HealthSystem = class HealthSystem {
};
exports.HealthSystem = HealthSystem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], HealthSystem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HealthSystem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], HealthSystem.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], HealthSystem.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], HealthSystem.prototype, "emergency_phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], HealthSystem.prototype, "contact_phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-json",
        nullable: true,
    }),
    __metadata("design:type", Object)
], HealthSystem.prototype, "other_information", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.health_system_data),
    __metadata("design:type", Array)
], HealthSystem.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HealthSystem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HealthSystem.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], HealthSystem.prototype, "deleted_at", void 0);
exports.HealthSystem = HealthSystem = __decorate([
    (0, typeorm_1.Entity)()
], HealthSystem);
//# sourceMappingURL=health_system.entity.js.map