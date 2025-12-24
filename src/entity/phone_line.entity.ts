import { LineProviders, PhoneLineStatus } from "../types";
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

  @Column()
  number: string;

  @Column()
  country_code: string;

  @Column()
  provider: LineProviders | string;

  @Column()
  country_name: string;

  @Column()
  link_to_qr: string;

  @ManyToOne(() => CompanyClient, { eager: true })
  @JoinColumn({ name: "company_client_id" })
  company_client: CompanyClient;

  @Column({
    type: "enum",
    enum: PhoneLineStatus,
    default: PhoneLineStatus.AVAILABLE,
  })
  status: string;

  @Column({
		nullable: true,
    default: null
	})
	pin: string;

  @Column({
		nullable: true,
    default: null
	})
	puk: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
