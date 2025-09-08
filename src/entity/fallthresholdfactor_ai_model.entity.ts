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

	@Column({ unique: true })
	sw_app_version: string;

	@Column({ type: "double precision", default: 0.985 })
	level_1: string;

	@Column({ type: "double precision", default: 0.9962 })
	level_2: string;

	@Column({ type: "double precision", default: 0.9987 })
	level_3: string;

	@Column({ type: "double precision", default: 0.9998 })
	level_4: string;

	@Column({ type: "double precision", default: 0.9999 })
	level_5: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
