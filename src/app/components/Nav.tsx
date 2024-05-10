import Image from "next/image"
import { Oleo_Script } from "next/font/google"

const oleo = Oleo_Script({
    subsets:['latin'],
    weight: ['400', '700']
})

export function Nav()  {

    return (
        <div className=" bg-gradient-to-b from-gray-800 to-blue-800 mt-4 p-4 mx-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <Image 
            src="/atoms.png"
            width={40}
            height={40}
            alt=""
          />
          <div className={oleo.className} >
           <h1 className="text-2xl text-white items-center font-semibold mb-4 ml-2">Welcome to Physic Resolve - @jmatzul7</h1>
           </div>
        </div>
      </div>
    )
}

export default Nav