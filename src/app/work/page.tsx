import { getPosts } from "@/app/utils";
import { Flex, Button, Icon, IconButton } from "@/once-ui/components";
import { Projects } from "@/app/work/components/Projects";
import { baseURL, person, work, linkz } from "../resources";
// import Link from "next/link";
// import { FaDownload } from "react-icons/fa";

export function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />

      <Flex
        style={{
          backdropFilter: "blur(var(--static-space-1))",
          border: "1px solid var(--brand-alpha-medium)",
          width: "fit-content",
        }}
        alpha="brand-weak"
        radius="full"
        fillWidth
        padding="4"
        gap="8"
        marginBottom="m"
        alignItems="center"
      >
        <Flex paddingLeft="12">
          <Icon name="openLink" onBackground="brand-weak" />
          {/* <Icon name="HiSparkles" onBackground="brand-weak" /> */}
        </Flex>
        <Flex paddingX="8">Consulting Academy Games</Flex>
        <IconButton
          href="https://drive.google.com/uc?export=download&id=1C1VLYqzScTcePa5Ed74ToAkifPZPdvQ0
                      "
          data-border="rounded"
          variant="tertiary"
          icon="chevronRight"
        />
      </Flex>
      <Projects />
    </Flex>
  );
}
