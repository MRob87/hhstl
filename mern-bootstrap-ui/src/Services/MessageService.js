var MessageService = {};

let id = 0;
function createData(timestamp, message, creator) {
  id += 1;
  return { id, timestamp, message, creator };
}

const data = [
  createData('11/02/2018 11AM', 'Contact Made:  Device Malfunction', 'Anna Bronner'),
  createData('11/02/2018 9AM', 'Contact Attempt:  Message Left', 'Anna Bronner'),
  createData('10/34/2018 ', 'Contact Made:  Forgot Dose', 'Anna Bronner'),
  createData('09/02/2018', 'Contact Made:  Dose Taken', 'Anna Bronner'),
  createData('11/02/2018 11AM', 'Contact Made:  Device Malfunction', 'Anna Bronner'),
  createData('11/02/2018 9AM', 'Contact Attempt:  Message Left', 'Anna Bronner'),
  createData('10/34/2018 ', 'Contact Made:  Forgot Dose', 'Anna Bronner'),
  createData('09/02/2018', 'Contact Made:  Dose Taken', 'Anna Bronner'),
];

MessageService.getMessagesByPatientId = function(id) {
    return data;
}

MessageService.addMessagesByPatientId = function(timestamp, message, creator) {
    return createData("11 April", message, creator);
}

export default MessageService