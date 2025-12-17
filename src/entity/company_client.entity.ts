import { Language } from "../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToOne,
	JoinColumn,
	CreateDateColumn,
	OneToMany,
} from "typeorm";
import { WhatsappModule } from "./modules/whatsapp.module.entity";
import { ConnectModule } from "./modules/connect.module.entity";
import { MailingModule } from "./modules/mailing.module.entity";
import { CommercialModule } from "./modules/commercial.module.entity";
import { SmartwatchModule } from "./modules/smartwatch.module.entity";
import { CanaryModule } from "./modules/canary.module.entity";
import { IntegrationModule } from "./modules/integration.module.entity";
import { Config } from "./config.entity";
import { EventSubscription } from "./event-subscription.entity";

@Entity()
export class CompanyClient {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({
		nullable: true,
	})
	name: string;

	@Column({
		nullable: true,
	})
	prefix: string;

	@Column({
		nullable: true,
	})
	domain: string;
	
	@Column({default:Language.EN})
	language: Language;

	@OneToOne(() => ConnectModule, { eager: true, nullable: true })
	@JoinColumn()
	connectModule?: ConnectModule;

	@OneToOne(() => IntegrationModule, { eager: true, nullable: true })
	@JoinColumn()
	integrationModule?: IntegrationModule;

	@OneToOne(() => WhatsappModule, { eager: true, nullable: true })
	@JoinColumn()
	whatsappModule?: WhatsappModule;

	@OneToOne(() => MailingModule, { eager: true, nullable: true })
	@JoinColumn()
	mailingModule?: MailingModule;

	@OneToOne(() => CommercialModule, { eager: true, nullable: true })
	@JoinColumn()
	commercialModule?: CommercialModule;

	@OneToOne(() => SmartwatchModule, { eager: true, nullable: true })
	@JoinColumn()
	smartwatchModule?: SmartwatchModule;

	@OneToOne(() => CanaryModule, { eager: true, nullable: true })
	@JoinColumn()
	canaryModule?: CanaryModule;

	@OneToOne(() => Config, { eager: true })
	@JoinColumn({ name: "config_id" })
	config: Config;

	@OneToMany(() => EventSubscription, (sub) => sub.company_client)
	eventSubscriptions!: EventSubscription[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
