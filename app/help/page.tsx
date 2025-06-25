import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-lg px-1">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden relative animate-fade-in-up">
        <div className="flex justify-between items-center p-4 border-b bg-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Help request form</h2>
          <Link href='/'
            className="text-gray-900 hover:text-red-500 text-2xl transition duration-300 ease-in-out"
            aria-label="Close Modal"
          >
            &times;
          </Link>
        </div>
        <div className="max-h-[80vh]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScFTEraDpSau2nlxzpClJIRF18Z2qVE8g4m3LpTmfMcyQSQGQ/viewform?embedded=true"
            width="100%"
            height="600"
            className="rounded-md border w-full pb-20"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default page