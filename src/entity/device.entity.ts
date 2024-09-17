import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { DeviceStatus, DeviceType } from "../types";
import { CompanyClient } from "./company_client.entity";

@Entity()
export class Device {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: "enum",
		enum: DeviceType,
	})
	type: string;

	@Column()
	mac_address: string;

	@Column({})
	imei: string;

	@Column({})
	serial: string;

	@Column({
		unique: true,
		nullable: true,
	})
	device_id: string;

	@Column({
		type: "enum",
		enum: DeviceStatus,
		default: "in_stock",
	})
	device_status: string;

	@Column({
		type: "simple-json",
		nullable: true,
	})
	configuration: {
		wifi: "simple-json";
		[key: string]: string | null;
	};

	@Column({
		default: false,
	})
	available: boolean;

	@Column({
		default: false,
	})
	first_login: boolean;

	@ManyToOne(() => CompanyClient, { eager: true })
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient | string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
