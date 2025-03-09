import { useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import DialogueAPI from "../../api";
import { useLocation, useNavigate } from "react-router";


function AuthProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    /*const data = `{"id":1868,"status":"active","email":"levayadev@yandex.ru","newEmail":null,"role":"student","confirmedEmail":false,"isEmailChanged":false,"purchasedCoursesIds":[],"createdCoursesIds":[],"cartCoursesIds":[],"favouritesIds":[],"profile":{"id":1874,"firstName":"Анастасия","lastName":"Жукова","competence":"","site":"","bio":"","photo":""},"areReviewBlocked":false}`;*/
    const [account, setAccount] = useState(/*JSON.parse(data)*/undefined);

    useEffect(() => {
        if (account) refreshData();
    }, [location.pathname]);

    const refreshData = () => {
        return DialogueAPI.getMe()
            .then(response => {
                setAccount(response);
            });
    };

    const login = (email, password) => {
        return DialogueAPI.login({ email: email, password: password })
            .then(refreshData)
            .catch(() => {
                setAccount(undefined);
            });
    };

    const logout = () => {
        DialogueAPI.logout()
            .then(() => setAccount(undefined))
            .catch(() => setAccount(undefined))
            .then(() => {
                for (let cookie of document.cookie.split(";")) {
                    document.cookie = cookie + "; max-age=0"
                }

                navigate("/");
            });
    };

    return (
        <AuthContext.Provider value={{ account, refreshData, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;