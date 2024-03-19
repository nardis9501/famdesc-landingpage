"use client";
import Image from "next/image";

export default function Testimonials(props) {
  const users = [
    {
      id: 1,
      username: "Nardis Del Campo",
      avatarUrl: "https://avatars.githubusercontent.com/u/48690649?v=4",
      testimonial:
        "FamilyTree will be an enhanced, open source, user-centric social network with content of value to everyone globally",
      job: "CEO at FamilyTree",
    },
    {
      id: 2,
      username: "Nardis Del Campo",
      avatarUrl: "https://avatars.githubusercontent.com/u/48690649?v=4",
      testimonial:
        "FamilyTree will be an enhanced, open source, user-centric social network with content of value to everyone globally",
      job: "CEO at FamilyTree",
    },
    {
      id: 3,
      username: "Nardis Del Campo",
      avatarUrl: "https://avatars.githubusercontent.com/u/48690649?v=4",
      testimonial:
        "FamilyTree will be an enhanced, open source, user-centric social network with content of value to everyone globally",
      job: "CEO at FamilyTree",
    },
    {
      id: 3,
      username: "Nardis Del Campo",
      avatarUrl: "https://avatars.githubusercontent.com/u/48690649?v=4",
      testimonial:
        "FamilyTree will be an enhanced, open source, user-centric social network with content of value to everyone globally",
      job: "CEO at FamilyTree",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to bg-blue-100 dark:bg-gradient-to-b dark:from-blue-700 to dark:bg-blue-800 pt-4">
        <svg
          className="flex flex-col justify-start h-12 mx-10 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        {users.map((user) => {
          const { username, testimonial, job, avatarUrl, id } = user;
          console.log(username);
          return (
            <div
              key={id}
              className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-6 lg:px-6"
            >
              <figure className="max-w-screen-md ">
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    {testimonial}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-2 space-x-3">
                  <Image
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                    src={avatarUrl}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {username}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {job}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </section>
    </>
  );
}
