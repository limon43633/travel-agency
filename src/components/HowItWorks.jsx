import React from 'react'
import { Search, Calendar, CreditCard, MapPinned } from 'lucide-react'
import { assets } from '../assets/assets'

const steps = [
  {
    icon: Search,
    title: 'Find your destination',
    description:
      'Browse handpicked spots across Bangladesh, filtered by budget, duration, and the kind of trip you\'re after.',
  },
  {
    icon: Calendar,
    title: 'Pick your dates',
    description:
      'Choose your travel window and group size — we\'ll show you real availability, not placeholder dates.',
  },
  {
    icon: CreditCard,
    title: 'Book and pay securely',
    description:
      'Confirm your package with a few payment options. The price you saw is exactly what you\'re charged.',
  },
  {
    icon: MapPinned,
    title: 'Pack and go',
    description:
      'We send your itinerary, host contact, and a packing checklist — everything you need before departure.',
  },
]

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-25">
      {/* Section heading */}
      <div className="mb-10 pb-6 border-b border-[#E3E4DA]">
        <h2 className="text-[#15170F] font-serif text-4xl md:text-5xl tracking-tight italic">
          How it works
        </h2>
        <p className="text-[#9A9C90] text-sm md:text-[15px] font-light mt-3">
          From idea to itinerary in four simple steps
        </p>
      </div>

      {/* Left image / Right steps split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left — image */}
        <div className="lg:col-span-5 order-1">
          <div className="relative overflow-hidden rounded-2xl h-full min-h-[440px] bg-[#F1F2EC] shadow-[0_1px_3px_rgba(20,25,15,0.06)]">
            <img
              src={assets.kaptai}
              alt="Traveler exploring a foggy hillside trail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — steps, all expanded */}
        <div className="lg:col-span-7 order-2 flex flex-col justify-center gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isFirst = index === 0

            return (
              <div
                key={index}
                className='flex items-start gap-5 p-5 rounded-2xl transition-colors duration-300'
              >
                {/* Icon */}
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    isFirst ? 'bg-[#A6F24A]' : 'bg-[#F1F2EC]'
                  }`}
                >
                  <Icon
                    size={18}
                    className={isFirst ? 'text-[#1C3308]' : 'text-[#9A9C90]'}
                    strokeWidth={1.75}
                  />
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[#15170F] font-serif text-xl tracking-tight">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-[#B7B9AC] shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[#9A9C90] text-sm leading-relaxed font-light mt-1.5 max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks