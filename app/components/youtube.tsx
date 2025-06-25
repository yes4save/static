import React from 'react'


const Youtube = () => {
  return (
    <section className="py-16 border-b-2 border-b-rose-400 rounded-b-md bg-gradient-to-b from-[#FFFAF7] to-[#FFF5EE]">
  <div className="container max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left Content */}
      <div className="md:sticky top-24 px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-6 tracking-tight">
  Subscribe to stay inspired.
  <span className="block mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-rose-400 via-red-400 to-amber-400 rounded-full" />
</h1>
        <p className="text-center text-gray-700 text-lg max-w-xl mx-auto">
          Visit our <span className="text-red-600 font-semibold">YouTube</span> to witness the powerful ways God is moving through our ministry. Join us as we share moments of worship, missions, and miracles.
        </p>
      </div>

      {/* YouTube Videos */}
      <div className="flex flex-col gap-8">
        {[
          "https://www.youtube.com/embed/toNETwwpTZQ?si=aQd-y8biSfO5q3Tn",
          "https://www.youtube.com/embed/b5U3afJwR0w?si=TzogcIEnnC9qfJlb",
          "https://www.youtube.com/embed/v5T6Fu6k71E?si=UVKmxg3Xi4n3beW9",
        ].map((url, index) => (
          <div key={index} className="rounded-lg shadow-lg border border-gray-200 bg-white p-2">
            <div className="w-full aspect-video">
              <iframe
                src={url}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default Youtube

