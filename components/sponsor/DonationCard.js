import React from "react";
import SponsorButton from "./SponsorButton";

export default function DonationCard(props) {
  return (
    <>
      {/* <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-4">
          <h2 className="text-white text-xl font-semibold">
            ¡Famdesc se impulsa gracias a ti!
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-700">
            ¿Sabías que Famdesc se financia de manera independiente y está en
            constante desarrollo gracias a personas como tú?
          </p>
          <p className="text-gray-700">
            Sin anuncios ni venta de datos, tu apoyo es fundamental para
            construir las primeras versiones y continuar mejorando Famdesc. Cada
            donación es un paso más hacia una plataforma familiar más sólida y
            útil para todos.
          </p>
          <p className="text-gray-700">
            Si valoras Famdesc y deseas verlo crecer, considera hacer una
            donación hoy mismo. ¡Tu contribución marca la diferencia!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md">
            ¡Dona ahora!
          </button>
        </div>
      </div> */}

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden m-4 transform transition duration-500 hover:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Support Famdesc
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Did you know that Famdesc relies on donations from users like you to
            continue development and maintenance?
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you value Famdesc and want to see it grow, consider making a
            donation today - your contribution makes a difference!
          </p>
          <SponsorButton />
        </div>
      </div>
    </>
  );
}
