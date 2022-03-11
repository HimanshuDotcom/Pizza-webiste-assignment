
const reducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS' :
          return {
            ...state,
            loading: false,
            items : action.payload
          }
        
        case 'FAIL' :
          return {
            ...state,
            loading: false,
            msg : action.payload
          }
  
        case 'SHOW_PIZZA' : 
          return {
            ...state,
            showPizza : true,
            showOrder : false
            
          }
  
        case 'SHOW_CART' :
          return {
            ...state,
            showOrder : true,
            showPizza : false
          }
        case 'ADD_ORDER' :
          const newOrder = {...state.orders};
          const id = action.payload;
          if(id in newOrder) newOrder[id]++;
          else newOrder[id] = 1;
          return {
            ...state,
            orders : newOrder
          }

          case 'REMOVE_ORDER' :
            const updatedOrders = {...state.orders};
            const _id = action.payload;
            console.log(_id,updatedOrders)
            if(updatedOrders[_id] === 1) delete updatedOrders[_id];
            else updatedOrders[_id] = updatedOrders[_id] - 1;
            return {
              ...state,
              orders: updatedOrders
            }

        
  
        default :
          return state
    }
  }

export default reducer;