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
exports.Alert = void 0;
const typeorm_1 = require("typeorm");
const types_1 = require("../types");
const alert_logs_entity_1 = require("./alert_logs.entity");
const message_entity_1 = require("./message.entity");
const user_entity_1 = require("./user.entity");
const company_client_entity_1 = require("./company_client.entity");
const event_entity_1 = require("./event.entity");
let Alert = class Alert {
    getformattedAlertByCC() {
        const { id, created_at, type, event: { measurements: { location }, smartwatch }, user } = this;
        console.log('this', this);
        return {
            id,
            created_at,
            type,
            lat: location.lat,
            long: location.long,
            smartwatch: {
                id: smartwatch.id,
                phone_number_1: smartwatch.phone_number_1,
                phone_number_2: user.phone_number,
            },
            cc_user_id: user.cc_user_id,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                phone_number_landline: user.phone_number_landline,
            },
        };
    }
    getPatientName() {
        return !this.event.user.first_name && !this.event.user.last_name ? this.event.user.cc_user_id : this.event.user.first_name + ' ' + this.event.user.last_name;
    }
};
exports.Alert = Alert;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Alert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], Alert.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id", nullable: true }),
    __metadata("design:type", String)
], Alert.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Alert.prototype, "case_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => event_entity_1.EventEntity),
    (0, typeorm_1.JoinColumn)({ name: "event_id" }),
    __metadata("design:type", event_entity_1.EventEntity)
], Alert.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "event_id", nullable: true }),
    __metadata("design:type", String)
], Alert.prototype, "event_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.PlanType,
        nullable: true,
    }),
    __metadata("design:type", String)
], Alert.prototype, "plan_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.EventType,
    }),
    __metadata("design:type", String)
], Alert.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: true,
    }),
    __metadata("design:type", Number)
], Alert.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: true,
    }),
    __metadata("design:type", Number)
], Alert.prototype, "long", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: true,
    }),
    __metadata("design:type", Number)
], Alert.prototype, "fallthresholdfactor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Alert.prototype, "off_body", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-json",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Alert.prototype, "event_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: types_1.AlertStatus,
        default: types_1.AlertStatus.PREPENDING,
    }),
    __metadata("design:type", String)
], Alert.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Alert.prototype, "update_count", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alert_logs_entity_1.AlertLogs, (alertLogs) => alertLogs.alert, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Alert.prototype, "alert_log", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.alert, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Alert.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_client_entity_1.CompanyClient),
    (0, typeorm_1.JoinColumn)({ name: "company_client_id" }),
    __metadata("design:type", company_client_entity_1.CompanyClient)
], Alert.prototype, "company_client", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "company_client_id", nullable: true }),
    __metadata("design:type", String)
], Alert.prototype, "company_client_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Alert.prototype, "true_event", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Alert.prototype, "connect_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Alert.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Alert.prototype, "updated_at", void 0);
exports.Alert = Alert = __decorate([
    (0, typeorm_1.Entity)()
], Alert);
//# sourceMappingURL=alert.entity.js.map