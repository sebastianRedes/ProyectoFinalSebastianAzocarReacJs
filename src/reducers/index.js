const reducer =(state, action)=>{
    switch(action.type){
        case "SET_WISHLIST":
            console.log("wichlist",state.wichlistPokemon)
            return{
                ...state,
                wichlistPokemons: [...state.wichlistPokemons, action.payload],
                
            };

    case "DELETE_WISHLIST": 
    return{
        ...state,
        wichlistPokemons: state.wichlistPokemons.filter(
            (items) =>items.poke.id !== action.payload,
        ),
    };

    case "SET_SECTION": 
        return{
            ...state,
            sectionActive:action.payload
        };
        default:
            return state;
    }
};
export default reducer;
