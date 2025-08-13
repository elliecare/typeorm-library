//User ElliGo

export enum UserRole {
	ADMIN = "admin",
	PATIENT = "patient",
	USER = "user",
}

// SupportNetwork

export enum SupportNetworkUserType {
	PATIENT = "patient",
	MAIN_COMPANION = "main_companion",
	COMPANION = "companion",
}

export enum PlanType {
	FREE = "free",
	BASIC = "basic",
	GOLD = "gold",
	GOLD_LOAN = "gold_loan",
	COMPANY_CLIENT = "company_client",
}

export enum SupportNetworkStatus {
	ACTIVE = "active",
	PAUSE = "pause",
	EXPIRED = "expired",
	DEACTIVE = "deactive",
	DELETED = "deleted",
}
export interface LowBatteryNotification {
	patient_notified: boolean;
	main_companion_notified: boolean;
}

export interface LowBatteryNotification {
	patient_notified: boolean;
	main_companion_notified: boolean;
}
// Devices

export interface RawDevice {
	user_id: string;
	type: DeviceType;
	mac_address: string;
	IMEI: string;
	configuration: {
		[key: string]: string; // TODO
	};
}

export enum DeviceType {
	WATCH = "watch",
	BEACON = "beacon",
}

export enum DeviceStatus {
	IN_STOCK = "in_stock",
	TESTED = "tested",
	DELIVERED = "delivered",
	ACTIVE = "active",
	NTH = "nth",
}

export enum SmartwatchStatus {
	VIRGIN = "virgin",
	RECOVERED = "recovered",
	STOCKED = "stocked",
	INPROGRESS = "in_progress",
	READYTOSEND = "ready_to_send",
	SEND = "send",
	AWAITDELIVERYCHECK = "await_delivery_check",
	DELIVERED = "delivered",
	PAIRED = "paired",
	UNPAIRED = "unpaired",
	LOGGED = "logged",
	DISABLED = "disabled",
	REPAIR = "repair",
}

export enum SmartwatchMarks {
	SAMSUNG = "Samsung",
}

export enum SmartwatchModels {
	WEAR4 = "Wear 4",
	WEAR5 = "Wear 5",
	WEAR6 = "Wear 6",
	WEAR7 = "Wear 7",
}

export enum SmartwatchSizes {
	INCH40 = "40",
	INCH44 = "44",
}

export enum SmartwatchColors {
	BLACK = "Black",
	SILVER = "Silver",
}

export enum LineProviders {
	MOVISTAR = "Movistar",
	PERSONAL = "Personal",
	CLARO = "Claro",
	AT_T = "AT&T",
	TELCEL = "Telcel",
	ANTEL = "Antel",
	OTHER = "Other",
}

export enum TrackingStatus {
	INPROGRESS = "in_progress",
	INTRANSIT = "in_transit",
	DELIVERED = "delivered",
	COMPLAINT = "complaint",
}

// Alerts

export interface Alert {
	user_id: string;
	type: EventType;
	timestamp: number;
	status: AlertStatus;
	lat: number;
	long: number;
}

export enum EventType {
	FALL = "fall",
	PROBABLE_FALL = "probable_fall",
	LONG_BUTTON_PRESS = "long_button_press",
	NOTIFICATION_BUTTON_PRESS = "notification_button_press",
	BUTTON_PRESS = "button_press",
	REMOTE_BUTTON_PRESS = "remote_button_press",
	OFF_BODY = "off_body",
	STEPS = "steps",
	LOW_BATTERY = "low_battery",
	WIFI_CONNECTED = "wifi_connected",
	BATTERY_CHARGING="battery_charging",
	HR_ABOVE_BASELINE = "hr_above_baseline",
	HR_BELOW_BASELINE = "hr_below_baseline",
}

export enum EventOriginType {
	APP = "app",
	SW = "smartwatch",
}
export enum AlertStatus {
	PREPENDING = "pre_pending",
	PENDING = "pending",
	PUSH_CICLE_START = "push_cicle_start",
	ACCEPTED_BY_USER = "accepted_by_user",
	ACCEPTED_BY_EC = "accepted_by_ec",
	IN_PROGRESS_EC = "in_progress_ec",
	DISMISSED = "dismissed",
	NO_ANSWER_OF_USERS = "no_answer_of_users",
	ASSISTANCE_NOT_ACCEPTED = "assistance_not_accepted",
	CLOSED_BY_USER = "closed_by_user",
	CLOSED = "closed",
	CLOSED_BY_PATIENT = "close_by_patient",
	SEND_TO_CC = "send_to_cc",
	SENT_TO_CC_REDIAL = "sent_to_redial",
}

// Measurements
export interface RawMeasurement {
	user: string;
	device_id: string;
	lat?: number;
	long?: number;
	batery_level?: number;
}

export interface Measurement extends RawMeasurement {
	id: number;
	timestamp: number;
}

export enum MeasurementGetBy {
	DEVICE = "device",
	USER = "user",
}

export enum MeasurementType {
	HEART_RATE = "heart_rate",
	PODOMETER = "podometer",
}

export enum GenderType {
	MALE = "male",
	FEMALE = "female",
}
// EllieGo Users
export interface IUserLockedData {
	role: UserRole;
	password?: string;
	refresh_token?: string;
	support_network_id?: string;
	support_network_role?: SupportNetworkUserType;
	device?: RawDevice;
	device_token?: string;
	endpoint_arn?: string;
	phone_number_sw?: PhoneNumber;
	first_login_complete?: boolean;
	last_login?: Date;
	deleted_at?: any;
	cc_user_id?: string;
}
//@TODO revisar aca el numero de telefono fijo
export interface IUserUnlockedData {
	email: string | undefined;
	first_name?: string;
	last_name?: string;
	address?: string;
	city?: string;
	province?: string;
	country?: string;
	address_2?: string;
	city_2?: string;
	province_2?: string;
	country_2?: string;
	health_system_affiliate_number?: string;
	health_system_plan?: string;
	health_system_data?: RawHealthSystem;
	phone_number?: PhoneNumber | undefined;
	phone_number_landline?: PhoneNumber | undefined;
	whatsapp?: PhoneNumber;
	birth_date?: number;
	gender?: GenderType;
	document_type?: string;
	document_number?: string;
	apartment_info?: string;
}

export interface RawUser extends IUserUnlockedData, IUserLockedData {}
export interface User extends RawUser {
	id: string;
}

export class User implements User {
	private convertToString(phoneNumber) {
		if (!phoneNumber) {
			return null;
		}

		const { country_code, number, area_code, provider, country_name } =
			phoneNumber;
		return {
			country_code: country_code,
			number:
				typeof number === "number"
					? number.toString()
					: typeof number === "string"
					? number.trim()
					: number,
			area_code:
				typeof area_code === "number"
					? area_code.toString()
					: typeof area_code === "string"
					? area_code.trim()
					: area_code,
			provider: provider,
			country_name: country_name,
		};
	}
	getUnlokedData(data: Partial<User>): IUserUnlockedData {
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
			phone_number: this.convertToString(data.phone_number)?? undefined,
			phone_number_landline: this.convertToString(data.phone_number_landline) ?? undefined,
			whatsapp: data.whatsapp,
			birth_date: data.birth_date,
			document_type: data.document_type,
			document_number: data.document_number,
			apartment_info: data.apartment_info,
			health_system_data: data.health_system_data,
		};
	}
}

export function textNormalizer(text: string) {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

export interface PhoneNumber {
	country_code: string;
	number: string;
	area_code?: number;
	provider?: LineProviders | string;
	country_name?: string;
}

// Ellie Center

export enum OperationalRole {
	SUPERADMIN = "superadmin",
	ADMIN = "admin",
	OPERATOR = "operator",
	COMPANY_CLIENT = "company_client",
	USER = "user",
	SUPERVISOR = "supervisor",
	SYSTEM = "system",
}

export enum ActivityStatus {
	AVAILABLE = "available",
	BUSY = "busy",
	OFF_LINE = "off_line",
}

export enum BloodType {
	AB_PLUS = "ab+",
	AB_MINUS = "ab-",
	A_PLUS = "a+",
	A_MINUS = "a-",
	B_PLUS = "b+",
	B_MINUS = "b-",
	O_PLUS = "o+",
	O_MINUS = "o-",
}

// Health System

export interface RawHealthSystem {
	id: string;
	name?: string;
	address?: string;
	email?: string;
	emergency_phone_number?: PhoneNumber;
	contact_phone_number?: PhoneNumber;
	users?: RawUser[];
	other_information?: {
		[key: string]: string | null;
	};
}

//checkout

export enum Payment {
	PENDING = "pending",
	AUTHORIZED = "authorized",
	PAUSED = "paused",
	CANCELLED = "cancelled",
}

export interface CheckoutPayments {
	subcription_id?: string;
	payment?: string;
}

export enum EllieCenterUserShift {
	MORNING = "morning",
	EVENING = "evening",
	NIGHT = "night",
}

export enum Vendors {
	ELLIE_CARE = "Ellie Care",
	MATER_DEI = "Mater Dei",
	ORTOPEDIA_ALEMANA = "Ortopedia Alemana",
}

// User Pourchase

export interface RawUserPurchase {
	role?: UserRole;
	support_network_role?: SupportNetworkUserType;
	email?: string;
	name?: string;
	last_name?: string;
	document_type?: string;
	document_number?: string;
	phone_number?: PhoneNumber;
	country?: string;
	province?: string;
	city?: string;
	address?: string;
	postal_code?: string;
	billing_name?: string;
	billing_last_name?: string;
	billing_email?: string;
	billing_document_type?: string;
	billing_document_number?: string;
	billing_country?: string;
	billing_province?: string;
	billing_city?: string;
	billing_address?: string;
	billing_postal_code?: string;
	device?: {
		[key: string]: string | number | null;
	};
	subscription_id?: string;
	planType?: string;
	payed?: boolean;
	delivered?: boolean;
	vendor?: string;
}

export enum NotificationType {
	INFO = "informative",
	PENDING = "pending",
	URGENCY = "urgency",
	SUCCESS = "success",
	ALERT = "alert",
	INFO_SW = "informative_smartwatch",
	PENDING_SW = "pending_smartwatch",
}

export enum EventsNotificationType {
	NOT_EVENT = "-",
	NEW_ROLE = "new_role",
	SOS_COMPAIN = "sos_compain",
	SW_CONECTED_BY_AC = "as_conected_by_ac",
	SW_DISCONECTED_BY_AC = "as_disconected_by_ac",
	CREATED_DELEGATE_PENDING = "created_delegate_pending",
	NEW_DELEGATE_PENDING = "new_delegate_pending",
	CREATED_DELEGATE = "created_delegate",
	ACCEPTED_DELEGATE = "accepted_delegate",
	REJECTED_DELEGATE = "rejected_delegate",
	CANCELLED_DELEGATE = "cancelled_delegate",
	ADMIN_CANCELLED_DELEGATE = "admin_cancelled_delegate",
	INVITE_MORE_AC = "invite_more_ac",
	USER_UNJOIN_SN = "user_unjoin_support_network",
	OTHER_UNJOIN_SN = "other_unjoin_support_network",
	ADMIN_UNJOIN_SN = "admin_unjoin_support_network",
	CREATED_SN = "created_support_network",
	USER_JOIN_SN = "user_join_support_network",
	OTHER_JOIN_SN = "other_join_support_network",
	AM_CREATE_ALERT = "am_create_alert",
	AC_ACCEPTED_ALERT = "ac_accepted_alert",
	AC_FINISHED_ALERT = "ac_finished_alert",
	AM_FINISHED_ALERT = "am_finished_alert",
	CANCELLED_JOIN_SN = "cancelled_join_support_network",
	ACCEPTED_BY_EC = "accepted_by_ec",
	CLOSED_BY_EC = "closed_by_ec",
	AM_CREATE_ALERT_SW = "am_create_alert_sw",
	// faltan los enums de los tipos de alertas que debe crear el Ellie Center
}

export interface CustomError extends Partial<Error> {
	code: number;
	message: string;
	details?: string[];
	important?: boolean;
}

export interface FreeTrial {
	frequency: number;
	frequency_type: FrequencyType;
}

export enum FrequencyType {
	MONTHS = "months",
	DAYS = "days",
	YEARS = "years",
}

export enum SubscriptionType {
	GOLD = "gold",
	GOLDLOAN = "gold_loan",
}

export enum DiscountCodeType {
	PERCENTAGE = "percentage",
	AMOUNT = "amount",
	FREETRIAL = "free_trial",
}

export enum Language {
	ES = "Spanish",
	EN = "English",
}

export enum Modules {
	CONNECT = "Connect",
	WHATSAPP = "Whatsapp",
}