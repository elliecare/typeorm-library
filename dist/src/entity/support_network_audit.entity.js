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
exports.Support_network_audit = void 0;
const typeorm_1 = require("typeorm");
const support_network_entity_1 = require("./support_network.entity");
const user_entity_1 = require("./user.entity");
let Support_network_audit = class Support_network_audit {
};
exports.Support_network_audit = Support_network_audit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Support_network_audit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "operato_id" }),
    __metadata("design:type", user_entity_1.User)
], Support_network_audit.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => support_network_entity_1.SupportNetwork),
    (0, typeorm_1.JoinColumn)({ name: "support_network_id" }),
    __metadata("design:type", support_network_entity_1.SupportNetwork)
], Support_network_audit.prototype, "support_network", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb",
        nullable: true,
    }),
    __metadata("design:type", support_network_entity_1.SupportNetwork)
], Support_network_audit.prototype, "support_network_snapshot", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Support_network_audit.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
        type: "boolean",
    }),
    __metadata("design:type", Boolean)
], Support_network_audit.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Support_network_audit.prototype, "created_at", void 0);
exports.Support_network_audit = Support_network_audit = __decorate([
    (0, typeorm_1.Entity)()
], Support_network_audit);
//# sourceMappingURL=support_network_audit.entity.js.map