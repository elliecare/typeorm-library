import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
} from "typeorm";
import { AppVersion } from "./appversion.entity";

@Entity()
export class Battery {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	device_id: string;

	@Column({
		type: "numeric",
	})
	battery_level: number;

	@Column({
		nullable: true,
	})
	battery_plugged: boolean;

	@ManyToOne(() => AppVersion, { eager: true })
	@JoinColumn({ name: "app_version_id" })
	app_version: AppVersion;

	@Column()
	created_on_device: Date;

	@CreateDateColumn()
	created_at: Date;
}
