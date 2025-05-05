import { PhoneNumber } from "../../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { CompanyClient } from "../company_client.entity";

@Entity()
export class WhatsappModule {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => CompanyClient, client => client.id)
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@Column({
		nullable: true,
	})
	api_token: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number: PhoneNumber;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
