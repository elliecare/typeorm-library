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
exports.WhatsappModule_audit = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
const whatsapp_module_entity_1 = require("./whatsapp.module.entity");
let WhatsappModule_audit = class WhatsappModule_audit {
};
exports.WhatsappModule_audit = WhatsappModule_audit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], WhatsappModule_audit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "operator_id" }),
    __metadata("design:type", user_entity_1.User)
], WhatsappModule_audit.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => whatsapp_module_entity_1.WhatsappModule),
    (0, typeorm_1.JoinColumn)({ name: "whatsapp_module_id" }),
    __metadata("design:type", whatsapp_module_entity_1.WhatsappModule)
], WhatsappModule_audit.prototype, "WhatsappModule", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", whatsapp_module_entity_1.WhatsappModule)
], WhatsappModule_audit.prototype, "WhatsappModule_snapshot", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WhatsappModule_audit.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean",
    }),
    __metadata("design:type", Boolean)
], WhatsappModule_audit.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WhatsappModule_audit.prototype, "created_at", void 0);
exports.WhatsappModule_audit = WhatsappModule_audit = __decorate([
    (0, typeorm_1.Entity)()
], WhatsappModule_audit);
//# sourceMappingURL=whatsapp.module_audit.entity.js.map