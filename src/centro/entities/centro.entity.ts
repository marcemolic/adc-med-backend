import { Cita } from "src/cita/entities/cita.entity";
import { Personal } from "src/personal/entities/personal.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("centro", { schema: "dbmedic2" })
export class Centro {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("int", { name: "telefono" })
    telefono: number;

    @Column("varchar", { name: "email", length: 255 })
    email: string;

    @Column("varchar", { name: "horarioAtencion", length: 255 })
    horarioAtencion: string;

    @Column("varchar", { name: "nombre", length: 255 })
    nombre: string;

    @Column("varchar", { name: "direccion", length: 255 })
    direccion: string;

    @OneToMany(() => Cita , (cita) => cita.centro)
    citas: Cita[];

    @OneToMany(() => Personal , (personal) => personal.centro)
    personals: Personal[];
}
