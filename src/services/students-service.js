const StudentsService = {
  getStudents() {
    return fetch('https://api.hatchways.io/assessment/students').then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAverage(arr) {
    //  Sum each array item and divide the total amount by the array length
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += parseInt(arr[i]);
    }
    return total / arr.length;
  }
};

export default StudentsService;
