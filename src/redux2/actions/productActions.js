import axios from 'axios'
import { PRODUCT_SEARCH_FAIL,PRODUCT_SEARCH_SUCCESS,PRODUCT_SEARCH_REQUEST,PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST, PRODUCT_CATEGORIES_REQUEST, PRODUCT_CATEGORIES_SUCCESS, PRODUCT_CATEGORIES_FAIL, PRODUCTS_IN_A_CATEGORY_REQUEST, PRODUCTS_IN_A_CATEGORY_SUCCESS, PRODUCTS_IN_A_CATEGORY_FAIL } from '../constants/productConstants'


export const LIST_PRODUCTS=(searchTerm,category)=>async(dispatch)=>{
  if (category){
    dispatch({type:PRODUCTS_IN_A_CATEGORY_REQUEST,payload:category})
    try {
      const { data } = await axios.get(`https://stormy-dawn-71374.herokuapp.com/api/v1/products/category?category=${category}`);
      dispatch({ type: PRODUCTS_IN_A_CATEGORY_SUCCESS, payload: data });
      // console.log(data);
      console.log(category);
    } catch (error) {
      dispatch({
        type: PRODUCTS_IN_A_CATEGORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
  if(searchTerm){

    dispatch({type:PRODUCT_SEARCH_REQUEST,payload:searchTerm})
    try {
      const { data } = await axios.get(`https://stormy-dawn-71374.herokuapp.com/api/v1/products/search?search_query=${searchTerm}`);
      dispatch({type:PRODUCT_SEARCH_SUCCESS,payload:data,searchTerm:""})
    } catch (error) {
      dispatch({
        type: PRODUCT_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    } 
    }
  
  else{
    dispatch({type:PRODUCT_LIST_REQUEST})
    try {
      const { data } = await axios.get("https://stormy-dawn-71374.herokuapp.com/api/v1/products");
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
}
  
  
  


export const GetCategories=()=>async(dispatch)=>{
 
    dispatch({type:PRODUCT_CATEGORIES_REQUEST})
    try {
      const { data } = await axios.get(`https://stormy-dawn-71374.herokuapp.com/api/v1/products/categories`);
      dispatch({ type: PRODUCT_CATEGORIES_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: PRODUCT_CATEGORIES_FAIL,
        payload:
          error
      });
    }

  }


