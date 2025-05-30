import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { ConnectModule } from "./connect.module.entity";
import { User } from "../user.entity";

@Entity()
export class ConnectModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => ConnectModule)
	@JoinColumn({ name: "connect_module_id" })
	connectModule: ConnectModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	connectModule_snapshot: ConnectModule;

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
