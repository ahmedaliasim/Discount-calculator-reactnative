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
  msg1: "",
  modal: false,
  i : 1,
  j: 0,

 tableHead: ['Discount Price','Orignal Price' , 'Discount %', 'saved'],
  tableData: [
    ['', '', '', ''],
    
  ]


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

            for (let i = state.j; state.j < state.i; state.j += 1) {
   
    
    state.tableData.push([state.remaining + " Rs", state.orignalprice + " Rs" , state.hintNum + " Rs",      state.currentValue + " Rs"]);
  }

        return{

          currentValue: "Discount Price= " + state.currentValue + "Rs" ,
          msg: "Discount % = " + state.hintNum + "%",
          hintNum: "Orignal Price= " + state.orignalprice + "Rs",
          remaining: "saved= "+ state.remaining + "Rs",
          tableData: state.tableData


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

    state.cvalue1 = state.cvalue;

      return {
     
        cvalue:  state.currentValue + state.cvalue1 ,
        msg1:  state.msg + state.msg1,
        bvalue: state.hintNum + state.bvalue ,
        saveval:  state.remaining + state.saveval
      };

      case "back":
      if(state.start === 2){
       state.start = 1
      }
      return {
       start: state.start,
       //cvalue: "",
      // msg1: " ",
       check: "press ",
      // saveval: "",
      // bvalue:"",
       currentValue: "",
       hintNum: " ",
       check: "press ",
       msg: "Enter Amount",
       remaining: "",
       orignalprice:"",
       i: state.i + 1,
      
       
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
