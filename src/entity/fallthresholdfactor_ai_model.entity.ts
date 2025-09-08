import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";

@Entity()
export class FallThresholdFactorAIModelEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	model_version: string;

	@Column()
	sw_app_version: string;

	@Column({ type: "double precision", default: 0.985 })
	1: string;

	@Column({ type: "double precision", default: 0.9962 })
	2: string;

	@Column({ type: "double precision", default: 0.9987 })
	3: string;

	@Column({ type: "double precision", default: 0.9998 })
	4: string;

	@Column({ type: "double precision", default: 0.9999 })
	5: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
