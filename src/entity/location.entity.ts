import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from "typeorm";

@Entity()
export class Location {
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
	app_version: string;

	@Column()
	created_on_device: Date;

	@CreateDateColumn()
	created_at: Date;
}
