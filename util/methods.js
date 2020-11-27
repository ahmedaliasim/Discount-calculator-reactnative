export const initialState = {
    currentValue: "",
    hintNum: " ",
    check: "press ",
    start: 0,
    msg: "Enter Amount",
    orignalprice: "",
    remaining: "",
    cvalue: "",
    saveval: "",
    bvalue:"",
    msg1: ""

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
            msg: "Enter Amount",
            remaining: "",
            orignalprice:"",          
           
          } ;     
  
          

          case "discount":
            state.currentValue = parseInt(state.currentValue ) * parseInt(state.hintNum) / 100 ;
            state.remaining =  parseInt(state.orignalprice ) - parseInt(state.currentValue )

          return{

            currentValue: "Discount Price= " + state.currentValue + "Rs" ,
            msg: "Discount % = " + state.hintNum + "%",
            hintNum: "Orignal Price= " + state.orignalprice + "Rs",
            remaining: "saved= "+ state.remaining + "Rs"

          }

          case "enterdiscount":

          return{

            check: "discount",
            msg:"Enter Discount"
          }
          
           case "proceed":
                state.start = 1;
           
           return state.start;



           
        
      case "show":
        return {
       
          cvalue:  state.currentValue ,
          msg1:  state.msg,
          bvalue: state.hintNum ,
          saveval:  state.remaining 
        };

        case "back":
        if(state.start === 2){
         state.start = 1
        }
        return {
         start: state.start,
         cvalue: "",
         msg1: " ",
         check: "press ",
         saveval: "",
         bvalue:"",
         currentValue: "",
         hintNum: " ",
         check: "press ",
         msg: "Enter Amount",
         remaining: "",
         orignalprice:"",
         
        };
        

            
      case "playagain":
        return {
          start:1,
          currentValue: "",
          hintNum: " ",
          check: "press ",
          msg: "Enter Amount",
          remaining: "",
          orignalprice:""

        };
      case "finish":
        return {
          
          start:0,
          currentValue: "",
          hintNum: " ",
          check: "press ",
          msg: "Enter Amount",
          remaining: "",
          orignalprice:""

        };
  
           default:
        return state;
    }
  };
  
  export default methods;
  