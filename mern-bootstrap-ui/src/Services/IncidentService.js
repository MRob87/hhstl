var IncidentService = {};

let id = 0;
function createIncident(type, ptId, name, geo, timestamp, notes) {
  id += 1;
  let incidentId = ptId + "-" + id;
  let address = geo;
  return {incidentId, type, data:{ptId, name, timestamp, address, notes}};
}

const data = [
    createIncident("Overdose", 0, 'Brandon Hunter', "123 Fake Street", "04/07/2018 - 7:29pm", ["Pt took 4x prescribed dose, did not state reason. -HS,MSW"]),
    createIncident("Tx Violation", 0, 'Brandon Hunter', "987 Ekaf Circle", "04/04/2018 - 2:27pm", ["Pt stated accidently took double dose having forgot about taking the first. -CG,CNA"]),
    createIncident("Tx Violation", 0, 'Brandon Hunter', "123 Fake Street", "04/01/2018 - 4:29am", ["Pt took 4x prescribed dose, did not state reason. -HS,MSW"]),
    createIncident("Rx Qty Unaccounted For", 0, 'Brandon Hunter', "123 Fake Street", "03/25/2018 - 3:26pm", ["Pt stated taking per Tx plan but records show 10 pills unaccounted for. -MR,MD"]),
    createIncident("Lapse in Active Patch", 0, 'Brandon Hunter', "123 Fake Street", "03/22/2018 - 8:25am", ["Pt patch came off while in shower, was replaced by patient once dry. -HS,MSW"]),
  ];

IncidentService.getIncidentsById = function(id) {
    return data;
}

export default IncidentService