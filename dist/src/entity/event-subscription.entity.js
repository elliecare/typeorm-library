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
exports.EventSubscription = void 0;
// src/entities/event-subscription.entity.ts
const typeorm_1 = require("typeorm");
const company_client_entity_1 = require("./company_client.entity");
const types_1 = require("../types"); // usa tu enum existente
let EventSubscription = class EventSubscription {
};
exports.EventSubscription = EventSubscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], EventSubscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, (cc) => cc.eventSubscriptions, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], EventSubscription.prototype, "companyClient", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "company_client_id" }),
    __metadata("design:type", String)
], EventSubscription.prototype, "companyClientId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "event_type",
        type: "enum",
        enum: types_1.EventType,
    }),
    __metadata("design:type", String)
], EventSubscription.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "endpoint_url" }),
    __metadata("design:type", String)
], EventSubscription.prototype, "endpointUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "endpoint_secret", nullable: true }),
    __metadata("design:type", String)
], EventSubscription.prototype, "endpointSecret", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_active", default: true }),
    __metadata("design:type", Boolean)
], EventSubscription.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], EventSubscription.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], EventSubscription.prototype, "updatedAt", void 0);
exports.EventSubscription = EventSubscription = __decorate([
    (0, typeorm_1.Entity)({ name: "event_subscription" })
], EventSubscription);
//# sourceMappingURL=event-subscription.entity.js.map