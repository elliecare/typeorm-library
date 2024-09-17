import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Smartwatch } from "./smartwatch.entity";
import { SmartwatchStatus } from "src/types";
import { User } from "./user.entity";

@Entity()
export class Smartwatch_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => Smartwatch)
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	smartwatch_snapshot: Smartwatch;

	@Column({
		type: "enum",
		enum: SmartwatchStatus,
	})
	status: string;

	@Column({ nullable: true })
	observations: string;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
