

//Constantes
const dataInicial = {
    array :[],
    offset: 0
}

//Types
const OBTENER_PRODUCTS_EXITO = 'OBTENER_PRODUCTS_EXITO'

const SIGUIENTE_PRODUCTS_EXITO = 'SIGUIENTE_PRODUCTS_EXITO'
const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

//Reducer
export default function produReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_PRODUCTS_EXITO:
            return {...state, array: action.payload}
        case SIGUIENTE_PRODUCTS_EXITO:
             return {...state, array: action.payload.array, offset: action.payload.offset}
                        
        default:
            return state;
    }
}

//Acciones

export const obtenerProductsAccion = () => async (dispatch, getState) => {
      
       
    const getProductsError = (error) => {
        return {
          type: GET_PRODUCTS_ERROR,
          payload: error
        };
      };
    
    try {
        const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products');
        const json = await response.json();
      
       
        dispatch({
            type: OBTENER_PRODUCTS_EXITO,
            payload: json
            
        })
        console.log(json)
    } catch(error){
        dispatch(getProductsError)
        
    }
}/* 
export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {
    const {offset} = getState().pokemones
    const siguiente = offset + numero
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })

    } catch (error) {
        console.log(error)
    }
} */