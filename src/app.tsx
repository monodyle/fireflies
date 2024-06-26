import { useMemo } from "react"
import { Counter } from "./components/counter"
import { format } from "./libs/format"

export default function App() {
  const milestone = useMemo(() => {
    const url = new URL(window.location.href)
    const milestone = url.searchParams.get("t") || url.searchParams.get("time") || url.searchParams.get("m") || url.searchParams.get("milestone")
    if (!milestone)
      return new Date()

    const time = Number(milestone)
    if (time && !Number.isNaN(time)) {
      if (milestone.length === 10)
        return new Date(time * 1000)

      return new Date(time)
    }

    if (!Number.isNaN(Date.parse(milestone)))
      return new Date(milestone)

    return new Date()
  }, [])

  const label = useMemo(() => {
    const url = new URL(window.location.href)
    const label = url.searchParams.get("l") || url.searchParams.get("label")
    if (label)
      return label.slice(0, 64)

    return undefined
  }, [])

  return (
    <main className="min-h-screen max-w-[512px] flex flex-col mx-auto p-2 md:p-9 gap-2 md:gap-4">
      <h1 className="font-bricolage text-2xl font-bold text-center">Fireflies</h1>
      <div className="mx-auto bg-stone-50 p-4 rounded-lg border border-stone-200 shadow-lg shadow-stone-200 w-full">
        {label && <h2 className="text-center font-semibold font-bricolage text-2xl mb-4 text-balance">{label}</h2>}
        <div className="text-center">
          {format(milestone)}
        </div>
        <div className="text-xs text-center text-stone-600">
          UTC:
          {" "}
          {format(milestone, "utc")}
        </div>
        <div className="my-4 border-b border-stone-200 -mx-4" />
        <Counter milestone={milestone} />
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
      <div className="text-center text-xs text-stone-500">
        <div>
          build with 💖 by
          {" "}
          <a href="https://github.com/monodyle" target="_blank" rel="noreferrer noopener" className="underline decoration-dashed">monodyle</a>
        </div>
        <div className="flex items-center gap-1 justify-center">
          <a href="https://ko-fi.com/monodyle" target="_blank" rel="noreferrer noopener" className="underline decoration-dashed">buy me a coffee</a>
          ・
          <a href="https://github.com/monodyle/fireflies" target="_blank" rel="noreferrer noopener" className="underline decoration-dashed">github</a>
        </div>
      </div>
    </main>
  )
}
