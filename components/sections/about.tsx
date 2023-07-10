"use client";

import Github from "../github";
import { FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export const About = ({ user }: { user: any }) => {
  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12">
      <div className="lg:pl-36">
        <div className="max-w-[300px]">
          <Image
            src="/display.jpg"
            alt="Picture of a shop"
            width={500}
            height={500}
            className="aspect-square rotate-3 rounded-2xl object-cover transition duration-500 ease-in-out hover:rotate-0"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <div className="text-base text-zinc-600 dark:text-zinc-300">
          <h1 className="text-2xl font-bold">👋 Hi, I&apos;m Timmy</h1>
          <br />
          <p>
            What does coding mean to you? A job, a passion, a skill, or a hobby?
            For me, it is something different. Coding is one of my ways to
            create. It allows me to make the impossible possible. In my view, a
            programmer is a creator. I enjoy the challenges and rewards of
            creating something new and useful. I also appreciate the learning
            process and the satisfaction of overcoming difficulties.
          </p>
          <br />
          <p>
            Coding and living are both journeys of discovery and expression. It
            is also growth. I have witnessed rapid changes in technology: from
            Windows XP to 11, from iOS 4 to 16, from the dawn of the mobile era
            to now. I understand the importance of continuously improving and
            updating myself and not falling behind. I want to seize the
            opportunities in this era. That’s why I value “once”. We have
            limited time. Time is the fairest thing in the world, no matter who
            you are. Life is once. Therefore, use your time to do what you want.
          </p>
          <br />
          <p>Everything is always once.</p>
          <br />
          <div className="mt-12 flex items-center space-x-4">
            <Github user={user} />
            <Link
              href="https://www.instagram.com/tw_wu_as_tim/"
              aria-label="Instagram"
              passHref
            >
              <FiInstagram className="h-6 w-6 text-gray-400 hover:text-[#c92bb7]" />
            </Link>
            <button
              onClick={() => {
                navigator.clipboard.writeText("timmy_y");
              }}
              className="flex items-center space-x-2"
            >
              <FaDiscord className="h-6 w-6 text-gray-400 hover:text-[#7289DA]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
