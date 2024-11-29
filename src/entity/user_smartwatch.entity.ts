import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Smartwatch } from "./smartwatch.entity";

@Entity("users_smartwatches")
export class UserSmartwatch {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => Smartwatch, { eager: true })
	@JoinColumn({ name: "smartwatch_id" })
	smartwatch: Smartwatch;

	@Column({ length: 3, nullable: true })
	code: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date | null;
}
