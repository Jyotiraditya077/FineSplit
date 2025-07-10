import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "@/components/ui/background-lines";


export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Hero ───── */}
      <section className="relative mt-20 pb-12 space-y-10 md:space-y-15 px-5 flex flex-col items-center justify-center overflow-hidden">
        {/* Dot background layer */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial mask for soft center glow */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Main Hero Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Welcome to FineSplit
          </Badge>

          <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
            The easiest way to split expenses with anyone
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track group spending, share bills, and settle up with clarity using FineSplit.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Hero Preview Image */}
        <div className="relative z-20 container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              width={1280}
              height={720}
              alt="FineSplit preview"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Features
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Tools to make splitting easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            FineSplit gives you everything needed to manage shared expenses smoothly.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col items-center space-y-4 p-6 text-center"
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>

                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            How It Works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Getting started with FineSplit is easy
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Just follow these steps to start tracking and splitting expenses.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {label}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What people say about FineSplit
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
{/* ───── Call‑to‑Action with animated background ───── */}
<section className="relative overflow-hidden py-20">
  <BackgroundLines className="absolute inset-0 z-0" />
  <div className="relative z-10 container mx-auto px-4 md:px-6 text-center space-y-6">
    <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-green-800">
      Try FineSplit today
    </h2>
    <p className="mx-auto max-w-[600px] text-green-900 md:text-xl/relaxed">
      Make expense sharing effortless with the tools you deserve.
    </p>
    <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
      <Link href="/dashboard">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>
</section>


      {/* ───── Footer ───── */}
      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FineSplit. All rights reserved.
      </footer>

      {/* ───── FineSplit Clean Footer Branding ───── */}
      <section className="relative bg-gray-50 md:h-50 flex items-center justify-center -mt-10">
        <h2 className="text-[4rem] md:text-[11.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-700 to-green-200 opacity-90 select-none leading-none z-10">
          FINESPLIT
        </h2>
      </section>
    </div>
  );
}
