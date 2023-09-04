import express from "express";
import { limitQuery } from "../helpers/limit.js";
import { getAnimales } from '../controllers/v1/animales.js'; //Esto es temporal mientras se implementan las versiones
import { getEmpleados, postEmpl } from '../controllers/v1/empleados.js'; //Esto es temporal mientras se implementan las versiones
import { getInfra, postInfra } from "../controllers/v1/infraestructura.js"; //Esto es temporal mientras se implementan las versiones
import { getHM, postHM } from "../controllers/v1/historial_mantenimiento.js"; //Esto es temporal mientras se implementan las versiones
import { getHMed, postHMed } from "../controllers/v1/historial_medico.js"; //Esto es temporal mientras se implementan las versiones
import { getEventos, postEventos } from "../controllers/v1/eventos.js"; //Esto es temporal mientras se implementan las versiones
import { getFinanzas, postFinanzas } from "../controllers/v1/finanzas.js"; //Esto es temporal mientras se implementan las versiones
import { getOrg, postOrg } from "../controllers/v1/organizaciones.js"; //Esto es temporal mientras se implementan las versiones
import { deleteEmpleado, getEmpleadoId, getEmpleados,postEmpl, putEmpleado } from '../controllers/empleados.js';
import { deleteInfra, getInfra, getInfraId, postInfra } from "../controllers/infraestructura.js";
import { deleteHM, getHM, getHMId, postHM } from "../controllers/historial_mantenimiento.js";
import { deleteHMed, getHMed, getHMedId, postHMed } from "../controllers/historial_medico.js";
import { deleteEventos, getEventoId, getEventos, postEventos } from "../controllers/eventos.js";
import { deleteFinanza, getFinanzaId, getFinanzas, postFinanzas } from "../controllers/finanzas.js";
import { getOrg,postOrg } from "../controllers/organizaciones.js";

//import {appValidateEmpl,middlewareEmpl,DTOEmpl} from '../middleware/empleados.js'

//const appEmpleados = express();
//appEmpleados.use(express.json());

//const appInfraestructura = express();
//appInfraestructura.use(express.json());

//const appHMant=express();
//appHMant.use(express.json());

//const appHMed = express();
//appHMed.use(express.json());

function configurarApp() {
  const app = express();
  app.use(express.json());
  return app;
}

const appAnimales = configurarApp();
const appEmpleados = configurarApp();
const appInfraestructura = configurarApp();
const appHMant = configurarApp();
const appHMed = configurarApp();
const appEventos = configurarApp();
const appFinanzas = configurarApp();
const appOrg = configurarApp();

appAnimales.get("/all", limitQuery(), getAnimales);
appAnimales.post("/animales", limitQuery(), postEmpl); //PENDIENTE POR TESTEAR

appEmpleados.get("/empl", limitQuery(), getEmpleados);
appEmpleados.post("/empl", limitQuery(), postEmpl);

appInfraestructura.get("/infra", limitQuery(), getInfra);
appInfraestructura.post("/infra", limitQuery(), postInfra);

appHMant.get("/hmant", limitQuery(), getHM);
appHMant.post("/hmant", limitQuery(), postHM);

appHMed.get("/hmed", limitQuery(), getHMed);
appHMed.post("/hmed", limitQuery(), postHMed);

appEventos.get("/eventos", limitQuery(), getEventos);
appEventos.post("/eventos", limitQuery(), postEventos);
appEmpleados.get("/empl", limitQuery(),getEmpleados);
appEmpleados.get("/empl/:id",limitQuery(),getEmpleadoId);
appEmpleados.post("/empl",limitQuery(),postEmpl);
appEmpleados.put("/empl/:id", limitQuery(),putEmpleado)
appEmpleados.delete("/empl/:id",limitQuery(),deleteEmpleado)

appInfraestructura.get("/infra",limitQuery(),getInfra);
appInfraestructura.get("/infra/:id", limitQuery(),getInfraId);
appInfraestructura.post("/infra", limitQuery(),postInfra);
appInfraestructura.delete("/infra/:id",limitQuery(),deleteInfra);

appHMant.get("/hmant",limitQuery(),getHM);
appHMant.get("/hmant/:id",limitQuery(),getHMId);
appHMant.post("/hmant",limitQuery(),postHM);
appHMant.delete("/hmant/:id",limitQuery(),deleteHM);

appHMed.get("/hmed",limitQuery(),getHMed);
appHMed.get("/hmed/:id",limitQuery(),getHMedId);
appHMed.post("/hmed",limitQuery(),postHMed);
appHMed.delete("/hmed/:id",limitQuery(),deleteHMed)

appEventos.get("/eventos", limitQuery(),getEventos);
appEventos.get("/eventos/:id",limitQuery(),getEventoId);
appEventos.post("/eventos", limitQuery(),postEventos);
appEventos.delete("/eventos/:id",limitQuery(),deleteEventos);

appFinanzas.get("/finanzas",limitQuery(),getFinanzas);
appFinanzas.get("/finanzas/:id",limitQuery(),getFinanzaId);
appFinanzas.post('/finanzas',limitQuery(),postFinanzas);
appFinanzas.delete("/finanzas/:id",limitQuery(),deleteFinanza);

appFinanzas.get("/finanzas", limitQuery(), getFinanzas);
appFinanzas.post('/finanzas', limitQuery(), postFinanzas);

appOrg.get("/org", limitQuery(), getOrg);
appOrg.post("/org", limitQuery(), postOrg)

export {  appAnimales,  appEmpleados, appInfraestructura, appHMant, appHMed, appEventos, appFinanzas, appOrg };

export {
  appEmpleados,
  appInfraestructura,
  appHMant,
  appHMed,
  appEventos,
  appFinanzas,
  appOrg
};
