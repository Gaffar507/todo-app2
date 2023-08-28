import React, { useContext, useEffect, useReducer, useState } from 'react'
import data from './data'
import Reducer  from './Reducer';
export const AppContext = React.createContext();

const url='https://course-api.com/react-useReducer-cart-project'

    const initialValue={
        isLoading:false,
        items:data,
        amount:0,
        total:0
    }
export const AppProvider = ({ children })=>{
     const [state, dispatch]=useReducer(Reducer,initialValue)
     const removeItem = (id)=>{
        dispatch({type:'REMOVE-ITEM', payload:id})
     }
     const increase = (id)=>{
        dispatch({type:'INCREASE', payload:id})
     }
     const decrease = (id)=>{
        dispatch({type:'DECREASE', payload:id})
     }
     const toggleAmount=(id,type)=>{
        dispatch({type:'TOGGLE', payload:{id, type}})
     }

     const fetchData=async()=>{
        dispatch({type:'LOADING'})
        const response=await fetch(url)
        const items=await response.json()
        dispatch({type:'GET-ITEMS', payload:items})
     }
    useEffect(()=>{
        fetchData()
    },[])
     useEffect(()=>{
        dispatch({type:'TOTAL-INFO'})
     },[state.items])

    return<AppContext.Provider value={{...state, removeItem, increase, decrease,toggleAmount}}>{ children }</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}