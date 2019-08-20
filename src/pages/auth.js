import React, {useState, useEffect} from 'react';
import { Link, navigate } from "gatsby";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';

function Auth(props) {

    const [isLogged, setLogged] = useState(true)

    useEffect(() => {

        if(isLogged === false){
            navigate('/blog')
        }
       

    }, [isLogged]);

    const Login = () => {
        alert("Logging out")
        setLogged(false)
    }

  return (
<>
<h1>You are logged in</h1>

<button onClick={Login}>Logout</button>

</>
  );
}


export default Auth;
