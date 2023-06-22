export enum tipoConsulta {
    estandar = "estandar",
    muestrade_examen = "muestra de examen",
    rutinario = "rutinario",
    primera_consulta = "primera consulta",
    pre_examen = "pre-examen",
    pos_examen = "pos-examen",
    toma_de_examen = "toma de examen"
}
export enum estadoCita {
    Reservado = "Reservado",
    confirmado = "confirmado",
    cancelado = "cancelado",
    retraso = "retraso",
    reagendado = "reagendado"
}
export enum estadoPago {
    por_pagar = "por pagar",
    pagado = "pagado",
    en_deuda = "en deuda"
}
export interface Cita {
    id: number;
    personal_id: number;
    centro_id: number;
    paciente_id: number;
    tipoConsulta: tipoConsulta;
    precio: number;
    fecha: Date;
    hora: Date;
    estadoPago: estadoPago;
    estadoCita: estadoCita;
    observation: string;
}