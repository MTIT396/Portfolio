import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale("vi");

const TIMEZONE = "Asia/Ho_Chi_Minh";

export const timeFromNow = (date: dayjs.ConfigType) => {
  return dayjs(date).tz(TIMEZONE).fromNow();
};
