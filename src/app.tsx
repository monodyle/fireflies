import { Counter } from "./components/counter"
import { format } from "./libs/format"

export default function App() {
  const now = new Date()

  return (
    <main className="min-h-screen max-w-[512px] flex flex-col mx-auto p-2 md:p-9 gap-2 md:gap-4">
      <h1 className="font-bricolage text-2xl font-bold text-center">Fireflies</h1>
      <div className="mx-auto bg-stone-50 p-4 rounded-lg border border-stone-200 shadow-lg shadow-stone-200 w-full">
        <div className="text-center">
          {format(now)}
        </div>
        <div className="text-xs text-center text-stone-600">
          UTC:
          {" "}
          {format(now, "utc")}
        </div>
        <div className="my-4 border-b border-stone-200 -mx-4" />
        <Counter milestone={now} />
        <div className="my-4 border-b border-stone-200 -mx-4" />
        <div className="py-4 text-center">
          <p className="font-bricolage text-xl pr-8 before:content-['“'] before:text-3xl before:font-serif before:text-stone-400 before:font-bold">
            I'd like to make myself believe
          </p>
          <p className="font-bricolage text-xl pl-8 quotes-[]">
            That planet Earth turns slowly
          </p>
          <span className="text-sm italic text-stone-700">
            <a href="https://youtu.be/psuRGfAaju4" target="_blank" rel="noreferrer noopener" className="text-amber-700">Fireflies</a>
            {" "}
            -
            {" "}
            <a href="https://owlcity.com/" target="_blank" rel="noreferrer noopener" className="text-amber-700">Owl City</a>
          </span>
        </div>
      </div>
    </main>
  )
}
