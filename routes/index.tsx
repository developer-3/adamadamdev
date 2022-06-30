/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <>
      <div class={tw`flex flex-col min-h-screen`}>
        <Hero />
        <div class={tw`flex-1`}>
          <Construction />
        </div>
      </div>
    </>
  );
}

function Hero() {
  const container = tw
    `w-full flex justify-center items-center flex-row gap-3`;

  return (
    <div class={container}>
      <img class={tw`mt-2`}
        src="/terminal-solid.png"
        width="30px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6 text(4xl sm:4xl md:4xl)`}>
        adam anderson
      </p>
    </div>
  );
}

function Construction() {
  return (
    <section
      class={tw`max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4 text-center`}
    >
      coming soon...
    </section>
  );
}