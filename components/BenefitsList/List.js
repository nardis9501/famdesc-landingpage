export default function List(props) {
  return (
    <>
      <article className="bg-blue-500 p-4 rounded-lg shadow-lg">
        <p>
          This is introductory content that explains your offering in more
          detail. It should follow on benefits of your headline and explain the
          benefits of your product or service
        </p>
        <ol className="list-decimal list-inside">
          <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
            Your first feature written in the form of a benefit statement
          </li>
          <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
            Your second feature written in the form of a benefit statement
          </li>
          <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
            Your third feature written in the form of a benefit statement
          </li>
          <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
            Your fourth feature written in the form of a benefit statement
          </li>
        </ol>
      </article>
    </>
  );
}
