import { PhoneNumber } from "../types";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
