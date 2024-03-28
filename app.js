const boxContainer = document.querySelector(".wrapper");
const boxes = document.querySelectorAll(".col");
let queue = [];
let val;
// Event handler for box click using bubbling concept
boxContainer.addEventListener("click", (e) => {
  const obj = e.target;
  // checks if clicked element col class or not
  if (!obj.closest(".col")) {
    return;
  }
  // getting data-index of clicked elemet and added in queue array
  let index = obj.dataset.index;
  console.log(index);
  // obj.classList.add("green-color");
  // Background color
  obj.style.backgroundColor = randColor();
// pushing index to the array
  queue.push(index);
  
  // cancelling before setTimeout execution
  clearTimeout(val);

  val = setTimeout(() => {
    // if (queue.length == 7) {
    // console.log("entered!");
    let cnt = queue.length;
    while (queue.length != 0) {
      let ele = boxes[queue.shift()];
      cnt--;
      // console.log(cnt);
      // console.log("sice " + queue.length);
      setTimeout(() => {
        // ele.classList.remove('green-color');
        ele.style.backgroundColor = "white";
      }, cnt * 1000);
    }
    // }
    // console.log(queue);
  }, 2000);
});

function randColor() {
  let arr = "0123456789abcdef";
  let n = arr.length;
  let ans = "";
  for (let i = 0; i < 6; i++) {
    let randNum = parseInt(Math.random() * 16);
    ans += arr[randNum];
  }
  return "#" + ans;
}

let [x, ...y] = [1, 2, 3, 4, 5];
console.log(y[x]);