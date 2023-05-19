import Image from "next/image";

function JustForYou() {
  return (
    <div id="poll" className="bg-[#F6FAEB] p-40">
      <div className="n-lg:grid n-lg:grid-cols-2 n-lg:gap-96 container flex flex-col gap-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-12">
                <span className="border-b pb-12 font-sangbleu text-32/40">
                  Just For You
                </span>

                <span className="text-14/22">
                  Short on time? Here are the gifts you won&apos;t want to miss.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-32">
              <div className="relative aspect-square w-[164px] overflow-hidden rounded bg-gray-300">
                <Image
                  src="/images/product/earrings.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-8 text-16/16 text-gray-700">
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-8">
                    <span className="text-18 font-semibold">
                      Bold Huggie Hoops by Mejuri
                    </span>

                    <span className="text-16">$198.00</span>
                  </div>

                  <span className="text-14">
                    The perfect stacking hoops they&apos;ll be able to wear day
                    after day.
                  </span>

                  <button
                    type="button"
                    className="self-start border bg-[#DBFF76] px-12 py-8 text-12/12"
                  >
                    Check them out
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-32">
              <div className="relative aspect-square w-[164px] shrink-0 overflow-hidden rounded bg-gray-300">
                <Image
                  src="/images/product/headphones.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-8 text-16/16 text-gray-700">
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-8">
                    <span className="text-18 font-semibold">
                      Apple AirPods Max on Amazon
                    </span>

                    <span className="text-16">$479.99</span>
                  </div>

                  <span className="text-14">
                    Give them the next best thing in tech. These over-the-ear
                    headphones will have them dancing like no one&apos;s
                    watching.
                  </span>

                  <button
                    type="button"
                    className="self-start border bg-[#DBFF76] px-12 py-8 text-12/12"
                  >
                    Check them out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JustForYou;
