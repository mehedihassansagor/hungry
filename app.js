
        const finding = document.getElementById('find').addEventListener('click',function(){
            //search by name
            fetch(' https://www.themealdb.com/api/json/v1/1/search.php?s='+giveInput.value+'')
            .then(response => response.json())
           .then(data => displayFoods(data.meals)); 
           //search by letter
           fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+giveInput.value+'') 
           .then(response => response.json())
           .then(data => displayFoods(data.meals));
          
            const displayFoods = foods =>{
            const foodContainer = document.getElementById('foods')
            for (let i = 0; i < 8; i++){
                const food = foods[i];
                const foodTitle = document.createElement('div')
                foodTitle.className = "food-title"

                const foodShow = `
                 <img src = "${food.strMealThumb}">
                <div class= "food-name"> ${food.strMeal} </div>
                `;
                foodTitle.innerHTML = foodShow;
                foodContainer.appendChild(foodTitle);

                  //  detail part

                foodTitle.addEventListener("click",function(){
                console.log('detail')
                  
                  // food detail
                  const uniqueResult = document.getElementById('unique-result')
                  const uniqueResultShow = `
                  <img src ="${food.strMealThumb}">
                  
                  <h3 class="title-detail">${food.strMeal}</h3>
                  <ul>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient2}</li>
                  <li>${food.strIngredient3}</li>
                  <li>${food.strIngredient4}</li>
                  <li>${food.strIngredient5}</li>
                  <li>${food.strIngredient6}</li>
                  <li>${food.strIngredient7}</li>
                  <li>${food.strIngredient8}</li>
                  <li>${food.strIngredient9}</li>
                  <li>${food.strIngredient10}</li>
                  
                  </ul>
                  `
                  //display into html part
                  uniqueResult.style.display="block"
                  uniqueResult.innerHTML = uniqueResultShow;
                })
          }
        }
    })
