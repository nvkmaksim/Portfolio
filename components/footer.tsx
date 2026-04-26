import Link from "next/link";

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 bg-(--color-bg)/30 backdrop-blur-sm w-full border-b-0 rounded-b-none p-4 px-10 lg:px-50 lg:bg-(--color-main)/30 xl:px-70 xl:bg-(--color-main)/30">
      <div className="flex flex-row justify-between">
        <Link href={"/about"}>Про меня</Link>
        <Link href={"/resume"}>Резюме</Link>
        <Link href={"/portfolio"}>Портфолио</Link>
        <Link href={"/contact"}>Связаться</Link>
      </div>
    </nav>
  );
}
