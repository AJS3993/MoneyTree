import React, {Component} from 'react';
import {MDBRow,MDBTable,MDBBtn,MDBTableHead,MDBTableBody,MDBCard, MDBContainer, MDBIcon,MDBCol,MDBBadge,MDBProgress} from 'mdbreact';
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
        cat: 'groceries,purple',
        num: "120000",
      },
      {
        desc: 'Banana',
        cat: 'groceries,purple',
        num: "300",
      },
    ],
    newPost: '',
    options: [
      {
        text: ["Bills","blue"]
      },
      {
        text: ["Groceries","purple"]
      },
      {
        text: ["Other","grey"]
      }],
      newCat: ''
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

  handleOnClickOpt = (e) => {
    this.state.newCat.split(',')
    this.setState(prevState => ({
      options:[{
        text: prevState.newCat.split(',')},...prevState.options]
    }))
    
  }

  render () {

    let total = 0

    let transactions = this.state.transactions.map((post, i) => {
      total += parseInt(post.num)
      return(
      <tr key={i}> 
          <td>{post.desc}</td>
          <td className="text-center"><MDBBadge color={post.cat.split(',')[1]}>{post.cat.split(',')[0]}</MDBBadge></td>
          <td className="text-right">{formatPrice(post.num)}</td>
         
         
          </tr>
      )
    }
  )

let categories = this.state.options.map((cat, c) => {
  return(
  <tr key={c}>
<td className={cat.text[1]}>
  {cat.text[0]}
  <MDBProgress material value={25}  height="20px">
        25%
      </MDBProgress>
</td>
  </tr>
  )
}
)

  let options = this.state.options.map((opt, o) => {
    return(
        <option key={o} value={opt.text} className="text-center">{opt.text[0]}</option>
       )})
       

  return (
   <>
   
   <MDBRow>
            <MDBCol md='1'></MDBCol>
            <MDBCol md='4'>
            <br/><br/>
            <MDBCard id='gcard' className='my-5 z-depth-2 p-2'>
            <MDBTable striped id="info_envio" className='z-depth-2'>
      <MDBTableHead>
        <tr className='border border-bottom-0 success-color'>
          
          <th className="text-center border-0 white-text font-weight-bold">Categories</th>
          
        </tr>
      </MDBTableHead>

      <MDBTableBody>

      {categories}
      

      </MDBTableBody>
    </MDBTable>
    <MDBContainer className='w-100 m-2'>

<input placeholder='New Category' type='text' name="newCat" className='w-50 mx-n2 my-1' onChange={this.handleOnChange}></input>
<select name="newCat" onChange={this.handleOnChange}  className="custom-select success-color w-25 m-3">
  <option>Color</option>
  <option name="newCat" value={this.state.newCat.concat(',red')}>red</option>
  <option>pink</option>
  <option>purple</option>
  <option>indigo</option>
  <option>blue</option>
  <option>cyan</option>
  <option>teal</option>
  <option>green</option>
  <option>yellow</option>
  <option>orange</option>
  <option>brown</option>
  <option>grey</option>

</select>
<MDBBtn floating className='my-2 mb-2' onClick={this.handleOnClickOpt}><MDBIcon className='success-text white' icon="plus" /></MDBBtn>
</MDBContainer>
           </MDBCard>
           </MDBCol>
        
           <MDBCol md='6'>
             <br/><br/>
           <MDBCard id='gcard' className='my-5 z-depth-2 p-2'>

   
   <div>
   <MDBTable small striped id="info_envio" className='z-depth-2'>
      <MDBTableHead>
        <tr className='border border-bottom-0 success-color'>
          <th className='border-0 white-text font-weight-bold px-2'>Name</th>
          <th className="text-center border-0 white-text font-weight-bold">Category</th>
          <th className="text-right border-0 white-text font-weight-bold pr-2">Amount</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>

      {transactions}
      <tr className='white-text success-color border'>
        <td className='font-weight-bold'>Total</td>
        <td></td>
      <td className="text-right font-weight-bold">{formatPrice(total)}</td>
      </tr>

      </MDBTableBody>
    </MDBTable>

      <div>


     
      <MDBContainer id='formC' className='pb-3'>

<MDBContainer className='w-100 m-2'>

            <input placeholder='Title' name="desc" value={this.state.desc} onChange={this.handleOnChange} className='w-50 mx-n2 my-1'></input>
       
            <select name="cat" onChange={this.handleOnChange} className="custom-select success-color w-25 float-right mr-n2">
            
            {options}
            </select>

        </MDBContainer>
        <br/>
        <MDBContainer className='w-75 border p-3 rounded float-left'>

        <input className='w-50 my-2' placeholder='amount' type='number' name="newPost" value={this.state.newPost} onChange={this.handleOnChange}></input>
        <span className=' border p-2 rounded white-text float-right'>{formatPrice(this.state.newPost)}</span>
        
        </MDBContainer> 
         
        <div className="d-flex justify-content-end">
        <MDBBtn size='lg' disabled={!this.state.cat || !this.state.newPost } floating className='m-3 mr-4' onClick={this.handleOnClick}><MDBIcon className='success-text white' icon="plus" /></MDBBtn>
        </div>
        </MDBContainer>
      </div>
    </div>
    </MDBCard>
           </MDBCol>
           <MDBCol md='1'></MDBCol>
           </MDBRow>
    </>
  );
  }
}
export default Tra;