import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Michelle",
  lastName: "Currier",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer + Developer",
  //   avatar: "/images/avatar.jpg",
  avatar: "/images/headshotsm.jpg",
  location: "North America/New Orleans", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  residence: "New Orleans", // anywhere you wanna claim you live
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mcurrierdesigns@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designer who codes and creates</>,
  subline: (
    <>
      I'm Michelle, a developer at <InlineCode>m. currier designs</InlineCode>,
      where I craft intuitive user experiences. After hours, I build my own
      projects and dj.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://calendly.com/michellecurrier/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Michelle Currier has over a decade of professional expertise, they
          seamlessly integrate a formal foundation in print, web, and graphic
          design with a proven track record of accomplishments in Software as a
          Service (SaaS) and app development. Their specializations crosscut
          video editing, DJing, Front-end development, and UX/UI design,
          reflecting a comprehensive skill set and a history of success in
          crafting engaging and user-friendly digital experiences.
        </p>
        <p>
          My work spans a diverse range of disciplines, from crafting{" "}
          <Link href="/work">intuitive digital interfaces</Link> to designing
          immersive interactive experiences. I’m particularly interested in the
          intersection of design and engineering, where aesthetics meet
          functionality. I believe that the best solutions arise from a balance
          of creativity and technical rigor, and I enjoy the challenge of
          finding that balance in every project I undertake.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IBM",
        timeframe: "2023 - 2024",
        role: "Senior Designer / Frontend Dev",
        achievements: [
          <>
            Generative AI for Code with watsonx Code Assistant Sales Foundation.
            Generative AI & watsonx for IBM Carbon React Tutorial and converted
            that to a portfolio site deploying from GitHub using Vercel.app to
            deploy.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "IBM - Consulting Academy",
        timeframe: "2020 - 2023",
        role: "Senior Designer / Frontend Dev",
        achievements: [
          <>
            During my tenure with the Consulting Academy, my efforts have
            extended to fostering proficient usage of Github and the deploy
            manager within the UI team. The adoption of these tools has led to a
            notable reduction in code overwriting instances, and we have now
            established robust best practices for code management.
          </>,
          <>
            Integrating version control into our development workflow
            significantly elevates our processes, enabling seamless storage,
            modification, and collaboration. This invaluable feature fosters
            heightened stability and accountability across our projects,
            ultimately bolstering efficiency and upholding the highest
            professional standards.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Central Florida",
        description: <>Studied Digital Media.</>,
      },
      // {
      //     name: 'Build the Future',
      //     description: <>Studied online marketing and personal branding.</>,
      // }
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building next gen apps with Next.js + Once UI + Supabase + Tailwind
            + MUI + SendGrid + Vercel.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
