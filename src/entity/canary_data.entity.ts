import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryColumn,
} from "typeorm";

@Entity("canary_data")
export class CanaryData {
	@PrimaryColumn()
	id: string;

	@Column()
	subject_id: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	anxiety: any;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	depression: any;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	behavioral_screening: any;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date | null;
}
