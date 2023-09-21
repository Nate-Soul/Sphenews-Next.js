import Image from "next/image"
import AboutCover from "public/images/vectors/1.jpg"
import CreativeIdeasImg from "public/images/illustrations/creative ideas.svg"
import CollaborationImg from "public/images/illustrations/collaboration.svg"
import EstablishedAuthorImg from "public/images/illustrations/established authors.svg"
import WritingSkillImg from "public/images/illustrations/writing.jpg"


export const metadata = {
  title: 'About Us | Sphenews',
}

const AboutUs = () => {
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            <figure className="about-img-container col-span-1 relative">
              <Image 
                src={AboutCover} 
                className="object-cover filter"
                alt="About us illustration"
                fill
              />
              <figcaption className="bg-secondary-500 text-main-500 p-3 absolute top-4 right-4 rounded">
                <h1 className="text-3xl font-bold">The Author's Budding Hub</h1>
                <p className="text-lg font-semibold">Award winning creative writing hub</p>
              </figcaption>
            </figure>
            <article className="col-span-1">
              <h1 className="text-3xl font-extrabold mb-8">About Sphenews</h1>
              <p>
              Welcome to Sphenews - the author's nest. We are a minimalistic blog for writers, by writers. Our goal is to provide a comfortable and supportive platform for authors of all levels to share their thoughts, ideas, and stories.
              <br /><br />
              We believe that writing is a powerful tool for self-expression, creativity, and personal growth. Our mission is to inspire and empower writers by providing high-quality content, expert advice, and a vibrant community of like-minded individuals.
              <br /><br />
              At Sphenews, you'll find articles on a wide range of topics, from creative writing tips and techniques to industry insights and book reviews. Our team of experienced writers and editors is dedicated to delivering engaging and informative content that will help you become a better writer and achieve your goals.
              <br /><br />
              We also believe in the power of collaboration and community. That's why we provide opportunities for writers to connect, share their work, and support each other's growth. Whether you're just starting out or you're a seasoned pro, you'll find a warm and welcoming home here at Sphenews.
              <br /><br />
              Thank you for visiting our blog, and we hope you'll join us on this exciting journey of exploration, discovery, and creativity.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="features" className="py-14">
        <h2 className="font-bold text-2xl capitalize text-center mb-8">Let's Help Realize Your Author Dreams</h2>
        <div className="container grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-4 items-center text-center shadow-sm shadow-main-400 p-3 rounded-lg">
            <Image src={CreativeIdeasImg} width={150} height={150} alt="Creative ideas image illustration"/>
            <h6 className="font-semibold">Creative Ideation</h6>
            <p>
              Bring your ideas to life through the transformative power of words. Our platform is designed to inspire and empower your creativity, helping you craft stories that captivate readers.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center shadow-sm shadow-main-400 p-3 rounded-lg">
            <Image src={EstablishedAuthorImg} width={150} height={150} alt="Creative ideas image illustration"/>
            <h6 className="font-semibold">Established Authorship</h6>
            <p>
              Realize your dream of becoming a respected and established author. Join a community that recognizes and nurtures talent, providing the support and resources you need to excel in your writing journey.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center shadow-sm shadow-main-400 p-3 rounded-lg">
            <Image src={CollaborationImg} width={150} height={150} alt="Creative ideas image illustration"/>
            <h6 className="font-semibold">Community Collaborations</h6>
            <p>
              Connect and collaborate with some of the most innovative and imaginative minds in the writing world. Together, we create compelling stories that resonate with a global audience
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center shadow-sm shadow-main-400 p-3 rounded-lg">
            <Image src={WritingSkillImg} width={150} height={150} alt="Creative ideas image illustration"/>
            <h6 className="font-semibold">Skill Refinement</h6>
            <p>
              Hone your writing skills with valuable feedback from industry-leading A-grade authors. Our community is dedicated to helping you grow as a writer, providing constructive insights to enhance your craft.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
