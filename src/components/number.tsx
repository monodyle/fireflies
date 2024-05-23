type NumberProps = {
  decimals: number
  label: string
}
export function Number({ label }: NumberProps) {
  return (
    <div id={label}>
      <div className="flex text-2xl items-end tabular-nums font-mono">
        <span className="text-right w-1/2" id={`${label}Int`} />
        <div className="w-1/2 text-xl" id={`${label}Dec`} />
      </div>
      <div className="text-center text-sm text-stone-700">{label}</div>
    </div>
  )
}
