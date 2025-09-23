"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WifiConnected = exports.PhoneLine = exports.PasswordResetToken = exports.Steps = exports.CompanyClient = exports.Users_canary_audit = exports.UserCanary = exports.Users_smartwatches_audit = exports.UserSmartwatch = exports.UserOperationalRole = exports.User_audit = exports.User = exports.Tracking_audit = exports.Tracking = exports.Support_network_audit = exports.SupportNetwork = exports.Smartwatch_audit = exports.Smartwatch = exports.Sensors = exports.Role_support_network_audit = exports.Role_SupportNetwork = exports.Purchase = exports.PlansDescription = exports.OperationalRole = exports.OffBody = exports.Notification = exports.Message = exports.Measurement = exports.Location = exports.LineProvider = exports.InviteCode = exports.HeartRate = exports.Health_system_audit = exports.HealthSystem = exports.Gateway_audit = exports.Gateway = exports.EventEntity = exports.DiscountCode = exports.Config_audit = exports.Config = exports.Battery = exports.AlertLogs = exports.AlertConfiguration = exports.Alert_audit = exports.Alert = exports.AccessCode = exports.Plans_audit = exports.PatientAgentContact = exports.Plans = exports.Entities = void 0;
exports.FallThresholdFactorAIModelEntity = exports.CanaryData = exports.CanaryModule_audit = exports.CanaryModule = exports.Assessment = exports.SmartwatchModule = exports.MailingModule_audit = exports.MailingModule = exports.CommercialModule_audit = exports.CommercialModule = exports.WhatsappModule_audit = exports.WhatsappModule = exports.IntegrationModule_audit = exports.IntegrationModule = exports.ConnectModule_audit = exports.ConnectModule = exports.Company_client_audit = exports.StaticToken = exports.Sensors_audit = void 0;
const plans_entity_1 = require("./src/entity/plans.entity");
Object.defineProperty(exports, "Plans", { enumerable: true, get: function () { return plans_entity_1.Plans; } });
const steps_entity_1 = require("./src/entity/steps.entity");
Object.defineProperty(exports, "Steps", { enumerable: true, get: function () { return steps_entity_1.Steps; } });
const patient_agent_contact_entity_1 = require("./src/entity/patient_agent_contact.entity");
Object.defineProperty(exports, "PatientAgentContact", { enumerable: true, get: function () { return patient_agent_contact_entity_1.PatientAgentContact; } });
const plans_audit_entity_1 = require("./src/entity/plans_audit.entity");
Object.defineProperty(exports, "Plans_audit", { enumerable: true, get: function () { return plans_audit_entity_1.Plans_audit; } });
const access_code_entity_1 = require("./src/entity/access_code.entity");
Object.defineProperty(exports, "AccessCode", { enumerable: true, get: function () { return access_code_entity_1.AccessCode; } });
const alert_entity_1 = require("./src/entity/alert.entity");
Object.defineProperty(exports, "Alert", { enumerable: true, get: function () { return alert_entity_1.Alert; } });
const alert_configuration_entity_1 = require("./src/entity/alert_configuration.entity");
Object.defineProperty(exports, "AlertConfiguration", { enumerable: true, get: function () { return alert_configuration_entity_1.AlertConfiguration; } });
const alert_logs_entity_1 = require("./src/entity/alert_logs.entity");
Object.defineProperty(exports, "AlertLogs", { enumerable: true, get: function () { return alert_logs_entity_1.AlertLogs; } });
const battery_entity_1 = require("./src/entity/battery.entity");
Object.defineProperty(exports, "Battery", { enumerable: true, get: function () { return battery_entity_1.Battery; } });
const config_entity_1 = require("./src/entity/config.entity");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return config_entity_1.Config; } });
const config_audit_entity_1 = require("./src/entity/config_audit.entity");
Object.defineProperty(exports, "Config_audit", { enumerable: true, get: function () { return config_audit_entity_1.Config_audit; } });
const discount_code_entity_1 = require("./src/entity/discount_code.entity");
Object.defineProperty(exports, "DiscountCode", { enumerable: true, get: function () { return discount_code_entity_1.DiscountCode; } });
const event_entity_1 = require("./src/entity/event.entity");
Object.defineProperty(exports, "EventEntity", { enumerable: true, get: function () { return event_entity_1.EventEntity; } });
const gateway_entity_1 = require("./src/entity/gateway.entity");
Object.defineProperty(exports, "Gateway", { enumerable: true, get: function () { return gateway_entity_1.Gateway; } });
const gateway_audit_entity_1 = require("./src/entity/gateway_audit.entity");
Object.defineProperty(exports, "Gateway_audit", { enumerable: true, get: function () { return gateway_audit_entity_1.Gateway_audit; } });
const health_system_entity_1 = require("./src/entity/health_system.entity");
Object.defineProperty(exports, "HealthSystem", { enumerable: true, get: function () { return health_system_entity_1.HealthSystem; } });
const health_system_audit_entity_1 = require("./src/entity/health_system_audit.entity");
Object.defineProperty(exports, "Health_system_audit", { enumerable: true, get: function () { return health_system_audit_entity_1.Health_system_audit; } });
const heart_rate_entity_1 = require("./src/entity/heart_rate.entity");
Object.defineProperty(exports, "HeartRate", { enumerable: true, get: function () { return heart_rate_entity_1.HeartRate; } });
const invite_code_entity_1 = require("./src/entity/invite_code.entity");
Object.defineProperty(exports, "InviteCode", { enumerable: true, get: function () { return invite_code_entity_1.InviteCode; } });
const line_provider_entity_1 = require("./src/entity/line_provider.entity");
Object.defineProperty(exports, "LineProvider", { enumerable: true, get: function () { return line_provider_entity_1.LineProvider; } });
const location_entity_1 = require("./src/entity/location.entity");
Object.defineProperty(exports, "Location", { enumerable: true, get: function () { return location_entity_1.Location; } });
const measurement_entity_1 = require("./src/entity/measurement.entity");
Object.defineProperty(exports, "Measurement", { enumerable: true, get: function () { return measurement_entity_1.Measurement; } });
const message_entity_1 = require("./src/entity/message.entity");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return message_entity_1.Message; } });
const notification_entity_1 = require("./src/entity/notification.entity");
Object.defineProperty(exports, "Notification", { enumerable: true, get: function () { return notification_entity_1.Notification; } });
const off_body_entity_1 = require("./src/entity/off_body.entity");
Object.defineProperty(exports, "OffBody", { enumerable: true, get: function () { return off_body_entity_1.OffBody; } });
const operational_role_entity_1 = require("./src/entity/operational_role.entity");
Object.defineProperty(exports, "OperationalRole", { enumerable: true, get: function () { return operational_role_entity_1.OperationalRole; } });
const plans_description_entity_1 = require("./src/entity/plans_description.entity");
Object.defineProperty(exports, "PlansDescription", { enumerable: true, get: function () { return plans_description_entity_1.PlansDescription; } });
const purchase_entity_1 = require("./src/entity/purchase.entity");
Object.defineProperty(exports, "Purchase", { enumerable: true, get: function () { return purchase_entity_1.Purchase; } });
const role_support_network_entity_1 = require("./src/entity/role_support_network.entity");
Object.defineProperty(exports, "Role_SupportNetwork", { enumerable: true, get: function () { return role_support_network_entity_1.Role_SupportNetwork; } });
const role_support_network_audit_entity_1 = require("./src/entity/role_support_network_audit.entity");
Object.defineProperty(exports, "Role_support_network_audit", { enumerable: true, get: function () { return role_support_network_audit_entity_1.Role_support_network_audit; } });
const sensors_entity_1 = require("./src/entity/sensors.entity");
Object.defineProperty(exports, "Sensors", { enumerable: true, get: function () { return sensors_entity_1.Sensors; } });
const smartwatch_entity_1 = require("./src/entity/smartwatch.entity");
Object.defineProperty(exports, "Smartwatch", { enumerable: true, get: function () { return smartwatch_entity_1.Smartwatch; } });
const smartwatch_audit_entity_1 = require("./src/entity/smartwatch_audit.entity");
Object.defineProperty(exports, "Smartwatch_audit", { enumerable: true, get: function () { return smartwatch_audit_entity_1.Smartwatch_audit; } });
const support_network_entity_1 = require("./src/entity/support_network.entity");
Object.defineProperty(exports, "SupportNetwork", { enumerable: true, get: function () { return support_network_entity_1.SupportNetwork; } });
const support_network_audit_entity_1 = require("./src/entity/support_network_audit.entity");
Object.defineProperty(exports, "Support_network_audit", { enumerable: true, get: function () { return support_network_audit_entity_1.Support_network_audit; } });
const tracking_entity_1 = require("./src/entity/tracking.entity");
Object.defineProperty(exports, "Tracking", { enumerable: true, get: function () { return tracking_entity_1.Tracking; } });
const tracking_audit_entity_1 = require("./src/entity/tracking_audit.entity");
Object.defineProperty(exports, "Tracking_audit", { enumerable: true, get: function () { return tracking_audit_entity_1.Tracking_audit; } });
const user_entity_1 = require("./src/entity/user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const user_audit_entity_1 = require("./src/entity/user_audit.entity");
Object.defineProperty(exports, "User_audit", { enumerable: true, get: function () { return user_audit_entity_1.User_audit; } });
const user_operational_role_entity_1 = require("./src/entity/user_operational_role.entity");
Object.defineProperty(exports, "UserOperationalRole", { enumerable: true, get: function () { return user_operational_role_entity_1.UserOperationalRole; } });
const user_smartwatch_entity_1 = require("./src/entity/user_smartwatch.entity");
Object.defineProperty(exports, "UserSmartwatch", { enumerable: true, get: function () { return user_smartwatch_entity_1.UserSmartwatch; } });
const user_smartwatch_audit_entity_1 = require("./src/entity/user_smartwatch_audit.entity");
Object.defineProperty(exports, "Users_smartwatches_audit", { enumerable: true, get: function () { return user_smartwatch_audit_entity_1.Users_smartwatches_audit; } });
const company_client_entity_1 = require("./src/entity/company_client.entity");
Object.defineProperty(exports, "CompanyClient", { enumerable: true, get: function () { return company_client_entity_1.CompanyClient; } });
const alert_audit_entity_1 = require("./src/entity/alert_audit.entity");
Object.defineProperty(exports, "Alert_audit", { enumerable: true, get: function () { return alert_audit_entity_1.Alert_audit; } });
const password_reset_token_entity_1 = require("./src/entity/password_reset_token.entity");
Object.defineProperty(exports, "PasswordResetToken", { enumerable: true, get: function () { return password_reset_token_entity_1.PasswordResetToken; } });
const phone_line_entity_1 = require("./src/entity/phone_line.entity");
Object.defineProperty(exports, "PhoneLine", { enumerable: true, get: function () { return phone_line_entity_1.PhoneLine; } });
const wifi_connected_entity_1 = require("./src/entity/wifi_connected.entity");
Object.defineProperty(exports, "WifiConnected", { enumerable: true, get: function () { return wifi_connected_entity_1.WifiConnected; } });
const sensors_audit_entity_1 = require("./src/entity/sensors_audit.entity");
Object.defineProperty(exports, "Sensors_audit", { enumerable: true, get: function () { return sensors_audit_entity_1.Sensors_audit; } });
const connect_module_entity_1 = require("./src/entity/modules/connect.module.entity");
Object.defineProperty(exports, "ConnectModule", { enumerable: true, get: function () { return connect_module_entity_1.ConnectModule; } });
const integration_module_entity_1 = require("./src/entity/modules/integration.module.entity");
Object.defineProperty(exports, "IntegrationModule", { enumerable: true, get: function () { return integration_module_entity_1.IntegrationModule; } });
const integration_module_audit_entity_1 = require("./src/entity/modules/integration.module_audit.entity");
Object.defineProperty(exports, "IntegrationModule_audit", { enumerable: true, get: function () { return integration_module_audit_entity_1.IntegrationModule_audit; } });
const whatsapp_module_entity_1 = require("./src/entity/modules/whatsapp.module.entity");
Object.defineProperty(exports, "WhatsappModule", { enumerable: true, get: function () { return whatsapp_module_entity_1.WhatsappModule; } });
const company_client_audit_entity_1 = require("./src/entity/company_client_audit.entity");
Object.defineProperty(exports, "Company_client_audit", { enumerable: true, get: function () { return company_client_audit_entity_1.Company_client_audit; } });
const static_token_entity_1 = require("./src/entity/static_token.entity");
Object.defineProperty(exports, "StaticToken", { enumerable: true, get: function () { return static_token_entity_1.StaticToken; } });
const connect_module_audit_entity_1 = require("./src/entity/modules/connect.module_audit.entity");
Object.defineProperty(exports, "ConnectModule_audit", { enumerable: true, get: function () { return connect_module_audit_entity_1.ConnectModule_audit; } });
const whatsapp_module_audit_entity_1 = require("./src/entity/modules/whatsapp.module_audit.entity");
Object.defineProperty(exports, "WhatsappModule_audit", { enumerable: true, get: function () { return whatsapp_module_audit_entity_1.WhatsappModule_audit; } });
const commercial_module_entity_1 = require("./src/entity/modules/commercial.module.entity");
Object.defineProperty(exports, "CommercialModule", { enumerable: true, get: function () { return commercial_module_entity_1.CommercialModule; } });
const commercial_module_audit_entity_1 = require("./src/entity/modules/commercial.module_audit.entity");
Object.defineProperty(exports, "CommercialModule_audit", { enumerable: true, get: function () { return commercial_module_audit_entity_1.CommercialModule_audit; } });
const mailing_module_entity_1 = require("./src/entity/modules/mailing.module.entity");
Object.defineProperty(exports, "MailingModule", { enumerable: true, get: function () { return mailing_module_entity_1.MailingModule; } });
const mailing_module_audit_entity_1 = require("./src/entity/modules/mailing.module_audit.entity");
Object.defineProperty(exports, "MailingModule_audit", { enumerable: true, get: function () { return mailing_module_audit_entity_1.MailingModule_audit; } });
const smartwatch_module_entity_1 = require("./src/entity/modules/smartwatch.module.entity");
Object.defineProperty(exports, "SmartwatchModule", { enumerable: true, get: function () { return smartwatch_module_entity_1.SmartwatchModule; } });
const smartwatch_module_audit_entity_1 = require("./src/entity/modules/smartwatch.module_audit.entity");
const user_canary_entity_1 = require("./src/entity/user_canary.entity");
Object.defineProperty(exports, "UserCanary", { enumerable: true, get: function () { return user_canary_entity_1.UserCanary; } });
const user_canary_audit_entity_1 = require("./src/entity/user_canary_audit.entity");
Object.defineProperty(exports, "Users_canary_audit", { enumerable: true, get: function () { return user_canary_audit_entity_1.Users_canary_audit; } });
const assessment_entity_1 = require("./src/entity/assessment.entity");
Object.defineProperty(exports, "Assessment", { enumerable: true, get: function () { return assessment_entity_1.Assessment; } });
const canary_module_entity_1 = require("./src/entity/modules/canary.module.entity");
Object.defineProperty(exports, "CanaryModule", { enumerable: true, get: function () { return canary_module_entity_1.CanaryModule; } });
const canary_module_audit_entity_1 = require("./src/entity/modules/canary.module_audit.entity");
Object.defineProperty(exports, "CanaryModule_audit", { enumerable: true, get: function () { return canary_module_audit_entity_1.CanaryModule_audit; } });
const canary_data_entity_1 = require("./src/entity/canary_data.entity");
Object.defineProperty(exports, "CanaryData", { enumerable: true, get: function () { return canary_data_entity_1.CanaryData; } });
const fallthresholdfactor_ai_model_entity_1 = require("./src/entity/fallthresholdfactor_ai_model.entity");
Object.defineProperty(exports, "FallThresholdFactorAIModelEntity", { enumerable: true, get: function () { return fallthresholdfactor_ai_model_entity_1.FallThresholdFactorAIModelEntity; } });
exports.Entities = [
    fallthresholdfactor_ai_model_entity_1.FallThresholdFactorAIModelEntity,
    integration_module_entity_1.IntegrationModule,
    integration_module_audit_entity_1.IntegrationModule_audit,
    canary_data_entity_1.CanaryData,
    canary_module_entity_1.CanaryModule,
    canary_module_audit_entity_1.CanaryModule_audit,
    assessment_entity_1.Assessment,
    user_canary_entity_1.UserCanary,
    user_canary_audit_entity_1.Users_canary_audit,
    smartwatch_module_entity_1.SmartwatchModule,
    smartwatch_module_audit_entity_1.SmartwatchModule_audit,
    mailing_module_entity_1.MailingModule,
    mailing_module_audit_entity_1.MailingModule_audit,
    commercial_module_audit_entity_1.CommercialModule_audit,
    commercial_module_entity_1.CommercialModule,
    static_token_entity_1.StaticToken,
    connect_module_audit_entity_1.ConnectModule_audit,
    whatsapp_module_audit_entity_1.WhatsappModule_audit,
    company_client_audit_entity_1.Company_client_audit,
    whatsapp_module_entity_1.WhatsappModule,
    connect_module_entity_1.ConnectModule,
    sensors_audit_entity_1.Sensors_audit,
    wifi_connected_entity_1.WifiConnected,
    phone_line_entity_1.PhoneLine,
    password_reset_token_entity_1.PasswordResetToken,
    steps_entity_1.Steps,
    alert_audit_entity_1.Alert_audit,
    company_client_entity_1.CompanyClient,
    invite_code_entity_1.InviteCode,
    config_audit_entity_1.Config_audit,
    health_system_audit_entity_1.Health_system_audit,
    config_entity_1.Config,
    gateway_audit_entity_1.Gateway_audit,
    event_entity_1.EventEntity,
    discount_code_entity_1.DiscountCode,
    gateway_entity_1.Gateway,
    health_system_entity_1.HealthSystem,
    heart_rate_entity_1.HeartRate,
    line_provider_entity_1.LineProvider,
    battery_entity_1.Battery,
    location_entity_1.Location,
    measurement_entity_1.Measurement,
    message_entity_1.Message,
    notification_entity_1.Notification,
    off_body_entity_1.OffBody,
    operational_role_entity_1.OperationalRole,
    plans_description_entity_1.PlansDescription,
    purchase_entity_1.Purchase,
    role_support_network_entity_1.Role_SupportNetwork,
    user_audit_entity_1.User_audit,
    user_entity_1.User,
    smartwatch_audit_entity_1.Smartwatch_audit,
    smartwatch_entity_1.Smartwatch,
    role_support_network_audit_entity_1.Role_support_network_audit,
    sensors_entity_1.Sensors,
    tracking_entity_1.Tracking,
    support_network_audit_entity_1.Support_network_audit,
    support_network_entity_1.SupportNetwork,
    tracking_audit_entity_1.Tracking_audit,
    user_smartwatch_audit_entity_1.Users_smartwatches_audit,
    user_smartwatch_entity_1.UserSmartwatch,
    plans_entity_1.Plans,
    patient_agent_contact_entity_1.PatientAgentContact,
    user_operational_role_entity_1.UserOperationalRole,
    plans_audit_entity_1.Plans_audit,
    access_code_entity_1.AccessCode,
    alert_entity_1.Alert,
    alert_configuration_entity_1.AlertConfiguration,
    alert_logs_entity_1.AlertLogs,
];
//# sourceMappingURL=index.js.map