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
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      // designation: "Content Writer",
    },
    // tags: ["computer"],
    publishDate: "2025",
    url: "",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      // designation: "Graphic Designer",
    },
    // tags: ["design"],
    publishDate: "2025",
    url: "",
  },
];
export default blogData;
