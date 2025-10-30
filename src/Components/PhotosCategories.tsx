import { clients } from "@/utils/categories";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import CategoryTile from "./CategoryTile";

function PhotosCategories({type, setPasswordScreen}: {type: "concerts" | "clients", setPasswordScreen?: Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="w-full flex flex-col gap-52">
          {clients.map((item, id) => (
            <CategoryTile key={id} category={item} type={type} setPasswordScreen={setPasswordScreen} />
          ))}
    </div>
  );
}

export default PhotosCategories;
