import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Cita } from "src/cita/entities/cita.entity";
import { Prevision } from "src/prevision/entities/prevision.entity";

@Entity("paciente", { schema: "dbmedic2" })
export class Paciente {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "edad" })
    edad: number;

    @Column("varchar", { name: "rut", length: 255 })
    rut: string;

    @Column("date", { name: "fechaNacimiento" })
    fechaNacimiento: Date;

    @Column("varchar", { name: "direccion", length: 255 })
    direccion: string;

    @Column("varchar", { name: "email", length: 255 })
    email: string;

    @Column("int", { name: "telefono" })
    telefono: number;

    @Column("boolean", { name: "redSocial" })
    redSocial: boolean;

    @Column("enum", { name: "genero", enum: ["femenino", "masculino", "otros"] })
    genero: "femenino" | "masculino" | "otros";

    @Column("varchar", { name: "nombre", length: 50 })
    nombre: string;

    @Column("varchar", { name: "apellido", length: 50 })
    apellido: string;

    @OneToMany(() => Cita, (cita) => cita.paciente)
    citas: Cita[];

    @ManyToOne(() => Prevision, (prevision) => prevision.pacientes, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "prevision_id", referencedColumnName: "id" }])
    prevision: Prevision;
}
