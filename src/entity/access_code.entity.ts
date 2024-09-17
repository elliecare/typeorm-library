import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class AccessCode {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	user_id: string;

	@Column()
	code: string;

	@Column()
	active: boolean;

	@CreateDateColumn()
	created_at: Date;
}
