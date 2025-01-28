import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Go-Tunes",    
    paragraph: "Go-Tunes is a web-based music streaming app inspired by Spotify. It has the core functionalities of a music player along with the abilities to create or update playlists, customize your profile, and manage a subscription system.",
    image: "/images/blog/web-01.png",
    author: {
      name: "Trium Developer",
      image: "/images/blog/author-01.png",
      // designation: "Graphic Designer",
    },
    // tags: ["creative"],
    publishDate: "2024",
    url: "https://go-tunes.vercel.app",
  },
  {
    id: 2,
    title: "Global Warming Infographic",
    paragraph:
      "A website that displays an infographic about global warming. It is a simple static website that shows the causes and effects of global warming.",
    image: "/images/blog/web-02.png",
    author: {
      name: "Trium Developer",
      image: "/images/blog/author-02.png",
      // designation: "Content Writer",
    },
    // tags: ["computer"],
    publishDate: "2023",
    url: "https://global-warming-gamma.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     // designation: "Graphic Designer",
  //   },
  //   // tags: ["design"],
  //   publishDate: "2025",
  //   url: "",
  // },
];
export default blogData;
