import { useState } from "react";

interface InputProps {
  handleSubmit: (value: string) => void;
  searchTerm?: string;
  placeholder?: string;
}

function Input({ handleSubmit, searchTerm, placeholder }: InputProps) {
  const [value, setValue] = useState(searchTerm ?? "");

  function handleClick(event: any) {
    event.preventDefault();

    handleSubmit(value);
  }

  function handleReset() {
    setValue("");
  }

  return (
    <form
      className="flex h-[48px] w-full items-center gap-4 rounded-md border border-gray-300 bg-white p-4 transition-colors focus-within:border-accent-teal"
      onSubmit={handleClick}
    >
      <div className="mx-8 flex w-full items-center gap-8">
        <input
          className="peer w-full font-graphik text-16/16 text-gray-800 placeholder:text-gray-500 focus:outline-none disabled:bg-white"
          placeholder="Start your journey"
          type="search"
          inputMode="search"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />

        <button
          className="flex h-[20px] w-[20px] shrink-0 peer-placeholder-shown:hidden"
          type="reset"
          onClick={handleReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-full w-full"
          >
            <rect
              width="24"
              height="24"
              y="0.5"
              className="fill-gray-200"
              rx="12"
            />
            <path
              className="fill-gray-600 stroke-gray-800"
              strokeWidth="0.2"
              d="M16.78 6.629h0L12 11.414 7.217 6.642a.761.761 0 00-1.088 0 .758.758 0 000 1.087l4.782 4.771-4.782 4.785a.758.758 0 000 1.086.761.761 0 001.088 0h0L12 13.586l4.795 4.785a.761.761 0 001.088 0h0l.002-.002a.77.77 0 00-.016-1.085l-4.78-4.784 4.78-4.785a.758.758 0 000-1.086.761.761 0 00-1.087 0z"
            />
          </svg>
        </button>
      </div>

      <button
        type="submit"
        className="n-md:grid hidden min-w-[95px] flex-shrink-0 items-center justify-center rounded bg-accent-teal px-24 py-[12px] transition-colors hover:bg-pop-of-teal disabled:bg-gray-300"
      >
        <span className="button-text">Search</span>
      </button>
    </form>
  );
}

export default Input;
