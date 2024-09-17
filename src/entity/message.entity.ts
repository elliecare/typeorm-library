import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from "typeorm";
import { Alert } from "./alert.entity";

@Entity()
export class Message {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	receiver: string;

	@Column()
	sender: string;

	@Column()
	title: string;

	@Column()
	body: string;

	@ManyToOne(() => Alert, (alert) => alert.message)
	alert: Alert;

	@Column({ nullable: true })
	support_network_id: string;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
