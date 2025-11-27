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
exports.CompanyClient = void 0;
const types_1 = require("../types");
const typeorm_1 = require("typeorm");
const whatsapp_module_entity_1 = require("./modules/whatsapp.module.entity");
const connect_module_entity_1 = require("./modules/connect.module.entity");
const mailing_module_entity_1 = require("./modules/mailing.module.entity");
const commercial_module_entity_1 = require("./modules/commercial.module.entity");
const smartwatch_module_entity_1 = require("./modules/smartwatch.module.entity");
const canary_module_entity_1 = require("./modules/canary.module.entity");
const integration_module_entity_1 = require("./modules/integration.module.entity");
const config_entity_1 = require("./config.entity");
const event_module_entity_1 = require("./modules/event.module.entity");
let CompanyClient = class CompanyClient {
};
exports.CompanyClient = CompanyClient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CompanyClient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], CompanyClient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], CompanyClient.prototype, "prefix", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], CompanyClient.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: types_1.Language.EN }),
    __metadata("design:type", String)
], CompanyClient.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => connect_module_entity_1.ConnectModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", connect_module_entity_1.ConnectModule)
], CompanyClient.prototype, "connectModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => integration_module_entity_1.IntegrationModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", integration_module_entity_1.IntegrationModule)
], CompanyClient.prototype, "integrationModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => whatsapp_module_entity_1.WhatsappModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", whatsapp_module_entity_1.WhatsappModule)
], CompanyClient.prototype, "whatsappModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => mailing_module_entity_1.MailingModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", mailing_module_entity_1.MailingModule)
], CompanyClient.prototype, "mailingModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => commercial_module_entity_1.CommercialModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", commercial_module_entity_1.CommercialModule)
], CompanyClient.prototype, "commercialModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => smartwatch_module_entity_1.SmartwatchModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", smartwatch_module_entity_1.SmartwatchModule)
], CompanyClient.prototype, "smartwatchModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => canary_module_entity_1.CanaryModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", canary_module_entity_1.CanaryModule)
], CompanyClient.prototype, "canaryModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => event_module_entity_1.EventModule, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", event_module_entity_1.EventModule)
], CompanyClient.prototype, "eventModule", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => config_entity_1.Config, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "config_id" }),
    __metadata("design:type", config_entity_1.Config)
], CompanyClient.prototype, "config", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyClient.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyClient.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CompanyClient.prototype, "deleted_at", void 0);
exports.CompanyClient = CompanyClient = __decorate([
    (0, typeorm_1.Entity)()
], CompanyClient);
//# sourceMappingURL=company_client.entity.js.map