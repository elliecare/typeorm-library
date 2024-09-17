import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LineProvider {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;
}
