import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { HealthSystem } from "./health_system.entity";
import { User } from "./user.entity";

@Entity()
export class Health_system_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({ nullable: true })
	observations: string;

	@ManyToOne(() => HealthSystem, { eager: true })
	@JoinColumn({ name: "health_system_id" })
	healthSystem: HealthSystem;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	healthSystem_snapshot: HealthSystem;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
