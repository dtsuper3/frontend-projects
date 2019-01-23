let place = document.getElementById("place");
        let temp = document.getElementById("temp");
        let desc = document.getElementById("desc");
        let icon = document.getElementById("icon");
        let api = "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=66148f231b697d6da3e8048176a8c5b0";
        var C=0;
            console.log(api);
            fetch(api)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data)
                C = data.main.temp;
                place.innerText = data.name;
                temp.innerText = data.main.temp;
                temp.innerHTML += "&#x2103";
                if(data.weather[0].main.toLowerCase() === "haze"||"fog"){
                    icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                    document.body.style.backgroundImage = "url(img/haze.jpeg)";
                }
                else if(data.weather[0].main.toLowerCase() === "rain"){
                    icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                    document.body.style.backgroundImage = "url(img/rain.jpeg)";
                }
                else if(data.weather[0].main.toLowerCase() === "clear"){
                    icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                    document.body.style.backgroundImage = "url(img/sunny.jpeg) no-repeat";
                }
            
            })
            .catch((err)=>{console.log(err)})
            var flag = 0;
            function toggle(){
                if(!flag){
                        temp.innerText=Math.round(parseInt(temp.innerText)*(9/5)+32);
                        temp.innerHTML += "&#x2109";
                        flag = 1;
                    }   
                else{
                    temp.innerText = C;
                    temp.innerHTML += "&#x2103";
                    flag = 0;
                }
            }
