import { PhoneNumber } from "../types";
import {
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	Column,
	OneToMany,
	DeleteDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class HealthSystem {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({
		nullable: true,
	})
	address: string;

	@Column({
		nullable: true,
	})
	email: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	emergency_phone_number: PhoneNumber;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	contact_phone_number: PhoneNumber;

	@Column({
		type: "simple-json",
		nullable: true,
	})
	other_information: {
		[key: string]: string | null;
	};

	@OneToMany(() => User, (user) => user.health_system_data)
	users: User[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
