const searchRes = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      "X-RapidAPI-Key": "fffe68e279msh05bed39ab833abfp19e336jsn574f645073b3",
    },
  };

  try {
    let res = await fetch(url, options);
    let data = await res.json();
    return data.products;
  } catch (err) {
    console.log(err);
  }
};
let dataOfClicked;
let openDiv = (resultCon, body, data) => {
  resultCon.innerHTML = null;
  data.map((el) => {
    let { displayName, brandName, image250 } = el;
    let div = document.createElement("div");

    div.setAttribute("id", "resultDebounce");

    let imgCon = document.createElement("div");
    imgCon.setAttribute("id", "imgCon");
    let img = document.createElement("img");
    img.src = image250;
    imgCon.append(img);

    let divInner = document.createElement("div");
    divInner.setAttribute("id", "divInner");
    let name = document.createElement("p");
    name.innerText = `${brandName} - ${displayName}`;

    let brand = document.createElement("p");
    brand.innerHTML = `<strong>${brandName}</strong>`;
    divInner.append(name);
    div.addEventListener("click", function () {
      resultCon.innerHTML = null;
      console.log(1);
      localStorage.setItem("clickedProduct", JSON.stringify(el));
      window.location.href = "../product.html";
      console.log(el);
    });
    div.append(imgCon, divInner);
    resultCon.append(div);

    body.addEventListener("click", () => {
      resultCon.innerHTML = null;
    });
  });
};

let show = document.getElementById("showR");
const showData = (
  show,
  {
    strMeal: title,
    strCategory: cate,
    strMealThumb: imgUrl,
    strInstructions: instrctions,
    strSource: Source,
  }
) => {
  show.innerHTML = null;
  let div = document.createElement("div");

  let name = document.createElement("p");
  name.innerText = title;

  let category = document.createElement("p");
  category.innerText = `Category : ${cate}`;

  let imgCon = document.createElement("div");
  let img = document.createElement("img");
  img.src = imgUrl;
  img.setAttribute("id", "foodImg");

  imgCon.append(img);
  imgCon.setAttribute("id", "imgCon");
  let instruct = document.createElement("p");
  instruct.innerText = `Instructions : \n\n${instrctions}`;
  instruct.setAttribute("id", "instr");
  let source = document.createElement("p");
  source.innerText = `Source :${Source}`;

  let disc = document.createElement("div");
  disc.setAttribute("id", "disc");
  disc.append(name, category, instruct, source);
  div.append(imgCon, disc);

  show.append(div);
};

export { openDiv, searchRes, dataOfClicked, showData };
