var PatientListService = {};

let id = 0;
function createPatient(name, address, age, incidentCount) {
  id += 1;
  return { id, name, address, age, incidentCount };
}

const data =  [
  createPatient('Mike Robinson', "123 Fake Street. O'fallon, MO USA", 30, 2),
  createPatient('Brandon Hunter', "123 Fake Street. O'fallon, MO USA", 30, 1),
  createPatient('Jesse Ginnever', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Billy Bob', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Bobby Bill', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Kristen Robinson', "123 Fake Street. O'fallon, MO USA", 30, 3),
  createPatient('Brandon Hunter', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Jesse Ginnever', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Billy Bob', "123 Fake Street. O'fallon, MO USA", 30, 0),
  createPatient('Bobby Bill', "123 Fake Street. O'fallon, MO USA", 30, 0),
];

  PatientListService.getAllPatients = function() {
    return data;
}

export default PatientListService