import React from 'react'
const cafes = [
    {
        name: "Healthy Hut",
        image: "https://www.kiet.edu/kiet/assets/frontend/img/cafeteria-img1.jpg"
    },
    {
        name: "Cafetaria",
        image: "https://www.kiet.edu/kiet/assets/frontend/img/cafeteria-img1.jpg"
    },
    {
        name: "Green Chilly",
        image: "https://www.kiet.edu/kiet/assets/frontend/img/cafeteria-img1.jpg"
    },
    {
        name: "Hungry Nites",
        image: "https://www.kiet.edu/kiet/assets/frontend/img/cafeteria-img1.jpg"
    },
    {
        name: "Big Treat(BT)",
        image: "https://www.kiet.edu/kiet/assets/frontend/img/cafeteria-img1.jpg"
    }
]
function Cafe() {
  return (
    <>
    <div className='min-h-screen w-full p-7'>
        <h1 className='text-2xl font-semibold mb-5'>Cafes in your college:</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {cafes.map((cafe,idx)=>(
                <div key={idx} className='bg-white border border-gray-400 rounded-lg p-5 hover:scale-[1.01] shadow-xl transition-all duration-300 cursor-pointer'>
                    <p className='text-xl font-semibold'>{cafe.name}</p>
                    <div className='mt-3'>
                        <img src={cafe.image} alt={cafe.image} className='rounded-lg' />
                    </div>
                    <div className='mt-2'>
                        <p className='text-sm text-gray-600'>Open: Monday - Friday</p>
                    </div>

                    <button className='bg-black text-white w-full py-2 rounded-full mt-3 hover:bg-black/80 cursor-pointer'>
                        Book Now
                    </button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Cafe