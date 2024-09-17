import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class PatientAgentContact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	patient_id: string;

	@Column()
	agent_id: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
