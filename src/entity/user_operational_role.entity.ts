import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { OperationalRole } from "./operational_role.entity";

@Entity()
export class UserOperationalRole {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => OperationalRole, { eager: true })
	@JoinColumn({ name: "operational_role_id" })
	operational_role: OperationalRole;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
