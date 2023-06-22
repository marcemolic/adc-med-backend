
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("prevision", { schema: "dbmedic2" })
export class Prevision {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @OneToMany(() => Paciente, (paciente) => paciente.prevision)
  pacientes: Paciente[];
}
