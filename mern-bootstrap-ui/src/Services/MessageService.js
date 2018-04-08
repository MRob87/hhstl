var MessageService = {};

let id = 0;
function createData(timestamp, message, creator) {
  id += 1;
  return { id, timestamp, message, creator };
}

const data = [
  createData('11/02/2018', 'Contact Attempt:  Message Left', 'Anna Bronner'),
  createData('10/34/2018', 'Contact Made:  Forgot Dose', 'Anna Bronner'),
  createData('09/02/2018', 'Contact Made:  Dose Taken', 'Anna Bronner'),
  createData('11/02/2018', 'Contact Made:  Device Malfunction', 'Anna Bronner'),
  createData('11/02/2018', 'Contact Attempt:  Message Left', 'Anna Bronner')
];

MessageService.getMessagesByPatientId = function(id) {
    return data;
}

MessageService.createMessage = function(message, creator) {
    const time = new Date();
    const dateString = time.toISOString().substring(5, 7) + '/' + '/' + time.toISOString().substring(8, 10) + '/' + time.toISOString().substring(2, 4);
    return data.unshift(createData(dateString, message, creator));
}

export default MessageService