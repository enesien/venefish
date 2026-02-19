import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
              Boilerplate &amp; template for React projects using Next.js, shadcn/ui, Tailwind and Firebase...and
              TypeScript, of course!
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

        <section className="container max-w-lg py-24">
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle>Need Stripe integration?</CardTitle>
              <CardDescription>Launch payments in 2 weeks with production-ready code.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-4">
                <Link href="https://osmoto.io" target="_blank" className="font-medium underline underline-offset-4">
                  Osmoto.io
                </Link>{" "}
                is a professional Stripe integration service. Subscriptions, webhooks, billing portals, and PCI
                compliance - fixed-price packages, no hourly surprises.
              </p>
              <Link target="_blank" href="https://osmoto.io/">
                <Button>Book a Free Consultation &rarr;</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
