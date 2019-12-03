import React from 'react'

const Clients = ({clients}) => {

  
  return (
    <div className="client-list">
      { 
        clients.map(client => {
          return client.id > 0 ? (
            <div className="client" key={client.id}>
              <div><strong>Name:</strong> { client.name }</div>
              <div>Owner: { client.owner }</div>
              <div>Location: { client.location }</div>
              <div>Opening time: {client.openingTime}</div>
              <div>Menu: {client.menu}</div>
            </div>
          ) :null
        })
      }
    </div>
  );

}

export default Clients;