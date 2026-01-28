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
export class WhatsappModule {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		type: Boolean,
		default: false,
	})
	enabled: boolean;

	@Column({
		nullable: true,
	})
	wa_version: string;

	@Column({
		nullable: true,
	})
	sender_phone_number_id: string;

	@Column({
		nullable: true,
	})
	api_token: string;
	
	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number: PhoneNumber;

	@ManyToOne(() => CompanyClient, client => client.id)
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@Column({
		nullable: true,
		default: "es_AR",
	})
	template_language: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
