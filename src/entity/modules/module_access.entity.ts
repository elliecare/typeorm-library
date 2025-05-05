import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CompanyClient } from "../company_client.entity";
import { Modules } from "../../types";

@Entity()
export class CompanyClientModuleAccess {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => CompanyClient, client => client.id)
	@JoinColumn()
	companyClient: CompanyClient;

	@Column()
	module: Modules

	@Column({ default: true })
	enabled: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}