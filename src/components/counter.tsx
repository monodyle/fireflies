import React, { useEffect } from "react"
import { format } from "../libs/format"
import { Number } from "./number"

type CounterProps = {
  milestone: Date
}

const units = {
  seconds: 2,
  minutes: 3,
  hours: 4,
  days: 5,
  weeks: 6,
  months: 7,
  years: 8,
} as const

type Units = typeof units
type UnitTuple = {
  [K in keyof Units]: [K, Units[K]]
}[keyof Units]

function _Counter({ milestone: _milestone }: CounterProps) {
  const milestone = _milestone.getTime()

  /* avoid dom rerender */
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const diff = now - milestone
      const diffs = {
        seconds: diff / 1000,
        minutes: diff / 1000 / 60,
        hours: diff / 1000 / 60 / 60,
        days: diff / 1000 / 60 / 60 / 24,
        weeks: diff / 1000 / 60 / 60 / 24 / 7,
        months: diff / 1000 / 60 / 60 / 24 / 30,
        years: diff / 1000 / 60 / 60 / 24 / 365.25,
      }

      const unitsTuple = Object.entries(units) as Array<UnitTuple>
      for (const [unit, decimals] of unitsTuple) {
        const value = diffs[unit]
        const int = Math.floor(Math.abs(value))
        const dec = Math.abs(value) - int
        const integer = int.toLocaleString()
        const decimal = dec.toFixed(decimals).slice(1)
        const opacity = int > 0 ? 1 : (dec * 0.75 + 0.25)

        const intEl = document.getElementById(`${unit}Int`)
        if (intEl)
          intEl.textContent = integer

        const decEl = document.getElementById(`${unit}Dec`)
        if (decEl)
          decEl.textContent = decimal

        const contentEl = document.getElementById(unit)
        if (contentEl)
          contentEl.style.opacity = opacity.toString()
      }
    }, 74)

    return () => clearInterval(interval)
  }, [milestone])

  return (
    <div className="flex flex-col gap-2">
      <div className="text-center text-sm text-stone-700">It&apos;s</div>
      <Number decimals={2} label="seconds" />
      <Number decimals={3} label="minutes" />
      <Number decimals={4} label="hours" />
      <Number decimals={5} label="days" />
      <Number decimals={6} label="weeks" />
      <Number decimals={7} label="months" />
      <Number decimals={8} label="years" />
      <div className="text-center text-sm text-stone-700">
        {(Date.now() - milestone) >= 0 ? "since" : "until"}
        {" "}
        {format(milestone)}
      </div>
    </div>
  )
}

export const Counter = React.memo(_Counter)
