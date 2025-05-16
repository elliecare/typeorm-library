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
} from "typeorm";
import { WhatsappModule } from "./modules/whatsapp.module.entity";
import { ConnectModule } from "./modules/connect.module.entity";

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

	@OneToOne(() => WhatsappModule, { eager: true, nullable: true })
	@JoinColumn()
	whatsappModule?: WhatsappModule;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
