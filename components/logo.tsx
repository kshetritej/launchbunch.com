const Logo = () => {
  return (
    <div className="flex items-center justify-start object-cover text-lg font-bold">
      <img
        src={"/launch-bunch-white.svg"}
        className="hidden size-12 dark:block"
      />
      <img
        src={"/launchbunch-logo-black.svg"}
        className="block size-12 dark:hidden"
      />
    </div>
  )
}

export default Logo
