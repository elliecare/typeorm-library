import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class AppVersion {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	device_id: string;

	@Column()
	app_version: string;

	@Column()
	created_on_device: Date;

	@CreateDateColumn()
	created_at: Date;
}
