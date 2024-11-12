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
exports.OffBody = void 0;
const typeorm_1 = require("typeorm");
const appversion_entity_1 = require("./appversion.entity");
let OffBody = class OffBody {
};
exports.OffBody = OffBody;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], OffBody.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OffBody.prototype, "device_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OffBody.prototype, "bodyConnected", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appversion_entity_1.AppVersion, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "app_version_id" }),
    __metadata("design:type", appversion_entity_1.AppVersion)
], OffBody.prototype, "app_version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OffBody.prototype, "created_on_device", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OffBody.prototype, "created_at", void 0);
exports.OffBody = OffBody = __decorate([
    (0, typeorm_1.Entity)()
], OffBody);
//# sourceMappingURL=off_body.entity.js.map