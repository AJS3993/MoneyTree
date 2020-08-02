import React, {Component} from 'react';
import {MDBSelect,MDBTable,MDBBtn,MDBTableHead,MDBTableBody,MDBCard, MDBContainer, MDBIcon} from 'mdbreact';
import './Transactions.css'

export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}


class Tra extends Component{
  state = {
    transactions: [
      {
        desc: 'milk',
        cat: 'groceries',
        num: "120000",
      },
      {
        desc: 'Banana',
        cat: 'groceries',
        num: "300",
      },
    ],
    newPost: '',
    options: [
      {
        text: "Rent",
        value: "1"
      },
      {
        text: "Groceries",
        value: "2"
      }]
  }
handleSelectChange = (e) =>{
 console.log(e)
}

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleOnClick = (e) => {
    this.setState(prevState => ({
      transactions:[{
        desc: prevState.desc,
        cat: prevState.cat,
        num: prevState.newPost},...prevState.transactions]
    }))
  }
  render () {
    let transactions = this.state.transactions.map((post, i) => {
      return(
        
        
      
   
      <tr key={i}> 
          
          
          <td  className="text-center">{post.desc}</td>
          <td className="text-center">{post.cat}</td>
          <td  className="text-right">{formatPrice(post.num)}</td>
         
          </tr>
      
     
  

      )
    })
  return (
   <>
   


   
   <div>

   <MDBTable small striped id="info_envio" className='z-depth-2'>
      <MDBTableHead>
        <tr className='border border-bottom-0 success-color'>
          <th className='border-0 white-text font-weight-bold px-2'>Name</th>
          <th className="text-center border-0 white-text font-weight-bold">Type</th>
          <th className="text-right border-0 white-text font-weight-bold pr-2">Amount</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>

      {transactions}
      </MDBTableBody>
    </MDBTable>

      <div>

<MDBCard id='formCard' className='p-2 m-3 success-color z-depth-2'>

<h3 className='white-text text-center'>Add Transaction</h3>

<MDBContainer className='w-100 '>


{/* <MDBSelect outline
getTextContent={this.handleSelectChange}
          className='px-2 m-0 w-50 float-right'
          options={this.state.options}
          color="success"
          label='cat'
        /> */}

  <input name="cat" onChange={this.handleOnChange}></input>
            <input className='w-50' placeholder='Title' name="desc" value={this.state.desc} onChange={this.handleOnChange}></input>
      
  </MDBContainer>

  <MDBContainer className='w-100'>

<input className='w-50' placeholder='$' type='number' name="newPost" value={this.state.newPost} onChange={this.handleOnChange}></input>
<span className='float-right'>{formatPrice(this.state.newPost)}</span>


       
        </MDBContainer>  
    
        <MDBContainer className='w-100 p-0 m-0'>
        <MDBBtn floating className='m-3 float-right' onClick={this.handleOnClick}><MDBIcon className='success-text white' icon="plus" /></MDBBtn>
        </MDBContainer> 
        </MDBCard>
      </div>
    </div>

    </>
  );
  }
}
export default Tra;