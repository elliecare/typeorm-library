import {
	Entity,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Role_SupportNetwork } from "./role_support_network.entity";
import { User } from "./user.entity";

@Entity()
export class Role_support_network_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@Column({ nullable: true })
	observations: string;

	@ManyToOne(() => Role_SupportNetwork, { eager: true })
	@JoinColumn({ name: "role_support_network_id" })
	role_SupportNetwork: Role_SupportNetwork;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	role_SupportNetwork_snapshot: Role_SupportNetwork;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
