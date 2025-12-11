import Image from "next/image";

const people = [
  {
    name: "Leonard Krasner",
    role: "Owner / Licensed Barber",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Floyd Miles",
    role: "Licensed Barber",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emily Selman",
    role: "Licensed Barber",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    instagramUrl: "#",
    linkedinUrl: "#",
  },
  // {
  //   name: 'Kristin Watson',
  //   role: 'VP, Human Resources',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   xUrl: '#',
  //   linkedinUrl: '#',
  // },
  // {
  //   name: 'Emma Dorsey',
  //   role: 'Senior Developer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   xUrl: '#',
  //   linkedinUrl: '#',
  // },
  // {
  //   name: 'Alicia Bell',
  //   role: 'Junior Copywriter',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   xUrl: '#',
  //   linkedinUrl: '#',
  // },
];

export default function Teams() {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl my-10">
          <h2 className="text-4xl font-semibold  tracking-tight text-balance  sm:text-5xl ">
            Licensed Barbers
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Every barber on our team is fully certified and trained in classic
            cuts, modern fades, beard sculpting, and razor shaves. We stay
            updated on the latest trends and grooming techniques to ensure every
            client gets a service that feels fresh, sharp, and tailored.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-black px-8 py-10 "
            >
              <Image
                width={1000}
                height={1000}
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-black/5 md:size-56 dark:outline-white/10"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-600 dark:text-gray-400">
                {person.role}
              </p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram-icon lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
