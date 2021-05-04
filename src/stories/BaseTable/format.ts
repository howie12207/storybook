function dateTime(day: Date | string | number) {
  if (!day) return "";
  day =
    typeof day === "number"
      ? new Date(day)
      : new Date(day.toString().replace(/-/g, "/"));
  const YYYY = day.getFullYear();
  const MM =
    day.getMonth() + 1 < 10 ? "0" + (day.getMonth() + 1) : day.getMonth() + 1;
  const DD = day.getDate() < 10 ? "0" + day.getDate() : day.getDate();
  const hh = day.getHours() < 10 ? "0" + day.getHours() : day.getHours();
  const mm = day.getMinutes() < 10 ? "0" + day.getMinutes() : day.getMinutes();
  const ss = day.getSeconds() < 10 ? "0" + day.getSeconds() : day.getSeconds();
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

function thousand(content: string | number) {
  if (!content) content = 0;
  const num = parseFloat(String(content)).toLocaleString("en-US");
  return num;
}

function decimalRound(text: string | number, decimal: number) {
  let num = parseFloat(String(text));
  if (isNaN(num)) {
    return text;
  }
  num = Math.round(num * 10 ** decimal) / 10 ** decimal;
  return num;
}

const format = {
  // '2020-01-01T00:00:00Z' => '2020-01-01 00:00:00'
  toDateTime(day: Date | string | number) {
    return dateTime(day);
  },
  // '2020-01-01T00:00:00Z' => '2020-01-01'
  toDate(day: Date | string | number) {
    return dateTime(day).slice(0, 10);
  },
  toThousand(content: string | number) {
    return thousand(content);
  },
  // '200.345' => '200.35'
  toDecimalRound(text: number | string, decimal = 2) {
    return decimalRound(text, decimal);
  },
};

export default format;
