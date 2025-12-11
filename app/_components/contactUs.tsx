export default function Contact() {
  return (
    <div className=" py-8 sm:py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none dark:divide-white/10">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty ">
                Get in touch
              </h2>
              <p className="mt-4 text-base/7 text-gray-300">
                Have a question, want to book a service, or need help choosing
                the right style? Our team at IgnisCuts is here to help you look
                and feel your best.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl  p-10 bg-black">
                <h3 className="text-base/7 font-semibold ">Owner</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl p-10 bg-black">
                <h3 className="text-base/7 font-semibold ">Appointments</h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty ">
                Locations
              </h2>
              <p className="mt-4 text-base/7 text-gray-300">
                Stop by for a cut, a shave, or just to say hello. Experience a
                modern barbershop with old-school service and precision.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-black p-10 ">
                <h3 className="text-base/7 font-semibold ">Union City</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>4556 Brendan Ferry</p>
                  <p>Union City, CA 95465</p>
                </address>
              </div>
              <div className="rounded-2xl p-10 bg-black">
                <h3 className="text-base/7 font-semibold ">New York</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>886 Walter Street</p>
                  <p>Hayward, CA 12345</p>
                </address>
              </div>
              {/* <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Toronto</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">Chicago</h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic dark:text-gray-400">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
