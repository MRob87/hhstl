var PatientListService = {};

let id = 0;
function createPatient(name, address, age, incidentCount) {
  id += 1;
  return { id, name, address, age, incidentCount };
}

const data =  [
  createPatient('Mike Robinson', "423 Fake Street. O'fallon, MO USA", 30, 2),
  createPatient('Brandon Hunter', "44 Fake Street. O'fallon, MO USA", 56, 1),
  createPatient('Jesse Ginnever', "23423 Fake Street. O'fallon, MO USA",44, 0),
  createPatient('Billy Bob', "53 Fake Street. O'fallon, MO USA", 45, 0),
  createPatient('Bobby Bill', "23 Fake Street. O'fallon, MO USA", 32, 0),
  createPatient('Kristen Robinson', "3343 Fake Street. O'fallon, MO USA", 22, 3),
  createPatient('Susan Hunter', "2 Fake Street. O'fallon, MO USA", 52, 0),
  createPatient('George Ginnever', "233 Fake Street. O'fallon, MO USA", 55, 0),
  createPatient('Jeff Gee', "234234 Fake Street. O'fallon, MO USA", 99, 0),
  createPatient('Pock Skaher', "3345 Fake Street. O'fallon, MO USA", 23, 0),
];

  PatientListService.getAllPatients = function() {
    return data;
}

export default PatientListService