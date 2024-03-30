import React from "react"
import { Form, useLoaderData, useActionData, redirect, useNavigation } from 'react-router-dom'
import { loginUser } from "../api"

export async function loader({ request }) {
    const url = new URL(request.url)
    return url.searchParams.get("message")
}

export async function action({ request }) {
    const url = new URL(request.url)
    const pathname = url.searchParams.get("redirectTo") || "/host"
    const formData = await request.formData()
    const email = formData.get("email") //name of input comp
    const password = formData.get("password")
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedIn", true)
        return redirect(pathname)
    }
    catch (err) {
        return err.message
    }
}

export default function Login() {
    const navigation = useNavigation()
    const error = useActionData()
    const message = useLoaderData()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error}</h3>}
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state == 'submitting' ? 'Logging In...' : 'Log in'}
                </button>
            </Form>
        </div>
    )
}