var ContactService = {};

let id = 0;
function createContact(patientId, name, phone, email, address, country) {
  id += 1;
  return { id, patientId, name, phone, email, address, country };
}

const data =  [
  createContact('6', 'Kristen Robinson', "(112) 233-4424", 'istinkinloveveggies@gmail.com', '123 Fake Street', 'USA'),
  createContact('1', 'Mike Robinson', "(342) 234-2342", 'Mike@mgail.com', '342 Short Ave', 'USA'),
  createContact('2', 'Brandon Hunter', "(124) 412-1244", 'Brandon@gmail.com', '44444 Four Lane', 'The Moon'),
  createContact('3', 'Jesse Ginnever', "(554) 544-4434", 'jesse@gmail.com', '4337 Leet Street', 'USA'),
];

ContactService.getContactByPatientId = function(patientId) {
    return data.filter(function (item) {
        return (item.patientId === patientId);
    });
}

export default ContactService