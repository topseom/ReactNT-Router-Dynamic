export const INCREASE = "increase";
export const DECREASE = "decrease";

export const couterIncrease = ()=>{
    return{
        type:INCREASE
    }
}

export const couterDecrease = ()=>{
    return{
        type:DECREASE
    }
}