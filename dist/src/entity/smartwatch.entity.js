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
exports.Smartwatch = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const company_client_entity_1 = require("./company_client.entity");
const support_network_entity_1 = require("./support_network.entity");
const tracking_entity_1 = require("./tracking.entity");
const config_entity_1 = require("./config.entity");
let Smartwatch = class Smartwatch {
};
exports.Smartwatch = Smartwatch;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Smartwatch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SmartwatchStatus,
    }),
    __metadata("design:type", String)
], Smartwatch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SmartwatchMarks,
    }),
    __metadata("design:type", String)
], Smartwatch.prototype, "mark", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SmartwatchModels,
    }),
    __metadata("design:type", String)
], Smartwatch.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SmartwatchSizes,
    }),
    __metadata("design:type", String)
], Smartwatch.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SmartwatchColors,
        default: types_1.SmartwatchColors.BLACK,
    }),
    __metadata("design:type", String)
], Smartwatch.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Smartwatch.prototype, "LTE", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Smartwatch.prototype, "device_check", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Smartwatch.prototype, "software_check", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Smartwatch.prototype, "knox", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Smartwatch.prototype, "phone_number_1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Smartwatch.prototype, "phone_number_2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], Smartwatch.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => support_network_entity_1.SupportNetwork, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "support_network_id" }),
    __metadata("design:type", support_network_entity_1.SupportNetwork)
], Smartwatch.prototype, "support_network", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tracking_entity_1.Tracking, (tracking) => tracking.id),
    __metadata("design:type", tracking_entity_1.Tracking)
], Smartwatch.prototype, "tracking", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => config_entity_1.Config, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "config_id" }),
    __metadata("design:type", config_entity_1.Config)
], Smartwatch.prototype, "config", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "commercial_owner_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], Smartwatch.prototype, "commercial_owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Smartwatch.prototype, "out_of_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Smartwatch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Smartwatch.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Smartwatch.prototype, "deleted_at", void 0);
exports.Smartwatch = Smartwatch = __decorate([
    (0, typeorm_1.Entity)()
], Smartwatch);
//# sourceMappingURL=smartwatch.entity.js.map