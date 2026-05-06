import React from 'react'

const Home = () => {
  return (
    <main>
        <section>

            <img src="/images/hero.png" alt="hero" className='w-full h-auto' />
            <div className="text-white max-w-[571px] absolute top-1/2 left-16 -translate-y-1/2">
                <p className="text-[60px] leading-[71px] font-bold">Innovative IT Infrastructure & Enterprise Software Solutions</p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded">Get Free Consultation</button>
                    <button className="bg-white hover:bg-gray-200 text-black py-4 px-4 rounded">Explore Our Service</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home
