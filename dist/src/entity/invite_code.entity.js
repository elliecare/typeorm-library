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
exports.InviteCode = void 0;
const types_1 = require("src/types");
const typeorm_1 = require("typeorm");
let InviteCode = class InviteCode {
};
exports.InviteCode = InviteCode;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], InviteCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InviteCode.prototype, "invited_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InviteCode.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InviteCode.prototype, "support_network_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InviteCode.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.SupportNetworkUserType,
        nullable: true,
    }),
    __metadata("design:type", String)
], InviteCode.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], InviteCode.prototype, "name_invite", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], InviteCode.prototype, "isCheckout", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InviteCode.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InviteCode.prototype, "updated_at", void 0);
exports.InviteCode = InviteCode = __decorate([
    (0, typeorm_1.Entity)()
], InviteCode);
//# sourceMappingURL=invite_code.entity.js.map