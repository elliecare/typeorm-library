import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "../user.entity";
import { CommercialModule } from "./commercial.module.entity";

@Entity()
export class CommercialModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => CommercialModule)
	@JoinColumn({ name: "commercial_module_id" })
	commercialModule: CommercialModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	commercialModule_snapshot: CommercialModule;

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
