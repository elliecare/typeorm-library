import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
	JoinColumn,
	OneToOne,
} from "typeorm";
import { EventType, AlertStatus, PlanType } from "../types";
import { AlertLogs } from "./alert_logs.entity";
import { Message } from "./message.entity";
import { User } from "./user.entity";
import { CompanyClient } from "./company_client.entity";
import { EventEntity } from "./event.entity";

@Entity()
export class Alert {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, (user) => user.alert, {
		cascade: true,
	})
	user: User;

	@OneToOne(() => EventEntity, { eager: true })
	@JoinColumn({ name: "event_id" })
	event: EventEntity;

	@Column({
		type: "enum",
		enum: PlanType,
		nullable: true,
	})
	plan_type: string;

	@Column({
		type: "enum",
		enum: EventType,
	})
	type: string;

	@Column({
		type: "numeric",
		nullable: true,
	})
	lat: number;

	@Column({
		type: "numeric",
		nullable: true,
	})
	long: number;

	@Column({
		type: "numeric",
		nullable: true,
	})
	fallthresholdfactor: number;

	@Column({
		nullable: true,
	})
	off_body: string;

	@Column({
		type: "simple-json",
		nullable: true,
	})
	event_status:
		| {
				[key: string]: string | null;
		  }
		| string;

	// This could determine if the alert needs further action
	@Column({
		type: "enum",
		enum: AlertStatus,
		default: AlertStatus.PREPENDING,
	})
	status: string;

	@Column({ default: 1 })
	update_count: number;

	@OneToMany(() => AlertLogs, (alertLogs) => alertLogs.alert, {
		cascade: true,
	})
	alert_log: AlertLogs[];

	@OneToMany(() => Message, (message) => message.alert, {
		cascade: true,
	})
	message: Message[];

	@ManyToOne(() => CompanyClient, { eager: true })
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
