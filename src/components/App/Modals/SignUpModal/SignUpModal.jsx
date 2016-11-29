/*nothing*/
import React from 'react'
import '../userModal.css'

class SignUpModal extends React.Component {

  switchToLogin() {

    const createAccountModal = document.querySelector('.create-account-modal')
    const loginAccountModal = document.querySelector('.login-account-modal')

    if (createAccountModal.style.display = 'block') {
      createAccountModal.style.display = 'none'
      loginAccountModal.style.display = 'block'
    }

    // if($('.create-account-modal').css('display') == 'block') {
    //   $('.create-account-modal').css('display', 'none')
    //   $('.login-account-modal').css('display', 'block')
    // }
  }

  render() {
    return(
      <div className='create-account-modal'>
        <header>Create Account</header>
        <div className='circle'></div>
        <form action="users/create" method='post'>
          <input
            type="text"
            name="user[username]"
            // value=""
            placeholder="Username *"
            autoComplete="off"
            required="required"
            /> <br />
          <input
            type="email"
            name="user[email]"
            // value=""
            placeholder="Email"
            autoComplete="off"
            /> <br />
          <select name="user[course]" required="required">
            <option value="" disabled selected>Select your course</option>
            <option value="wholphons">WDI Wholphins</option>
            <option value="zonkeys">WDI Zonkeys</option>
            <option value="anon">Some trash class</option>
            <option value="anon">Another trash class</option>
          </select> <br />
          <input
            type="password"
            name="user[password]"
            // value=""
            placeholder="Password *"
            autoComplete="off"
            required="required"
            /> <br />
          <input
            type="password"
            name='user[confirmpassword]'
            // value=""
            placeholder="Confirm Password *"
            autoComplete="off"
            required="required"
            /> <br />
          <p className='login-text' onClick={this.switchToLogin.bind(this)}><i>If you already have an account, log in here</i></p>
          <input className='create-acc-btn' type="submit" value='Create New Account' />
        </form>
      </div>
    )
  }
}

export default SignUpModal
