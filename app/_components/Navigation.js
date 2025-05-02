import Link from "next/link";
import { auth } from "@/app/_lib/auth";

async function Navigation() {
  const session = await auth();
  console.log(session)
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            className="hover:text-accent-400 transition-colors"
            href="/cabins"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-accent-400 transition-colors"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-accent-400 transition-colors flex items-center justify-center gap-4"
            href="/account"
          >
            {session?.user ? (
              <img
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
                className="h-8 rounded-full"
              />
            ) : (
              ""
            )}
            <span>Guest area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
