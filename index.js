const kodomAli = {
  name: "Kodom Ali",
  money: 5000,
  study: "Math",
  subject: ["calculas", "algebra", "geometry"],
  exam: function () {
    console.log(this);
    return this.name + " Is perticipent in an exam";
  },
  //   Use Arrow Function
  examArrow: () => {
    console.log(this);
  },

  examNsted: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  },

  improveExam: function (subject) {
    this.exam();
    return `${this.name} is takeing improvement exam on ${subject}`;
  },
  //   Acces Another Property and You can change
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};
kodomAli.exam();

const badamAli = {
  name: "Kacha Badam",
  money: 8000,
};
badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandeler() {
  console.log("inside click handeler", this);
}
document.getElementById("btn-click-2").addEventListener("click", function () {
  console.log(this);
});
