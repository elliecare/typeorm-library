import { Language, PhoneNumber } from "../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	DeleteDateColumn,
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
    	type: "jsonb",
    	nullable: true,
	})
	modules:{
		Connect?: ConnectModule;
		Whatsapp?: WhatsappModule;
	};

	@Column({
		nullable: true,
	})
	domain: string;
	
	@Column({default:Language.EN})
	language: Language;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
