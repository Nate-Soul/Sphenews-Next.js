import Link from "next/link";
import Image from "next/image";
import HeroImg from "public/images/illustrations/1.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-light dark:bg-gradient-to-br from-[rgb(49,18,19)] via-[rgba(49,18,19,1)] to-[rgba(245,204,158,1)] text-dark dark:text-white py-8"
    >
      <div className="container flex items-center gap-24">
        <div className="hero-text flex-1 flex flex-col gap-12 text-center md:text-left items-center md:items-start">
          <h1 className="font-bold text-5xl capitalize">
            Empowering Authors, Cultivating Genius
          </h1>
          <p className="text-xl font-light">
            Freedom to impress, confidence to express
          </p>
          <Link href="/register" className="btn btn-main w-max">
            Join Our Community
          </Link>
        </div>
        <div className="hero-img-container hidden md:block flex-1">
          <Image
            src={HeroImg}
            className="object-cover h-96 w-full"
            alt="Hero illustration"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
