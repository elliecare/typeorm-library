import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	UpdateDateColumn,
	OneToMany,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import {
	GenderType,
	PhoneNumber
} from "../types";
import { Alert } from "./alert.entity";
import { HealthSystem } from "./health_system.entity";
import { Measurement } from "./measurement.entity";

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

	@OneToMany(() => Measurement, (measurement) => measurement.user)
	measurement: Measurement[];

	@OneToMany(() => Alert, (alert) => alert.user)
	alert: Alert[];

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

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
