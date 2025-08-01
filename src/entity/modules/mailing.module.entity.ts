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
export class MailingModule {
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
		nullable: true,
	})
	email: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
