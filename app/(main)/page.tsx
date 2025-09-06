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
      <div className="grow flex flex-col items-center justify-evenly min-h-screen px-4 sm:px-6 lg:px-8">
        <section className="space-y-6 w-full">
          <div className="container flex flex-col items-center gap-6 sm:gap-8 text-center px-4 sm:px-6">
            <Badge variant="secondary">Now using the app router!</Badge>
            <Badge className="flex flex-wrap justify-center gap-2 sm:gap-4 font-normal text-sm px-3 py-1">
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
            <h1 className="max-w-4xl font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter leading-tight">
              Quickly start building your next billion dollar app.
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-8">
              Boilerplate &amp; template for React projects using Next.js,
              shadcn/ui, Tailwind and Firebase...and TypeScript, of course!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Call to Action!
                </Button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/enesien/incredible-web-to-app"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="link" className="w-full sm:w-auto">
                  View Project on GitHub &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mt-8 w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            <div>
              <Card className=" shadow-teal-200 shadow-md border-teal-400">
                <CardHeader>
                  <CardTitle>Need advanced data parsing?</CardTitle>
                  <CardDescription>
                    Check out BestParse/AI for all your parsing needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://bestparse.com?utm_source=incredible-web-to-app"
                    target="_blank"
                    className="underline text-slate-800 font-medium"
                  >
                    BestParse/AI
                  </Link>{" "}
                  can parse any text to JSON. It's free to use and and gives you
                  great results when extracting and parsing scraped data, logs,
                  or any other raw text.
                  <p className="mt-4 font-semibold">
                    20% off the pro plan with code "INCREDIBLE-WEB-TO-APP"
                  </p>
                  <Link
                    className={cn(
                      buttonVariants({ size: "xl", variant: "teal" }),
                      "mt-4 w-full"
                    )}
                    href="https://bestparse.com?utm_source=incredible-web-to-app"
                  >
                    Try BestParse/AI &rarr;
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className=" shadow-emerald-200 shadow-md border-emerald-400">
                <CardHeader>
                  <CardTitle>Looking for a job?</CardTitle>
                  <CardDescription>
                    Use JobLogr's AI tools to help you find your next job.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://joblogr.com?utm_source=incredible-web-to-app&utm_medium=landing&utm_campaign=ten"
                    target="_blank"
                    className="underline text-slate-800 font-medium"
                  >
                    JobLogr.com
                  </Link>{" "}
                  is an awesome job search tool that uses AI to help you find
                  your next job faster than ever before. It's free to try, but
                  if you decide to upgrade to the pro plan, you can use code
                  "INCREDIBLE-WEB-TO-APP" for $10 off.
                  <Link
                    className={cn(
                      buttonVariants({ size: "xl" }),
                      "mt-4 w-full"
                    )}
                    href="https://joblogr.com?utm_source=incredible-web-to-app&utm_medium=landing&utm_campaign=ten"
                  >
                    Use JobLogr for Free
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className=" shadow-slate-200 shadow-md border-slate-400">
                <CardHeader>
                  <CardTitle>Need web development?</CardTitle>
                  <CardDescription>
                    Check out Enesien Software for all your web development
                    needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://enesien.com?utm_source=incredible-web-to-app"
                    target="_blank"
                    className="underline text-slate-800 font-medium"
                  >
                    Enesien Software
                  </Link>{" "}
                  is a web development company that specializes in building
                  custom web applications. We use modern technologies and
                  frameworks to build scalable and maintainable web
                  applications.
                  <Link
                    className={cn(
                      buttonVariants({ variant: "orange", size: "xl" }),
                      "mt-4 w-full"
                    )}
                    href="https://enesien.com?utm_source=incredible-web-to-app"
                  >
                    Learn More &rarr;
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
