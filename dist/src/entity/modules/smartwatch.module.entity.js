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
exports.SmartwatchModule = void 0;
const typeorm_1 = require("typeorm");
const company_client_entity_1 = require("../company_client.entity");
const config_entity_1 = require("../config.entity");
let SmartwatchModule = class SmartwatchModule {
};
exports.SmartwatchModule = SmartwatchModule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SmartwatchModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, client => client.id),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], SmartwatchModule.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], SmartwatchModule.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], SmartwatchModule.prototype, "assets_ownership", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], SmartwatchModule.prototype, "send_message_long_time_off_body", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        default: 3,
    }),
    __metadata("design:type", Number)
], SmartwatchModule.prototype, "long_time_off_body", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => config_entity_1.Config, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "config_id" }),
    __metadata("design:type", config_entity_1.Config)
], SmartwatchModule.prototype, "config", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SmartwatchModule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SmartwatchModule.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], SmartwatchModule.prototype, "deleted_at", void 0);
exports.SmartwatchModule = SmartwatchModule = __decorate([
    (0, typeorm_1.Entity)()
], SmartwatchModule);
//# sourceMappingURL=smartwatch.module.entity.js.map