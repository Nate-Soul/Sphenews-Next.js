import Image from "next/image";
import ContactIllustration from "public/images/illustrations/contact support.svg";


export const metadata = {
  title: 'Contact Us | Sphenews',
  description: 'Contact our support team'
}

const ContactUs = () => {

  return (
    <>
      <section className="py-14">
        <h1 className="text-3xl font-extrabold text-center mb-10">Let's Have A Coffee</h1>
        <div className="container flex items-center gap-24">
          <div className="contact-img-container flex-1">
            <Image src={ContactIllustration} className="object-cover w-full" alt="Contact us illustration"/>
          </div>
          <form className="contact-form flex-1 flex flex-col gap-y-5">
            <input type="text" placeholder="Your Name" className="form-control" />
            <input type="email" placeholder="Your Email Address" className="form-control" />
            <textarea cols="30" rows="10" placeholder="Your Message" className="form-control"></textarea>
            <button className="btn btn-main">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactUs
