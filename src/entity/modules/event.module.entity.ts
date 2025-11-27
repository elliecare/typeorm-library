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
export class EventModule {
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
		default: false,
	})
	OFF_BODY: boolean;

	@Column({
		default: false,
	})
	STEPS: boolean;

	@Column({
		default: false,
	})
	LOW_BATTERY: boolean;

	@Column({
		default: false,
	})
	WIFI_CONNECTED: boolean;

	@Column({
		default: false,
	})
	BATTERY_CHARGING: boolean;

	@Column({
		default: false,
	})
	LOCATION: boolean;

	@Column({
		default: false,
	})
	HR_ABOVE_BASELINE: boolean;

	@Column({
		default: false,
	})
	HR_BELOW_BASELINE: boolean;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	support_contacts: { emails: string[]; whatsapp: PhoneNumber[] };

	@Column({
		type: "int",
		nullable: true,
		default: 3,
	})
	maximum_redial: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
