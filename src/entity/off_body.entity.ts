import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { AppVersion } from "./appversion.entity";

@Entity()
export class OffBody {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	device_id: string;

	@Column()
	bodyConnected: boolean;

	@ManyToOne(() => AppVersion, { eager: true })
	@JoinColumn({ name: "app_version_id" })
	app_version: AppVersion;

	@Column()
	created_on_device: Date;

	@CreateDateColumn()
	created_at: Date;
}
