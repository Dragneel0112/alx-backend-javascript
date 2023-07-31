export default function getListStudentIds(value) {
  let newArray = [];
  if (value instanceof Array) {
    newArray = value.map((val) => val.id);
  }

  return newArray;
}
