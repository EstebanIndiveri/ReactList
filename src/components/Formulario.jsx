import React,{useState} from 'react'
import Errro1 from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre,guardarNombre]=useState('');
    const[cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);

    //agregar gasto
    const agregaGasto=e=>{
        e.preventDefault();
        
        //validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }
        // constriur el gasto
        guardarError(false);

        //pasar el gasto al componente principal
        const gasto={
            nombre,
            cantidad,
            id:shortid.generate()
        }
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //reset form
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form
        onSubmit={agregaGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error 
            ? <Errro1 mensaje="Ambos campos son obligatorios, Presupuesto incorrecto"/>
            :null}
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e=>guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Ej. $300"
                value={cantidad}
                onChange={e=>guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
        </form>
     );
}
 
Formulario.propTypes={
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
}

export default Formulario;