export const IMAGES = {
  hero: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/609c6b388_generated_2e3bddc4.png",
  autoMacro: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/3c81e60a6_generated_ab8d5ea5.png",
  autoMountain: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/8a02424cd_generated_c9880f6d.png",
  portraitIndustrial: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/c008d71e2_generated_c05fc1e5.png",
  portraitCloseup: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/3864c5b28_generated_0ff7a989.png",
  dunes: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/8a3bff19b_generated_4e618bc3.png",
  mountains: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/1579d590e_generated_5b17810c.png",
  editorial: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/33e330be7_generated_6f8c32df.png",
  street: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/9212c39cc_generated_d90f538a.png",
  photographer: "https://media.base44.com/images/public/6a5147d1c70443b225bff10e/194dff26d_generated_01617b3d.png",
};

export const PHOTOS = [
  { id: 1, url: IMAGES.hero, category: "Automotive", title: "Dust & Velocity", meta: { iso: "400", aperture: "f/2.8", focal: "35mm" }, span: "col-span-2 row-span-2 md:col-span-7 md:row-span-4" },
  { id: 2, url: IMAGES.autoMacro, category: "Automotive", title: "Chrome & Rain", meta: { iso: "800", aperture: "f/4", focal: "90mm" }, span: "col-span-1 row-span-1 md:col-span-3 md:row-span-2" },
  { id: 3, url: IMAGES.autoMountain, category: "Automotive", title: "Ascent", meta: { iso: "200", aperture: "f/5.6", focal: "50mm" }, span: "col-span-1 row-span-1 md:col-span-5 md:row-span-2" },
  { id: 4, url: IMAGES.portraitIndustrial, category: "Portrait", title: "Warehouse Light", meta: { iso: "400", aperture: "f/1.8", focal: "85mm" }, span: "col-span-1 row-span-2 md:col-span-4 md:row-span-3" },
  { id: 5, url: IMAGES.portraitCloseup, category: "Portrait", title: "Half Shadow", meta: { iso: "400", aperture: "f/2", focal: "85mm" }, span: "col-span-1 row-span-1 md:col-span-3 md:row-span-2" },
  { id: 6, url: IMAGES.dunes, category: "Landscape", title: "Raking Light", meta: { iso: "100", aperture: "f/8", focal: "24mm" }, span: "col-span-2 row-span-1 md:col-span-5 md:row-span-2" },
  { id: 7, url: IMAGES.mountains, category: "Landscape", title: "First Light", meta: { iso: "100", aperture: "f/11", focal: "16mm" }, span: "col-span-1 row-span-1 md:col-span-4 md:row-span-2" },
  { id: 8, url: IMAGES.editorial, category: "Editorial", title: "Concrete Silk", meta: { iso: "400", aperture: "f/2.8", focal: "50mm" }, span: "col-span-1 row-span-2 md:col-span-3 md:row-span-3" },
  { id: 9, url: IMAGES.street, category: "Editorial", title: "Solitary Path", meta: { iso: "200", aperture: "f/4", focal: "35mm" }, span: "col-span-2 row-span-1 md:col-span-5 md:row-span-2" },
];

export const CATEGORIES = ["All", "Automotive", "Portrait", "Landscape", "Editorial"];