import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Ussd = (props) => {
  return <div className='tab-pane fade active show' id='nav-tab-ussd'>
    <div id='pay_ussd_1'>
      {/* <p class="alert alert-info text-center">Please enter OTP sent to your phone number</p> */}
      <form role='form'>
        <div className='form-group'>
          <label>Account Bank</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='university' /></span>
            </div>
            <select className='form-control' required>
              <option selected value>Zenith Bank</option>
              <option value>GTBank</option>
              <option value>Access Bank</option>
              <option value>Sterling Bank</option>
            </select>
          </div>
        </div>
        {/* form-group.// */}
        <div className='form-group'>
          <label>Account Number</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='band-aid' /></span>
            </div>
            <input type='text' className='form-control' name='acct_number' placeholder='Account number' required />
          </div>
        </div>
        {/* form-group.// */}
        <div className='form-group'>
          <label>Phone Number</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='mobile' /></span>
            </div>
            <input type='text' className='form-control' name='phone_number' placeholder='Phone number' required />
          </div>
        </div>
        {/* form-group.// */}
        <button className='subscribe btn btn-primary btn-block' type='button' id='payussd1'> Confirm</button>
      </form>
    </div>
    <div id='pay_ussd_2' className='none'>
      <p className='alert alert-info text-center'><strong>Authorization</strong><br />To Complete this transaction, please type *737*50*21*151#</p>
      <p className='alert text-center'>Your Transaction Reference 24405</p>
      <button className='subscribe btn btn-warning btn-block' type='button' id='payussd2'>.....Waiting.....</button>
    </div>
  </div>
}

export default Ussd
