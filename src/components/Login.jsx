import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
const {loginUser ,  setUser}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email= form.get('email')
        const password= form.get('password')
        loginUser(email,password)
        .then(result=>{
            const user= result.user
            setUser(user)
        })
        .catch(err=>{
            const error=err.message
            console.log(error)
        })
        
    }
    return (
        <div className=" min-h-screen justify-center items-center flex">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className="text-4xl py-10 font-semibold text-center">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white rounded-none bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <p className=" text-center font-semibold mb-5">Don’t Have An Account ?<Link to={'/auth/register'} className="text-red-500"> Register</Link></p>
            </div>

        </div>
    );
};

export default Login;