export function format(value: Date | number, timeZone: "local" | "utc" = "local") {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: timeZone === "utc" ? "UTC" : undefined,
  }).format(value)
}
