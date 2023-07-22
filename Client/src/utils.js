import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

export const getUserIdFromToken = () => {

    const authToken = Cookies.get('authToken');

    if(!authToken){
        return null
    }

    const decodedToken = jwtDecode(authToken);

    const userId = decodedToken.userid;

    return userId;
};