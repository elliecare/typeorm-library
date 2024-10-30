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

	getformattedAlertByCC():{} {
		const {id,created_at,type,event:{measurements:{location},smartwatch},user} = this;
	
		return {
			id,
			created_at,
			type,
			lat: location.lat,
			long: location.long,
			smartwatch: {
				id: smartwatch.id,
				phone_number_1:smartwatch.phone_number_1,
				phone_number_2:user.phone_number,
			},
			cc_user_id: user.cc_user_id,
			user: {
				id: user.id,
				first_name: user.first_name,
				last_name: user.last_name,
				phone_number: user.phone_number,
				phone_number_landline: user.phone_number_landline,
			},
		};
	}

	getPatientName():string{
		return !this.event.user.first_name && !this.event.user.last_name ? this.event.user.cc_user_id : this.event.user.first_name+' '+this.event.user.last_name;
	}
}
