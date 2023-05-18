import Image from "next/image";

function JustForYou() {
  return (
    <div id="poll" className="max-w-[70%] bg-soft-teal-100/50 p-32">
      <div className="n-lg:grid n-lg:grid-cols-2 n-lg:gap-96 container flex flex-col gap-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-12">
                <h2 className="border-b-2 font-sangbleu text-32/38 font-light">
                  Just For You
                </h2>
                <p className="body-1 n-lg:max-w-[auto]">
                  Short on time? Here are the gifts you won’t want to miss. 
                </p>
              </div>
            </div>

            <div className="flex items-center gap-16">
              <div className="relative aspect-square w-[200px] rounded-full bg-gray-300">
                <Image
                  src="/../public/images/product/earrings.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-8 text-16/16 text-gray-700">
                <div className="flex flex-col gap-4">
                  <span className="text-18 font-bold">
                    Bold Huggie Hoops by Mejuri
                  </span>
                  <span className="text-16 font-medium">$198.00</span>
                  <span className="text-14">
                    Bold Huggie Hoops by Mejuri $198.00 The perfect stacking
                    hoops they&apos;ll be able to wear day after day.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-16">
              <div className="relative aspect-square w-[200px] rounded-full bg-gray-300">
                <Image
                  src="/../public/images/product/headphones.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-8 text-16/16 text-gray-700">
                <div className="flex flex-col gap-4">
                  <span className="text-18 font-bold">
                    Apple AirPods Max on Amazon
                  </span>
                  <span className="text-16 font-medium">$479.99</span>
                  <span className="text-14">
                    Give them the next best thing in tech. These over-the-ear
                    headphones will have them dancing like no one&apos;s
                    watching.
                  </span>
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
