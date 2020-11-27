export const initialState = {
    currentValue: "",
    hintNum: " ",
    check: "press ",
    start: 0,
    msg: "Enter Amount",
    orignalprice: ""
  };
  
  
  export const handleNumber = (value, state) => {
    if (state.check === "press ") {
      return { currentValue: state.currentValue + `${value}` ,
               msg:"press next",
               orignalprice: state.currentValue + `${value}`
               
               
             };
    }
  
    else if(state.check === "discount"){
      
        return { hintNum: state.hintNum + `${value}` ,
                 msg: "press process"
               
               
    };

    }
  };
  
  const methods = (type, value, state,text) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
  
     
  
        case "reset":
          return{
            currentValue: "",
            hintNum: " ",
            check: "press ",
            msg: "Enter Amount"
          } ;     
  
          

          case "discount":
            state.currentValue = parseInt(state.currentValue ) * parseInt(state.hintNum) / 100 

          return{

            currentValue: "Discounted Price =  " + state.currentValue ,
            msg: "",
            hintNum: "Orignal Price =  " + state.orignalprice

          }

          case "enterdiscount":

          return{

            check: "discount",
            msg:"Enter Discount"
          }
          
           case "proceed":
                state.start = 1;
           
           return state.start;
  
           default:
        return state;
    }
  };
  
  export default methods;
  