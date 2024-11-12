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
exports.Measurement = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Measurement = class Measurement {
};
exports.Measurement = Measurement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Measurement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.measurement, {
        cascade: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Measurement.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Measurement.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Measurement.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Measurement.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
    }),
    __metadata("design:type", Number)
], Measurement.prototype, "battery_level", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Measurement.prototype, "battery_plugged", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: false,
    }),
    __metadata("design:type", Boolean)
], Measurement.prototype, "low_power_mode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Measurement.prototype, "app_version", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Measurement.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], Measurement.prototype, "created_on_device", void 0);
exports.Measurement = Measurement = __decorate([
    (0, typeorm_1.Entity)()
], Measurement);
//# sourceMappingURL=measurement.entity.js.map