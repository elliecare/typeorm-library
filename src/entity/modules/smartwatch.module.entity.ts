import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	OneToOne,
} from "typeorm";
import { CompanyClient } from "../company_client.entity";
import { Config } from "../config.entity";

@Entity()
export class SmartwatchModule {
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
		default: false,
	})
	assets_ownership: boolean;

	@OneToOne(() => Config, { eager: true })
	@JoinColumn({ name: "config_id" })
	config: Config;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
