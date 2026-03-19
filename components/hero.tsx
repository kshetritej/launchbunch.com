import Image from "next/image"

const Hero = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(/hero-image-launchbunch.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center space-y-8 pt-32 text-center text-white"
    >
      <h1 className="max-w-xl text-center text-5xl font-bold">
        The Intelligent Knowledge Platform
      </h1>
      <p className="max-w-xl text-lg">
        Helping teams create and maintain world-class documentation built for
        both humans and AI
      </p>
      {/*<div className="mt-12 max-w-7xl overflow-hidden rounded-3xl">
        <Image src={"/cta-image.png"} width={1920} height={1280} alt="Hello" />
      </div>*/}
    </div>
  )
}

export default Hero
