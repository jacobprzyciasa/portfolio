import React from "react";
import CategoryTile from "./CategoryTile";
import type { Category } from "@/utils/gallery";

function PhotosCategories({content, type}: {content: Category[], type: "events" | "clients"}) {
  return (
    <div className="flex w-full flex-col gap-8 px-2 md:gap-10">
          {content.map((item, id) => (
            <CategoryTile key={id} category={item} type={type} />
          ))}
    </div>
  );
}

export default PhotosCategories;
