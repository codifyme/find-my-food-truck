// import React, { Component } from "react";
// import styled from "styled-components";
// import Clients from "../clients/clients";
// import AddClient from "../addClient/addClient";

// const Container = styled.section`
//   display: grid;
//   margin: ${props => props.margin || "10px"};
//   padding: ${props => props.padding || "10px 10px"};
//   grid-template-columns: ${props => props.gridTemplateColumns || ""};
//   grid-gap: ${props => props.gridGap || "30px"};
// `;

// const Card = styled.section`
//   height: ${props => props.height || "300px"};
//   width: ${props => props.width || "300px"};
//   background-color: burlywood;
//   border-radius: ${props => props.borderRadius || "30px"};
//   display: grid;
//   grid-template-rows: ${props => props.gridTemplateRows || ""};
//   grid-template-columns: ${props => props.gridTemplateColumns || "1fr 2fr 1fr"};
//   align-items: center;
//   padding: ${props => props.padding || "10px"};
// `;

// class Vendor extends Component {
//   state = {
//     clients: [
//       {
//         name: "Alicia Food Truck",
//         owner: "Alicia Rodriguez",
//         location: "Berkeley Marina",
//         openingTime: "9 AM- 5 PM",
//         menu: "Burrito, Nacho, Quesadilla, empalmes, tostadas, chalupa, elote",
//         id: 1
//       },
       
//       {
//         name: "Fonseca Food Truck",
//         owner: "German Fonseca",
//         location: "Berkeley Cedar Rose Park",
//         openingTime: "8 AM- 4 PM",
//         menu:
//           " tacos, tamales, gorditas, quesadillas, empalmes, tostadas, chalupa, elote, tlayudas, cemita, pambazo, empanada, nachos, chilaquiles, fajita and tortas, as well as fresh fruit, vegetables, beverages and soups such as menudo, pozole and pancita.",
//         id: 2
//       },
     
//       {
//         name: "Fajitas Truck",
//         owner: "Annibal Boscobonik",
//         location: "Berkeley Cedar Rose Park",
//         openingTime: "9 AM- 3 PM",
//         menu:
//           " quesadillas, empalmes, tostadas, chalupa, tacos, tamales, gorditas,  elote, tlayudas, cemita, pambazo, empanada, nachos, chilaquiles, fajita and tortas, as well as fresh fruit, vegetables, beverages and soups such as menudo, pozole and pancita.",
//         id: 3
//       }
//     ]
//   };

//   addClient = client => {
//     client.id = Math.random();
//     let clients = [...this.state.clients, client];
//     this.setState({
//       clients: clients
//     });
//   };

//   render() {
//     return (
//       <Container className="App">
//         <h1>Food Trucks in the East Bay</h1>

//         <Container>
//           <Card>
//           <AddClient addClient={this.addClient} />
//         </Card>
//         </Container>
        
//         <Container style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <ul> 
//              < Clients clients={this.state.clients}  />
//           </ul>  
//         </Container> 
             
                
//      </Container>
//     );
//   }
// }
// export default Vendor;
import React, { Component } from "react";
import styled from "styled-components";
import Clients from "../clients/clients";
import AddClient from "../addClient/addClient";
import "./vendor.styles.css";

const Container = styled.section`
  display: grid;
  margin: ${props => props.margin || "10px"};
  padding: ${props => props.padding || "10px 10px"};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap:${props => props.gridGap || "30px"};
  font-size: 20px;
  align-items: center;
`;

const Card = styled.section`
  height: ${props => props.height || "300px"};
  width: ${props => props.width || "300px"};
  background-color: burlywood;
  border-radius: ${props => props.borderRadius || "30px"};
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || "1fr 2fr 1fr"};
  align-items: center;
  padding: ${props => props.padding || "10px"};
`;

class Vendor extends Component {
  state = {
    clients: [
      {
        name: "Alicia Food Truck",
        owner: "Alicia Rodriguez",
        location: "Berkeley Marina",
        openingTime: "9 AM- 5 PM",
        menu: "Burrito, Nacho, Quesadilla, empalmes, tostadas, chalupa, elote.",
        id: 1
      },
      {
        name: "Fonseca Food Truck",
        owner: "German Fonseca",
        location: "Berkeley Cedar Rose Park",
        openingTime: "8 AM- 4 PM",
        menu:
          " tacos, tamales, gorditas, quesadillas, empalmes, tostadas, chalupa, elote, tlayudas, cemita, pambazo, empanada, nachos, chilaquiles, fajita and tortas, as well as fresh fruit, vegetables, beverages and soups such as menudo, pozole and pancita.",
        id: 2
      },
      {
        name: "Fajitas Truck",
        owner: "Annibal Boscobonik",
        location: "Berkeley Cedar Rose Park",
        openingTime: "9 AM- 3 PM",
        menu:
          " quesadillas, empalmes, tostadas, chalupa, tacos, tamales, gorditas,  elote, tlayudas, cemita, pambazo, empanada, nachos, chilaquiles, fajita, tortas, and also fruits, vegetables, beverages and soups such as menudo, pozole and pancita.",
        id: 3
      },
      {
        name: "Veronica's Food Truck",
        owner: "Veronica Rigo",
        location: "Jack London Square, Oakland",
        openingTime: "9 AM- 3 PM",
        menu:
          " tostadas, chalupa, elote, tlayudas, cemita, pambazo,tacos, tamales, gorditas, quesadillas, empalmes, empanada, nachos, chilaquiles, fajita and tortas, as well as fresh fruit, vegetables, beverages and soups such as menudo, pozole and pancita.",
        id: 4
      },
      {
        name: "Florencia's Food Truck",
        owner: "Florencia Calaza",
        location: "El Cerrito",
        openingTime: "10 AM- 4 PM",
        menu:
          " tacos, tamales,tostadas, chalupa, elote, tlayudas, cemita, pambazo, gorditas, quesadillas, empalmes, empanada, nachos, chilaquiles, fajita and tortas, as well as fresh fruit, vegetables, beverages and soups such as menudo, pozole and pancita.",
        id: 5
      }
    ]
  };
  addClient = client => {
    client.id = Math.random();
    let clients = [...this.state.clients, client];
    this.setState({
      clients: clients
    });
  };
  render() {
    return (
      <Container className="App">
        <h1>Food Trucks in the San Francisco Bay Area</h1>
​
        <Container>
          <Card>
            <AddClient addClient={this.addClient} />
          </Card>
        </Container>
​
        <Container style={{ flexDirection: "row", justifyContent: "center" }}>
          <ul>
            <Clients clients={this.state.clients} />
          </ul>
        </Container>
      </Container>
    );
  }
}
export default Vendor;
