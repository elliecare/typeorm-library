import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "../user.entity";
import { CanaryModule } from "./canary.module.entity";

@Entity()
export class CanaryModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => CanaryModule)
	@JoinColumn({ name: "canary_module_id" })
	canaryModule: CanaryModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	canaryModule_snapshot: CanaryModule;

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
