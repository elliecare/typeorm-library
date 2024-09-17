import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Plans } from "./plans.entity";
import { User } from "./user.entity";

@Entity()
export class Plans_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => Plans, { eager: true })
	@JoinColumn({ name: "plan_id" })
	plan: Plans;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	plan_snapshot: Plans;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
