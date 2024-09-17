import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { CompanyClient } from "./company_client.entity";
import { PlanType, SubscriptionType, Vendors } from "src/types";
import { Gateway } from "./gateway.entity";
import { PlansDescription } from "./plans_description.entity";

@Entity()
export class Plans {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	plan_id: string;

	@Column()
	name: string; //Gold - Gold Comodato

	@ManyToOne(() => CompanyClient, { eager: true })
	@JoinColumn({ name: "company_client_id" })
	company_client: CompanyClient;

	@ManyToOne(() => Gateway, { eager: true })
	@JoinColumn({ name: "gateway_id" })
	gateway: Gateway;

	@Column({
		type: "enum",
		enum: Vendors,
	})
	vendor: string;

	@Column({
		type: "enum",
		enum: PlanType,
		default: "gold",
	})
	plan_type: string;

	@Column({
		type: "enum",
		enum: SubscriptionType,
		default: "gold",
	})
	subscription_type: string;

	@Column({ default: "logistica@ellie.care" }) //email para avisar que se realizo una venta
	vendor_email: string;

	@Column({ default: "mail_to_logistics" }) //nombre del template que van a usar en la libreria de emails
	vendor_template_email: string;

	@Column({ default: "subscription_gold" }) //email para el usuario confirmando compra de subscripcion dependiendo el
	user_template_email: string;

	@Column({ nullable: true })
	success_url: string;

	@Column({ nullable: true })
	notification_url: string;

	@ManyToOne(() => PlansDescription, { eager: true })
	@JoinColumn({ name: "plans_description_id" })
	plans_description: PlansDescription;

	@Column({ default: false })
	enabled: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
