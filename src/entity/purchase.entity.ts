import { GenderType, PhoneNumber } from "src/types";
import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	Column,
	DeleteDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { DiscountCode } from "./discount_code.entity";

@Entity()
export class Purchase {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column("bigint", {
		nullable: true,
	})
	birth_date: number;

	@Column({
		type: "enum",
		enum: GenderType,
		default: null,
	})
	gender: string;

	@Column()
	billing_last_name: string;

	@Column()
	billing_first_name: string;

	@Column({ nullable: true })
	billing_document_number: string;

	@Column({ nullable: true })
	billing_email: string;

	@Column({ nullable: true })
	billing_street: string;

	@Column({ nullable: true })
	billing_number: string;

	@Column({ nullable: true })
	billing_apartment: string;

	@Column({ nullable: true })
	billing_floor: string;

	@Column({ nullable: true })
	billing_city: string;

	@Column({ nullable: true })
	billing_state: string;

	@Column({ nullable: true })
	billing_country: string;

	@Column({ nullable: true })
	billing_zipcode: string;

	@Column({ nullable: true })
	billing_extra_info: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	billing_phone_number: PhoneNumber;

	@Column()
	plan: string; // este es el id de la tabla plans

	@Column()
	subscription_id: string; // este es el id de la subs en mercadopago

	@Column({ default: false })
	planType: string;

	@Column({ nullable: true })
	payment_id: string;

	@Column({ default: false })
	payed: boolean;

	@Column({ default: false })
	delivered: boolean;

	@Column()
	vendor: string;

	@Column()
	gateway: string;

	@Column({ nullable: true })
	payer_id: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	discount_code: DiscountCode;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
