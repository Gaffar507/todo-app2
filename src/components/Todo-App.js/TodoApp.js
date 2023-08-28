import React, { useEffect, useState } from 'react'
import Alert from './Alert'
import List from './List'

import './todoApp.css';

const getItem=()=>{
    return localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')):[];
}
const TodoApp = () => {
    const[name, setName]=useState('')
    const[list, setList]=useState(getItem())
    const[alert, setAlert]=useState({type:false, style:'', message:''})
    const[isEdit, setEdit]=useState(false)
    const[editedId, setEditedId]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!name) {
            makeAlert(true,'danger', 'Please! add something.')
        }else if ( name && isEdit){
            setList((item)=>item.map((item)=>{
                if (item.id===editedId) {
                    return{...item,title:name}
                }
                return item;
            }))
            setEdit(false)
            setEditedId(null)
            setEdit(false)
            setName('')
            makeAlert(true ,'success','Edited is successfull.')
        }else{
        const newItems={ id: new Date().getTime().toString(), title:name}
        setList((item)=>
            [...item,newItems]
            )
        setName('')
        makeAlert( true, 'success' , 'Added task is successful')
        }
    }

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
    },[list])

    const makeAlert=(type=false, style='',message='')=>{
        setAlert({type, style, message})
    }

    const deleteItem=(id)=>{
        makeAlert( true, 'danger','Item is deleted!' )
        setList((list)=>list.filter((list)=>list.id!==id))
    }

    const editItem=(id)=>{
        const newName=list.find((item)=>item.id===id)
        setName(newName.title)
        setEditedId(id)
        setEdit(true)
    }
    const removeAll=()=>{
        makeAlert(true,'danger','All items is deleted!')
        setList([])
    }

  return (
    <div className='main-container'>
        <h1 className='title'>Todo App</h1>
        <form className='form-style' onSubmit={handleSubmit}>
            <div className='input-field'>
            <label htmlFor="item">Info: </label>
            <input type="text" id='item' name='item' placeholder='Add your task' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <button className='sub-btn' type='submit'>{isEdit? `Edit`:`Add`}</button>
        </form>
        {alert.type && <Alert alert={alert} removeShow={makeAlert} list={list}/>}
        <List list={list} deleteItem={deleteItem} editItem={editItem}/>
        <div>
            <button className='remove-all' onClick={()=>removeAll()}>Remove all items</button>
        </div>
    </div>
  )
}

export default TodoApp;
