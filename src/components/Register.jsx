import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { createNewUser , setUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const form =new FormData(e.target)
        const name =form.get("name")
        const email=form.get("email")
        const photo=form.get("photo")
        const password=form.get("password")
        console.log(name, email, photo, password)
        createNewUser(email, password)
        .then(result=>{
            const user= result.user
            setUser(user)
        })
        .catch(err=>{
            const message = err.message
            console.log(message)
        })

    }
    return (
        <div className=" min-h-screen justify-center items-center flex">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <h2 className="text-4xl py-10 font-semibold text-center">Register your account</h2>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" 
                    name="name"
                    placeholder="enter name" 
                    className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"
                     placeholder="photo url"
                     name="photo"
                      className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                     placeholder="email" 
                     name="email"
                      className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                    placeholder="password" 
                    name="password"
                    className="input input-bordered" required />
                   
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white rounded-none bg-[#403F3F]">Login</button>
                </div>
            </form>
            <p className=" text-center font-semibold mb-5">Already Have An Account ?<Link to={'/auth/login'} className="text-blue-500"> Login</Link></p>
        </div>

    </div>
    );
};

export default Register;