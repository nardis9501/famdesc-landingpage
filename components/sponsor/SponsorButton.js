import { useAppContext } from "@/app/providers";

export default function SponsorButton({ isWhite }) {
  const { color } = useAppContext();
  return (
    <>
      <button
        className={` ${
          color === "blue"
            ? "bg-blue-500"
            : color === "red"
            ? "bg-red-500"
            : "bg-blue-500"
        } mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white dark:text-gray-900  hover:bg-salmon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-gray-500`}
      >
        Donate Now
      </button>
    </>
  );
}
