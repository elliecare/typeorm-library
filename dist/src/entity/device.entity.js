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
exports.Device = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const company_client_entity_1 = require("./company_client.entity");
let Device = class Device {
};
exports.Device = Device;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Device.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.DeviceType,
    }),
    __metadata("design:type", String)
], Device.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Device.prototype, "mac_address", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Device.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Device.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        nullable: true,
    }),
    __metadata("design:type", String)
], Device.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.DeviceStatus,
        default: "in_stock",
    }),
    __metadata("design:type", String)
], Device.prototype, "device_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-json",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Device.prototype, "configuration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Device.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Device.prototype, "first_login", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", Object)
], Device.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Device.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Device.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Device.prototype, "deleted_at", void 0);
exports.Device = Device = __decorate([
    (0, typeorm_1.Entity)()
], Device);
//# sourceMappingURL=device.entity.js.map