import { PhoneNumber } from "../types";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyClient } from "./company_client.entity";

@Entity()
export class PhoneLine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "jsonb",
    nullable: true,
  })
  phone_number: PhoneNumber;

  @Column()
  link_to_qr: string;

  @Column({default: false})
  is_active: boolean;

  @ManyToOne(() => CompanyClient, { eager: true })
  @JoinColumn({ name: "company_client_id" })
  company_client: CompanyClient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
