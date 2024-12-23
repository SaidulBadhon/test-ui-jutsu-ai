import Wrapper from "@/components/wrapper/Wrapper";
import Image from "@/components/Image";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import WrapperContent from "@/components/wrapper/WrapperContent";
import { FiPlus } from "react-icons/fi";
import Header from "@/components/Header";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaRegBell } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineAvTimer } from "react-icons/md";

const writers = [
  {
    writer: "Blog Writer",
    avatar: "/homepage/blog-writer.png",
    platform: "Linkedin",
    description:
      "Crafting engaging and thought-provoking blog articles for professional readers.",
    tags: ["blog", "writer"],
    id: 1,
  },
  {
    writer: "Post Writer",
    avatar: "/homepage/post-writer.png",
    platform: "Twitter",
    description:
      "Creating concise, impactful posts to maximize social media reach and engagement.",
    tags: ["post", "reach"],
    id: 2,
  },

  {
    writer: "Script Writer",
    avatar: "/homepage/meme-writer.png",
    platform: "YouTube",
    description:
      "Writing captivating scripts to drive storytelling for videos and vlogs.",
    tags: ["video", "content"],
    id: 3,
  },
];

export default function HomePage() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {};
  return (
    <Wrapper>
      <WrapperContent className="gap-4">
        <Header
          inputValue={searchText}
          setInputValue={setSearchText}
          placeHolder="Search an upcoming event..."
          onClick={() => handleSubmit()}
          buttonText="Search"
        />

        <div className="flex flex-col gap-4 mt-4">
          <h6 className="text-lg font-semibold">Upcoming posts for today </h6>
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            <div className="flex flex-col gap-4 bg-primary-accent/40 p-4 rounded-3xl">
              <div className="flex items-center justify-between">
                <Button
                  size="icon"
                  className="rounded-full text-foreground bg-primary-accent"
                  variant="secondary"
                >
                  <FaRegBell />
                </Button>
                <Button size="icon" className="rounded-full" variant="ghost">
                  <BsThreeDotsVertical />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">19</p>
                <p className="text-muted-foreground text-xs">
                  Today's
                  <br />
                  scheduled posts
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-secondary-accent/40 p-4 rounded-3xl">
              <div className="flex items-center justify-between">
                <Button
                  size="icon"
                  className="rounded-full text-foreground bg-secondary-accent"
                  variant="secondary"
                >
                  <MdOutlineAvTimer />
                </Button>
                <Button size="icon" className="rounded-full" variant="ghost">
                  <BsThreeDotsVertical />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">5</p>
                <p className="text-muted-foreground text-xs">
                  Total
                  <br />
                  draft posts
                </p>
              </div>
            </div>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
}
