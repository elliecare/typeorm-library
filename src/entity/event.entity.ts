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

	@ManyToOne(() => Smartwatch)
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;

	@CreateDateColumn()
	created_at: Date;
}
