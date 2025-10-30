import { Categories, clients } from "@/utils/categories";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import CategoryTile from "./CategoryTile";
import { passwordScreenInterface } from "@/app/clients/page";

function PhotosCategories({content, type, setPasswordScreen}: {content: Categories[], type: "events" | "clients", setPasswordScreen?: Dispatch<SetStateAction<passwordScreenInterface>>}) {
  return (
    <div className="w-full flex flex-col gap-52">
          {content.map((item, id) => (
            <CategoryTile key={id} category={item} type={type} setPasswordScreen={setPasswordScreen} />
          ))}
    </div>
  );
}

export default PhotosCategories;
