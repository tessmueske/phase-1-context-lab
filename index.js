/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeInfo){
    return {
      firstName: employeeInfo[0],
      familyName: employeeInfo[1],
      title: employeeInfo[2],
      payPerHour: employeeInfo[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }

  function createEmployeeRecords(arrayOfEmployeeRecords){
    let employeeRecords = [];
    arrayOfEmployeeRecords.forEach(function(employeeInfo) {
      let oneEmployeeRecord = createEmployeeRecord(employeeInfo);
      employeeRecords.push(oneEmployeeRecord);
    });
    return employeeRecords;
  }

function createTimeInEvent(dateStamp){
    let hour = parseInt(dateStamp.substring(11, 15));
    let date = dateStamp.substring(0, 10);
    let timeInEvent = {
      type: "TimeIn",
      hour: hour,
      date: date
    };
    this.timeInEvents.push(timeInEvent);
    return this
  }
  
  function createTimeOutEvent(dateStamp){
    let hour = parseInt(dateStamp.substring(11, 15))
    let date = dateStamp.substring(0, 4) + '-' + dateStamp.substring(5, 7) + '-' + dateStamp.substring(8, 10);
    let timeOutEvent = {
      type: "TimeOut",
      hour: hour,
      date: date
    }
    this.timeOutEvents.push(timeOutEvent);
    return this
  }
  
  function hoursWorkedOnDate(dateStamp){
    let date = dateStamp.substring(0, 4) + '-' + dateStamp.substring(5, 7) + '-' + dateStamp.substring(8, 10);
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    let hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked
  }
  
  function wagesEarnedOnDate(dateStamp){
    let payRate = this.payPerHour;
    let wagesOwedOnDate = hoursWorkedOnDate.call(this, dateStamp) * payRate;
    return wagesOwedOnDate
  }

  function findEmployeeByFirstName(srcArray, firstName){
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].firstName === firstName) {
        return srcArray[i];
      }
  }
  return undefined;
}

  function calculatePayroll(employeeRecords) {
    let totalPayroll = 0;
    employeeRecords.forEach(function(employee) {
        const wagesForEmployee = allWagesFor.call(employee);
        totalPayroll += wagesForEmployee;
    });
    return totalPayroll;
}