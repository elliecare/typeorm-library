import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from "typeorm";

@Entity()
export class WifiConnected {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	device_id: string;

	@Column()
	wifi_connected: boolean;

	@Column({nullable:true})
	SSID: string;

	@Column({nullable:true})
	app_version: string;

	@Column()
	created_on_device: Date;

	@CreateDateColumn()
	created_at: Date;
}
