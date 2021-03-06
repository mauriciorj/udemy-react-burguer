import * as actionTypes from './actionType';
import axios from '../../axios-order';

export const addIngredients = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredients = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};
export const fetchIngredientsFailed = () =>{
    return{
        type: actionTypes.FECTH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return (dispatch) => {
        axios.get('https://burguer-builder-10146.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
};