import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/methods";






export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

   

 render(){

const message =  
     <View style = {styles.startgame}>
          
    <Row>

        <Button text = 'Start Discount Cal'  onPress={() => this.handleTap('proceed')}> </Button>

   </Row>

     </View>





const gameView =

      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style= {styles.borderz}>
          <Text style={styles.value}>
            {(this.state.currentValue).toLocaleString()}
          </Text>
          </Text>

        
          <Text style={styles.value}>
            {(this.state.hintNum).toLocaleString()}
          </Text>

         

        
          <Text style={styles.value}>
            {(this.state.msg).toLocaleString()}
          </Text>

        
          <Row>           
                
             <Button
              text="Process"
              theme="accent"
              onPress={() => this.handleTap("discount")}
            />
         

<Button
              text="next"
              theme="secondary"
              onPress={() => this.handleTap("enterdiscount")}
            />

          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
           
            
            
           
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
         
           
          
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
           
          
           
          </Row>


          <Row>
            
         
            <Button
              text="0"
              size="secondary"
              onPress={() => this.handleTap("number", 0)}
            />
            
            <Button
              text="Again"
              theme="secondary"
              onPress={() => this.handleTap( "reset")}
            />
           
           
              

          </Row>
        </SafeAreaView>
      </View> 


 



    return  <View style={styles.container}>
      {this.state.start === 0 ? message :gameView}
    </View>
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
    
  },
  startgame : {
   
    flex: -1,
    backgroundColor: "#202020", 
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10  
  },

  borderz: {
    textAlign: "left"
  }

});