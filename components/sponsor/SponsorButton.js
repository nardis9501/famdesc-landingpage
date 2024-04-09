import { useAppContext } from "@/app/providers";

export default function SponsorButton({ isWhite }) {
  const { color } = useAppContext();
  return (
    <>
      <button
        className={`h-12 w-28  md:h-14 md:w-36 rounded-lg ${
          !isWhite && "text-white"
        } text-xl md:text-xl font-semibold hover:bg-salmon ${
          isWhite && color === "blue"
            ? "bg-white text-blue-500"
            : isWhite && color === "red"
            ? "bg-white text-red-500"
            : color === "blue"
            ? "bg-blue-500"
            : color === "red"
            ? "bg-red-500"
            : ""
        }`}
      >
        Donate now
      </button>
    </>
  );
}
