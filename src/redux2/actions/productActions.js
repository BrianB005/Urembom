import axios from 'axios'
import { PRODUCT_SEARCH_FAIL,PRODUCT_SEARCH_SUCCESS,PRODUCT_SEARCH_REQUEST,PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST, PRODUCT_CATEGORIES_REQUEST, PRODUCT_CATEGORIES_SUCCESS, PRODUCT_CATEGORIES_FAIL, PRODUCTS_IN_A_CATEGORY_REQUEST, PRODUCTS_IN_A_CATEGORY_SUCCESS, PRODUCTS_IN_A_CATEGORY_FAIL } from '../constants/productConstants'


export const LIST_PRODUCTS=(searchTerm,category)=>async(dispatch)=>{
  if (category){
    dispatch({type:PRODUCTS_IN_A_CATEGORY_REQUEST,payload:category})
    try {
      const { data } = await axios.get(`/products/category?category=${category}`);
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
      const { data } = await axios.get(`/products/search?search_query=${searchTerm}`);
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
      const { data } = await axios.get("/products");
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
      const { data } = await axios.get(`/products/categories`);
      dispatch({ type: PRODUCT_CATEGORIES_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: PRODUCT_CATEGORIES_FAIL,
        payload:
          error
      });
    }

  }


// import Axios from 'axios';
// import {
//   PRODUCT_CREATE_FAIL,
//   PRODUCT_CREATE_REQUEST,
//   PRODUCT_CREATE_SUCCESS,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_DETAILS_REQUEST,
//   PRODUCT_DETAILS_SUCCESS,
//   PRODUCT_LIST_FAIL,
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_UPDATE_REQUEST,
//   PRODUCT_UPDATE_SUCCESS,
//   PRODUCT_UPDATE_FAIL,
//   PRODUCT_DELETE_REQUEST,
//   PRODUCT_DELETE_FAIL,
//   PRODUCT_DELETE_SUCCESS,
//   PRODUCT_CATEGORY_LIST_SUCCESS,
//   PRODUCT_CATEGORY_LIST_REQUEST,
//   PRODUCT_CATEGORY_LIST_FAIL,
//   PRODUCT_REVIEW_CREATE_REQUEST,
//   PRODUCT_REVIEW_CREATE_SUCCESS,
//   PRODUCT_REVIEW_CREATE_FAIL,
// } from '../constants/productConstants';

// export const listProducts = ({
//   pageNumber = '',
//   seller = '',
//   name = '',
//   category = '',
//   order = '',
//   min = 0,
//   max = 0,
//   rating = 0,
// }) => async (dispatch) => {
//   dispatch({
//     type: PRODUCT_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(
//       `/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
//     );
//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//   }
// };

// export const listProductCategories = () => async (dispatch) => {
//   dispatch({
//     type: PRODUCT_CATEGORY_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(`/api/products/categories`);
//     dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
//   }
// };

// export const detailsProduct = (productId) => async (dispatch) => {
//   dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
//   try {
//     const { data } = await Axios.get(`/api/products/${productId}`);
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const createProduct = () => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_CREATE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       '/api/products',
//       {},
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data.product,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
//   }
// };
// export const updateProduct = (product) => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.put(`/api/products/${product._id}`, product, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
//   }
// };
// export const deleteProduct = (productId) => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = Axios.delete(`/api/products/${productId}`, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: PRODUCT_DELETE_SUCCESS });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
//   }
// };
// export const createReview = (productId, review) => async (
//   dispatch,
//   getState
// ) => {
//   dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       `/api/products/${productId}/reviews`,
//       review,
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: PRODUCT_REVIEW_CREATE_SUCCESS,
//       payload: data.review,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
//   }
// };
