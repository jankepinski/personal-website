import { SocialIcon } from "react-social-icons";
import "./animations.css";
import { FeedbackCarousel } from "./components/organisms/feedback-carousel/feedback-carousel";

export default function Home() {
  return (
    <div className="lg:mx-40 md:mx-10 sm:mx-5">
      <div className="inline-block">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-200 mt-24 typewriter select-none">
          Hello, I&apos;m Jan
        </h1>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-600 mt-1 fade-in-animation select-none">
        a fullstack developer
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 mt-1 fade-in-animation select-none">
        with a great passion
      </h1>
      <p className="text-xl text-neutral-400 mt-16">
        I&apos;m a dedicated fullstack developer with over a year of
        professional experience, specializing in React, Next.js and Nest.js. My
        expertise lies in translating designs into pixel-perfect code while
        ensuring optimal performance and adhering to the latest technology
        trends.
      </p>
      <p className="text-xl text-neutral-400 mt-8">
        My journey into tech began with game development in Unity before
        discovering my passion for web development. What excites me most is
        creating software that enhances people&apos;s lives and seeing it in
        action. I thrive in collaborative environments, bringing a
        detail-oriented and innovative approach to every project.
      </p>
      <div className="mt-8 flex justify-start gap-6">
        <SocialIcon
          href="https://twitter.com/kepinski_dev"
          target="_blank"
          network="twitter"
          bgColor="transparent"
          fgColor="#aaa"
        />
        <SocialIcon
          href="https://github.com/jankepinski"
          target="_blank"
          style={{ cursor: "pointer" }}
          network="github"
          bgColor="transparent"
          fgColor="#aaa"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/jan-k%C4%99pi%C5%84ski-17607128a/"
          target="_blank"
          style={{ cursor: "pointer" }}
          network="linkedin"
          bgColor="transparent"
          fgColor="#aaa"
        />
      </div>
      <div className="w-full border mt-8 rounded-full" />
      <p className="text-6xl tracking-tighter font-extrabold text-center mt-16 md:hidden">
        Feedback
      </p>
      <div className="flex w-full justify-evenly mt-16 md:mt-32 pb-16 md:pb-48 items-center">
        <div className="text-6xl font-extrabold tracking-tighter hidden md:block select-none">
          <p className="text-neutral-900 my-1">Feedback</p>
          <p className="text-neutral-700 my-1">Feedback</p>
          <p className="text-neutral-600 my-1">Feedback</p>
          <p className="text-neutral-500 my-1">Feedback</p>
          <p className="text-neutral-400 my-1">Feedback</p>
          <p className="text-neutral-200 my-1">Feedback</p>
        </div>
        <FeedbackCarousel />
      </div>
      <div className="w-full border mt-8 rounded-full" />
      <p className="text-neutral-700 mt-2 pb-8 text-right">
        @2024 kepinski.dev
      </p>
    </div>
  );
}
