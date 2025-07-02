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
exports.Config = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const company_client_entity_1 = require("./company_client.entity");
let Config = class Config {
    getLockedData(input) {
        const _data = {
            timeout_cancel_display: input.timeout_cancel_display
        };
        for (const key in _data) {
            if (_data[key] === undefined || _data[key] === null)
                delete _data[key];
        }
        return _data;
    }
    getUnlockedData(input) {
        const _data = {
            fallthresholdfactor: input.fallthresholdfactor,
            measuring_service_update_interval: input.measuring_service_update_interval,
            heartrate_value_min: input.heartrate_value_min,
            heartrate_value_max: input.heartrate_value_max,
            heartrate_service_update_interval: input.heartrate_service_update_interval,
            heartrate_sample_size: input.heartrate_sample_size,
            heartrate_sample_delta: input.heartrate_sample_delta,
            skin_temperature_value_min: input.skin_temperature_value_min,
            skin_temperature_value_max: input.skin_temperature_value_max,
            skin_temperature_service_interval: input.skin_temperature_service_interval,
            battery_min: input.battery_min,
            steps_sending_interval: input.steps_sending_interval,
            measurements_sending_interval: input.measurements_sending_interval,
            location_service_update_interval: input.location_service_update_interval,
        };
        for (const key in _data) {
            if (_data[key] === undefined || _data[key] === null)
                delete _data[key];
        }
        return _data;
    }
};
exports.Config = Config;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Config.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], Config.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0.9 }),
    __metadata("design:type", String)
], Config.prototype, "fallthresholdfactor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 900000 }),
    __metadata("design:type", String)
], Config.prototype, "measuring_service_update_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Config.prototype, "heartrate_value_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 200 }),
    __metadata("design:type", Number)
], Config.prototype, "heartrate_value_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 900000 }),
    __metadata("design:type", Number)
], Config.prototype, "heartrate_service_update_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Config.prototype, "heartrate_sample_size", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 10 }),
    __metadata("design:type", Number)
], Config.prototype, "heartrate_sample_delta", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 25 }),
    __metadata("design:type", Number)
], Config.prototype, "skin_temperature_value_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 39 }),
    __metadata("design:type", Number)
], Config.prototype, "skin_temperature_value_max", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 900000 }),
    __metadata("design:type", Number)
], Config.prototype, "skin_temperature_service_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], Config.prototype, "battery_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 12 }),
    __metadata("design:type", Number)
], Config.prototype, "steps_sending_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 12 }),
    __metadata("design:type", Number)
], Config.prototype, "measurements_sending_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 900000 }),
    __metadata("design:type", Number)
], Config.prototype, "location_service_update_interval", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        default: 10000
    }),
    __metadata("design:type", Number)
], Config.prototype, "timeout_cancel_display", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Config.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Config.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Config.prototype, "deleted_at", void 0);
exports.Config = Config = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["user"])
], Config);
//# sourceMappingURL=config.entity.js.map