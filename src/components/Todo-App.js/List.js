import React from 'react'
import { MdDelete } from "react-icons/md";
import { BiEdit} from "react-icons/bi";

const List = ({list,deleteItem ,editItem}) => {
  return (
      <section className='item-container'>
        {list.map((item)=>{
            const{id,title}=item;
            return(
                <div className='items'  key={id} >
                    <article className='item'><h3>{title}</h3></article>
                    <div className='btn-container'>
                        <button className='edit-btn' type='edit' onClick={()=>{editItem(id)}}><BiEdit/></button>
                        <button className='delete-btn' type='delete' onClick={()=>{deleteItem(id)}}><MdDelete/></button>
                    </div>
                </div>
            )
        })}
      </section>
  )
}

export default List
