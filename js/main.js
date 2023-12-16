const btn = document.getElementsByClassName("faq-mock-btn");

const btnArray = Array.from(btn);

const details = document.getElementsByClassName("faq-detail");

const detailsArray = Array.from(details);

const eventMap = new Map();

const minus = "url(../../assets/images/icon-minus.svg)";
const plus = "url(../../assets/images/icon-plus.svg)";

for (let i = 0; i < btn.length; i++) {
  eventMap.set(btnArray[i], detailsArray[i]);
}

function addContent(comp) {
  comp.addEventListener("click", (evt) => {
	console.log(evt);
  });
}

btnArray.map(addContent);

detailsArray[0].style.display = "block";
btnArray[0].style.backgroundImage = minus;


for (const key of eventMap.keys()) {
  const ele = eventMap.get(key);
  key.addEventListener("click", () => {
	console.log("click", ele);
	if (ele.style.display === "none" || ele.style.display === "") {
	  ele.style.display = "block";
	  key.style.backgroundImage = minus;
	} else {
	  ele.style.display = "none";
	  key.style.backgroundImage = plus;
	}
  });
}