const products = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkoLHvfFDhnLAb4y2HiPqFxjtCg6rBfeEwNGYD",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkoizQUmDhnLAb4y2HiPqFxjtCg6rBfeEwNGYD",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkBWlRbNFIhgkZcCqaOzAQY4EoWj8HRvrms05N",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Focus Multi-Pack",
    href: "#",
    price: "$39",
    description: "3 refill packs",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkg9KThlflHRdUfKocZ63p9OkVsQ7xJLMXI1AP",
    imageAlt:
      "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    description: "Black and brass",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkfrYEgrV3TX1Y2dVhnWrQu7ZBtwbafs4PKERm",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Brass Scissors",
    href: "#",
    price: "$50",
    description: "Includes brass stand",
    imageSrc:
      "https://as91s2dm03.ufs.sh/f/RpB6bRIvF8dkv8dSGjoOTM2h6msXqwbjlxCfRHdzANu9kZoP",
    imageAlt:
      "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
  },
];

export default function Example() {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className=""
    >
      <div className="mx-auto text-3xl text-white max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full opacity-80 overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
              />
              {/* <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div> */}
              {/* <p className="mt-1 text-sm text-gray-500 italic">{product.description}</p> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
