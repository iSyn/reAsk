import React from 'react'
import '../userModal.css'

class SignInModal extends React.Component {

  switchToCreate() {

    const createAccountModal = document.querySelector('.create-account-modal')
    const loginAccountModal = document.querySelector('.login-account-modal')

    if (loginAccountModal.style.display = 'block') {
      createAccountModal.style.display = 'block'
      loginAccountModal.style.display = 'none'
    }

    // if ($('.login-account-modal').css('display') == 'block') {
    //   $('.create-account-modal').css('display', 'block')
    //   $('.login-account-modal').css('display', 'none')
    // }
  }

  render() {
    return(
      <div className='login-account-modal'>
        <header>Log In</header>
        <div className='circle'></div>
        <form action="/users" method='post'>
          <input
            type="text"
            name="user[username]"
            placeholder="Username *"
            autoComplete="off"
            required="required"
            // onChange={function() {}}
            /> <br />
          <input
            type="password"
            name="user[password]"
            placeholder="Password *"
            autoComplete="off"
            required="required"
            // onChange={function() {}}
            /> <br />
          <p className='login-text' onClick={this.switchToCreate.bind(this)}><i>If you don't have an account, create one here</i></p>
          <input className='create-acc-btn' type="submit" value='Log In' />
        </form>
      </div>
    )
  }
}

export default SignInModal
