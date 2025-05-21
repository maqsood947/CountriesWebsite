import Globe from '../assets/Globe.png'
export default function Home() {
  return (
    <div className="container-gradient flex justify-center items-center ">
 <div className="  max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 ">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bloc text-white">World</span>
            <span className="block text-blue-400">Details</span>
          </h1>
          <p className="text-gray-300 max-w-md leading-relaxed">
           lets explore about the world and countries. including population each country has , its capital, region and many more
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition">
            SEE MORE
          </button>
        </div>

        <div className="md:w-1/2">
        <img 
        src={Globe}
        className='h-80'/>
        </div>
      </div> 
         </div>
  )
}




