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
exports.CompanyClientModuleAccess = void 0;
const typeorm_1 = require("typeorm");
const company_client_entity_1 = require("../company_client.entity");
const types_1 = require("../../types");
let CompanyClientModuleAccess = class CompanyClientModuleAccess {
};
exports.CompanyClientModuleAccess = CompanyClientModuleAccess;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CompanyClientModuleAccess.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient, client => client.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], CompanyClientModuleAccess.prototype, "companyClient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyClientModuleAccess.prototype, "module", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], CompanyClientModuleAccess.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyClientModuleAccess.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CompanyClientModuleAccess.prototype, "deleted_at", void 0);
exports.CompanyClientModuleAccess = CompanyClientModuleAccess = __decorate([
    (0, typeorm_1.Entity)()
], CompanyClientModuleAccess);
//# sourceMappingURL=module_access.entity.js.map