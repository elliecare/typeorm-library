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
exports.Users_canary_audit = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_canary_entity_1 = require("./user_canary.entity");
let Users_canary_audit = class Users_canary_audit {
};
exports.Users_canary_audit = Users_canary_audit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Users_canary_audit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "operator_id" }),
    __metadata("design:type", user_entity_1.User)
], Users_canary_audit.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users_canary_audit.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_canary_entity_1.UserCanary, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_canary_id" }),
    __metadata("design:type", user_canary_entity_1.UserCanary)
], Users_canary_audit.prototype, "userCanary", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", user_canary_entity_1.UserCanary)
], Users_canary_audit.prototype, "userCanary_snapshot", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean",
    }),
    __metadata("design:type", Boolean)
], Users_canary_audit.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Users_canary_audit.prototype, "created_at", void 0);
exports.Users_canary_audit = Users_canary_audit = __decorate([
    (0, typeorm_1.Entity)()
], Users_canary_audit);
//# sourceMappingURL=user_canary_audit.entity.js.map