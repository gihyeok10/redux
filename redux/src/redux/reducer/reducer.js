
let initialState = {
    counter:0,
    id:"",
    passworld:""

}


function reducer(state=initialState,action){

    console.log("액션은몰까",action)
    // if(action.type === "INCREMENT"){
    //     return {...state,counter: state.counter +1} //reducer가 새로운값을 던저주면 return으로 적용! ...한 이유는 여러개중에 counter만 바꿀라고

    // }

    switch(action.type){
        case "INCREMENT":
        return {...state, counter: state.counter +action.payload.num}

        case "LOGIN":
            return {...state,
                    id:action.payload.id,
                    passworld:action.payload.passworld}
        default:
        return {...state};
    }

}

export default reducer;