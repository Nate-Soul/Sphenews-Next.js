
import Image from "next/image";
import LoginIllustration from "/public/images/illustrations/2.svg";

const RegistrationPage = () => {
  return (
    <section className="py-14">
        <div className="container flex items-center">
          <figure className="flex-1">
              <Image src={LoginIllustration} alt="Login image illustration"/>
          </figure>
          <div className="flex-1 w-full">
              <h1 className="text-3xl font-bold capitalize mb-4">
                  Get Inducted <br /> into our Knightship
              </h1>
              <p className="text-gray-500">
                Create a free Sphenews account to start living in style as an author.
              </p>
              <form className="flex flex-col gap-5 mt-8">
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Choose a Username" 
                            className="form-control w-4/5"
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            name="email_address" 
                            id="emailAddress" 
                            placeholder="Your valid Email Address" 
                            className="form-control w-4/5"
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            name="password" 
                            id="passkey" 
                            placeholder="Your Password" 
                            className="form-control w-4/5"
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            name="confirm_password" 
                            id="confirmPasskey" 
                            placeholder="Confirm Your Password" 
                            className="form-control w-4/5"
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            className="btn btn-main w-4/5"
                        >
                            Create an Account
                        </button>
                    </div>
              </form>
          </div>
        </div>
    </section>
  )
}

export default RegistrationPage
