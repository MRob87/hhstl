var ActivityService = {};

let incidentId = 0;
function createIncidentAlert(activityId, type, datetime, address, patientNote, incidentStatus) {
  incidentId += 1;
  return { incidentId, activityId, type, datetime, address, patientNote, incidentStatus};
}

const incidents = [
  createIncidentAlert('1', 'Potential Overdose', "11:38PM April 7th 2018", '123 Overdose Street', 'N/A', 'In Progess'),
  createIncidentAlert('2', 'Ahead of Schedule', '5:38AM April 7th 2018', '123 Breakfast Street', 'Ate early and needed to take it with a full stomach', 'In Progress'),
  createIncidentAlert('3', 'Behind Schedule', '3:33AM April 5th 2018', '123 Breakfast Street', 'Was feeling better!', 'In Progress'),
];

ActivityService.getActivityByPatientId = function(patientId) {
    return incidents;
}

ActivityService.getActivityByActivityId = function(activityId) {
    return incidents.filter(function (item) {
        return (item.activityId === activityId);
    });
}

ActivityService.updateActivityById = function() {
    incidents.shift();
}

export default ActivityService