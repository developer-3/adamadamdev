import NavButton from "../islands/NavButton.tsx";

export default function Hero() {
  const container = "flex flex-row items-center bg-sky-600 p-6 m-6 rounded-xl";

  const name_text =
    "text(4xl sm:2xl md:4xl) font-custom1 font-bold text-white cursor-pointer transition hover:text-yellow-300 duration-400";

  return (
    <div class={container}>
      <div class="w-1/2 flex flex-row gap-6 items-center">
        <a
          href="https://www.linkedin.com/in/adam-anderson-545472192/"
          class="mr-8"
        >
          <p class={name_text}>
            adam anderson
          </p>
        </a>
        <NavButton content="about" scrollMultipler={1}></NavButton>
        <NavButton content="portfolio" scrollMultipler={2}></NavButton>
      </div>
      <div class="w-1/2 flex justify-end">
        <a href="https://www.github.com/developer-3">
          <img
            class="invert m-3"
            src="/Github-logo.png"
            width="45px"
            alt="The GitHub logo"
          />
        </a>
      </div>
    </div>
  );
}
