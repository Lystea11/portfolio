export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "metaframe-update-mistakes",
    title: "Metaframe Update: Mistakes.",
    date: "2026-04-05",
    excerpt:
      "First prototypes of the Metaframe device came, and after, I soon realized the countless mistakes I had made.",
    category: "Systems",
    readTime: "2 min",
    content: [
      {
        type: "paragraph",
        text: "Friday morning a package from JLCPCB containing my assembled Metaframe devices came. Because of the wait for these to be made was so long, I couldn't wait to finally get my hands onto something I had been working on for months. Unfortunately, after opening the package I had realized two crucial mistakes: \n1 Both ethernet ports were missing. \n2.There was no way to attach the compute module.",
      },
      {
        type: "paragraph",
        text: "After admiring the PCB for a couple seconds, I realized that there was no ethernet ports. I then had to check the JLCPCB invoice, and realized that they did not have the ethernet ports in stock, so they couldn't place them. Ordering the parts myself and then soldering them manually would not only be expensive but a waste of time, as these are multi-gigabit speed ports that need extremely tight placing.",
      },
      {
        type: "paragraph",
        text: "For next assembly order, I now know that I have to meticulously check every component and make sure that LCSC has it in stock, and JLCPCB can place it.",
      },
      {
        type: "callout",
        text: "A very costly, but valuable mistake.",
      },
      {
        type: "paragraph",
        text: "Similarly, when getting to connecting the Raspberry Pi Compute 4 Module (CM4) to the Metaframe device, I realized that it wasn't a basic solder connection. I needed to install 2, 100-pin headers onto the device so that it can snap connect with the CM4. ",
      },
      {
        type: "paragraph",
        text: "Once again, small details that break the entire project.",
      },
      {
        type: "paragraph",
        text: "Now, I am improving the design of the Metaframe device and making sure that ALL components are being placed, as well as ensuring that every component is compatible.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return posts;
}
