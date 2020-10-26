function createEmployeeRecord(array) {
  let record
  return record = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(object, dateStamp) {
  const fullDate = dateStamp.split(" ");
  const date = fullDate[0];
  const time = fullDate[1];
  const info = {
    type : "TimeIn",
    hour : parseInt(time),
    date : date
  };
  object.timeInEvents.push(info);
  return object;
}

function createTimeOutEvent(object, dateStamp) {
  const fullDate = dateStamp.split(" ");
  const date = fullDate[0];
  const time = fullDate[1];
  const info = {
    type : "TimeOut",
    hour : parseInt(time),
    date : date
  };
  object.timeOutEvents.push(info);
  return object;
}

function hoursWorkedOnDate(object, dateStamp) {
  let hoursWorked = 0;
  const dayIn = object.timeInEvents.find((date) => {return date.date === dateStamp});
  const dayOut = object.timeOutEvents.find((date) => {return date.date === dateStamp});
  hoursWorked = (dayOut.hour - dayIn.hour)/100;
  return hoursWorked;
}