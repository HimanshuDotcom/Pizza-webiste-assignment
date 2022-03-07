
const reducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS' :
          return {
            ...state,
            loading: false,
            items : action.payload
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
        
        case 'FILTER_VEG' :
          const newPizzas = state.items.filter((el) => el.isVeg === true)
          return {
            ...state,
            items: newPizzas
          }
  
        default :
          return state
    }
  }

export default reducer;