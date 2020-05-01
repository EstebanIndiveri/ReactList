import React,{Fragment,useState} from 'react';
import Error1 from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {
    //defino state de cantidad
    const[cantidad,guardarCantidad]=useState(0);

    //defino state de erro:
    const [error,guardarError]=useState(false);

    //leo presupuesto
    const definirPresupuesto=e=>{
        guardarCantidad(parseInt(e.target.value,10));
    }

    //submit:
    const agregarPresupuesto=e=>{
        e.preventDefault();
        //valido
        if(cantidad<1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //si se pasa
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error1 mensaje="El presupuesto es incorrecto"/>:null}

            <form 
            onSubmit={agregarPresupuesto}>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
            </form>
        </Fragment>

     );
}
Pregunta.propTypes={
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarRestante:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired
}
 
export default Pregunta;