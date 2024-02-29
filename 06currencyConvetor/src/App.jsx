import { useState } from 'react'
import {InputBox} from "./Components"
import UseCurrencyInfo from './hooks/UseCurrencyInfo'

 function App() {   
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo  = UseCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(ConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/11798249/pexels-photo-11798249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-500 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-pink-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
