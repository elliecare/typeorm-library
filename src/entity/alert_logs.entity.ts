import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	Column,
} from "typeorm";
import { Alert } from "./alert.entity";

@Entity()
export class AlertLogs {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => Alert, (alert) => alert.alert_log)
	alert: Alert;

	@Column()
	action: string;

	@Column()
	detail: string;

	@CreateDateColumn()
	created_at: Date;

	@DeleteDateColumn()
	delete_at: Date;
}
