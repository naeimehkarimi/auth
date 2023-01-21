import React from "react";
import Cookies from 'js-cookie';
import {Navigate} from 'react-router-dom'


const authenticatedRoute = (Component ) => {
    class AuthenticatedRoute extends React.Component {

        state = {
            avalilable: false,
        };

        componentDidMount() {
            const checkLogin= Cookies.get('user-data');
            if ( ( checkLogin )) {
                this.setState({ avalilable: true });
            } else {
                <Navigate to="/"  />
      
            }
        }

        render() {
            const { avalilable } = this.state;
            if (!avalilable) {
                return <div>log in please</div>
            }else{
                return <Component {...this.props} />;
            }
        }
    }

    return AuthenticatedRoute;
};

export default authenticatedRoute;