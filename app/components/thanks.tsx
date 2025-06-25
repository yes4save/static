import React from 'react'
import { Heart, Award, Gift, HandIcon as Hands, Users } from "lucide-react"

const Thanks = () => {
  return (
    <section className="w-full py-16 md:py-16 overflow-hidden relative">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFAF7] to-[#FFF5EE] dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose-100 dark:bg-rose-900/20 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-30 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container px-4 md:px-6 relative mx-auto">
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full shadow-lg mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 text-transparent bg-clip-text mb-8">
              Thank You
            </h2>
          </div>

          {/* Main message */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-white/20 dark:border-slate-700/50 mb-12 text-center">
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Dear Donors and Supporters,
            </p>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              In a world full of challenges, your support means everything. Together, we&apos;re not just helping people
              today but also creating lasting change for tomorrow. Your generosity helps us make a real difference in
              many lives.
            </p>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              Thank you for being with us on this journey. Your belief in what we do keeps us going and makes a better
              future possible.
            </p>
            <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              SO FAR..
            </p>
          </div>

          {/* Donor Lists */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* Major Donor */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-sky-500 mr-3" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-sky-600 dark:from-sky-400 dark:to-sky-400 text-transparent bg-clip-text">
                  Major Donor
                </h3>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mr-2"></span>
                  Mr. Leo
                </li>
              </ul>
            </div>

            {/* Recurring Donor */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50">
              <div className="flex items-center mb-4">
                <Gift className="w-6 h-6 text-teal-500 mr-3" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">
                  Recurring Donor
                </h3>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  Mrs. Nalini
                </li>
              </ul>
            </div>


            {/* Emergency/Crisis Donors */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50 lg:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-rose-500 mr-3" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 text-transparent bg-clip-text">
                  Emergency/Crisis Donors
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. John
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Venolin
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Rahul
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Rex
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Saitt
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Thomas
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Mandeep
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Mohan
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Vignesh
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Kamaraj
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Nelson
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mr. Naveen
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Deepa
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Chitra
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Archana
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Susmitha
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Jenefa
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Martha
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Prabha
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Uma
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Yamuna
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Jenifer
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Mrs. Yamini
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Miss. Gracy
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Miss. Sakthi
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Miss. Manju
                </div>
              </div>
            </div>

            {/* Volunteers */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50 lg:col-span-3">
              <div className="flex items-center mb-4">
                <Hands className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 text-transparent bg-clip-text">
                  Volunteers
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Sridhar
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Jegan
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Martha
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Ays
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Yamini
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Nelson
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Priya
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Rose
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Gracy
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Naveen
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Nithin
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Rex
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Roshan
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Bro. Jebaraj
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Sis. Preethi
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Rehoboth fellowship
                </div>
              </div>
              <br/>
              <p className="text-lg font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 text-transparent bg-clip-text">Kutties:</p>
              <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Riya & Aaron
                </div>
                <div className="text-slate-700 dark:text-slate-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                  Tarun & Varun Chaudhri
                </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xl font-semibold bg-gradient-to-r from-rose-600 to-amber-600 dark:from-rose-400 dark:to-amber-400 text-transparent bg-clip-text mb-4">
              With gratitude:
            </p>

            <div className="flex justify-center space-x-3 mb-3">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-5 h-5 text-rose-500 dark:text-rose-400 fill-current opacity-80"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animation: "pulse 3s infinite",
                  }}
                />
              ))}
            </div>
              
              {/* Trustees */}
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-indigo-500 mr-3" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Trustees
                </h3>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Mrs. Kumudha
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Mr. Durai Chaudhri
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Miss. Raghavi
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Thanks