import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

// this will maintain the time to be UTC time (the same as database)

//ex. 2023-11-01 00:00
export const formatDatetime1 = (datetime: string) => {
  const originalISO = parseISO(datetime);
  //   console.log("Original ISO:", originalISO.toISOString());
  const utcDate = utcToZonedTime(originalISO, "UTC");
  // Format the date in UTC
  const formattedDateUTC = format(utcDate, "yyyy-MM-dd HH:mm", {
    timeZone: "UTC",
  } as any);
  //   console.log("Formatted Date UTC:", formattedDateUTC);
  return formattedDateUTC;
};

//ex. 12 Nov 2023
export const formatDate1 = (datetime: string) => {
  const originalISO = parseISO(datetime);
  //   console.log("Original ISO:", originalISO.toISOString());
  const utcDate = utcToZonedTime(originalISO, "UTC");
  const formattedDate = format(utcDate, "dd MMM yyyy", {
    timeZone: "UTC",
  } as any);
  //   console.log("Formatted Date (12 Nov 2023):", formattedDate);
  return formattedDate;
};

//ex. 12:00 PM
export const formatTime1 = (datetime: string) => {
  const originalISO = parseISO(datetime);
  //   console.log("Original ISO:", originalISO.toISOString());
  const utcDate = utcToZonedTime(originalISO, "UTC");
  const formattedTime = format(utcDate, "hh:mm a", {
    timeZone: "UTC",
  } as any);
  //   console.log("Formatted Time:", formattedTime);
  return formattedTime;
};
