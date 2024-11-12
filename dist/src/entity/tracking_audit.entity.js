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
exports.Tracking_audit = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const tracking_entity_1 = require("./tracking.entity");
const user_entity_1 = require("./user.entity");
let Tracking_audit = class Tracking_audit {
};
exports.Tracking_audit = Tracking_audit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Tracking_audit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "operator_id" }),
    __metadata("design:type", user_entity_1.User)
], Tracking_audit.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.TrackingStatus,
    }),
    __metadata("design:type", String)
], Tracking_audit.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tracking_audit.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tracking_entity_1.Tracking, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "tracking_id" }),
    __metadata("design:type", tracking_entity_1.Tracking)
], Tracking_audit.prototype, "tracking", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", tracking_entity_1.Tracking)
], Tracking_audit.prototype, "tracking_snapshot", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
    }),
    __metadata("design:type", Array)
], Tracking_audit.prototype, "smartwatches", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean",
    }),
    __metadata("design:type", Boolean)
], Tracking_audit.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tracking_audit.prototype, "created_at", void 0);
exports.Tracking_audit = Tracking_audit = __decorate([
    (0, typeorm_1.Entity)()
], Tracking_audit);
//# sourceMappingURL=tracking_audit.entity.js.map