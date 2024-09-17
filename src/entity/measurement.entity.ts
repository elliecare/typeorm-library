import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Measurement {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, (user) => user.measurement, {
		cascade: true,
	})
	user: User;

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

	@Column({
		type: "numeric",
	})
	battery_level: number;

	@Column({
		nullable: true,
	})
	battery_plugged: boolean;

	@Column({
		type: "boolean",
		default: false,
	})
	low_power_mode: boolean;

	@Column()
	app_version: string;

	@CreateDateColumn()
	created_at: Date;
	static id: string;

	@Column({
		nullable: true,
	})
	created_on_device: Date;
}
