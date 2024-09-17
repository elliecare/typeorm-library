import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { UserSmartwatch } from "./user_smartwatch.entity";
import { User } from "./user.entity";

@Entity()
export class Users_smartwatches_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({ nullable: true })
	observations: string;

	@ManyToOne(() => UserSmartwatch, { eager: true })
	@JoinColumn({ name: "user_smartwatch_id" })
	userSmartwatch: UserSmartwatch;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	userSmartwatch_snapshot: UserSmartwatch;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
