const submit = document.getElementById("submit");
const search = document.getElementById("search");
let mealBox = document.getElementById("mealBox");
let meaalPopup = document.getElementById("openFood");
let err = document.getElementById("err")
function loadData(event) {
  event.preventDefault();
  const term = search.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then((res) => res.json())
    .then((data) => {
      if(data.meals === null){
        mealBox.innerHTML =  
          `
         
              <div class="card d-none mt-3 showInfo" id="">
               
              </div>
           `
        err.innerHTML = `
        <div class="error-box">
            <img src="./img/error.png" class="img-fluid" alt="">
        </div>
        `
      }
     else{
      err.innerHTML = `
      <div class="error-box">
          
      </div>
      `
      mealBox.innerHTML = data.meals
      .map(
        (meal) =>
          `
         
              <div class="card mt-3 showInfo" id="">
              <div class="card-body overflow-hidden mdl"  onclick = "handlePopup('${meal.idMeal}')">
                                  <div class="thumbnail">
                                      <img src="${meal.strMealThumb}"
                                          alt="" class="img-fluid food-img">
                                      <div class="hover-info" id="mkHover">
                                          <div class="hv d-flex justify-content-end">
                                              <i class="far fa-heart react" id="border-hard"></i>
                                              <i class="fas fa-heart react2"></i>
                                          </div>
                                      </div>
                                  </div>
                           
                          <div class="info">
                                  <div class="name d-block" mt-2">
                                      <h4 class="mt-2">${meal.strTags}</h4>
                                  
                                          <div class="d-flex align-items-center justify-content-bitwin">
                                              <ion-icon class="text-warning" name="star-half-outline"></ion-icon>
                                              <span class="px-1"><span>3.4</span> <span>/</span> <span class="text-muted">5</span></span>
                                          </div>
              
                                  </div>
                              <small class=""><span class="font-bold clr">$$</span>, <span id="subtitle" class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing.</span></small>
                          </div>
              
              </div>
              </div>
               
                          
                          `
                          
      )
      .join("");
     }
     
    });
}

submit.addEventListener("submit", loadData);

let infos = document.getElementById("gh");
function handlePopup(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
        `)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        let meal = data.meals[0];
        let mealName = meal.strTags;
        let mealType = meal.strCategory;
        let mealSubtitle = meal.strArea;
        let mealImage = meal.strMealThumb;
        let mealDetails1 = meal.strMeal;
        let mealDetails2 = meal.strIngredient2;
        let discription = meal.strInstructions;
        let video = meal.strYoutube;
        infos.innerHTML = `
        <div class="f " id="f">
        <a href="index.html" class="back d-flex justify-content-center align-items-center">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a>
          <div class="container py-4 pt-4">
            <div class="meal-details">
              <div class="container px-0 ">
                    <div class="m-header px-0 d-flex justify-content-center align-items-center">
                            <a href="${video}" class="play-box text-decoration-none" target="_blank">
                              <i class="fa fa-play" aria-hidden="true"></i>
                            </a>
                    </div>
                    <div class="m-body px-3 pb-5">
                        <div class="d-lg-flex d-md-flex d-block align-items-center">
                              <div class="meal-thum m-lg-0 m-md-0 m-auto">
                                <img src="${mealImage}" alt="">
                            </div>
                            <div class="i px-2">
                                 <h2 class="tx mt-3 f-bd">${mealName}</h2>
                                 <p class="tx">${mealType}</p>
                            </div>
                        </div>
                        <hr class="d-lg-none d-md-none d-block">
                        <h3 class="price mt-2"><span class="tk">৳</span><span class="f-bd">700</span></h3>
                        <p class="fn">${mealSubtitle}</p>
                        <p class="fn">${mealDetails1}</p>
                        <p class="fn">${mealDetails2}</p>
                       <h6 class="mt-4 txs">Instructions : </h6>
                       <p>${discription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente veritatis minus porro doloribus. Laborum modi quas dolor repudiandae reprehenderit nemo quis excepturi.</p>
                       .
                       <button class="btn btn-fx " id="fxt"><i class="fas fa-glass-cheers"></i> Check Out</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="container">
          <div class="meals" id="mealBox">
      
          </div>
        </div>
   
   `;
   let ffl = document.getElementById('fxt');
   ffl.onclick = function () {
       ffl.classList.toggle('se')
   }
       
    });
     
  
        let swc = document.createElement('fxt');
        swc.onclick = function () {
            swc.classList.toggle('dsf')
        }
}

// popup

//  navigation
window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  let windowEffect = window.scrollY > 0;
  header.classList.toggle("sActive", windowEffect);
});

// const popUp = document.querySelector('.popup')
// console.log(popUp);
// const modal = document.getElementById('modal');
// popUp.onclick   = function(){
//     popUp.classList.toggle('popUp-active');
//     modal.classList.toggle('modal-active')
// }
