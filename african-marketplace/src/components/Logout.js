import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const { push } = useHistory();
        push('/login');
    return (<div></div>);
}

export default Logout;