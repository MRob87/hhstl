var ActivityService = {};

let activityId = 0;
function createActivity(patientId, medicineType, ingestionDatetime, scheduledDatetime, location, type) {
  activityId += 1;
  return { patientId, activityId, medicineType, ingestionDatetime, scheduledDatetime, location, type};
}

const activityHistory = [
  createActivity('6', 'Vicodin', 'Missed',               '2:30:00 PM April 6th',   '123 Normal Use Street', 'Missed'),
  createActivity('6', 'Vicodin', '8:23:34 AM April 6th',  '8:30:00 AM April 6th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('6', 'Vicodin', '2:43:23 PM April 5th', '2:30:00 PM April 5th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('6', 'Vicodin', '11:43:23 AM April 5th', 'Unscheduled Ingestion',  '123 Normal Use Street', 'Unscheduled'),
  createActivity('6', 'Vicodin', '8:43:23 AM April 5th', '8:30:00 AM April 5th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('1', 'Oxycodone', 'Missed',               '2:30:00 PM April 6th',   '123 Normal Use Street', 'Missed'),
  createActivity('1', 'Oxycodone', '8:23:34 AM April 6th',  '8:30:00 AM April 6th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('1', 'Oxycodone', 'Missed',               '2:30:00 PM April 5th',   '123 Normal Use Street', 'Missed'),
  createActivity('1', 'Oxycodone', '11:43:23 AM April 5th', 'Unscheduled Ingestion',  '123 Normal Use Street', 'Unscheduled'),
  createActivity('1', 'Oxycodone', '8:43:23 AM April 5th', '8:30:00 AM April 5th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('2', 'Codeine', 'Missed',               '2:30:00 PM April 6th',   '123 Normal Use Street', 'Missed'),
  createActivity('2', 'Codeine', '8:23:34 AM April 6th',  '8:30:00 AM April 6th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('2', 'Codeine', '2:43:23 PM April 5th', '2:30:00 PM April 5th',   '123 Normal Use Street', 'Scheduled'),
];

ActivityService.getActivityByPatientId = function(patientId) {
    return activityHistory.filter(function (item) {
        return (item.patientId === patientId);
    });
}

export default ActivityService