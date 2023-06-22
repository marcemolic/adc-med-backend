import { Centro } from "src/centro/entities/centro.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Personal } from "src/personal/entities/personal.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("cita", { schema: "dbmedic2" })
export class Cita {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "precio" })
    precio: number;

    @Column("varchar", { name: "observation", length: 255 })
    observation: string;

    @Column("enum", {
        name: "tipoConsulta",
        enum: [
            "estandar",
            "muestra de examen",
            "rutinario",
            "primera consulta",
            "pre-examen",
            "pos-examen",
            "toma de examen",
        ],
    })
    tipoConsulta:
        | "estandar"
        | "muestra de examen"
        | "rutinario"
        | "primera consulta"
        | "pre-examen"
        | "pos-examen"
        | "toma de examen";

    @Column("enum", {
        name: "estadoPago",
        enum: ["por pagar", "pagado", "en deuda"],
    })
    estadoPago: "por pagar" | "pagado" | "en deuda";

    @Column("enum", {
        name: "estadoCita",
        enum: ["Reservado", "confirmado", "cancelado", "retraso", "reagendado"],
    })
    estadoCita:
        | "Reservado"
        | "confirmado"
        | "cancelado"
        | "retraso"
        | "reagendado";

    @Column("date", { name: "fecha" })
    fecha: Date;

    @Column("time", { name: "hora" })
    hora: Date;

    @ManyToOne(() => Paciente, (paciente) => paciente.citas, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "paciente_id", referencedColumnName: "id" }])
    paciente: Paciente;

    @ManyToOne(() => Personal, (personal) => personal.citas, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "personal_id", referencedColumnName: "id" }])
    personal: Personal;

    @ManyToOne(() => Centro, (centro) => centro.citas, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "centro_id", referencedColumnName: "id" }])
    centro: Centro;
}
