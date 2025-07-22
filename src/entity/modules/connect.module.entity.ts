import { PhoneNumber } from "../../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
} from "typeorm";
import { CompanyClient } from "../company_client.entity";

@Entity()
export class ConnectModule {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => CompanyClient, client => client.id)
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@Column({
		type: Boolean,
		default: false,
	})
	enabled: boolean;

	@Column({
		type: Boolean,
		default: true
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

	@Column({
		type: "bigint",
		nullable: true,
		default:12000
	})
	timeout_holding: number;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number: PhoneNumber;
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

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
