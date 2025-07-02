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
export class CommercialModule {
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
	slogan: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	colors: {
		color_1: string,
		color_2: string,
		color_3: string,
		color_4: string,
		color_5: string,
		color_6: string,
		color_7: string,
		color_8: string,
		color_9: string,
		color_10: string
	};

	@Column({
		type: "jsonb",
		nullable: true,
	})
	web: {
		url: string,
		display: string
	};

	@Column({
		type: "jsonb",
		nullable: true,
	})
	phone_number: PhoneNumber;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	social_networks: {
		whatsapp: string,
		facebook: string,
		instagram: string,
		linkedin: string
	};

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
