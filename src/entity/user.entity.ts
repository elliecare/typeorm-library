import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	OneToMany,
	OneToOne,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import {
	GenderType,
	Payment,
	PhoneNumber,
	SupportNetworkUserType,
	UserRole,
} from "../types";
import { Alert } from "./alert.entity";
import { Device } from "./device.entity";
import { EllieCoins } from "./ellie_coins.entity";
import { HealthSystem } from "./health_system.entity";
import { Measurement } from "./measurement.entity";
import { SupportNetwork } from "./support_network.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		nullable: true,
	})
	first_name: string;

	@Column({
		nullable: true,
	})
	last_name: string;

	@Column({
		nullable: true,
	})
	email: string;

	@Column({
		type: "enum",
		enum: UserRole,
		default: UserRole.USER,
	})
	role: string;

	@Column({
		nullable: true,
	})
	password: string;

	@Column({
		nullable: true,
	})
	refresh_token: string;

	@Column({
		nullable: true,
	})
	address: string;

	@Column({
		nullable: true,
	})
	city: string;

	@Column({
		nullable: true,
	})
	province: string;

	@Column({
		nullable: true,
	})
	country: string;

	@Column({
		nullable: true,
	})
	address_2: string;

	@Column({
		nullable: true,
	})
	city_2: string;

	@Column({
		nullable: true,
	})
	province_2: string;

	@Column({
		nullable: true,
	})
	country_2: string;

	@Column("bigint", {
		nullable: true,
	})
	birth_date: number;

	@Column({
		type: "enum",
		enum: GenderType,
		default: null,
	})
	gender: string;

	@Column({
		nullable: true,
	})
	cc_user_id: string;

	@Column({
		nullable: true,
	})
	support_network_id: string;

	@Column({
		type: "enum",
		enum: SupportNetworkUserType,
		nullable: true,
	})
	support_network_role: string;

	@Column({
		nullable: true,
	})
	health_system_affiliate_number: string;

	@Column({
		nullable: true,
	})
	health_system_plan: string;

	@ManyToOne(() => HealthSystem, (healthSystem) => healthSystem.users, {
		eager: true,
	})
	@JoinColumn({ name: "healthSystemDataId" })
	health_system_data: HealthSystem;

	@OneToOne(() => Device, { eager: true })
	@JoinColumn({ name: "device_id" })
	device: Device;

	@Column({
		nullable: true,
	})
	device_token: string;

	@Column({
		nullable: true,
	})
	endpoint_arn: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number: PhoneNumber;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number_landline: PhoneNumber;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number_sw: PhoneNumber;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	whatsapp: PhoneNumber;

	@Column({
		type: Boolean,
		default: false,
	})
	first_login_complete: boolean;

	@Column({
		nullable: true,
	})
	last_login: Date;

	@Column({
		nullable: true,
	})
	subscription_id: string;

	@Column({
		type: "enum",
		enum: Payment,
		default: null,
	})
	payment: string;

	@OneToMany(() => Measurement, (measurement) => measurement.user)
	measurement: Measurement[];

	@OneToMany(() => Alert, (alert) => alert.user)
	alert: Alert[];

	@OneToMany(() => EllieCoins, (ellieCoins) => ellieCoins.user)
	ellie_coins: EllieCoins[];

	@ManyToOne(() => SupportNetwork, (supportNetwork) => supportNetwork.users, {
		eager: true,
	})
	@JoinColumn({ name: "support_network_id" })
	support_network: SupportNetwork;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;

	@Column({
		type: Boolean,
		default: false,
	})
	validate_code: boolean;

	@Column({ nullable: true })
	document_type: string;

	@Column({ nullable: true })
	document_number: string;

	@Column({ nullable: true })
	apartment_info: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	location_home: {lat:number,lng:number};
}
