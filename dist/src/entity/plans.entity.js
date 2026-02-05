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
exports.Plans = void 0;
const typeorm_1 = require("typeorm");
const company_client_entity_1 = require("./company_client.entity");
const types_1 = require("../types");
const gateway_entity_1 = require("./gateway.entity");
const plans_description_entity_1 = require("./plans_description.entity");
let Plans = class Plans {
};
exports.Plans = Plans;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Plans.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plans.prototype, "plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plans.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], Plans.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gateway_entity_1.Gateway, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "gateway_id" }),
    __metadata("design:type", gateway_entity_1.Gateway)
], Plans.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: types_1.Vendors.ELLIE_CARE }),
    __metadata("design:type", String)
], Plans.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.PlanType,
        default: "gold",
    }),
    __metadata("design:type", String)
], Plans.prototype, "plan_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SubscriptionType,
        default: "gold",
    }),
    __metadata("design:type", String)
], Plans.prototype, "subscription_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "ventas@ellie.care" }) //email para avisar al Vendor o CC que se realizo una venta
    ,
    __metadata("design:type", String)
], Plans.prototype, "sales_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "logistica@ellie.care" }) //email para avisar a EllieCare que se realizo una venta
    ,
    __metadata("design:type", String)
], Plans.prototype, "vendor_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "mail_to_logistics" }) //nombre del template que van a usar en la libreria de emails
    ,
    __metadata("design:type", String)
], Plans.prototype, "vendor_template_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "subscription_gold" }) //email para el usuario confirmando compra de subscripcion dependiendo el plan
    ,
    __metadata("design:type", String)
], Plans.prototype, "user_template_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plans.prototype, "success_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plans.prototype, "notification_url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plans_description_entity_1.PlansDescription, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "plans_description_id" }),
    __metadata("design:type", plans_description_entity_1.PlansDescription)
], Plans.prototype, "plans_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Plans.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Plans.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Plans.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Plans.prototype, "deleted_at", void 0);
exports.Plans = Plans = __decorate([
    (0, typeorm_1.Entity)()
], Plans);
//# sourceMappingURL=plans.entity.js.map