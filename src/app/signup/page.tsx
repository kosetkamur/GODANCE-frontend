"use client";
import {createRef, useState} from "react";
import "./style.scss";
import {backendHost} from "@/lib/const";

const SignUp = () => {
    const [error, setError] = useState(null);
    const [errorMess, setErrorMess] = useState(null);

    async function handleSubmitClient(formData) {
        setError(null)

        const rawFormData = {
            login: formData.get('login'),
            password: formData.get('password'),
        }

        // const response = await fetch(`${backendHost}/api/bids.cooperation.create`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(rawFormData),
        // })
        // const data = await response.json()
        // setErrorMess(data);
        //
        // if (response.ok) {
        //     setError(false);
        //     ref.current.reset();
        // } else if (response.status === "400") {
        //     setError(true);
        //     ref.current.reset();
        // }else {
        //     setError(true);
        //     ref.current.reset();
        // }
    }

    const ref = createRef();

    const submitHandler = async (formData) => {
        const response = await handleSubmitClient(formData);
        if (response){
            ref.current.reset();
        } else {
            ref.current.reset();
        }
    }

    return (
        <div className="signup-page">
            <div className="signup-page__container">
                <h2>
                    Войти
                </h2>
                <form className="signup-page__container_form" ref={ref} action={submitHandler}>
                    <input
                        required
                        type="text"
                        name="login"
                        className="signup-page__container_form__input"
                        placeholder="Введите email"
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        className="signup-page__container_form__input"
                        placeholder="Введите пароль"
                    />
                    <button type="submit" className="signup-page__container_form__button">
                        Войти
                    </button>
                </form>
                <p className="signup-page__container_signin">
                    Если у вас еще нет аккаунта <a href="/signin" className="signup-page__container_signin__ref">зарегистрируйтесь</a>
                </p>
                {
                    error === true &&
                    <div style={{color: 'red'}}>
                        Произошла ошибка. Попробуйте войти еще раз.
                        <div>{ errorMess.field_problems.contact_phone ? errorMess.field_problems.contact_phone[0] : null }</div>
                        <div>{ errorMess.field_problems.email ? errorMess.field_problems.email[0] : null }</div>
                    </div>
                }
                { error === false && (<div style={{color: 'green'}}>Успешно</div>) }
            </div>
        </div>
    );
};

export default SignUp;