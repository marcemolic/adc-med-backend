import { Centro } from "src/centro/entities/centro.entity";
import { Cita } from "src/cita/entities/cita.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";


@Entity("personal", { schema: "dbmedic2" })
export class Personal {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "nombre", length: 50 })
    nombre: string;

    @Column("varchar", { name: "apellido", length: 50 })
    apellido: string;

    @Column("varchar", { name: "rut", length: 255 })
    rut: string;

    @Column("int", { name: "edad" })
    edad: number;

    @Column("date", { name: "fechaNacimiento" })
    fechaNacimiento: Date;

    @Column("int", { name: "telefono" })
    telefono: number;

    @Column("varchar", { name: "email", length: 255 })
    email: string;

    @Column("boolean", { name: "disponibilidad" })
    disponibilidad: boolean;

    @Column("varchar", { name: "especialidad", length: 255 })
    especialidad: string;

    @Column("enum", { name: "genero", enum: ["femenino", "masculino", "otros"] })
    genero: "femenino" | "masculino" | "otros";

    @Column("enum", {
        name: "tipoPersonal",
        enum: ["administrador", "receptor", "doctor"],
    })
    tipoPersonal: "administrador" | "receptor" | "doctor";

    @Column("varchar", { name: "username", length: 25 })
    username: string;

    @Column("varchar", { name: "password", length: 25 })
    password: string;

    @OneToMany(() => Cita, (cita) => cita.personal)
    citas: Cita[];

    @ManyToOne(() => Centro, (centro) => centro.personals, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "centro_id", referencedColumnName: "id" }])
    centro: Centro;
}
