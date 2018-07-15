import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  return <div className='tab-pane fade active show' id='nav-tab-card'>
    {/* <p class="alert alert-success">Some text success or error</p> */}
    <div id='pay_card_1'>
      <form role='form'>
        <div className='form-group'>
          <label htmlFor='username'>Full name (on the card)</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='user' /></span>
            </div>
            <input type='text' className='form-control' name='username' placeholder required />
          </div>
        </div>
        {/* form-group.// */}
        <div className='form-group'>
          <label htmlFor='cardNumber'>Card number</label>
          <div className='input-group'>
            <input type='text' className='form-control' name='cardNumber' placeholder />
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='credit-card' /></span>
            </div>
          </div>
        </div>
        {/* form-group.// */}
        <div className='row'>
          <div className='col-sm-8'>
            <div className='form-group'>
              <label><span className='hidden-xs'>Expiration</span> </label>
              <div className='input-group'>
                <input type='number' className='form-control' placeholder='MM' name />
                <input type='number' className='form-control' placeholder='YY' name />
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='form-group'>
              <label data-toggle='tooltip' title data-original-title='3 digits code on back side of the card'>CVV <FontAwesomeIcon icon='question-circle' /></label>
              <input type='number' className='form-control' required />
            </div>
            {/* form-group.// */}
          </div>
        </div>
        {/* row.// */}
        <button className='subscribe btn btn-primary btn-block' type='button' id='paycard1'> Confirm</button>
      </form>
    </div>
    <div id='pay_card_2' className='none'>
      <p className='alert alert-info text-center'>Please enter card PIN</p>
      <form role='form'>
        <div className='form-group'>
          <label htmlFor='username'>Card PIN</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='lock' /></span>
            </div>
            <input type='password' className='form-control' name='cardpin' placeholder='Card PIN' required />
          </div>
        </div>
        {/* form-group.// */}
        <button className='subscribe btn btn-primary btn-block' type='button' id='paycard2'> Confirm</button>
      </form>
    </div>
    <div id='pay_card_3' className='none'>
      <p className='alert alert-info text-center'>Please enter OTP sent to your phone number</p>
      <form role='form'>
        <div className='form-group'>
          <label htmlFor='username'>OTP PIN</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'><FontAwesomeIcon icon='key' /></span>
            </div>
            <input type='password' className='form-control' name='cardpin' placeholder='OTP' required />
          </div>
        </div>
        {/* form-group.// */}
        <button className='subscribe btn btn-primary btn-block' type='button' id='paycard3'> Confirm</button>
      </form>
    </div>
  </div>
}

export default Card
