import Image from "next/image";
import Link from "next/link";
import LoginIllustration from "/public/images/illustrations/2.svg";
import LoginIllustrationDark from "/public/images/illustrations/2-dark.svg";

const LoginPage = () => {
  return (
    <section className="py-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <figure className="hidden md:block">
            <Image src={LoginIllustration} alt="Login image illustration" className="block dark:hidden"/>
            <Image src={LoginIllustrationDark} alt="Login image illustration" className="hidden dark:block"/>
        </figure>
        <div className="w-full">
            <h1 className="text-3xl font-bold capitalize mb-4">
                Ready to Dive <br /> into the Knightship?
            </h1>
            <p className="text-gray-500 dark:text-main-300">
                Login to your Sphenews account and continue your journey as an author in style.
            </p>
            <form className="flex flex-col gap-5 mt-8">
                <div className="mb-3">
                    <input 
                        type="email" 
                        name="email" 
                        id="emailAddress" 
                        placeholder="Email Address" 
                        className="form-control w-full md:w-4/5"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        className="form-control w-full md:w-4/5"
                    />
                </div>
                <div className="mb-3">
                    <input type="checkbox" name="remember_me" id="rememberMe" className="mr-3"/>
                    <label htmlFor="rememberMe">
                        Remember Me
                    </label>
                </div>
                <div className="mb-3">
                    <button
                        className="btn btn-main w-full md:w-4/5"
                    >
                        Login
                    </button>
                </div>
                <div className="mb-3 flex flex-col gap-4 sm:flex-row justify-between items-center">
                    <span>Forgot your password?</span>
                    <Link href="/register">Don't have an account yet?</Link>
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
