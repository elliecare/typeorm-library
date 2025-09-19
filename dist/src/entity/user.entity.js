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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const alert_entity_1 = require("./alert.entity");
const health_system_entity_1 = require("./health_system.entity");
const measurement_entity_1 = require("./measurement.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", {
        nullable: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.GenderType,
        default: null,
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "cc_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "health_system_affiliate_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "health_system_plan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => health_system_entity_1.HealthSystem, (healthSystem) => healthSystem.users, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "healthSystemDataId" }),
    __metadata("design:type", health_system_entity_1.HealthSystem)
], User.prototype, "health_system_data", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "device_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "endpoint_arn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "phone_number_landline", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "first_login_complete", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], User.prototype, "last_login", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => measurement_entity_1.Measurement, (measurement) => measurement.user),
    __metadata("design:type", Array)
], User.prototype, "measurement", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alert_entity_1.Alert, (alert) => alert.user),
    __metadata("design:type", Array)
], User.prototype, "alert", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "validate_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "document_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "document_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "apartment_info", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "location_home", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deleted_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map