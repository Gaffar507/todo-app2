const Reducer = ( state,action)=>{

    if (action.type==='REMOVE-ITEM') {
        const items=state.items.filter((item)=>item.id!==action.payload )
        return{ ...state,
        items:items
        }
    }

    if (action.type==="TOTAL-INFO") {
        let{total,amount}=state.items.reduce((totalItem , mainItem)=>{
            const{price, amount}=mainItem
            const itemTotal=price*amount
            totalItem.total+=itemTotal
            totalItem.amount+=amount
            
            return totalItem
        },{
            total:0,
            amount:0
        })
        total=parseFloat(total.toFixed(2))
        return{...state, amount, total}
    }

    if (action.type==='LOADING') {
        return{...state, isLoading:true}
    }

    if (action.type==='GET-ITEMS') {
        return{...state, items:action.payload, isLoading:false}
    }

    if (action.type==='TOGGLE') {
        const newItem = state.items.map((item)=>{
            if (item.id===action.payload.id) {
            if (action.payload.type==='increase') {
                return{...item, amount: item.amount + 1}
            }
            if (action.payload.type==='decrease') {
                return{...item, amount: item.amount - 1}
            }
        }
        return item
        }).filter((item)=>item.amount!==0)
        return{...state, items:newItem}
    }

    // if (action.type==='INCREASE') {
    //     let newItems=state.items.map((item)=>{
    //             if (item.id===action.payload) {
    //         return {...item, amount: item.amount + 1}
    //     }
    //     return item
    //     }
    //     )
    //     return{...state, items: newItems}
    // }

    // if (action.type==='DECREASE') {
    //     let newItems=state.items.map((item)=>{
    //             if (item.id===action.payload) {
    //         return {...item, amount: item.amount - 1}
    //     }
    //     return item
    //     }
    //     ).filter((item)=>item.amount!==0)
    //     return{...state, items: newItems}
    // }

    return state
}

export default Reducer;