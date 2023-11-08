import {useRef} from "react"

const RegisterForm = () => {
    const loginRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('https://109.71.9.102:5000/auth-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'login': loginRef.current.value,
                'password': passwordRef.current.value
            })
        })
    }

    return (
        <section className="text-gray-600 body-font mt-16 pt-16">
            <form className="p-8 m-auto max-w-xl flex flex-col gap-2 rounded-xl" onSubmit={onSubmit}>
                <label>Логин</label>
                <input ref={loginRef}
                       className="border border-gray-600 w-10/12 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
                       type="text"/>
                <label>Пароль</label>
                <input ref={passwordRef}
                       className="border border-gray-600 w-10/12 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
                       type="password"/>
                <button type={"submit"}>Войти</button>
            </form>
        </section>
    )
}

export default RegisterForm