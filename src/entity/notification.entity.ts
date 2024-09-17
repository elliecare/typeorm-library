import { EventsNotificationType, NotificationType } from "src/types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class Notification {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: "enum",
		enum: NotificationType,
		default: NotificationType.INFO,
	})
	type: string;

	@Column({
		type: "enum",
		enum: EventsNotificationType,
		default: EventsNotificationType.NOT_EVENT,
	})
	event: string;

	@Column()
	data_json_string: string;

	@Column()
	user_id: string;

	@Column()
	support_network_id: string;

	@Column({
		default: false,
		type: "boolean",
	})
	readed: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
