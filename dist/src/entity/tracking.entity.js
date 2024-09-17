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
exports.Tracking = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("src/types");
const smartwatch_entity_1 = require("./smartwatch.entity");
const company_client_entity_1 = require("./company_client.entity");
let Tracking = class Tracking {
};
exports.Tracking = Tracking;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Tracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.TrackingStatus,
    }),
    __metadata("design:type", String)
], Tracking.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tracking.prototype, "logistic_operator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => smartwatch_entity_1.Smartwatch, (smartwatch) => smartwatch.id, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Tracking.prototype, "smartwatches", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], Tracking.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tracking.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Tracking.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Tracking.prototype, "deleted_at", void 0);
exports.Tracking = Tracking = __decorate([
    (0, typeorm_1.Entity)()
], Tracking);
//# sourceMappingURL=tracking.entity.js.map