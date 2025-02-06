import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class PasswordResetToken {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@CreateDateColumn()
	created_at: Date;

	@Column()
	expires_at: Date;
}
