import SiteNav from "@/Components/Portfolio/SiteNav";
import CustomCursor from "@/Components/Portfolio/CustomCursor";

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <CustomCursor />
      <SiteNav solid={isScrolled} />
    </>
  );
}
