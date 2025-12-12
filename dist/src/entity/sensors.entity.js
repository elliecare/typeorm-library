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
exports.Sensors = void 0;
const typeorm_1 = require("typeorm");
const smartwatch_entity_1 = require("./smartwatch.entity");
let Sensors = class Sensors {
};
exports.Sensors = Sensors;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Sensors.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sensors.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Sensors.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Sensors.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: false,
    }),
    __metadata("design:type", Boolean)
], Sensors.prototype, "await_location_ondemand", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "location_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Sensors.prototype, "battery_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "battery_level_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Sensors.prototype, "battery_plugged", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "battery_plugged_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        default: { patient_notified: false, main_companion_notified: false }
    }),
    __metadata("design:type", Object)
], Sensors.prototype, "low_battery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sensors.prototype, "app_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "app_version_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Sensors.prototype, "off_body", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "off_body_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Sensors.prototype, "sent_off_body_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Sensors.prototype, "steps", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "steps_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
    __metadata("design:type", Array)
], Sensors.prototype, "heart_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "heart_rate_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Sensors.prototype, "wifi_connected", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Sensors.prototype, "wifi_connected_updated_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Sensors.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => smartwatch_entity_1.Smartwatch, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "smartwatch_id" }),
    __metadata("design:type", smartwatch_entity_1.Smartwatch)
], Sensors.prototype, "smartwatch", void 0);
exports.Sensors = Sensors = __decorate([
    (0, typeorm_1.Entity)()
], Sensors);
//# sourceMappingURL=sensors.entity.js.map