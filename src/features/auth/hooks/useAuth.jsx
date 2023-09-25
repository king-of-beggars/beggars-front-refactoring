import { useEffect, useState } from "react"
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';

import { AuthAPI } from 'common/utils/api';
import { encrypt, decrypt } from "@feature-auth/utils/crypto";

function useAuth() {
    const location = useLocation()
    console.log("current location:::", location)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkLogin = () => {
        const refreshToken = decrypt(localStorage.getItem('refreshToken'))
        const userId = decrypt(localStorage.getItem('userId'))
        const nickname = decrypt(localStorage.getItem('nickname'))

        if (refreshToken && userId && nickname) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    const _setLogin = (accessToken, refreshToken, userId, nickname) => {
        localStorage.setItem('accessToken', encrypt(accessToken));
        localStorage.setItem('refreshToken', encrypt(refreshToken));
        localStorage.setItem('userId', encrypt(userId));
        localStorage.setItem('nickname', encrypt(nickname));
    }

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    const _mutation = useMutation(AuthAPI.postLogIn, {
        onSuccess: (response) => {
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;
            const userId = response.headers.userid;
            const nickname = response.headers.usernickname

            _setLogin(accessToken, refreshToken, userId, nickname)
            checkLogin()
            redirect("/")
        },
        onError: () => logout()
    })

    const login = (data) => {
        _mutation.mutate(data)
    }

    const redirect = (path) => {
        window.location.href = path
    }

    useEffect(() => {
        checkLogin()
    }, [location])

    return { isLoggedIn, login, logout, redirect }
}

export default useAuth;
