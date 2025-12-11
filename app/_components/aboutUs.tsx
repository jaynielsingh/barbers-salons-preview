import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative m-5 ">
      <div className="relative h-80 overflow-hidden  md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          width={1000}
          height={1000}
          alt=""
          src="https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkNZZNsWTQU9oYpWkt8w6jTaLDKcgCQsfVN5SO"
          className="size-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight  sm:text-5xl">
            About Us
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            We believe every cut should be sharp, clean, and crafted with care.
            Our barbers combine modern style with classic technique to deliver
            fresh fades, precise beard work, and smooth razor finishes. We focus
            on detail, professionalism, and giving every client a premium
            grooming experience — no rush, no shortcuts. Just quality work that
            makes you look and feel your best.
          </p>

        </div>
      </div>
    </div>
  );
}
