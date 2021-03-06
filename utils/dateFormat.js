const addDateSuffix = date => {
  let dateStr = date.toString();

  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === '1' && dateStr !== '11') {
    dateStr = `${dateStr}st`;
  } else if (lastChar === '2' && dateStr !== '12') {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === '3' && dateStr !== '13') {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as optional parameters
module.exports = (
  timestamp,
  { dateSuffix = true } = {}
) => {
  let months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    };


  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  let dayOfMonth;

  if (dateSuffix) {
    dayOfMonth = addDateSuffix(dateObj.getDate());
  } else {
    dayOfMonth = dateObj.getDate();
  }

  const year = dateObj.getFullYear();

  let hour;

  if (dateObj.getHours > 12) {
    hour = Math.floor(dateObj.getHours() / 2);
  } else {
    hour = dateObj.getHours();
  }
  if (hour === 0) {
    hour = 12;
  }

  const minutes = dateObj.getMinutes();

 let periodTime;

  if (dateObj.getHours() >= 12) {
    periodTime = 'pm';
  } else {
    periodTime = 'am';
  }

  const formattedTime = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodTime}`;

  return formattedTime;
};
