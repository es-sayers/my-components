import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Component Previews</h1>
      <nav>
        <ul className="*:ml-8">
          <li>
            <h2>Navigation</h2>
            <ul className="*:ml-8 list-disc">
              <li>
                <Link className="underline text-blue-800 visited:text-purple-800" href={'/preview/navigation/hamburger'}>Hamburger Menu</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </main>
  );
}
