import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ProjectNotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-5 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
          Project not found
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          That case study doesn’t exist or the link may be outdated.
        </p>
        <Link
          href="/#projects"
          className="mt-10 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Back to projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
