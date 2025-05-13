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
exports.SupportNetwork = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const smartwatch_entity_1 = require("./smartwatch.entity");
let SupportNetwork = class SupportNetwork {
};
exports.SupportNetwork = SupportNetwork;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SupportNetwork.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "subscription_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SupportNetworkStatus,
        default: types_1.SupportNetworkStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "subscriptionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SupportNetworkStatus,
        default: types_1.SupportNetworkStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "main_companion_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        array: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], SupportNetwork.prototype, "companions", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.PlanType,
        default: types_1.PlanType.FREE,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "plan_type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SupportNetwork.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SupportNetwork.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], SupportNetwork.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "delegate_admin_new", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "delegate_admin_old", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "init_delegate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => smartwatch_entity_1.Smartwatch),
    (0, typeorm_1.JoinColumn)({ name: "smartwatch_id" }),
    __metadata("design:type", smartwatch_entity_1.Smartwatch)
], SupportNetwork.prototype, "smartwatch", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SupportNetwork.prototype, "agree_show_location", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], SupportNetwork.prototype, "url_agree_show_location", void 0);
exports.SupportNetwork = SupportNetwork = __decorate([
    (0, typeorm_1.Entity)()
], SupportNetwork);
//# sourceMappingURL=support_network.entity.js.map