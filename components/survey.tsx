function Survey() {
  return (
    <div id="poll" className="bg-[#F0EEF9] p-48">
      <div className="n-lg:grid n-lg:grid-cols-2 n-lg:gap-96 container flex flex-col gap-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-12">
              <span className="font-gt-america-mono text-14/14 uppercase tracking-.02">
                Ask an Expert
              </span>

              <h2 className="font-sangbleu text-32/32 font-light">
                What are your feelings on credit cards?
              </h2>

              <p className="text-16/24">
                We maintain a database of credit card sentiment from more than
                1000 users. We are looking for more data points to inform
                others.
              </p>
            </div>

            <div className="flex cursor-pointer justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
              <span className="body-2 max-w-[80%]">
                Love them and use them every day
              </span>
            </div>

            <div className="flex cursor-pointer justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
              <span className="body-2 max-w-[80%]">
                Tried &apos;em, but haven&apos;t found one I love
              </span>
            </div>

            <div className="flex cursor-pointer justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
              <span className="body-2 max-w-[80%]">
                Curious about them and want to learn more
              </span>
            </div>

            <button
              type="button"
              className="self-start border bg-[#DBFF76] px-12 py-8 text-14/14 font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
