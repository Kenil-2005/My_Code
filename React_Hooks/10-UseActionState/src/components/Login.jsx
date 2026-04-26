import { loginUser } from '../api/user';
import { useId } from 'react';
import { useActionState } from 'react';

const Login = () => {

    // it help to manage the state of the form feild easelly.and it is in v19 of reactjs
    const [user, submitAction, isPending] = useActionState(login, {
        data: null,
        error: null,
    });

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(null);
    // const [isPending, setIsPending] = useState(null);
    const id = useId();
    const id1 = useId();

    async function login(prevState, formData) {

        const username = formData.get("username");
        const password = formData.get("password");

        try {
            const response = await loginUser(username, password);
            console.log(response);
            return { data: response.data, error: null }
        } catch (error) {
            console.log(error.error);
            return { data: null, error: error.error }
        }
    }


    return (
        <form action={submitAction}>
            <div>
                <label htmlFor={id}>UserName:</label>
                <input
                    type="text"
                    id={id}
                    name="username"
                    required
                />
            </div>
            <div>
                <label htmlFor={id1}>Password:</label>
                <input
                    type="password"
                    id={id1}
                    name="password"
                    required
                />
            </div>
            <button type='submit' disabled={isPending}>
                {isPending ? "Loggin in..." : "Login"}
            </button>

            {user?.data && <p style={{ color: "green" }}>Logged in: {user.data.email}</p>}
            {user?.error && <p style={{ color: "red" }}>{user.error}</p>}
        </form>
    )
}

export default Login;