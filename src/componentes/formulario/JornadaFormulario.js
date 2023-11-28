import { useState, useEffect } from "react";
import Menu from "../nav-bar/Menu";
import { useForm } from "../hooks/useForm";
import { provincias, municipios } from "../../MunicipiosYProvincias";
import Logo from "../../image/Logo.png"

function JornadaFormulario() {

  var today = new Date();
  
   
  const { formValues, handleInputChange}  = useForm({
    provincia: '',
    municipio: '',
    fecha: today.getMonth() + '/' + today.getDay() + '/' + today.getFullYear() + '',
    distrito: '',
    sector: '',
    coordinador: '',
    hogares: 0,
    mujeresH: 0,
    hombresH: 0,
    comerciales: 0,
    impactadasC: 0,
    educativos: 0,
    impactadasE: 0,
    otros: 0,
    impactadasO: 0,
    talleres: 0,
    mujeresT: 0,
    hombresT: 0
  });
  const { provincia, municipio, fecha, distrito, sector, coordinador, hogares, mujeresH, hombresH, comerciales, impactadasC, educativos, impactadasE, otros, impactadasO, talleres, mujeresT, hombresT } = formValues;
  const [registro, setRegistro] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    registrar();
    console.log(formValues);
    
  }


  const registrar = () => {
    if(validateInput(formValues)) {
      
    }
  }

  // Funcion que valida que ningun campo este vacio
  const validateInput = (obj) => {
    
    if(obj.provincia != '' && obj.municipio != '' && obj.distrito != '' && obj.sector != '' && obj.coordinador != '' && obj.fecha != '' && obj.hogares >= 0 && obj.mujeresH >= 0 && obj.hombresH >= 0 && obj.comerciales >=0 && obj.impactadasC >= 0 && obj.educativos >= 0 && obj.impactadasE && obj.otros >= 0 && obj.impactadasO >= 0 && obj.talleres >= 0 && obj.mujeresT >= 0 && obj.hombresT){
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    if(formValues.fecha === '') {
      formValues.fecha = new Date();
      setRegistro({formValues});
    } else {

    }
  });

  return (
    <>
      <Menu />
      <div className="container row">
        <img src={Logo} className="logo-login"/>
        <h3>Formulario Jornada 2023</h3>
        <form onSubmit={handleSubmit} className="col-12">
          <div className="input-field col s12">
            <h6>Provincia: </h6>
            <select name="provincia" defaultValue={formValues.provincia} className="browser-default" onChange={handleInputChange}>
            <option value="">Seleccione una provincia</option>
              {
                provincias?.map((provincia) => (
                  <option key={provincia.ID} value={provincia.ID}>{provincia.Descripcion}</option>
                ))
              }
            </select>
          </div>
          <div className="input-field col s12">
            <h6>Municipio: </h6>
            <select name="municipio" defaultValue="" className="browser-default" onChange={handleInputChange}>
            <option value="">Seleccione un municipio</option>
              {
                municipios?.map((municipio) => (
                  municipio.IDProvincia == formValues.provincia ? <option key={municipio.ID} value={municipio.ID}>{municipio.Descripcion}</option> : ""
                ))
              }
            </select>
          </div>
          <div className="input-field col s12">
            <h6>Fecha: </h6>
            <input 
              type="date" 
              name="fecha"
              id="fecha"
              onChange={handleInputChange}
              defaultValue={formValues.fecha}
              placeholder=''
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="distrito">Distrito municipal: </label>
            <input 
              type="text" 
              name="distrito"
              id="distrito"
              onChange={handleInputChange}
              
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="sector">Sector/Barrio: </label>
            <input 
              type="text" 
              name="sector"
              id="sector"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="coordinador">Coordinador: </label>
            <input 
              type="text" 
              name="coordinador"
              id="coordinador"
              onChange={handleInputChange}
            />
          </div>

          {/*---------------------------------------------------------------------*/}

          <div className="input-field col s6">
            <h6>Total de Hogares Visitados: </h6>
            <input 
              type="number" 
              name="hogares"
              id="hogares"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <h6>Mujeres: </h6>
            <input 
              type="number" 
              name="mujeresH"
              id="mujeresH"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <h6>Hombres: </h6>
            <input 
              type="number" 
              name="hombresH"
              id="hombresH"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>

          {/*---------------------------------------------------------------------*/}


          <div className="input-field col s7">
            <h6>Total Locales Comerciales Visitados: </h6>
            <input 
              type="number" 
              name="comerciales"
              id="comerciales"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s5">
            <h6>Personas Impactadas: </h6>
            <input 
              type="number" 
              name="impactadasC"
              id="impactadasC"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>

          {/*---------------------------------------------------------------------*/}


          <div className="input-field col s7">
            <h6>Total de Centros Educativos: </h6>
            <input 
              type="number" 
              name="educativos"
              id="educativos"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s5">
            <h6>Personas Impactadas: </h6>
            <input 
              type="number" 
              name="impactadasE"
              id="impactadasE"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>

          {/*---------------------------------------------------------------------*/}


          <div className="input-field col s7">
            <h6>Otros Espacios: </h6>
            <input 
              type="number" 
              name="otros"
              id="otros"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s5">
            <h6>Personas Impactadas: </h6>
            <input 
              type="number" 
              name="impactadasO"
              id="impactadasO"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>

          {/*---------------------------------------------------------------------*/}


          <div className="input-field col s6">
            <h6>Total Talleres con Adolecentes: </h6>
            <input 
              type="number" 
              name="talleres"
              id="talleres"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <h6>Mujeres: </h6>
            <input 
              type="number" 
              name="mujeresT"
              id="mujeresT"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field col s3">
            <h6>Hombres: </h6>
            <input 
              type="number" 
              name="hombresT"
              id="hombresT"
              defaultValue={0}
              onChange={handleInputChange}
            />
          </div>
            <button className="waves-effect waves-light btn blue darken-4 col s12">Guardar</button>
        </form>
      </div>
    </>
  );
}

export default JornadaFormulario;