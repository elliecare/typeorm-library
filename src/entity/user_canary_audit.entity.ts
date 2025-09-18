import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { UserCanary } from "./user_canary.entity";

@Entity()
export class Users_canary_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({ nullable: true })
	observations: string;

	@ManyToOne(() => UserCanary, { eager: true })
	@JoinColumn({ name: "user_canary_id" })
	userCanary: UserCanary;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	userCanary_snapshot: UserCanary;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
