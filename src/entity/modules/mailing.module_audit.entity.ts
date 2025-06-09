import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "../user.entity";
import { MailingModule } from "./mailing.module.entity";

@Entity()
export class MailingModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => MailingModule)
	@JoinColumn({ name: "mailing_module_id" })
	mailingModule: MailingModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	mailinglModule_snapshot: MailingModule;

	@Column({ nullable: true })
	observations: string;

	@Column({
		default: false,
		type: "boolean",
	})
	read: boolean;

	@CreateDateColumn()
	created_at: Date;
}
