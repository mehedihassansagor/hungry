
        const finding = document.getElementById('find').addEventListener('click',function(){
            //search by name
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+giveInput.value+'')
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

                foodTitle.addEventListener("click",function(){
                  console.log('ore allah')

                  //  detail part
                  const uniqueResult = document.getElementById('unique-result')
                  const uniqueResultShow = `
                  <img src ="${food.strMealThumb}">
                  
                  <h3>${food.strMeal}</h3>
                  <ul>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  <li>${food.strIngredient1}</li>
                  </ul>
                  `
                  uniqueResult.style.display="block"
                  uniqueResult.innerHTML = uniqueResultShow;
                })
          }
        }
    })
