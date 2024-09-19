import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="grow flex flex-col items-center justify-evenly">
        <section className="space-y-6">
          <div className="container flex flex-col items-center gap-8 text-center">
            <Badge variant="secondary">Now using the app router!</Badge>
            <Badge className="space-x-4 font-normal text-sm">
              <p>
                <span className="font-bold">Ve</span>rcel
              </p>
              <p>
                <span className="font-bold">Ne</span>xt.js
              </p>
              <p>
                <span className="font-bold">Fi</span>rebase
              </p>
              <p>
                <span className="font-bold">sh</span>adcn/ui
              </p>
            </Badge>
            <h1 className="max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              Quickly start building your next billion dollar app.
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Boilerplate &amp; template for React projects using Next.js,
              shadcn/ui, Tailwind and Firebase...and TypeScript, of course!
            </p>
            <div className="space-x-4">
              <Link href="/login">
                <Button size="lg">Call to Action!</Button>
              </Link>
              <Link target="_blank" href="https://github.com/enesien/venefish">
                <Button size="lg" variant="link">
                  View Project on GitHub &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div></div>
            <div>
              <Card className=" shadow-slate-200 shadow-md border-slate-400">
                <CardHeader>
                  <CardTitle>Looking for a job?</CardTitle>
                  <CardDescription>
                    Use JobLogr's AI tools to help you find your next job.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://joblogr.com?utm_source=venefish&utm_medium=landing&utm_campaign=ten"
                    target="_blank"
                    className="underline text-slate-800 font-medium"
                  >
                    JobLogr.com
                  </Link>{" "}
                  is an awesome job search tool that uses AI to help you find
                  your next job faster than ever before. It's free to try, but
                  if you decide to upgrade to the pro plan, you can use code
                  "VENEFISH" for $10 off.
                  <Link
                    className={cn(
                      buttonVariants({ size: "xl" }),
                      "mt-4 w-full"
                    )}
                    href="https://joblogr.com?utm_source=venefish&utm_medium=landing&utm_campaign=ten"
                  >
                    Use JobLogr for Free
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
}
