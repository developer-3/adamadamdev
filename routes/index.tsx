import { Head } from "$fresh/runtime.ts";

const TITLE = "adam anderson";
const DESCRIPTION = "adam anderson's personal portfolio and dev website.";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <link rel="icon" href="http://adamadam.dev/favicon.ico?v=2" />
      </Head>
      <body class="flex flex-col relative pb-16">
        <AboutPage />
        <Footer />
      </body>
    </>
  );
}

function AboutPage() {
  return (
    <div class="flex flex-col justify-center w-[75%] md:w-1/2 mx-auto mt-[10%]">
      <div class="flex flex-row gap-4">
        <p class="text-6xl md:text-8xl">👋</p>
        <div class="flex flex-col justify-center">
          <p class="text-2xl">Hi, I'm</p>
          <p class="text-4xl md:text-6xl font-semibold">Adam Anderson</p>
          <p class="mt-10 text-lg">
            I'm a 4th year Computer Science student at Michigan State
            University, graduating in spring 2023. I work on the{" "}
            <a
              href="https://msuaided.com/"
              class="text-blue-700 hover:underline hover:text-blue-500"
            >
              AIDED
            </a>{" "}
            research team. I'll be joining Amazon in fall 2023 as a full-time
            Software Development Engineer. I like Python, TypeScript, and making
            {" "}
            <a
              href="https://github.com/developer-3"
              class="text-blue-700 hover:underline hover:text-blue-500"
            >
              cool things
            </a>
            .
          </p>
          <p class="mt-10 text-lg">
            Shoot me a message on{" "}
            <a
              href="https://www.linkedin.com/in/adam-anderson-545472192/"
              class="text-blue-700 hover:underline hover:text-blue-500"
            >
              Linkedin
            </a>{" "}
            if you're interested in chatting.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div class="fixed flex justify-center items-center h-10 bg-gradient-to-r from-sky-600 to-green-500 w-full bottom-0">
      <span class="flex flex-row gap-3 bg-white h-full px-4">
        <a href="https://www.github.com/developer-3">
          <img
            class="mt-1"
            src="/Github-logo.png"
            width="30px"
            alt="The GitHub logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/adam-anderson-545472192/">
          <img
            class="mt-1"
            src="/linkedin-logo.png"
            width="30px"
            alt="The Linkedin logo"
          />
        </a>
      </span>
    </div>
  );
}
