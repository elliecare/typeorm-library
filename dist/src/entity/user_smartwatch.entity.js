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
exports.UserSmartwatch = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const smartwatch_entity_1 = require("./smartwatch.entity");
let UserSmartwatch = class UserSmartwatch {
};
exports.UserSmartwatch = UserSmartwatch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserSmartwatch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], UserSmartwatch.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => smartwatch_entity_1.Smartwatch, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "smartwatch_id" }),
    __metadata("design:type", smartwatch_entity_1.Smartwatch)
], UserSmartwatch.prototype, "smartwatch", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 3, nullable: true }),
    __metadata("design:type", String)
], UserSmartwatch.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserSmartwatch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserSmartwatch.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], UserSmartwatch.prototype, "deleted_at", void 0);
exports.UserSmartwatch = UserSmartwatch = __decorate([
    (0, typeorm_1.Entity)("users_smartwatches")
], UserSmartwatch);
//# sourceMappingURL=user_smartwatch.entity.js.map