import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black m-h-screen">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          alt=""
          src="https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkuRfpjyOIyON8H0jb5VvYenBGqsMwdzSlU64g"
          className="absolute inset-0 -z-10 size-full opacity-30  object-cover"
          width={1000}
          height={1000}
        />
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center  p-10 rounded-lg m-10">
              <h1 className="text-5xl  font-semibold tracking-tight text-balance  sm:text-7xl">
                Where Precision Meets Style
              </h1>
              <p className="mt-8 text-gray-300 text-lg font-medium text-pretty  sm:text-xl/8">
                Book your next cut with expert barbers who know how to deliver
                clean fades, crisp lineups, and flawless beard styling—no
                compromise.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md btn px-3.5 py-2.5 text-sm font-semibold bg-black shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Contact Us
                </a>
                <a href="/about" className="text-sm/6 font-semibold ">
                  Book a Session <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}
      </div>
    </div>
  );
}
