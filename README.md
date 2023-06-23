

<h1 align="center"> ADC-Med(Backend) V 1.0 </h1>
<p align="center" > Proyecto con construido en base a <a href="http://nodejs.org" target="_blank">Node.js</a> y con el framework <a href ="http://nestjs.com/" > Nest.JS </a> y conectado a una base de datos <a href="https://www.mysql.com/"> MySQL</a>.
</p>
  
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

Este proyecto es una de las dos partes que componen el proyecto ADC-med, siendo este el backend,que esta compuesto por el framework [Nest](https://github.com/nestjs/nest) y que trabaja con una base de datos [MySQL](https://www.mysql.com/) y con el controlador de paquetes [yarn](https://yarnpkg.com/) 

## Instalación
para instalar las dependecia se utiliza el siguiente comando :
```bash
$ yarn install
```

## Para iniciar el proyecto

```bash
# desarrollo
$ yarn run start

# watch mode ( modo desarrollo directo )
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Pruebas

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Tecnologías Utilizadas

- Backend:
  - Node.js
  - Nest.js
  - TypeORM
  - MySQL
- Documentación:
  - Swagger: este se encuentra dentro del proyecto que podrás revisar una vez arranque la aplicación con la ruta ```/docs```

## Estructura del Proyecto

- **src**: Carpeta que contiene el código fuente del proyecto, cada entidad tiene los siguientes archivos :
  - **dto** : archivo donde que define los la estructura de las solicitudes HTTP 
  - **controllers**: Controladores para manejar las rutas y solicitudes HTTP.
  - **entities**: Definición de las entidades de la base de datos.
  - **repositories**: Repositorios para interactuar con la base de datos.
  - **services**: Lógica de negocio y operaciones de base de datos.
- **test**: Carpeta que contiene los archivos de prueba.


## Licencia

la licencia de este proyecto es la de Nest que es [MIT licensed](LICENSE).
# adc-med-backend
# adc-med-backend
