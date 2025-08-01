import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToOne,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { PlanType, SupportNetworkStatus } from "../types";
import { Smartwatch } from "./smartwatch.entity";
import { CompanyClient } from "./company_client.entity";

@Entity()
export class SupportNetwork {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		nullable: true,
	})
	subscription_id: string;

	@Column({
		type: "enum",
		enum: SupportNetworkStatus,
		default: SupportNetworkStatus.ACTIVE,
	})
	subscriptionStatus: string;

	@Column({
		type: "enum",
		enum: SupportNetworkStatus,
		default: SupportNetworkStatus.ACTIVE,
	})
	status: SupportNetworkStatus;

	@Column({
		nullable: true,
	})
	patient_id: string;

	@Column({
		nullable: true,
	})
	main_companion_id: string;

	@Column({
		type: "text",
		array: true,
		nullable: true,
	})
	companions: string[];

	@Column({
		type: "enum",
		enum: PlanType,
		default: PlanType.FREE,
	})
	plan_type: string;

	@Column({
		nullable: true,
	})
	delegate_admin_new: string;

	@Column({
		nullable: true,
	})
	delegate_admin_old: string;

	@Column({
		nullable: true,
	})
	init_delegate: string;

	@Column({ nullable: true })
	name: string;

	@OneToOne(() => Smartwatch)
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;

	@Column({ default: false })
	agree_show_location: boolean;

	@Column({ default: null })
	url_agree_show_location: string;

	@ManyToOne(() => CompanyClient)
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
