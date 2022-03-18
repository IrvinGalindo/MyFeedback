import numeral from "numeral";

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const prettyPrintAverage = (average) =>
  average ? `${numeral(average).format("0.0a")} ⭐` : "0 ⭐";
