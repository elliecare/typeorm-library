import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	DeleteDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class PasswordResetToken {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;
	
	@Column({ name: "user_id", nullable:true })
	user_id: string;
	
	@Column({ type:"varchar" })
	token: string;

	@CreateDateColumn()
	created_at: Date;

	@DeleteDateColumn()
	expires_at: Date;

}
