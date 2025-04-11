alert("Şamil dedim be dedim ben sana ne dedim");
console.log("suscan kanka i");
// formda gösterilen havaalanı seçeneklerini gösterir
//uçuşun nasıl yapılması gerektiğini gösterir
//alert verme giib şeyler yaparız

const fruits = ["apple", "orange", "banana"];

fruits.push("mango");
fruits.unshift("strawberry");
console.log(fruits);

const person = {
name: "şamil",
age: 25,
job: "developer",
adress :{
city: "istanbul",
street: "bahçelievler",
semt: "aydın"

}
};



document.addEventListener("DOMContentLoaded", function () {
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");

  const airports = [
      "İstanbul Havalimanı",
      "Sabiha Gökçen Havalimanı",
      "Ankara Esenboğa Havalimanı",
      "İzmir Adnan Menderes Havalimanı",
      "Antalya Havalimanı",
      "Trabzon Havalimanı",
      "Bodrum-Milas Havalimanı",
      "Kayseri Erkilet Havalimanı",
  ];

  // Herbir havaalanını option olarak ekler 
  function populateSelect(selectElement) {
      airports.forEach(airport => {
          const option = document.createElement("option");
          option.value = airport;
          option.textContent = airport;
          selectElement.appendChild(option);
      });
  }

  // "Nereden" ve "Nereye" listelerini doldur
  populateSelect(fromSelect);
  populateSelect(toSelect);

  // uçuş ara butonuna tıklandığında çalışacak fonksiyon
  // butona tıklandığında seçilen havaalanlarını kontrol eder
  document.getElementById("search-btn").addEventListener("click", function () {
      const fromValue = fromSelect.value;
      const toValue = toSelect.value;

      if (!fromValue || !toValue) {
          alert("Lütfen kalkış ve varış noktalarını seçiniz!");
      } else if (fromValue === toValue) {
          alert("Kalkış ve varış noktası aynı olamaz!");
      } else {
          alert(`Uçuş aranıyor: ${fromValue} → ${toValue}`);
      }
  });
});


console.log(person.adress.city);
console.log(person["name"]);
const {name, age, job, adress: {city, street}} = person;
console.log(name,city,street);

const todos = [
  {
	id: 1,
	text: "ödemeniz gerçekleştirildi",
    isCompleted: true
  },

  {
    
    id:2,
    text: "şamill",
    isCompleted: true

  },
  
  {
    id:3,
    text: "şamil",
    isCompleted: false
  }
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for(let i = 0;i < todos.length;i++){
  console.log(todos[i].text);
}
for ( let abc of todos)
{
  console.log(abc.text);
}

const todoText = todos.map(function(todo){
    return todo.text.toUpperCase();
})
.map(function(todo){
  return todo[0];
});
console.log(todoText);

function Person(name,age){
    this.name = name;
    this.age = age;
    this.getBirthYear = function(){
      return 2025 - this.age;
    }
    this.sayhello = function(){
      return `hello ${this.name}`;
    }

    Person.prototype.getAge = function(){
      return this.age;
    }
    Person.prototype.getName = function(){
      return `${this.name}`;
    }
}



let person1 = new Person("şamil",25);
let person2 = new Person("uçankale",25);
console.log(person1.getBirthYear());
console.log(person2.sayhello());
console.log(person1.getAge());