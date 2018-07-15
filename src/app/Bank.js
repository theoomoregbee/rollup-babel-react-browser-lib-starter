import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bank = (props) => {
  return <div className='tab-pane fade active show' id='nav-tab-bank'>
    <div id='pay_bank_1'>
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
        <div className='form-group'>
          <label>Account Number</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='band-aid' /></span>
            </div>
            <input type='text' className='form-control' name='acct_number' placeholder='Account number' required />
          </div>
        </div>
        <button className='subscribe btn btn-primary btn-block' type='button' id='paybank1'>Continue</button>
      </form>
    </div>
    <div id='pay_bank_2' className='none'>
      <p className='alert alert-info text-center'><strong>One Time Setup</strong><br />To confirm that you own this account, Kindly enter the OTP sent to your phone.</p>
      <form role='form'>
        <div className='form-group'>
          <label htmlFor='username'>OTP PIN</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='key' /></span>
            </div>
            <input type='password' className='form-control' name='otp' placeholder='OTP' required />
          </div>
        </div>
        {/* form-group.// */}
        <button className='subscribe btn btn-primary btn-block' type='button' id='paybank2'> Confirm</button>
      </form>
    </div>
  </div>
}

export default Bank
