import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { IntegrationModule } from "./integration.module.entity";
import { User } from "../user.entity";

@Entity()
export class IntegrationModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => IntegrationModule)
	@JoinColumn({ name: "integration_module_id" })
	integrationModule: IntegrationModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	integrationModule_snapshot: IntegrationModule;

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
