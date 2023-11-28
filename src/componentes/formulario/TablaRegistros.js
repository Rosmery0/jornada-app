import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu from "../nav-bar/Menu";
import { registros, provincias, municipios } from "../../MunicipiosYProvincias"
import Logo from "../../image/Logo.png";

function TablaRegistro () {
    return (
        <>
            <Menu />
            <div className="container row">            
                <img src={Logo} className="logo-login"/>
                <h3>Registros Jornada 2023</h3>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Provincia:</th>
                            <th>Municipio: </th>
                            <th>Sector: </th>
                            <th>Fecha: </th>
                            <th>Total impactados: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registros?.map((r, i) => (
                                <tr key={i}>
                                    <td key={i+1}>{provincias?.map((p) => p.ID == r.provincia ? p.Descripcion : '')}</td>
                                    <td key={i+2}>{municipios?.map((m) => m.ID == r.municipio ? m.Descripcion : '')}</td>
                                    <td key={i+3}>{r.sector}</td>
                                    <td key={i+4}>{r.fecha}</td>
                                    <td key={i+5}>0</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TablaRegistro;