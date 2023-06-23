-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2023 a las 02:38:51
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbmedic2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro`
--

CREATE TABLE `centro` (
  `id` int(11) NOT NULL,
  `telefono` int(9) NOT NULL,
  `email` varchar(255) NOT NULL,
  `horarioAtencion` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `centro`
--

INSERT INTO `centro` (`id`, `telefono`, `email`, `horarioAtencion`, `nombre`, `direccion`) VALUES
(1, 956030418, 'draegon1210@gmail.com', 'Lunes a Viernes / 09:00 - 17:00', 'Centro de desarrollo', 'avendia el sol 01929'),
(2, 926451277, 'marcelino.molinac@gmail.com', 'Lunes a Viernes / 09:00 - 17:00', 'Centro de Respaldo3', 'Repulica de Chile 250');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `observation` varchar(255) NOT NULL,
  `personal_id` int(11) DEFAULT NULL,
  `centro_id` int(11) DEFAULT NULL,
  `paciente_id` int(11) DEFAULT NULL,
  `tipoConsulta` enum('estandar','muestra de examen','rutinario','primera consulta','pre-examen','pos-examen','toma de examen') NOT NULL,
  `estadoPago` enum('por pagar','pagado','en deuda') NOT NULL,
  `estadoCita` enum('Reservado','confirmado','cancelado','retraso','reagendado') NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `precio`, `observation`, `personal_id`, `centro_id`, `paciente_id`, `tipoConsulta`, `estadoPago`, `estadoCita`, `fecha`, `hora`) VALUES
(1, 7990, '', 1, 1, 1, 'estandar', 'por pagar', 'Reservado', '2023-08-07', '11:00:00'),
(2, 5990, 'problema de espalda', 1, 1, 1, 'rutinario', 'pagado', 'confirmado', '2023-08-10', '13:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `edad` int(3) NOT NULL,
  `rut` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(9) NOT NULL,
  `redSocial` tinyint(4) NOT NULL,
  `prevision_id` int(11) DEFAULT NULL,
  `genero` enum('femenino','masculino','otros') NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `edad`, `rut`, `fechaNacimiento`, `direccion`, `email`, `telefono`, `redSocial`, `prevision_id`, `genero`, `nombre`, `apellido`) VALUES
(1, 24, '12345678-9', '1997-04-02', 'calle central 123', 'jane.dane@email.com', 88754949, 1, 1, 'femenino', 'jane', 'doe lopez'),
(2, 30, '11223344-9', '1999-12-10', 'calle central 123', 'pipe.lopez1@email.com', 52325458, 1, 1, 'masculino', 'felipe', 'lopez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `rut` varchar(255) NOT NULL,
  `edad` int(3) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `telefono` int(9) NOT NULL,
  `email` varchar(255) NOT NULL,
  `disponibilidad` tinyint(4) NOT NULL,
  `especialidad` varchar(255) NOT NULL,
  `centro_id` int(11) DEFAULT NULL,
  `genero` enum('femenino','masculino','otros') NOT NULL,
  `tipoPersonal` enum('administrador','receptor','doctor') NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`id`, `nombre`, `apellido`, `rut`, `edad`, `fechaNacimiento`, `telefono`, `email`, `disponibilidad`, `especialidad`, `centro_id`, `genero`, `tipoPersonal`, `username`, `password`) VALUES
(1, 'Marcelino Juan Antonio', 'Molina Carreño', '19262986-1', 26, '1996-06-17', 956030418, 'marcelino.molinac@gmail.com', 1, 'Desarrollo', 1, 'masculino', 'administrador', 'marcelino.molina', 'qwerty@1234'),
(2, 'Vicente', 'Molina Carreño', '25468795-1', 18, '2005-10-20', 956030418, 'marcelino.molinac@gmail.com', 1, 'Desarrollo', 2, 'masculino', 'administrador', 'vicente.molina', 'qwerty@1234'),
(3, 'Vicente', 'Molina Carreño', '25468795-1', 18, '2005-10-20', 956030418, 'marcelino.molinac@gmail.com', 1, 'Desarrollo', 2, 'masculino', 'administrador', 'vicente.molina', 'qwerty@1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prevision`
--

CREATE TABLE `prevision` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prevision`
--

INSERT INTO `prevision` (`id`, `nombre`) VALUES
(1, 'FONASA'),
(2, 'PARTICULAR'),
(3, 'ISAPRE CRUZ BLANCA S.A.'),
(4, 'ISAPRE CONSALUD S.A.'),
(5, 'ISAPRE COLMENA GOLDEN CROSS S.A.'),
(6, 'ISAPRE BANMÉDICA S.A.'),
(7, 'ISAPRE NUEVA MASVIDA S.A.'),
(8, 'ISAPRE VIDA TRES S.A.'),
(9, 'ISALUD ISAPRE DE CODELCO'),
(10, 'ISAPRE FUNDACIÓN ASISTENCIAL Y DE SALUD TRABAJADORES DEL BANCO DEL ESTADO DE CHILE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centro`
--
ALTER TABLE `centro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_8946dd5b3663de38659e9a3d186` (`personal_id`),
  ADD KEY `FK_d37a65586822f76ce6acfb6a139` (`centro_id`),
  ADD KEY `FK_573dda8b0ff6310f71cb31de2be` (`paciente_id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1d8081107f77f9e526d7621c5e8` (`prevision_id`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_43e80f97a01e42725ba69ec3c3b` (`centro_id`);

--
-- Indices de la tabla `prevision`
--
ALTER TABLE `prevision`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centro`
--
ALTER TABLE `centro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prevision`
--
ALTER TABLE `prevision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `FK_573dda8b0ff6310f71cb31de2be` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8946dd5b3663de38659e9a3d186` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_d37a65586822f76ce6acfb6a139` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `FK_1d8081107f77f9e526d7621c5e8` FOREIGN KEY (`prevision_id`) REFERENCES `prevision` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `FK_43e80f97a01e42725ba69ec3c3b` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
