import React from 'react';

class Login extends React.Component {
    render(){
        return (
            <div class="container">
                <div class="card card-container">
                    <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" />
                    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" class="profile-name-card"></p>
                    <form class="form-signin">
                        <span id="reauth-email" class="reauth-email"></span>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <div id="remember" class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    <a href="#" class="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
        )
    }
}

export default Login;

            // <div className="container" style={{ 'textAlign':'center', 'height':'300px' }}>
            //     <form  className="form-signin">
            //         <br />
            //         <br />
            //         <label htmlFor="inputEmail" className="sr-only">Email address</label>
            //         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            //         <label htmlFor="inputPassword" className="sr-only">Password</label>
            //         <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            //         <div className="checkbox" className="pull-left">
            //             <label>
            //                 <input type="checkbox" value="remember-me" /> Remember me
            //             </label>
            //         </div>
            //         <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            //     </form>
            // </div>


