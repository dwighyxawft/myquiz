$(document).ready(function(){
    var register = $("#register");
    var login = $("#login");
    var register_form = $("#register_form");
    var login_form = $("#login_form");
    var users = [];
    var message = $("#alert");
    var text = $("#text");
    var all = $("#all");
    var exam = $("#exam");

    function validate(pass1, pass2){
        if(pass1 != pass2){
            return false;
        }
        return true;
    }
    function reset(name, email, password, confirm_password){
        name.val("");
        email.val("");
        password.val("");
        confirm_password.val("");
    }
    
    register_form.on("submit", function(event){
        event.preventDefault();
        var name = $("#name");
        var email = $("#mail");
        var pass = $("#pass");
        var conf_pass = $("#conf_pass");
       if(users.length > 0){
        if(validate(pass.val(), conf_pass.val())){
            for(var i = 0; i<users.length; i++){
                if(users[i].email != email.val()){
                 users.push({name: name.val(), email: email.val(), password: pass.val()});
                 console.log(users);
                 register.modal("hide");
                 message.removeClass("d-none");
                 message.addClass("d-flex");
                 text.text("Registration Successful. You can now login");
                 reset(name, email, pass, conf_pass);
                }
                else{
                    register.modal("hide");
             message.removeClass("d-none");
             message.addClass("d-flex");
             text.text("Email Already Exists");
                }
            }
         }
         else{
             register.modal("hide");
             message.removeClass("d-none");
             message.addClass("d-flex");
             text.text("Incorrect Password. Please make sure your passwords match");
         }
       }
       else{
        if(validate(pass.val(), conf_pass.val())){
            
               
                 users.push({name: name.val(), email: email.val(), password: pass.val()});
                 console.log(users);
                 register.modal("hide");
                 message.removeClass("d-none");
                 message.addClass("d-flex");
                 text.text("Registration Successful. You can now login");
                 reset(name, email, pass, conf_pass);
              
            
         }
         else{
             register.modal("hide");
             message.removeClass("d-none");
             message.addClass("d-flex");
             text.text("Incorrect Password. Please make sure your passwords match");
         }
       }
    });
    login_form.on("submit", function(e){
        e.preventDefault();
        var mail_login = $("#mail_login");
        var pass_login = $("#pass_login");
        for(var i=0; i<users.length; i++){
            if(users[i].email == mail_login.val()){
                var b = i;
                var base = users[b];
                
                if(validate(base.password, pass_login.val())){
                    login.modal("hide");
                    message.removeClass("d-none");
                    message.addClass("d-flex");
                    $("#login_name").val(mail_login.val());
                    mail_login.val("");
                    pass_login.val("");
                    text.text("You are logged in");
                    all.addClass("d-none");
                    exam.removeClass("d-none");
                    $(".navbar-nav").html('<li class="nav-item"><a href="index.html" class="nav-link">LOGOUT</a></li>');
                    console.log($("#login_name").val());
                }
                else{
                    login.modal("hide");
                    message.removeClass("d-none");
                    message.addClass("d-flex");
                    text.text("Incorrect Password. Please try again");
                }
            }
            else{
                login.modal("hide");
                message.removeClass("d-none");
                message.addClass("d-flex");
                mail_login.val("");
                pass_login.val("");
                text.text("Register On Our Platform");
            }
        }
    });


    var GEO_202 = [{question: "What is Geography", option1: "Geography is the Description of the earth", option2: "Geography is the Study of Animals", option3: "Geography is the way of life", option4: "Geography is the study of space and all other heavenly bodies", correct_answer: 1},
    {question: "What makes up the solar system", option1: "Sun, moon, stars", option2: "Moon, Earth and stars", option3:"Sun, Moon, and 9 planets", option4: "Earth, Jupiter and Saturn", correct_answer:3},
     {question: "Which of the following is true about rocks", option1: "Rocks are very soft", option2: "There are 3 types of rock", option3: "Ignaeous rock is yellow in color" , option4: "Rocks do not exist", correct_answer: 2},
      {question: "Which of the following is a proof that the earth is spherical in shape", option1: "Grahams law", option2: "Sunset and Sunrise", option3: "boyles Law", option4: "Cars on a road", correct_answer: 2},
       {question: "Which of the following is a type of mountain", option1: "Revolving Mountain", option2: "Desert Mountain", option3: "Volcanic Mountain", option4: "Swamp Mountain", correct_answer: 3}, {question: "What country has the longest coastline in the world", option1: "Mexico", option2: "USA", option3: "London", option4: "Canada", correct_answer: 4}, {question: "What is the capital of Malta", option1: "Kyiv", option2: "Cape Town", option3: "Valetta",option4: "Moscow", correct_answer: 3}, {question: "The homolographic has the correct representation of ", option1: "shape", option2: "area", option3: "baring", option4: "distance", correct_answer: 2}, {question: "The latitudinal differences in pressure delineate a number of major pressure zones, which correspond with ", option1: "zones of climate", option2: "zones of oceans", option3: "zones of land", option4: "zones of cyclonic depressions", correct_answer: 1}, {question: "The higher the wind and the longer the fetch or distance of open water across which the wind blows and waves travel, the ______ waves and the _______ energy they process", option1: "larger, more", option2: "larger, less", option3: "smaller, more", option4: "smaller, less", correct_answer: 1}];


    var PLZ_202 = [{question: "What structure transports water through the stem of the plant", option1: "Guard Cell", option2: "Phloem", option3: "Stomata", option4: "Xylem", correct_answer: 4}, {question: "Micro-organisms act upon the dead plants to produce", option1: "sand", option2: "mushrooms", option3: "humus", option4: "wood", correct_answer: 3}, {question: "Bryophyllum can reproduce by its", option1: "stem", option2: "leaves", option3: "roots", option4: "flower", correct_answer: 2}, {question: "Amarbel is an example of", option1: "Autotroph", option2: "Parasite", option3: "Saprotroph", option4: "Host", correct_answer: 2}, {question: "Which part of plant gets carbon dioxide from the air for photosynthesis", option1: "root hair", option2: "stomata", option3: "leaf veins", option4: "sepals", correct_answer: 2}, {question: "Plants take carbon dioxide from the atmosphere mainly through their", option1: "roots", option2: "stem", option3: "flowers", option4: "leaves", correct_answer: 4}, {question: "The plant which traps and feeds on insects is ", option1: "cuscuta", option2: "china rose", option3: "pitcher plant", option4: "rose", correct_answer: 3}, {question: "In plants, water is transported through", option1: "Xylem", option2: "Phloem", option3: "Stomata", option4: "Root hair", correct_answer: 1}, {question: "Water absorption through roots can be increased by keeping the plants", option1: "in the shade", option2: "in dim light", option3: "under the fan", option4: "covered with a polythene bag", correct_answer: 3}, {question: "The reproductive part of a plant is the ", option1: "leaf", option2: "stem", option3: "root", option4: "flower", correct_answer: 4}];


    var ZOO_202 = [{question: "What is the generic name of cattles", option1: "Cholerae", option2: "Panthera", option3: "Bovidae", option4: "Homo sapien", correct_answer: 3}, {question: "What is the biological study of livestock called", option1: "Animals", option2: "Animal science", option3: "Science", option4: "Scientific method", correct_answer: 2}, {question: "Horses are also known as what", option1: "Bovine", option2: "Porcine", option3: "Equine", option4: "Galine", correct_answer: 3}, {question: "Ovine are what kind of animals", option1: "Pigs", option2: "Horses", option3: "Cattle", option4: "Sheep", correct_answer: 4}, {question: "An adult male swine is called what", option1: "Boar", option2: "Sow", option3: "Farrow", option4: "Gilt", correct_answer: 1}, {question: "A castrated male horse is called what", option1: "Heifer", option2: "Bull", option3: "Stallion", option4: "Gelding", correct_answer: 4}, {question: "A gilt is a/an", option1: "adult female pig", option2: "castrated male sheep", option3: "young horse", option4: "immature female pig", correct_answer: 4}, {question: "A castrated male sheep is a ", option1: "Ram", option2: "Wether", option3: "Ewe", option4: "Lamb", correct_answer: 3}, {question: "A bull calf is a ", option1: "mature male in cattle", option2: "immature male in cattle", option3: "castrated male in cattle", option4: "female", correct_answer: 2}, {question: "Animal science goals include the olowing except", option1: "food", option2: "clothing", option3: "housing", option4: "fighting", correct_answer: 4}];



    var CMP_202 = [{question: "Software is defined as", option1: "set of programs, documentations & configuration of data", option2: "set of programs", option3: "documentation and configuration of data", option4: "None of the mentioned", correct_answer: 1}, {question: "What is software engineering", option1: "Designing of a software", option2: "Testing a software", option3: "Application of engineering principles to the design of a software", option4: "none of the above", correct_answer: 3}, {question: "Who is the father of software engineering", option1: "Margaret Hamilton", option2: "Watt S. Humphrey", option3: "Alan Turing", option4: "Boris Beizer", correct_answer: 2}, {question: "What are the features of software Code", option1: "Simplicity", option2: "Accessibility", option3: "Modularity", option4: "All of the above", correct_answer: 3}, {question: "__________ is a software development activity that is not a part of software", option1: "Validation", option2: "Specification", option3: "Development", option4: "Dependence", correct_answer: 4}, {question: "CASE stands for", option1: "Computer Aided Software Engineering", option2: "Control Aided Science and Engineering", option3: "Cost Aided System Experiments", option4: "None of the above", correct_answer: 1}, {question: "___________ is defined as the process of generating analysis and designing documents", option1: "Re-engineering", option2: "Reverse engineering", option3: "Software re-engineering", option4: "Science and Engineering", correct_answer: 2}, {question: "Why do bugs and failures occur in software", option1: "Because of Developers", option2: "Because of companies", option3: "Because of both developers and companies", option4: "None of the mentioned", correct_answer: 3}, {question: "Attributes of a good software is", option1: "Development", option2: "Maintainability & functionality", option3: "Functionality", option4: "Maintainability", correct_answer: 2}, {question: "The cleanroom philosophy was proposed by", option1: "Linger", option2: "Mills", option3: "Dyer", option4: "All of the above", correct_answer: 4}];


       var btn = document.querySelectorAll(".exam");
       var time = document.querySelector("#time");
       
   
    

   


   
       btn.forEach(function(btn){
        btn.addEventListener("click", function(){
           var exam = btn.getAttribute("data-exam");
          
          
          

           
           var chosen_array;
           var arrays = [GEO_202, PLZ_202, ZOO_202, CMP_202];
           var words = ["GEO 202", "PLZ 202", "ZOO 202", "CMP 202"];
           var chosen_array = arrays[exam];
           var chosen_array_word = words[exam];
           var exam_section = document.querySelector("#exam");
           var question_section = document.querySelector("#questions");

           exam_section.classList.add("d-none");
           question_section.classList.remove("d-none");
           navigation(0, null, chosen_array);
           
           time.value = exam;
           if(time.value == exam){
            console.log(time.value);
            timer(1, chosen_array, chosen_array_word);
        
        }

        })
    })

    
    var form1 = document.querySelector("#form1");
    var marks = [];
      function navigation(j, template, chosen_array){
           
            
            var b = j;
            if(typeof marks[b] !== 'undefined' && marks[b] !== null){
               var answer = Number(marks[b]);
               var radios = document.querySelectorAll("input[type=radio]");
               radios.forEach(function(radio){
                   if(radio.value == answer){
                       radio.setAttribute("checked", "checked");
                   }
               });
            }
            var bar = chosen_array[b];
            template = '<div class="form-group"><div class="card"><div class="card-header"><h3 class="card-title">'+ bar.question +'</h3></div><div class="card-body"><div class="mt-4"><input type="radio" value="1" name="value"> '+ bar.option1 +'</div><div class="mt-4"><input type="radio" value="2" name="value"> '+ bar.option2 +'</div><div class="mt-4"><input type="radio" value="3" name="value"> '+ bar.option3 +'</div><div class="mt-4 mb-2"><input type="radio" value="4" name="value"> '+ bar.option4 +'</div></div><div class="card-footer">';
            if(j == 0){
                template += '<button class="btn btn-primary" type="submit" id="next">Next</button> <button id="previous" type="submit" class="btn btn-info" disabled>Previous</button></div> </div> </div></div>';
            }
            else if(j == chosen_array.length - 1){
                template += '<button class="btn btn-primary" disabled type="submit" id="next">Next</button><button id="previous" type="submit" class="btn btn-info">Previous</button></div> </div> </div></div>';
            }
            else{
                template += '<button class="btn btn-primary" type="submit" id="next">Next</button><button id="previous" type="submit" class="btn btn-info">Previous</button></div> </div> </div></div>';
            }
            form1.innerHTML = template;
            var submit = document.querySelectorAll("button[type=submit]");
           submit.forEach(function(submit){
            submit.addEventListener("click", function(e){
                e.preventDefault();
                if(submit.classList.contains("btn-primary")){
                    var data = new FormData(form1);
                    var output = "";
                    for(const entry of data){
                        output = entry[1];
                    }
                   marks[b] = output;
                   console.log(marks)
                    if(output == bar.correct_answer){
                       
                    }
                    j = j+1;
                    
                    navigation(j, null, chosen_array);
                }
                else{
                    var data = new FormData(form1);
                    var output = "";
                    for(const entry of data){
                        output = entry[1];
                    }
                    marks[b] = output;
                    console.log(marks)
                    if(output == bar.correct_answer){
                        
                    }
                    j = j-1;
                    
                    navigation(j, null, chosen_array);
                }
               
            })
           })
           
      }
      var total_mark = 0;


      function timer(minute, chosen_array, chosen_array_word){
        var questions = document.querySelector("#questions");
        var exam_section = document.querySelector("#exam");
        var temp = ' <div class="container" id="timer"><div class="row"><div class="col-md-3"><h2 class="text-center" id="minutes"></h2></div><div class="col-md-3"><h2 class="text-center" id="seconds"></h2></div><div class="col-md-6"><div class="text-center"><button id="submit_exam" class="btn btn-success btn-sm">Submit Your Exam</button></div></div></div></div>';
        questions.innerHTML = temp;
        var alertResult = document.querySelector("#alertResult");
        var user_email = document.querySelector("#login_name").value;
        console.log(user_email);
        var submit_exam = document.querySelector("#submit_exam");
        function submit_exa(){
            form1.parentElement.parentElement.classList.add("d-none");
            for(var c = 0; c<marks.length; c++){
                if(Number(marks[c]) == Number(chosen_array[c].correct_answer)){
                    total_mark = total_mark + 3;
                }
                for(var d = 0; d<users.length; d++){
                    if(users[d].email == user_email){
                        var f = d;
                        var your_name = users[f].name;
                    }
                }
               
    
            }
            console.log(total_mark)
            alertResult.classList.remove("d-none");
            alertResult.classList.add("d-flex");
            var date = new Date;
            var timeHour = date.getHours();
            var timeMinute = date.getMinutes();
            var timeSeconds = date.getSeconds();
            var timeDate = date.getDate();
            var timeMonth = date.getMonth();
            var timeYear = date.getFullYear();
            var alertText = `<div class="card" style="width: 100%;">
            <div class="card-header">
                <h2 class="card-title text-center">${your_name}</h2>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr>
                        <td>User Email</td>
                        <td>${user_email}</td>
                    </tr>
                    <tr>
                        <td>Exam Title</td>
                        <td>${chosen_array_word}</td>
                    </tr>
                    <tr>
                        <td>Exam Date</td>
                        <td>${timeYear}/${timeMonth}/${timeDate}</td>
                    </tr>
                    <tr>
                        <td>Exam Finishing Time</td>
                        <td>${timeHour}:${timeMinute}/${timeSeconds}</td>
                    </tr>
                    <tr>
                        <td>User Mark</td>
                        <td>${total_mark}</td>
                    </tr>
                </table>
            </div>
            <center class="mt-3"><button id="menu" class="btn btn-default">Take Another exam</button></center>
        </div>
        `;
            alertResult.innerHTML = alertText;
            document.querySelector("#menu").addEventListener("click", function(){
                var exam_section = document.querySelector("#exam");
                alertResult.classList.add("d-none");
                exam_section.classList.remove("d-none");
            })
           }
        submit_exam.addEventListener("click", function(){
           submit_exa();
        });
        
    
        
        var minutes = document.querySelector("#minutes");
        var seconds = document.querySelector("#seconds");
       
            var second;
          second = 59;
        var a = setInterval(function(){
              second = second - 1;
              if(second < 0){
                  second = 59;
                  minute = minute - 1;
              }
              if(minute == 0 && second == 0){
                  clearInterval(a);
                  submit_exa()
              }
             seconds.textContent = second;
             minutes.textContent = minute;
          }, 1000);
     }



      
     
      
      
    
   



})