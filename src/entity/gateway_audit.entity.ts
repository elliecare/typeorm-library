import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Gateway } from "./gateway.entity";
import { User } from "./user.entity";

@Entity()
export class Gateway_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => Gateway, { eager: true })
	@JoinColumn({ name: "gateway_id" })
	gateway: Gateway;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	gateway_snapshot: Gateway;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
