// src/entities/event-subscription.entity.ts
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
} from "typeorm";
import { CompanyClient } from "./company_client.entity";
import { EventType } from "../types"; // usa tu enum existente

@Entity({ name: "event_subscription" })
export class EventSubscription {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@ManyToOne(() => CompanyClient, (cc) => cc.eventSubscriptions, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "company_client_id" })
	company_client!: CompanyClient;

	@Column({ name: "company_client_id" })
	company_client_id!: string;

	// Evento del enum al que se suscribe este endpoint
	@Column({
		name: "event_type",
		type: "enum",
		enum: EventType,
	})
	eventType!: EventType;

	// URL a la que le vas a pegar cuando ocurra el evento
	@Column({ name: "endpoint_url" })
	endpoint_url!: string;

	@Column({ name: "auth_url" })
	auth_url!: string;

	// Secret opcional para firmar el webhook

	@Column({ name: "endpoint_id", nullable: true })
	client_id!: string | null;

	@Column({ name: "endpoint_secret", nullable: true })
	client_secret!: string | null;

	// Para activar/desactivar sin borrar
	@Column({ name: "is_active", default: true })
	isActive!: boolean;

	@CreateDateColumn({ name: "created_at" })
	createdAt!: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt!: Date;
}