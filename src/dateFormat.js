// 定义格式化时间的函数
function dateFormat(dateStr) {
  const dt = new Date(dateStr);

  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());

  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 定义一个补零的函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}

/**
 * @name 获取最近一周的时间
 * @param {*} dateStr
 * @returns
 */
function getWeekDate(dateStr) {
  var dd = new Date();
  dd.setDate(dd.getDate() + n); //获取n天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  let day = y + "-" + m + "-" + d;
  return day;
}
/**
 * @name 获取最近N月的时间
 * @param {*} dateStr
 * @returns
 */
function getMonthDate(dateStr) {
  var datenow = new Date();
  var dateend =
    datenow.getFullYear().toString() +
    "-" +
    (datenow.getMonth() + 1).toString() +
    "-" +
    datenow.getDate().toString();
  datenow.setMonth(datenow.getMonth() - dateStr);
  let dyear = datenow.getFullYear();
  let dmonth = datenow.getMonth() + 1;
  dmonth = dmonth < 10 ? 0 + dmonth : dmonth;
  let dday = datenow.getDate();
  const datestart =
    dyear.toString() + "-" + dmonth.toString() + "-" + dday.toString();
  return [datestart, dateend];
}

module.exports = {
  dateFormat,
  getWeekDate,
  getMonthDate,
};
