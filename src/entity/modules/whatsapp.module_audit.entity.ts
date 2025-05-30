import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "../user.entity";
import { WhatsappModule } from './whatsapp.module.entity';

@Entity()
export class WhatsappModule_audit {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, { eager: true, nullable: true })
	@JoinColumn({ name: "operator_id" })
	operator: User;

	@ManyToOne(() => WhatsappModule)
	@JoinColumn({ name: "whatsapp_module_id" })
	whatsappModule: WhatsappModule;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	whatsappModule_snapshot: WhatsappModule;

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
