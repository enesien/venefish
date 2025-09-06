import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="grow flex flex-col items-center justify-evenly min-h-screen px-4 sm:px-6 lg:px-8">
        <section className="space-y-6 w-full">
          <div className="container flex flex-col items-center gap-6 sm:gap-8 text-center px-4 sm:px-6">
            <h1 className="max-w-4xl font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter leading-tight">
              Welcome to Incredible
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-8">
              See how much you can save with Incredible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Create your plan !
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
