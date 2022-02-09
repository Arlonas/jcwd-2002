class Person {
  constructor(fullName, gender, occupation) {
    this.fullName = fullName;
    this.occupation = occupation;
    this.gender = gender;
  }
}

let data = [
  new Person("Marci", "Man", "Software Developer"),
  new Person("Bambang", "Man", "CEO"),
  new Person("Ngebull", "Man", "UI/UX"),
  new Person("Santoso", "Man", "Data Scientist"),
];
const renderData = () => {
  let htmlResult = "";

  //          callback function
  //            value
  data.forEach((person, idx) => {
    htmlResult += `
    <tr>
      <td>${idx + 1}</td>
      <td>${person.fullName}</td>
      <td>${person.gender}</td>
      <td>${person.occupation}</td>


      <td>
        <button onclick="deleteData(${idx})">Delete</button>
      </td>
    </tr>
    `;
  });
  //                                       content
  document.getElementById("tableData").innerHTML = htmlResult;
};

renderData();

const addData = () => {
  const fullNameInput = document.getElementById("nameInput").value;
  console.log(fullNameInput)
  const occupationInput = document.getElementById("occupationInput").value;
  console.log(occupationInput)
  const isManChecked = document.getElementById("genderMan").checked

  const isWomanChecked = document.getElementById("genderWoman").checked

  const isOtherChecked = document.getElementById("genderOther").checked

  let gender
  
  if (isManChecked) {
    gender = "Man"
  }else if (isWomanChecked) {
    gender = "Woman"
  }else if(isOtherChecked) {
    gender = "Other"
  }


  // input validation
  if (!fullNameInput || !occupationInput) {
    alert(
      "Kedua field harus di isi, jangan goblok udh bisa pake laptop harus di kasih peringatan jg tolol namanya"
    );
    return;
  }
  const newPerson = new Person(fullNameInput, gender, occupationInput);

  data.push(newPerson);

  console.log(addData);
  // tampilkan kembali data yang baru
  renderData();
  document.getElementById("nameInput").value = "";
  document.getElementById("occupationInput").value = "";
};

const deleteData = (deleteIdx) => {
  // alert(deleteIdx)

  data.splice(deleteIdx, 1);
  renderData();
};
// gender
// radiobutton
