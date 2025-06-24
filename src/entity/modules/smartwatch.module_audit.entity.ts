import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "../user.entity";
import { SmartwatchModule } from "./smartwatch.module.entity";

@Entity()
export class SmartwatchModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => SmartwatchModule)
	@JoinColumn({ name: "smartwatch_module_id" })
	smartwatchModule: SmartwatchModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	smartwatchModule_snapshot: SmartwatchModule;

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
