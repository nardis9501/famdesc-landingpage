import { useAppContext } from "@/app/providers";

export default function FrontCover(props) {
  const { color } = useAppContext();
  return (
    <>
      <div className="w-full h-screen grid place-content-center">
        <h1
          className={`flex justify-center font-bold my-3 text-7xl text-transparent bg-clip-text bg-gradient-to-t from-bluePantone to-red-400`}
        >
          The Network for families
        </h1>
        <h2
          className={`animate-fade-in text-2xl ${
            color === "blue" && "text-blue-500"
          } ${color === "red" && "text-red-500"}`}
        >
          A closer and high value network
        </h2>
      </div>
    </>
  );
}
