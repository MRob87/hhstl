var ActivityService = {};

let incidentId = 0;
function createIncidentAlert(activityId, type, datetime, address, patientNote, incidentStatus) {
  incidentId += 1;
  return { incidentId, activityId, type, datetime, address, patientNote, incidentStatus};
}

const incidents = [
  createIncidentAlert('1', 'Potential Overdose', "11:38PM April 7th 2018", '123 Overdose Street', 'N/A', 'In Progess'),
  createIncidentAlert('2', 'Ahead of Schedule', '5:38AM April 7th 2018', '123 Breakfast Street', 'Ate early and needed to take it with a full stomach', 'In Progress'),
];

ActivityService.getActivityByPatientId = function(patientId) {
    return incidents;
}

ActivityService.getActivityByActivityId = function(activityId) {
    return incidents.filter(function (item) {
        return (item.activityId === activityId);
    });
}

export default ActivityService