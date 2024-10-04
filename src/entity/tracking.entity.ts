import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryColumn,
	OneToMany,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { TrackingStatus } from "../types";
import { Smartwatch } from "./smartwatch.entity";
import { CompanyClient } from "./company_client.entity";

@Entity()
export class Tracking {
	@PrimaryColumn()
	id: string;

	@Column({
		type: "enum",
		enum: TrackingStatus,
	})
	status: string;

	@Column({ nullable: true })
	logistic_operator: string;

	@OneToMany(() => Smartwatch, (smartwatch) => smartwatch.id, {
		cascade: true,
	})
	smartwatches: Smartwatch[];

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
