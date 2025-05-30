import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { LowBatteryNotification } from "../types";
import { Smartwatch } from "./smartwatch.entity";

@Entity()
export class Sensors {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	device_id: string;

	@Column({
		type: "numeric",
	})
	lat: number;

	@Column({
		type: "numeric",
	})
	long: number;

	@Column({nullable:true})
	location_updated_at: Date;

	@Column({
		type: "numeric",
	})
	battery_level: number;

	@Column({nullable:true})
	battery_level_updated_at: Date;

	@Column({
		nullable: true,
	})
	battery_plugged: boolean;

	@Column({nullable:true})
	battery_plugged_updated_at: Date;

	@Column({
		type: "jsonb",
		default:{patient_notified:false, main_companion_notified:false}
	})
	low_battery: LowBatteryNotification;

	@Column()
	app_version: string;

	@Column({nullable:true})
	app_version_updated_at: Date;

	@Column({nullable:true})
	off_body: boolean;

	@Column({nullable:true})
	off_body_updated_at: Date;

	@Column({nullable:true})
	steps: number;

	@Column({nullable:true})
	steps_updated_at: Date;

	@Column({nullable:true,type:"simple-array"})
	heart_rate: number[];

	@Column({nullable:true})
	heart_rate_updated_at: Date;

	@Column({nullable:true})
	wifi_connected: boolean;

	@Column({nullable:true})
	wifi_connected_updated_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToOne(() => Smartwatch, { eager: true })
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;
}
