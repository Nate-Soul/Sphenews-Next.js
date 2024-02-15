import Image from "next/image";
import LoginIllustration from "/public/images/illustrations/2.svg";
import LoginIllustrationDark from "/public/images/illustrations/2-dark.svg";

const RegistrationPage = () => {
  return (
    <section className="py-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <figure className="hidden md:block">
          <Image src={LoginIllustration} alt="Login image illustration" className="block dark:hidden"/>
          <Image src={LoginIllustrationDark} alt="Login image dark illustration" className="hidden dark:block"/>
        </figure>
        <div className="w-full">
          <h1 className="text-3xl font-bold capitalize mb-4">
          Unlock the Gateway <br /> to Your Knightship
          </h1>
          <p className="text-gray-500 dark:text-main-300">
            Experience the joy of authorship with a free Sphenews account. Join
            our community and start living the author's life in style.
          </p>
          <form className="flex flex-col gap-5 mt-8">
            <div className="mb-3">
              <input
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
                className="form-control w-4/5"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="last_name"
                id="LastName"
                placeholder="Last Name"
                className="form-control w-4/5"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email_address"
                id="emailAddress"
                placeholder="Email Address"
                className="form-control w-full md:w-4/5"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                id="passkey"
                placeholder="Password"
                className="form-control w-full md:w-4/5"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirm_password"
                id="confirmPasskey"
                placeholder="Confirm Password"
                className="form-control w-full md:w-4/5"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-main w-full md:w-4/5">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
