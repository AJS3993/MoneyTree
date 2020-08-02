import React from 'react';
import {
  MDBBadge,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBAvatar,
  MDBMask,
  MDBIcon,
  MDBBtn,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBCardGroup,
  MDBTable,
  MDBTableHead
} from 'mdbreact';
import './HomePage.css';
import Tra from '../Transactions'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  

  render() {
    return (
      <div id='landing'>
      <MDBNavbar light expand='md' fixed='top' scrolling  className='p-1 navbar'>
      
          
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} /> 
          <MDBCollapse
            id='navbarCollapse'
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              
              <MDBNavItem >
                <MDBNavLink to='#work' className='m-0 p-0'>
                <MDBBtn outline color="black" className='p-0' >
                <MDBIcon icon="tree" size="2x" className='black-text ml-2 mr-2 p-1 rounded mb-0 my-0'/>
                </MDBBtn>
                </MDBNavLink>
              </MDBNavItem>
             
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
            

            <MDBDropdown className='my-1'>
              <MDBDropdownToggle nav>
                
                <MDBBadge id='alert' className='p-2 border border-dark black-text'>
                  3 <MDBIcon size='lg' className='black-text' icon='bell' />
                </MDBBadge>
                
              </MDBDropdownToggle>
              <MDBDropdownMenu right color='success' style={{ minWidth: '400px' }} className='border border-success z-depth-3'>
                <MDBDropdownItem className='success-text' href='#!'>
                  <MDBIcon icon='money-bill-alt' className='mr-2' />
                  New order received
                  <span className='float-right'>
                    <MDBIcon icon='clock' /> 13 min
                  </span>
                </MDBDropdownItem>
                <MDBDropdownItem className='success-text' href='#!'>
                  <MDBIcon icon='money-bill-alt' className='mr-2' />
                  New order received
                  <span className='float-right'>
                    <MDBIcon icon='clock' /> 33 min
                  </span>
                </MDBDropdownItem>
                <MDBDropdownItem className='success-text' href='#!'>
                  <MDBIcon icon='chart-line' className='mr-2' />
                  Your campaign is about to end
                  <span className='float-right'>
                    <MDBIcon icon='clock' /> 53 min
                  </span>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            
           
           
            <MDBDropdown>
              <MDBDropdownToggle nav className='p-0 mr-3'>
              <MDBBtn outline rounded color="white" className='p-0' >
                <MDBAvatar tag='img' className="rounded-circle border" src='https://i.imgur.com/D7hW4hb.jpg' />
                </MDBBtn>
              </MDBDropdownToggle>
              <MDBDropdownMenu right color='success' style={{ minWidth: '200px' }} className='border border-success z-depth-3'>
                <MDBDropdownItem className='success-text' href='#!'>Log Out</MDBDropdownItem>
                <MDBDropdownItem className='success-text' href='#!'>My Account</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
              
            </MDBNavbarNav>
          </MDBCollapse>
        
      </MDBNavbar>

      <section id='home'>
       
          <MDBMask overlay='gradient' >
            
         
       


           <MDBRow>

             <MDBCol md='1'></MDBCol>
          
           <MDBCol md='3'>
           <br/><br/>
           <MDBCard id='gcard' className='my-5 z-depth-2 p-2'>
           <MDBCardGroup>
           <MDBCard className='cascading-admin-card red m-2 rounded z-depth-2 p-2'>
                <div>
                  <MDBIcon icon='cog' className='float-right m-2' size='sm' style={{ opacity: '.6' }}/>
                  <div className='data'>
                    <p>RENT</p>
                    <h4 className='font-weight-bold black-text'>$1200</h4>
                  </div>
                </div>
                <MDBProgress material value={65} height="20px" className='mb-0 border border-dark'>
                  65%
                </MDBProgress>

             
              </MDBCard>

              <MDBCard className='yellow m-2 rounded z-depth-2 p-2'>
                <div>
                  <MDBIcon icon='cog' className='float-right p-2' style={{ opacity: '.6' }} />
                  <div className='data'>
                    <p>BILLS</p>
                    <h4 className='font-weight-bold dark-grey-text'>200</h4>
                  </div>
                </div>
              
                <MDBProgress material value={25} height="20px" className='mb-0 border border-dark'>
                  25%
                </MDBProgress>
           
              </MDBCard>
</MDBCardGroup>

<MDBCardGroup>
           <MDBCard className='blue m-2 rounded z-depth-2 p-2'>
                <div>
                  <MDBIcon icon='cog' className='float-right m-2' size='sm' style={{ opacity: '.6' }}/>
                  <div className='data'>
                    <p>RENT</p>
                    <h4 className='font-weight-bold black-text'>$1200</h4>
                  </div>
                </div>
                <MDBProgress material value={65} height="20px" className='mb-0 border border-dark'>
                  65%
                </MDBProgress>

             
              </MDBCard>

              <MDBCard className='orange m-2 rounded z-depth-2 p-2'>
                <div>
                  <MDBIcon icon='cog' className='float-right p-2' style={{ opacity: '.6' }} />
                  <div className='data'>
                    <p>BILLS</p>
                    <h4 className='font-weight-bold dark-grey-text'>200</h4>
                  </div>
                </div>
              
                <MDBProgress material value={25} height="20px" className='mb-0 border border-dark'>
                  25%
                </MDBProgress>
           
              </MDBCard>
</MDBCardGroup>


</MDBCard>
           </MDBCol>

           <MDBCol md='4'></MDBCol>
            
             <MDBCol md='3'>
             <br/><br/>
           
           <MDBCard id='gcard' className='my-5 z-depth-2 p-2'>
         
           <Tra/> 
      
           </MDBCard>
          
           </MDBCol>
           <MDBCol md='1'></MDBCol>

           </MDBRow>
       
            
          </MDBMask>
  
      </section>
    </div>
    );
  }
}

export default HomePage;