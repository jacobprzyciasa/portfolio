import React from 'react'

function CaseStudyHeader() {
  return (
    <div className="flex justify-center items-center w-full fixed top-0 left-0 z-30 h-14 bg-white">
        <form
          action="/auth/signout"
          method="post"
          className="absolute 2xl:left-20 left-5 top-0 bottom-0 my-auto h-fit"
        >
          <button
            className="text-xs text-black hover:text-[#00000050] font-volkhov uppercase cursor-pointer transition-all"
            type="submit"
          >
            back
          </button>
        </form>
        <h1 className="text-black font-bold text-xl font-volkhov italic">
        Jacob Przyciasa
      </h1>
      </div>
  )
}

export default CaseStudyHeader