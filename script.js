let daily= document.querySelector('#daily')
let weekly= document.querySelector("#weekly")
let mothly= document.querySelector("#monthly")

let timeWork= document.querySelector("#timeWork")
let timeLastWork= document.querySelector("#timeLastWork")
let timePlay= document.querySelector("#timePlay")
let timeLastPlay= document.querySelector("#timeLastPlay")
let timeStudy= document.querySelector("#timeStudy")
let timeLastStudy= document.querySelector("#timeLastStudy")
let timeExercise= document.querySelector("#timeExercise")
let timeLastExercise= document.querySelector("#timeLastExercise")
let timeSocial= document.querySelector("#timeSocial")
let timeLastSocial= document.querySelector("#timeLastSocial")
let timeSelfCare= document.querySelector("#timeSelfCare")
let timeLastSelfCare= document.querySelector("#timeLastSelfCare")

daily.addEventListener("click", () => {
   timeWork.innerText= "4:57hrs"
   timeLastWork.innerText= "Yesterday - 4:57hrs"
   timePlay.innerText= "1:14hrs"
   timeLastPlay.innerText= "Yesterday - 1:14hrs"
   timeStudy.innerText= "38min"
   timeLastStudy.innerText= "Yesterday - 38min"
   timeExercise.innerText= "38min"
   timeLastExercise.innerText= "Yesterday - 38min"
   timeSocial.innerText= "43min"
   timeLastSocial.innerText= "Yesterday - 43hrs"
   timeSelfCare.innerText= "17min"
   timeLastSelfCare.innerText= "Yesterday - 17min"
   daily.style.color= "white"
   weekly.style.color= ""
   monthly.style.color= ""
})

weekly.addEventListener("click", () => {
   timeWork.innerText= "32hrs"
   timeLastWork.innerText= "Last week- 36hrs"
   timePlay.innerText= "10hrs"
   timeLastPlay.innerText= "Last week - 8hrs"
   timeStudy.innerText= "4hrs"
   timeLastStudy.innerText= "Last week - 5hrs"
   timeExercise.innerText= "4hrs"
   timeLastExercise.innerText= "Last week - 5hrs"
   timeSocial.innerText= "5hrs"
   timeLastSocial.innerText= "Last week - 10hrs"
   timeSelfCare.innerText= "2hrs"
   timeLastSelfCare.innerText= "last week - 2hrs"
   daily.style.color= ""
   weekly.style.color= "white"
   monthly.style.color= ""
})

monthly.addEventListener("click", () => {
   timeWork.innerText= "128hrs"
   timeLastWork.innerText= "Last month - 160hrs"
   timePlay.innerText= "40hrs"
   timeLastPlay.innerText= "Last month - 36hrs"
   timeStudy.innerText= "18hrs"
   timeLastStudy.innerText= "Last month - 25hrs"
   timeExercise.innerText= "16hrs"
   timeLastExercise.innerText= "Last month - 17hrs"
   timeSocial.innerText= "20hrs"
   timeLastSocial.innerText= "Last month - 21hrs"
   timeSelfCare.innerText= "8hrs"
   timeLastSelfCare.innerText= "Last month - 3hrs"
   daily.style.color= ""
   weekly.style.color= ""
   monthly.style.color= "white"
})