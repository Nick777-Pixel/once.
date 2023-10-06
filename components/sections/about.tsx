import Github from "../github";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import Display from "../../public/display.jpg";

const socials = [
  {
    name: "Discord (timmy_y)",
    link: "https://discord.com",
    icon: <FaDiscord className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tw_wu_as_tim/",
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/once_wu",
    icon: <FaTwitter className="h-5 w-5" />,
  },
];

export const About = async () => {
  const user = await getGithubStats();
  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12">
      <div className="lg:pl-40">
        <div className="max-w-[300px] md:max-w-[380px]">
          <Image
            src={Display}
            alt="Picture of a shop"
            sizes="300px"
            placeholder="blur"
            className="aspect-square rotate-3 rounded-2xl object-cover transition duration-500 ease-in-out hover:rotate-0"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <div className="text-base leading-relaxed text-zinc-600 dark:text-zinc-100">
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
          <div className="mt-8 flex flex-col space-y-6">
            <div className="flex items-center">
              <Github user={user} />
            </div>
            <div className="flex items-center space-x-6">
              {socials.map((social, index) => (
                <Link
                  href={social.link}
                  passHref
                  aria-label="Open in new tab"
                  key={index}
                  className="group"
                >
                  <div className="flex items-center space-x-2 rounded-full text-zinc-500 transition group-hover:text-blue-500 group-hover:text-opacity-100 dark:text-zinc-100">
                    {social.icon}
                    <p className="text-xs group-hover:text-opacity-100">
                      {social.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getGithubStats(): Promise<{
  followers: number;
  public_repos: number;
}> {
  const res = await fetch("https://api.github.com/users/TIMMLOPK");
  const data = await res.json();

  return {
    followers: data.followers,
    public_repos: data.public_repos,
  };
}

export default About;
