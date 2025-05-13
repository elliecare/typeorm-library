import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Sensors } from "./sensors.entity";

@Entity()
export class Sensors_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	sensors_snapshot: Sensors;

	@Column({ nullable: true })
	observations: string;

	@CreateDateColumn()
	created_at: Date;
}
