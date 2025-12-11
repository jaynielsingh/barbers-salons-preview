import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="relative isolate min-h-full">
        <Image
        width={1000}
        height={1000}
          alt=""
          src="https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkTCdYSC8Q5OgKEGei41ZtsNnvMX7xSYdo6jaB"
          className="absolute inset-0 -z-10 size-full object-cover object-top opacity-50"
        />

        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base/8 font-semibold ">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm/7 font-semibold text-white hover:text-white/90">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
