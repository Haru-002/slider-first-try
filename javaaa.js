let slider = document.querySelector('.slider')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')

let transx = 0
function goRight() {

  transx = transx - 115

  if (transx <= -350)
    transx = 0
  console.log(transx)
  slider.style.transform = "translateX(" + transx + "%)"
  changeBtn()

}
function goLeft() {
  if (transx >= 0)
    transx = -460

  transx = transx + 115


  console.log(transx)
  slider.style.transform = "translateX(" + transx + "%)"
  changeBtn()
}

function changeBtn() {
  btn1.style.background = ''
  btn2.style.background = ''
  btn3.style.background = ''
  btn4.style.background = ''

  if (transx === 0) {
    btn1.style.background = 'purple'
  } else if (transx === -115) {
    btn2.style.background = 'purple'
  } else if (transx === -230) {
    btn3.style.background = 'purple'
  } else if (transx === -345) {
    btn4.style.background = 'purple'
  }
}
changeBtn()

function changePage(pageNumber){
  transx = pageNumber
  slider.style.transform = "translateX(" + transx + "%)";
  changeBtn();
}

