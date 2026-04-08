// Inline hyperlinks are authored with markdown-style syntax inside any
// text field: [link label](https://example.com). The blog renderer parses
// these and turns them into subtly underlined anchors.
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
    {
    slug: "no-dependency-text-embedding",
    title: "No-Dependency Text-Embedding",
    date: "2026-04-08",
    excerpt:
      "In Data Science we had a week-long choice project, I decided to create a no-dependency text-embedding model that follows the pythonic guidelines.",
    category: "AI",
    readTime: "4m",
    content: [
      {
        type: "paragraph",
        text: "Earlier in the year of my Data Science course, a couple classmates and I were reading the \"Fluent Python\" book by Luciano Ramalho, which explains in detail the idea of writing code \"pythonically\". Essentially, how python works low level (CPython), and that's used to create more efficient python scripts.",
      },
      {
        type: "paragraph",
        text: "Following the guidelines in the text, I decided to create a mini text-embedding model with no external dependencies. My goal was to be able to input raw text data, and see similarities between words.",
      },
      {
        type: "paragraph",
        text: "To preface, I barely had any background in matrices, cosine similarity, and even tokenization. So I had to learn those before diving into this project. I read the book \"Build a Large Language Model\" by Sebastian Raschka, and that gave me some really good fundamental knowledge on concepts like the transformer model, how tokens function, and a bit about the math behind it all.",
      },
      {
        type: "paragraph",
        text: "Now, with some knowledge in the topic, I felt I was ready to start building, and split the text-embedding process into these chunks:",
      },
      {
        type: "list",
        items: [
          "Tokenization: splits sentences into words and strip them down",
          "Vocabulary: assign each word to a unique number",
          "Co-concurrency matrix: calculate how many times a word appears next to another word and build it out in a matrix",
          "PPMI: gives meaning to words by comparing expected co-concurrency vs real co-concurrency",
          "Word vectors: turns a word into a list of numbers so that one word can represent one vector ",
          "Cosine similarity: measures the similarity between two words",
        ],
      },
      {
        type: "paragraph",
        text: "Now that I had each subprocess laid out and understood what they all do, I implementing them with some small challenges along the way like dealing with matrices in python, and writing out the cosine similarity calculations.",
      },
      {
        type: "paragraph",
        text: "Finally, I downloaded the Amazon Fine Food Reviews dataset from kaggle which is a compilation of a couple thousand food review comments. After cleaning up the dataset a bit and formatting it to a .txt file, I wrote my __main__ dunder, ran it, and it worked!",
      },
      {
        type: "paragraph",
        text: "The main() function has an argument for input size (how many characters to be fed), with around 10,000 being the sweet spot between speed and size. ",
      },
      {
        type: "paragraph",
        text: "Here are some cool outputs I got for the top 5 most similar:",
      },
      {
        type: "list",
        items: [
          "Apple: newton, cider, salsa, nutmeg, black",
          "Young: established, delicately, harmful, changed, kid",
        ],
      },
      {
        type: "paragraph",
        text: "You can see my code at: [Github](https://github.com/Lystea11/Text-Embedding)",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
