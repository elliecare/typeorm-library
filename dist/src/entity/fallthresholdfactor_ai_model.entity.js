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
exports.FallThresholdFactorAIModelEntity = void 0;
const typeorm_1 = require("typeorm");
let FallThresholdFactorAIModelEntity = class FallThresholdFactorAIModelEntity {
};
exports.FallThresholdFactorAIModelEntity = FallThresholdFactorAIModelEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "model_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "sw_app_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.985 }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "level_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.9962 }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "level_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.9987 }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "level_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.9998 }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "level_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.9999 }),
    __metadata("design:type", String)
], FallThresholdFactorAIModelEntity.prototype, "level_5", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FallThresholdFactorAIModelEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FallThresholdFactorAIModelEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], FallThresholdFactorAIModelEntity.prototype, "deleted_at", void 0);
exports.FallThresholdFactorAIModelEntity = FallThresholdFactorAIModelEntity = __decorate([
    (0, typeorm_1.Entity)()
], FallThresholdFactorAIModelEntity);
//# sourceMappingURL=fallthresholdfactor_ai_model.entity.js.map