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
exports.PlansDescription = void 0;
const typeorm_1 = require("typeorm");
let PlansDescription = class PlansDescription {
};
exports.PlansDescription = PlansDescription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PlansDescription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlansDescription.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        array: true,
        default: ["Ellie Go App (en tu celular)"],
    }),
    __metadata("design:type", Array)
], PlansDescription.prototype, "devices", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PlansDescription.prototype, "plan_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.0 }),
    __metadata("design:type", String)
], PlansDescription.prototype, "watch_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.0 }),
    __metadata("design:type", String)
], PlansDescription.prototype, "setup_price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", Object)
], PlansDescription.prototype, "free_trial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        array: true,
        default: ["Botón de Ayuda", "Geolocalización", "Signos Vitales *"],
    }),
    __metadata("design:type", Array)
], PlansDescription.prototype, "functions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], PlansDescription.prototype, "quantity_companions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", array: true, default: ["Programa Ellie Coins *"] }),
    __metadata("design:type", Array)
], PlansDescription.prototype, "benefits", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        array: true,
        default: ["Estimulación Neuro-Cognitiva *"],
    }),
    __metadata("design:type", Array)
], PlansDescription.prototype, "mind", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PlansDescription.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PlansDescription.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], PlansDescription.prototype, "deleted_at", void 0);
exports.PlansDescription = PlansDescription = __decorate([
    (0, typeorm_1.Entity)()
], PlansDescription);
//# sourceMappingURL=plans_description.entity.js.map