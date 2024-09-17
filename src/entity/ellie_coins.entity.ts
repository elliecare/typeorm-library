import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	ManyToOne,
	Column,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class EllieCoins {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => User, (user) => user.ellie_coins)
	user: User;

	@Column()
	amount: number;

	@Column()
	description: string;

	@CreateDateColumn()
	created_at: Date;
}
