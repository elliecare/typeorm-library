import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	JoinColumn,
} from "typeorm";
import { EventOriginType, EventType } from "../types";
import { User } from "./user.entity";
import { Smartwatch } from "./smartwatch.entity";

@Entity()
export class EventEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: "enum",
		enum: EventType,
	})
	type: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	sw_config: any;

	@Column({
		nullable: true,
		type: "jsonb"
	})
	trigger_value: any;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	measurements: any;

	@Column()
	origin: EventOriginType;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;
	
	@Column({ name: "user_id", nullable:true })
	user_id: string;

	@ManyToOne(() => Smartwatch)
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;
	
	@Column({ name: "smartwatch_id", nullable:true })
	smartwatch_id: string;

	@Column({
		nullable: true,
	})
	app_version: string;

	@Column({nullable: true, type: "timestamptz"})
	sent_by_webhook: Date;

	@CreateDateColumn()
	created_at: Date;
}
