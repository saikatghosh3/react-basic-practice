import React from 'react'

const Example = () => {
  return (
    <section className=" flex flex-col items-center justify-center bg-[#0f1720] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-yellow-400 text-4xl font-bold mb-4">
          Professional Example Section
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          This section demonstrates how you can create a clean, modern layout 
          using React and Tailwind CSS. Use it to test your component styling.
        </p>

        <div className="py-16 grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center  w-72 h-64 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Fast Performance</h2>
            <p className="text-gray-400 mb-4">
              Experience blazing fast performance and smooth rendering in React apps.
            </p>
            <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className=" flex flex-col items-center justify-center  w-72 h-64 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Reusable Components</h2>
            <p className="text-gray-400 mb-4">
              Build modular, reusable components to scale your application efficiently.
            </p>
              <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              Explore
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center  w-72 h-64 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Tailwind Styling</h2>
            <p className="text-gray-400 mb-4">
              Use Tailwind CSS classes for rapid UI development with a clean design system.
            </p>
            <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Example
