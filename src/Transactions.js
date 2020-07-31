import React from 'react';
import {MDBTableHead, MDBTableBody,MDBTable,MDBBadge} from 'mdbreact';
import './Transactions.css'



export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}




class Tra extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        formValues: {},
        transactions: []
    }
}

 
handleChange(event) {
  event.preventDefault();
  let formValues = this.state.formValues;
  let name = event.target.name;
  let value = event.target.value;

  formValues[name] = value;

  this.setState({formValues})
}

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state.formValues);

  this.setState({ 
   transactions: this.state.transactions.concat(this.state.formValues)
  })
}
  
  render(){
    return (
      <>
       

     

 

<MDBTable small striped id="info_envio" className='z-depth-2'>
      <MDBTableHead>
        <tr className='border border-bottom-0 success-color'>
          <th className='border-0 white-text font-weight-bold px-2'>Name</th>
          <th className="text-center border-0 white-text font-weight-bold">Type</th>
          <th className="text-right border-0 white-text font-weight-bold pr-2">Amount</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
      {
          this.state.transactions.map((k)=>{
            return (
              <tr>
                <td key={k}>{k.name}</td>
                <td className="text-center" key={k}>{k.type}</td>
                <td className="text-right" key={k}> <MDBBadge className='p-2 z-depth-2'>{formatPrice(k.amount)}</MDBBadge></td>
                </tr>
              )
          })
        }
      </MDBTableBody>
    </MDBTable>
<form onSubmit={this.handleSubmit.bind(this)}>
  
  <label> Name:
  <input type='text' name="name"  value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)}/>
  </label>

  <label> Type:
  <input type='text' name="type"  value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}/>
  </label>

  <label> Amount:
  <input type='text' name="amount"  value={this.state.formValues["amount"]} onChange={this.handleChange.bind(this)}/>
  </label>
  
  <input type="submit" value="Submit" />
</form>

      </>
    )
  }
}

export default Tra;
