import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { SupportNetwork } from "./support_network.entity";
import { User } from "./user.entity";

@Entity()
export class Support_network_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => SupportNetwork)
	@JoinColumn({ name: "support_network_id" })
	support_network: SupportNetwork;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	support_network_snapshot: SupportNetwork;

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
