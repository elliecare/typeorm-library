import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
} from "typeorm";

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

	@Column({
		type: "numeric",
	})
	battery_level: number;

	@Column({
		nullable: true,
	})
	battery_plugged: boolean;

	@Column()
	app_version: string;

	@UpdateDateColumn()
	updated_at: Date;
}
