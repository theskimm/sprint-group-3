function Survey() {
  return (
    <div id="poll" className="max-w-[70%] bg-soft-teal-100/50 p-64">
      <div className="n-lg:grid n-lg:grid-cols-2 n-lg:gap-96 container flex flex-col gap-32">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              <span className="font-gt-america-mono text-12/12 uppercase">
                Community Poll
              </span>

              <div className="flex flex-col gap-12">
                <h2 className="font-sangbleu text-32/38 font-light">
                  What are your feelings on credit cards?
                </h2>
                <p className="body-1 n-lg:max-w-[auto]">
                  We maintain a database of credit card sentiment from more than
                  1000 users. We are looking for more data points to inform
                  others.
                </p>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-16">
              <button type="button">
                <div className="n-md:p-16 z-1 relative flex justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
                  <span className="body-2 max-w-[80%]">
                    Love them and use them every day
                  </span>
                </div>
              </button>
            </div>
            <div className="grid auto-rows-fr gap-16">
              <button type="button">
                <div className="n-md:p-16 z-1 relative flex justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
                  <span className="body-2 max-w-[80%]">
                    Tried ‘em, but haven’t found one I love
                  </span>
                </div>
              </button>
            </div>
            <div className="grid auto-rows-fr gap-16">
              <button type="button">
                <div className="n-md:p-16 z-1 relative flex justify-between overflow-hidden rounded border-2 bg-white p-12 text-left">
                  <span className="body-2 max-w-[80%]">
                    Curious about them and want to learn more
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
