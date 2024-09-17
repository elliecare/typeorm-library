import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { CompanyClient } from "./company_client.entity";

@Entity()
export class OperationalRole {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@ManyToOne(() => CompanyClient, { eager: true })
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
