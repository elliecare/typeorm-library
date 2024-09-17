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
exports.AlertLogs = void 0;
const typeorm_1 = require("typeorm");
const alert_entity_1 = require("./alert.entity");
let AlertLogs = class AlertLogs {
};
exports.AlertLogs = AlertLogs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AlertLogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alert_entity_1.Alert, (alert) => alert.alert_log),
    __metadata("design:type", alert_entity_1.Alert)
], AlertLogs.prototype, "alert", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertLogs.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AlertLogs.prototype, "detail", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AlertLogs.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], AlertLogs.prototype, "delete_at", void 0);
exports.AlertLogs = AlertLogs = __decorate([
    (0, typeorm_1.Entity)()
], AlertLogs);
//# sourceMappingURL=alert_logs.entity.js.map