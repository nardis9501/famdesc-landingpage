import React from "react";
import SponsorButton from "../sponsor/SponsorButton";
import { useAppContext } from "@/app/providers";

export default function VideoSection(props) {
  const { color } = useAppContext();
  return (
    <>
      <section
        className={`md:grid md:grid-cols-2 place-content-center p-1 md:px-2 md:py-8 text-white ${
          color === "blue" && "bg-blue-500 shadow-sm shadow-blue-500"
        } ${color === "red" && "bg-red-500"}`}
      >
        <div className="flex justify-center col-span-2">
          <h2 className="px-4 md:px-0 text-3xl font-semibold capitalize">
            Discover Famdesc: Our Vision and Core Values.
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <video
            className="w-full h-full aspect-video rounded-lg border-none"
            width="320"
            height="240"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/promo.webm" type="video/webm" />
            <source src="/promo.mp4" type="video/mp4" />
            <p>
              Your browser does not support HTML video. Here is a
              <a href="/promo.webp" download="FamilyTree-video.mp4">
                link to the video
              </a>{" "}
              instead.
            </p>
          </video>

          <p className="p-2 font-semibold">Video of FamilyTree</p>
        </div>

        <div className="flex flex-col px-4 md:px-0 my-10 md:ml-4 lg:ml-20 text-2xl lg:leading-9">
          <ul className="space-y-4 text-left">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-10 h-10 text-salmon
            "
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06 4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"></path>
              </svg>
              <span>Free to All Users</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-10 h-10 text-salmon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.3996 19.1598 20.1355 15.2122 21.4732L14.9859 21.5469L12.082 13.997C13.151 13.95 14.001 13.0544 14.001 12C14.001 10.8954 13.1055 10 12.001 10C10.8964 10 10.001 10.8954 10.001 12C10.001 13.0768 10.8519 13.9548 11.918 13.9983L9.01501 21.5466L8.78975 21.4732C4.84212 20.1355 2.00098 16.3996 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 14.9201 5.56547 17.4747 7.90198 18.8715L9.38145 15.023C8.5358 14.2896 8.00098 13.2073 8.00098 12C8.00098 9.79086 9.79184 8 12.001 8C14.2101 8 16.001 9.79086 16.001 12C16.001 13.2075 15.466 14.29 14.62 15.0234C15.1861 16.4969 15.6797 17.7803 16.0998 18.8729C18.4362 17.4751 20.001 14.9203 20.001 12C20.001 7.58172 16.4193 4 12.001 4Z"></path>
              </svg>
              <span>Open Source</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-10 h-10 text-salmon shadow-salmon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path>
              </svg>
              <span>High Quality Content</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-10 h-10 text-salmon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="m12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
              </svg>
              <span>Data Privacy and Security</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center col-span-2">
          <SponsorButton isWhite />
        </div>
      </section>
    </>
  );
}
