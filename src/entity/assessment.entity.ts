import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryColumn,
} from "typeorm";

@Entity("assessment")
export class Assessment {
	@PrimaryColumn()
	id: string;

	@Column()
	subject_id: string;

	@Column({default:'processing'})
	status: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	scores: any;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date | null;
}
