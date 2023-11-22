const textInput = document.getElementById("textInput");
const cancel = document.getElementById("cancel");
const description = document.querySelectorAll(".description");
const errorMessage = document.getElementById("errorMessage");
const myTable = document.getElementById("myTable");

// adding focus event to the search input tom display the cancel button
textInput.addEventListener("focus", () => {
  cancel.style.display = "block";
});

// empty the search input when cancel btn is clicked
cancel.addEventListener("click", () => {
  textInput.value = "";
});

// search filter functionality
textInput.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  description.forEach((el) => {
    const title = el.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});

// unblur functionality for cancel btn when unfocused

// display error message functionality















































































































// const tableData = [
//   {
//     sn: 1,
//     description:"Do some shopping at mixLand shopping mall",
//     Status: "done",
//     date: "30th Nov, 2023",
//   	Priority:"high"
//   },

//   {
//     sn: 2,
//     description:"	Attend coding with George class",
//     Status: "inprogress",
//     date: "30th Nov, 2023",
//   	Priority:"low"
//   },

//   {
//     sn: 3,
//     description:"Go to the saloon to make my hair",
//     Status: "todo",
//     date: "30th Nov, 2023",
//   	Priority:"medium"
//   },

//   {
//     sn: 4,
//     description:"Go to the saloon to make my hair",
//     Status: "todo",
//     date: "30th Nov, 2023",
//   	Priority:"high"
//   },

//   {
//     sn: 5,
//     description:"	Go out and have some fun with friends",
//     Status: "inprogress",
//     date: "30th Nov, 2023",
//   	Priority:"high"
//   },
//   {
//     sn: 6,
//     description:"Create a schedule for the Next Day",
//     Status: "inprogress",
//     date: "30th Nov, 2023",
//   	Priority:"low"
//   },
//   {
//     sn: 7,
//     description:"	Read my books",
//     Status: "done",
//     date: "30th Nov, 2023",
//   	Priority:"low"
//   }
// ]

// textInput.addEventListener("keyup", (e) => {
//   const value = e.target.value.toLowerCase();
//   console.log(value);
//   const data=searchTable(value, tableData)
//   buildTable(data)
//   });

// function searchTable(value, data) {
//   const filteredData =[]
//   for (let i = 0; i < data.length; i++) {
//     value= value.toLowerCase()
//     const name = data[i].name.toLowerCase()

//     if(name.includes(value)){
//       filteredData.push(data[i])
//     }
//   }
// }

// search filter
// textInput.addEventListener("keyup", (e) => {
//   const term = e.target.value.toLowerCase();
//   console.log(term);
//   des.forEach((el) => {
//     const title = el.textContent;
//     if (title.toLowerCase().indexOf(term) != -1) {
//       el.style.display = "block";
//     } else {
//       el.style.display = "none";
//     }
//   });
// });

// function buildTable(data) {

//   myTable.innerHTML=``
//   for (let i = 0; i < data.length; i++) {
//     const row = `
//     <tr class="description">
//     <td>${data[i].sn}</td>
//     <td class='des'>${data[i].description}</td>
//     <td><button class="btn">${data[i].Status}</button></td>
//     <td>${data[i].date}</td>
//     <td><button class="btn high">${data[i].Priority}</button></td>
//     <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
//   </tr>
//     `

//     myTable.innerHTML+=row

//   }
// }

// buildTable(tableData)

// search filter
// textInput.addEventListener("keyup", (e) => {
//   const term = e.target.value.toLowerCase();
//   console.log(term);
//   // description.forEach((el) => {
//   //   const title = el.textContent;
//   //   if (title.toLowerCase().indexOf(term) != -1) {
//   //     el.style.display = "block";
//   //   } else {
//   //     el.style.display = "none";
//   //   }
//   // });
// });

//  tableData.forEach((el,i)=>{
//   myTable.innerHTML= `
//   <tr class="description">
//   <td>${el[i].sn}</td>
//   <td>${el.description}</td>
//   <td><button class="btn">${el.Status}</button></td>
//   <td>${el.date}</td>
//   <td><button class="btn high">${el.Priority}</button></td>
//   <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
//   </tr>
//   `

// })
