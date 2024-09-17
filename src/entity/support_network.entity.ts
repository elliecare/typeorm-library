import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToMany,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { PlanType, SubscriptionStatus } from "../types";
import { Smartwatch } from "./smartwatch.entity";
import { User } from "./user.entity";

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
		enum: SubscriptionStatus,
		default: SubscriptionStatus.ACTIVE,
	})
	subscriptionStatus: string;

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

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;

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

	@OneToMany(() => User, (user) => user.support_network)
	users: User[];

	@OneToOne(() => Smartwatch)
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;
}
