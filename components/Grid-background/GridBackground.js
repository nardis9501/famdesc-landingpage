import React from "react";

export default function GridBackground({
  children,
  backdropTop,
  backdropBottom,
  heroImageNumber,
}) {
  return (
    <>
      <section className="relative">
        <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-screen">
          <div
            className={`${
              heroImageNumber === 1
                ? "bg-[url('/hero/1-hero@light.jpg')] dark:bg-[url('/hero/1-dark@tiny.avif')]"
                : heroImageNumber === 2
                ? "bg-[url('/hero/2-hero@light.jpg')] dark:bg-[url('/hero/2-dark@tiny.avif')]"
                : heroImageNumber === 3
                ? "bg-[url('/hero/3-hero@light.jpg')] dark:bg-[url('/hero/3-dark@tiny.avif')]"
                : heroImageNumber === 4
                ? "bg-[url('/hero/4-hero@light.jpg')] dark:bg-[url('/hero/4-dark@tiny.avif')]"
                : heroImageNumber === 5
                ? "bg-[url('/hero/5-hero@light.jpg')] dark:bg-[url('/hero/5-dark@tiny.avif')]"
                : heroImageNumber === 6
                ? "bg-[url('/hero/6-hero@light.jpg')] dark:bg-[url('/hero/6-dark@tiny.avif')]"
                : heroImageNumber === 7
                ? "bg-[url('/hero/7-hero@light.jpg')] dark:bg-[url('/hero/7-dark@tiny.avif')]"
                : heroImageNumber === 8
                ? "bg-[url('/hero/8-hero@light.jpg')] dark:bg-[url('/hero/8-dark@tiny.avif')]"
                : "bg-[url('/hero/1-hero@light.jpg')] dark:bg-[url('/hero/1-dark@tiny.avif')]"
            } bg-no-repeat bg-bottom bg-[size:150rem] dark:bg-[size:210rem] dark:bg-top inset-x-0 absolute w-full h-full`}
          ></div>
          <div className="[mask-image:linear-gradient(0deg,transparent,black)] absolute  inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {backdropTop && (
            <div className="inset-x-0 top-0 flex justify-center bg-gradient-to-b from-slate-50 pb-36 pt-10 pointer-events-none dark:from-slate-900 absolute"></div>
          )}
          {backdropBottom && (
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-50 pt-36 pb-10 pointer-events-none dark:from-slate-900 absolute"></div>
          )}{" "}
        </article>
        <div className="relative">{children}</div>
      </section>
    </>
  );
}
