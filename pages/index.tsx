import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-8 text-center">
          <div className="badge text-center flex justify-center gap-6 bg-muted rounded-full w-min px-6 py-1 text-sm tracking-tight">
            <p>
              <span className="font-semibold">Ve</span>rcel
            </p>
            <p>
              <span className="font-semibold">Ne</span>xt.js
            </p>
            <p>
              <span className="font-semibold">Fi</span>rebase
            </p>
            <p>
              <span className="font-semibold">Sh</span>adcn
            </p>
          </div>
          <h1 className="max-w-3xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
            Start building your next billion dollar idea.
          </h1>
          <p className="max-w-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Boilerplate for React projects using Next.js, shadcn/ui, Tailwind
            and Firebase...and TypeScript, of course!
          </p>
          <div className="space-x-4">
            <Link href="/login">
              <Button size="lg">Sign in to get started</Button>
            </Link>
            <Link target="_blank" href="https://github.com">
              <Button size="lg" variant="link">
                View on GitHub &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
