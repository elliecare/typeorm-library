"use strict";
//User ElliGo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = exports.Language = exports.DiscountCodeType = exports.SubscriptionType = exports.FrequencyType = exports.EventsNotificationType = exports.NotificationType = exports.Vendors = exports.EllieCenterUserShift = exports.Payment = exports.BloodType = exports.ActivityStatus = exports.OperationalRole = exports.User = exports.GenderType = exports.MeasurementType = exports.MeasurementGetBy = exports.AlertStatus = exports.EventOriginType = exports.EventType = exports.TrackingStatus = exports.LineProviders = exports.SmartwatchColors = exports.SmartwatchSizes = exports.SmartwatchModels = exports.SmartwatchMarks = exports.SmartwatchStatus = exports.DeviceStatus = exports.DeviceType = exports.SupportNetworkStatus = exports.PlanType = exports.SupportNetworkUserType = exports.UserRole = void 0;
exports.textNormalizer = textNormalizer;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["PATIENT"] = "patient";
    UserRole["USER"] = "user";
})(UserRole || (exports.UserRole = UserRole = {}));
// SupportNetwork
var SupportNetworkUserType;
(function (SupportNetworkUserType) {
    SupportNetworkUserType["PATIENT"] = "patient";
    SupportNetworkUserType["MAIN_COMPANION"] = "main_companion";
    SupportNetworkUserType["COMPANION"] = "companion";
})(SupportNetworkUserType || (exports.SupportNetworkUserType = SupportNetworkUserType = {}));
var PlanType;
(function (PlanType) {
    PlanType["FREE"] = "free";
    PlanType["BASIC"] = "basic";
    PlanType["GOLD"] = "gold";
    PlanType["GOLD_LOAN"] = "gold_loan";
    PlanType["COMPANY_CLIENT"] = "company_client";
})(PlanType || (exports.PlanType = PlanType = {}));
var SupportNetworkStatus;
(function (SupportNetworkStatus) {
    SupportNetworkStatus["ACTIVE"] = "active";
    SupportNetworkStatus["PAUSE"] = "pause";
    SupportNetworkStatus["EXPIRED"] = "expired";
    SupportNetworkStatus["DEACTIVE"] = "deactive";
    SupportNetworkStatus["DELETED"] = "deleted";
})(SupportNetworkStatus || (exports.SupportNetworkStatus = SupportNetworkStatus = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["WATCH"] = "watch";
    DeviceType["BEACON"] = "beacon";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["IN_STOCK"] = "in_stock";
    DeviceStatus["TESTED"] = "tested";
    DeviceStatus["DELIVERED"] = "delivered";
    DeviceStatus["ACTIVE"] = "active";
    DeviceStatus["NTH"] = "nth";
})(DeviceStatus || (exports.DeviceStatus = DeviceStatus = {}));
var SmartwatchStatus;
(function (SmartwatchStatus) {
    SmartwatchStatus["VIRGIN"] = "virgin";
    SmartwatchStatus["RECOVERED"] = "recovered";
    SmartwatchStatus["STOCKED"] = "stocked";
    SmartwatchStatus["INPROGRESS"] = "in_progress";
    SmartwatchStatus["READYTOSEND"] = "ready_to_send";
    SmartwatchStatus["SEND"] = "send";
    SmartwatchStatus["AWAITDELIVERYCHECK"] = "await_delivery_check";
    SmartwatchStatus["DELIVERED"] = "delivered";
    SmartwatchStatus["PAIRED"] = "paired";
    SmartwatchStatus["UNPAIRED"] = "unpaired";
    SmartwatchStatus["LOGGED"] = "logged";
    SmartwatchStatus["DISABLED"] = "disabled";
    SmartwatchStatus["REPAIR"] = "repair";
})(SmartwatchStatus || (exports.SmartwatchStatus = SmartwatchStatus = {}));
var SmartwatchMarks;
(function (SmartwatchMarks) {
    SmartwatchMarks["SAMSUNG"] = "Samsung";
})(SmartwatchMarks || (exports.SmartwatchMarks = SmartwatchMarks = {}));
var SmartwatchModels;
(function (SmartwatchModels) {
    SmartwatchModels["WEAR4"] = "Wear 4";
    SmartwatchModels["WEAR5"] = "Wear 5";
    SmartwatchModels["WEAR6"] = "Wear 6";
    SmartwatchModels["WEAR7"] = "Wear 7";
})(SmartwatchModels || (exports.SmartwatchModels = SmartwatchModels = {}));
var SmartwatchSizes;
(function (SmartwatchSizes) {
    SmartwatchSizes["INCH40"] = "40";
    SmartwatchSizes["INCH44"] = "44";
})(SmartwatchSizes || (exports.SmartwatchSizes = SmartwatchSizes = {}));
var SmartwatchColors;
(function (SmartwatchColors) {
    SmartwatchColors["BLACK"] = "Black";
    SmartwatchColors["SILVER"] = "Silver";
})(SmartwatchColors || (exports.SmartwatchColors = SmartwatchColors = {}));
var LineProviders;
(function (LineProviders) {
    LineProviders["MOVISTAR"] = "Movistar";
    LineProviders["PERSONAL"] = "Personal";
    LineProviders["CLARO"] = "Claro";
    LineProviders["AT_T"] = "AT&T";
    LineProviders["TELCEL"] = "Telcel";
    LineProviders["ANTEL"] = "Antel";
    LineProviders["OTHER"] = "Other";
})(LineProviders || (exports.LineProviders = LineProviders = {}));
var TrackingStatus;
(function (TrackingStatus) {
    TrackingStatus["INPROGRESS"] = "in_progress";
    TrackingStatus["INTRANSIT"] = "in_transit";
    TrackingStatus["DELIVERED"] = "delivered";
    TrackingStatus["COMPLAINT"] = "complaint";
})(TrackingStatus || (exports.TrackingStatus = TrackingStatus = {}));
var EventType;
(function (EventType) {
    EventType["FALL"] = "fall";
    EventType["PROBABLE_FALL"] = "probable_fall";
    EventType["LONG_BUTTON_PRESS"] = "long_button_press";
    EventType["NOTIFICATION_BUTTON_PRESS"] = "notification_button_press";
    EventType["BUTTON_PRESS"] = "button_press";
    EventType["REMOTE_BUTTON_PRESS"] = "remote_button_press";
    EventType["OFF_BODY"] = "off_body";
    EventType["STEPS"] = "steps";
    EventType["LOW_BATTERY"] = "low_battery";
    EventType["WIFI_CONNECTED"] = "wifi_connected";
    EventType["BATTERY_CHARGING"] = "battery_charging";
    EventType["LOCATION"] = "location";
    EventType["HR_ABOVE_BASELINE"] = "hr_above_baseline";
    EventType["HR_BELOW_BASELINE"] = "hr_below_baseline";
})(EventType || (exports.EventType = EventType = {}));
var EventOriginType;
(function (EventOriginType) {
    EventOriginType["APP"] = "app";
    EventOriginType["SW"] = "smartwatch";
})(EventOriginType || (exports.EventOriginType = EventOriginType = {}));
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["PREPENDING"] = "pre_pending";
    AlertStatus["PENDING"] = "pending";
    AlertStatus["PUSH_CICLE_START"] = "push_cicle_start";
    AlertStatus["ACCEPTED_BY_USER"] = "accepted_by_user";
    AlertStatus["ACCEPTED_BY_EC"] = "accepted_by_ec";
    AlertStatus["IN_PROGRESS_EC"] = "in_progress_ec";
    AlertStatus["DISMISSED"] = "dismissed";
    AlertStatus["NO_ANSWER_OF_USERS"] = "no_answer_of_users";
    AlertStatus["ASSISTANCE_NOT_ACCEPTED"] = "assistance_not_accepted";
    AlertStatus["CLOSED_BY_USER"] = "closed_by_user";
    AlertStatus["CLOSED"] = "closed";
    AlertStatus["CLOSED_BY_PATIENT"] = "close_by_patient";
    AlertStatus["SEND_TO_CC"] = "send_to_cc";
    AlertStatus["SENT_TO_CC_REDIAL"] = "sent_to_redial";
})(AlertStatus || (exports.AlertStatus = AlertStatus = {}));
var MeasurementGetBy;
(function (MeasurementGetBy) {
    MeasurementGetBy["DEVICE"] = "device";
    MeasurementGetBy["USER"] = "user";
})(MeasurementGetBy || (exports.MeasurementGetBy = MeasurementGetBy = {}));
var MeasurementType;
(function (MeasurementType) {
    MeasurementType["HEART_RATE"] = "heart_rate";
    MeasurementType["PODOMETER"] = "podometer";
})(MeasurementType || (exports.MeasurementType = MeasurementType = {}));
var GenderType;
(function (GenderType) {
    GenderType["MALE"] = "male";
    GenderType["FEMALE"] = "female";
})(GenderType || (exports.GenderType = GenderType = {}));
class User {
    convertToString(phoneNumber) {
        if (!phoneNumber) {
            return null;
        }
        const { country_code, number, area_code, provider, country_name } = phoneNumber;
        return {
            country_code: country_code,
            number: typeof number === "number"
                ? number.toString()
                : typeof number === "string"
                    ? number.trim()
                    : number,
            area_code: typeof area_code === "number"
                ? area_code.toString()
                : typeof area_code === "string"
                    ? area_code.trim()
                    : area_code,
            provider: provider,
            country_name: country_name,
        };
    }
    getUnlokedData(data) {
        var _a, _b;
        const forClean = [
            "email",
            "first_name",
            "last_name",
            "address",
            "city",
            "province",
            "country",
            "address_2",
            "city_2",
            "province_2",
            "country_2",
            "apartment_info",
        ];
        for (const key in data) {
            if (data[key]) {
                if (forClean.includes(key)) {
                    data[key] = textNormalizer(data[key].trimStart());
                }
            }
        }
        return {
            email: data.email ? data.email.toLowerCase() : undefined,
            first_name: data.first_name,
            last_name: data.last_name,
            address: data.address,
            city: data.city,
            province: data.province,
            country: data.country,
            address_2: data.address_2,
            city_2: data.city_2,
            province_2: data.province_2,
            country_2: data.country_2,
            health_system_affiliate_number: data.health_system_affiliate_number,
            health_system_plan: data.health_system_plan,
            phone_number: (_a = this.convertToString(data.phone_number)) !== null && _a !== void 0 ? _a : undefined,
            phone_number_landline: (_b = this.convertToString(data.phone_number_landline)) !== null && _b !== void 0 ? _b : undefined,
            whatsapp: data.whatsapp,
            birth_date: data.birth_date,
            document_type: data.document_type,
            document_number: data.document_number,
            apartment_info: data.apartment_info,
            health_system_data: data.health_system_data,
        };
    }
}
exports.User = User;
function textNormalizer(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}
// Ellie Center
var OperationalRole;
(function (OperationalRole) {
    OperationalRole["SUPERADMIN"] = "superadmin";
    OperationalRole["ADMIN"] = "admin";
    OperationalRole["OPERATOR"] = "operator";
    OperationalRole["COMPANY_CLIENT"] = "company_client";
    OperationalRole["USER"] = "user";
    OperationalRole["SUPERVISOR"] = "supervisor";
    OperationalRole["SYSTEM"] = "system";
})(OperationalRole || (exports.OperationalRole = OperationalRole = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["AVAILABLE"] = "available";
    ActivityStatus["BUSY"] = "busy";
    ActivityStatus["OFF_LINE"] = "off_line";
})(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
var BloodType;
(function (BloodType) {
    BloodType["AB_PLUS"] = "ab+";
    BloodType["AB_MINUS"] = "ab-";
    BloodType["A_PLUS"] = "a+";
    BloodType["A_MINUS"] = "a-";
    BloodType["B_PLUS"] = "b+";
    BloodType["B_MINUS"] = "b-";
    BloodType["O_PLUS"] = "o+";
    BloodType["O_MINUS"] = "o-";
})(BloodType || (exports.BloodType = BloodType = {}));
//checkout
var Payment;
(function (Payment) {
    Payment["PENDING"] = "pending";
    Payment["AUTHORIZED"] = "authorized";
    Payment["PAUSED"] = "paused";
    Payment["CANCELLED"] = "cancelled";
})(Payment || (exports.Payment = Payment = {}));
var EllieCenterUserShift;
(function (EllieCenterUserShift) {
    EllieCenterUserShift["MORNING"] = "morning";
    EllieCenterUserShift["EVENING"] = "evening";
    EllieCenterUserShift["NIGHT"] = "night";
})(EllieCenterUserShift || (exports.EllieCenterUserShift = EllieCenterUserShift = {}));
var Vendors;
(function (Vendors) {
    Vendors["ELLIE_CARE"] = "Ellie Care";
    Vendors["MATER_DEI"] = "Mater Dei";
    Vendors["ORTOPEDIA_ALEMANA"] = "Ortopedia Alemana";
})(Vendors || (exports.Vendors = Vendors = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "informative";
    NotificationType["PENDING"] = "pending";
    NotificationType["URGENCY"] = "urgency";
    NotificationType["SUCCESS"] = "success";
    NotificationType["ALERT"] = "alert";
    NotificationType["INFO_SW"] = "informative_smartwatch";
    NotificationType["PENDING_SW"] = "pending_smartwatch";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var EventsNotificationType;
(function (EventsNotificationType) {
    EventsNotificationType["NOT_EVENT"] = "-";
    EventsNotificationType["NEW_ROLE"] = "new_role";
    EventsNotificationType["SOS_COMPAIN"] = "sos_compain";
    EventsNotificationType["SW_CONECTED_BY_AC"] = "as_conected_by_ac";
    EventsNotificationType["SW_DISCONECTED_BY_AC"] = "as_disconected_by_ac";
    EventsNotificationType["CREATED_DELEGATE_PENDING"] = "created_delegate_pending";
    EventsNotificationType["NEW_DELEGATE_PENDING"] = "new_delegate_pending";
    EventsNotificationType["CREATED_DELEGATE"] = "created_delegate";
    EventsNotificationType["ACCEPTED_DELEGATE"] = "accepted_delegate";
    EventsNotificationType["REJECTED_DELEGATE"] = "rejected_delegate";
    EventsNotificationType["CANCELLED_DELEGATE"] = "cancelled_delegate";
    EventsNotificationType["ADMIN_CANCELLED_DELEGATE"] = "admin_cancelled_delegate";
    EventsNotificationType["INVITE_MORE_AC"] = "invite_more_ac";
    EventsNotificationType["USER_UNJOIN_SN"] = "user_unjoin_support_network";
    EventsNotificationType["OTHER_UNJOIN_SN"] = "other_unjoin_support_network";
    EventsNotificationType["ADMIN_UNJOIN_SN"] = "admin_unjoin_support_network";
    EventsNotificationType["CREATED_SN"] = "created_support_network";
    EventsNotificationType["USER_JOIN_SN"] = "user_join_support_network";
    EventsNotificationType["OTHER_JOIN_SN"] = "other_join_support_network";
    EventsNotificationType["AM_CREATE_ALERT"] = "am_create_alert";
    EventsNotificationType["AC_ACCEPTED_ALERT"] = "ac_accepted_alert";
    EventsNotificationType["AC_FINISHED_ALERT"] = "ac_finished_alert";
    EventsNotificationType["AM_FINISHED_ALERT"] = "am_finished_alert";
    EventsNotificationType["CANCELLED_JOIN_SN"] = "cancelled_join_support_network";
    EventsNotificationType["ACCEPTED_BY_EC"] = "accepted_by_ec";
    EventsNotificationType["CLOSED_BY_EC"] = "closed_by_ec";
    EventsNotificationType["AM_CREATE_ALERT_SW"] = "am_create_alert_sw";
    // faltan los enums de los tipos de alertas que debe crear el Ellie Center
})(EventsNotificationType || (exports.EventsNotificationType = EventsNotificationType = {}));
var FrequencyType;
(function (FrequencyType) {
    FrequencyType["MONTHS"] = "months";
    FrequencyType["DAYS"] = "days";
    FrequencyType["YEARS"] = "years";
})(FrequencyType || (exports.FrequencyType = FrequencyType = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["GOLD"] = "gold";
    SubscriptionType["GOLDLOAN"] = "gold_loan";
})(SubscriptionType || (exports.SubscriptionType = SubscriptionType = {}));
var DiscountCodeType;
(function (DiscountCodeType) {
    DiscountCodeType["PERCENTAGE"] = "percentage";
    DiscountCodeType["AMOUNT"] = "amount";
    DiscountCodeType["FREETRIAL"] = "free_trial";
})(DiscountCodeType || (exports.DiscountCodeType = DiscountCodeType = {}));
var Language;
(function (Language) {
    Language["ES"] = "Spanish";
    Language["EN"] = "English";
})(Language || (exports.Language = Language = {}));
var Modules;
(function (Modules) {
    Modules["CONNECT"] = "Connect";
    Modules["WHATSAPP"] = "Whatsapp";
})(Modules || (exports.Modules = Modules = {}));
//# sourceMappingURL=types.js.map