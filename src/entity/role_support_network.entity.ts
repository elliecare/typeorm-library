import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	Column,
} from "typeorm";

@Entity()
export class Role_SupportNetwork {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	user_id: string;

	@Column()
	support_network_id: string;

	@Column()
	is_admin: boolean;

	@CreateDateColumn()
	created_at: Date;
}
