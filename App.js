import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView , Modal, ScrollView } from "react-native";
import { Table, TableWrapper,Row, Rows, Col } from 'react-native-table-component';
import Row1 from "./components/Row1";
import Button from "./components/Button";
import methods, { initialState } from "./util/methods";






export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => methods(type, value, state));
  };

   handlemodal = () => {

      this.setState({
        modal: !this.state.modal ? true : false
      })

   }

 render(){

const message =  
     <View style = {styles.startgame}>
          
    <Row>

        <Button text = 'Start Discount Cal'  onPress={() => this.handleTap('proceed')}> </Button>

   </Row>

     </View>


const history =
<ScrollView>
<View style={styles.container1}>
        <Table borderStyle={{borderWidth: 1}}>
        <Row data={this.state.tableHead} flexArr={[1.4, 1.6, 1.7, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={this.state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={this.state.tableData} flexArr={[1.3, 1.4, 1.7]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>     
        <Row1>
    
   
    
      <Button
       text="Back"
       theme="secondary"
       onPress={() => this.handleTap('back')}
     />
    
    </Row1>

      </View>
</ScrollView>


const Discal=

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

          <Text style={styles.value}>
          {(this.state.remaining).toLocaleString()}
            
          </Text>
          

        
          <Row1>           
                
             <Button
              text="Process"
              theme="accent"
              onPress={() => this.handleTap("discount")}
            />
         

             <Button
              text="Next"
              theme="secondary"
              onPress={() => this.handleTap("enterdiscount")}
            />

              <Button
              text="Save"
              theme="secondary"
              onPress={() => this.setState({start:2})}
            />

             

          </Row1>



            <Modal visible = {this.state.modal}>
            
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

          <Text style={styles.value}>
          {(this.state.remaining).toLocaleString()}
            
          </Text>

            

<Row1>
            <Button text="closeHistory" onPress={(this.handlemodal)} />
           
           
          
           
          </Row1>

            </Modal>



          <Row1>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
           
            
            
           
          </Row1>

          <Row1>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
         
           
          
          </Row1>

          <Row1>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
           
          
           
          </Row1>


          <Row1>
            <Button
              text="History"
              theme="secondary"
              onPress={(this.handlemodal)}
            />
         
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
           
           
              

          </Row1>
        </SafeAreaView>
      </View> 


 



    return  <View style={styles.container}>
       {this.state.start === 0 ? message :(this.state.start === 1 ?Discal:history)}
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
 
  container1: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#202020' },
  head: {  height: 40,  backgroundColor: '#2a6948'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' ,
          color: "#fff"},

  borderz: {
    textAlign: "left"
  }

});