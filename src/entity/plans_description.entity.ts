import { FreeTrial } from "../types";
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class PlansDescription {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	details: string;

	@Column({
		type: "text",
		array: true,
		default: ["Ellie Go App (en tu celular)"],
	})
	devices: string[];

	@Column()
	plan_price: number;

	@Column({ type: "double precision", default: 0.0 })
	watch_price: string;

	@Column({ type: "double precision", default: 0.0 })
	setup_price: string;

	@Column({
		type: "jsonb",
		nullable: true,
	})
	free_trial: FreeTrial;

	@Column({
		type: "text",
		array: true,
		default: ["Botón de Ayuda", "Geolocalización", "Signos Vitales *"],
	})
	functions: string[];

	@Column({ default: 5 })
	quantity_companions: number;

	@Column({ type: "text", array: true, default: ["Programa Ellie Coins *"] })
	benefits: string[];

	@Column({
		type: "text",
		array: true,
		default: ["Estimulación Neuro-Cognitiva *"],
	})
	mind: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
