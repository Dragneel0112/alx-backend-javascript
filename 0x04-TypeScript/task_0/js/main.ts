/**
 * Creates interface Student with elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two students and array named studentsList
 * containing the two variables
 */

const student1: Student = {
  firstName: 'Ruven',
  lastName: 'Pillay',
  age: 28,
  location: 'South Africa',
};

const student2: Student = {
  firstName: 'Karmi',
  lastName: 'Naicker',
  age: 29,
  location: 'Cairo',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


/**
 * Table for each elements in the array,
 * append a new row to the table
 * 
 * - Each row should contain the first name of the student and the location
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
