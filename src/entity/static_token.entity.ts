import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	PrimaryColumn,
} from "typeorm";

@Entity()
export class StaticToken {
	@PrimaryColumn()
	token: string;

	@Column({ default: true })
	active: boolean;

	@Column({ nullable: false })
	reference_name: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
