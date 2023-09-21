
import Image from "next/image";
import LoginIllustration from "/public/images/illustrations/2.svg";

const LoginPage = () => {
  return (
    <section className="py-14">
      <div className="container flex items-center">
        <figure className="flex-1">
            <Image src={LoginIllustration} alt="Login image illustration"/>
        </figure>
        <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold capitalize mb-4">
                Access your nest
            </h1>
            <p className="text-gray-500">
                Login your Sphenews account to access exclusive contents
            </p>
            <form className="flex flex-col gap-5 mt-8">
                <div className="mb-3">
                    <input 
                        type="text" 
                        name="email_or_username" 
                        id="emailOrUsername" 
                        placeholder="Your Email Address or Username" 
                        className="form-control w-4/5"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        name="password" 
                        id="emailAddress" 
                        placeholder="Your Password" 
                        className="form-control w-4/5"
                    />
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-main w-4/5"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
