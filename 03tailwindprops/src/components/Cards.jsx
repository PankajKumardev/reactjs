import React from 'react'

function Cards({username,btnText="Click Here"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mt-4">
    <img
      src="https://yt3.googleusercontent.com/k3Y5EC8tygv2IZoBPCV3LCGoOxG1MeYUEjOxGcZymSVf7qdDJYqs7kg27AAsfpLwmGTDkf5ISQ=s900-c-k-c0x00ffffff-no-rj"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-4 inline-flex cursor-pointer items-center text-sm font-semibold text-black-400">
        {btnText}
      </button>
    </div>
  </div>
  )
}

export default Cards