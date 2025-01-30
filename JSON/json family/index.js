const data = [
  {
    name: "joseph",
    sex: "Male",
    age: "19",
    complextion: "white",
    family: "joestars",
  },

  {
    name: "mofe",
    sex: "Male",
    age: "19",
    complextion: "dark",
    family: "joestars",
  },

  {
    name: "kelvink",
    sex: "Male",
    age: "19",
    complextion: "white",
    family: "joestars",
  },

  {
    name: "deven",
    sex: "Male",
    age: "19",
    complextion: "dark",
    family: "joestars",
  },
];

data.forEach((d) => {
  const body = document.querySelector(".body");

  const html = `
    <div class="box-model">
      <h1 class="name"> Name: ${d.name}</h1>
      <p class="sex"> Sex: ${d.sex}</p>
      <p class="age"> Age: ${d.age}</p>
      <p class="complextion"> Complextion: ${d.complextion}</p>
      <p class="family"> Surname: ${d.family}</p>
    </div>
    `;

  body?.insertAdjacentHTML("afterend", html);
});
