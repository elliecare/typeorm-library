import { PhoneNumber } from "../../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";

@Entity()
export class ConnectModule {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: Boolean,
		nullable: true,
	})
	aws_connect: boolean;

	@Column({
		nullable: true,
	})
	send_url: string;

	@Column({
		nullable: true,
	})
	auth_url: string;

	@Column({
		nullable: true,
	})
	client_id: string;

	@Column({
		nullable: true,
	})
	client_secret: string;

	@Column({
		type: "bigint",
		nullable: true,
	})
	timeout: number;

	@Column({
		type: "bigint",
		nullable: true,
	})
	timeout_redial: number;
	//@TODO revisar si esto funciona como corresponde
	@Column({
		type: "jsonb",
		nullable: true,
	})
	support_contacts: { emails: string[]; whatsapp: PhoneNumber[] };

	@Column({
		type: "int",
		nullable: true,
	})
	maximum_redial: number;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
