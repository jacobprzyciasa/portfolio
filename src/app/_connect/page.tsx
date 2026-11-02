// KONTAKT WYŁĄCZONY (tymczasowo)
// Strona /connect jest wyłączona: folder przemianowano z `connect` na `_connect`
// (foldery z prefiksem `_` są w Next.js prywatne i nie tworzą trasy), a cały kod
// poniżej jest zakomentowany.
// Aby przywrócić: zmień nazwę folderu z powrotem na `src/app/connect`
// i odkomentuj kod poniżej (usuń prefiks "// " z każdej linii).

// "use client";
//
// import ContactForm from "@/Components/ContactForm";
// import Header from "@/Components/Header";
// import { FaInstagram } from "react-icons/fa";
// import Image from "next/image";
// import jp from "../../../public/jp_linen.png"
//
// function Page() {
//   return (
//     <div className="min-h-screen bg-obsidian pt-32 text-linen md:pt-40">
//       <Header isScrolled={true} />
//       <section className="mx-auto grid max-w-[1300px] gap-10 px-5 pb-24 md:grid-cols-[0.9fr_1.1fr] md:px-10">
//         <div>
//           <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ Connect</p>
//           <h1 className="mt-3 font-heading text-6xl uppercase leading-[0.9] text-linen md:text-8xl">
//             Tell me
//             <br />
//             the story.
//           </h1>
//           <div className="mt-8 max-w-xl font-body text-sm leading-relaxed text-khaki md:text-base">
//             If you want me to help you with your project, or you just want a
//             photoshoot for yourself, feel free to hit me up and let&apos;s talk about
//             your idea together.
//             <br />
//             <br />
//             Email:
//             <br />
//             <a className="text-linen transition-colors hover:text-flare" href="mailto:jakubprzyciasa@gmail.com">
//               jakubprzyciasa@gmail.com
//             </a>
//             <br />
//             <br />
//             Instagram:
//             <br />
//             <a
//               className="inline-flex items-center gap-2 text-linen transition-colors hover:text-flare"
//               href="https://www.instagram.com/jacobprzyciasa"
//               target="_blank"
//               rel="noreferrer"
//             >
//               @jacobprzyciasa <FaInstagram />
//             </a>
//           </div>
//         </div>
//         <div className="self-end">
//           <ContactForm />
//         </div>
//       </section>
//     </div>
//   );
// }
//
// export default Page;
