
import { api, API_BASE_URL } from "../../Config/ApiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
  const {
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const {data}= await api.get(`/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
     console.log("product data", data)
    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const { productId } = reqData;
    try {
      const {data}= await api.get(`/api/products/id/${productId}`)
    
  
      dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
  };

  export const createProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
      const { data } = await api.post(`/api/admin/products/`, product);
      console.log("create product",data)
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };

  export const deleteProduct = (productId) => async (dispatch) => {
    try {
      dispatch({ type:DELETE_PRODUCTS_REQUEST });
      const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
      console.log("delete product",data)
      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
        payload: productId,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
  