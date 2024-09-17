import { SupportNetworkUserType } from "src/types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class InviteCode {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	invited_by: string;

	@Column({ nullable: true })
	user_id: string;

	@Column()
	support_network_id: string;

	@Column()
	code: string;

	@Column({
		type: "enum",
		enum: SupportNetworkUserType,
		nullable: true,
	})
	role: string;

	@Column({ nullable: true })
	name_invite: string;

	@Column({ default: false })
	isCheckout: boolean;

	@CreateDateColumn()
	created_at: Date;

	@CreateDateColumn()
	updated_at: Date;
}
