var PatientService = {};

let activityId = 0;
function createActivity(medicineType, ingestionDatetime, scheduledDatetime, location, type) {
  activityId += 1;
  return { activityId, medicineType, ingestionDatetime, scheduledDatetime, location, type};
}

const activityHistory = [
  createActivity('Vicodin', 'Missed',               '2:30:00 PM April 6th',   '123 Normal Use Street', 'Missed'),
  createActivity('Vicodin', '8:23:34 AM April 6th',  '8:30:00 AM April 6th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('Vicodin', '2:43:23 PM April 5th', '2:30:00 PM April 5th',   '123 Normal Use Street', 'Scheduled'),
  createActivity('Vicodin', '11:43:23 AM April 5th', 'Unscheduled Ingestion',  '123 Normal Use Street', 'Unscheduled'),
  createActivity('Vicodin', '8:43:23 AM April 5th', '8:30:00 AM April 5th',   '123 Normal Use Street', 'Scheduled'),
];

PatientService.getPatient = function(id) {
    return data;
}

export default PatientService