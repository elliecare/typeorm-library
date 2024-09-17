import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { TrackingStatus } from "src/types";
import { Smartwatch } from "./smartwatch.entity";
import { Tracking } from "./tracking.entity";
import { User } from "./user.entity";

@Entity()
export class Tracking_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({
		type: "enum",
		enum: TrackingStatus,
	})
	status: string;

	@Column({ nullable: true })
	observations: string;

	@ManyToOne(() => Tracking, { eager: true })
	@JoinColumn({ name: "tracking_id" })
	tracking: Tracking;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	tracking_snapshot: Tracking;

	@Column({
		type: "jsonb",
	})
	smartwatches: Smartwatch[];

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
