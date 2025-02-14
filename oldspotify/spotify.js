let menu = document.querySelector("#menu");
let box = document.querySelector(".box1");
let logo= document.querySelector(".logo");
let sidebar2=document.querySelector(".sidebar2");


menu.addEventListener("click",()=>{
    sidebar2.classList.remove("sidebar2");
});

*{
    font-family:sans-serif;
    margin: 0;
    padding: 0;
    border:border-box;
   
}
.main {
   
    background-color: #161414;
    height:px;
 
    overflow-y: auto;
    
   
}
.main::-webkit-scrollbar {
    display: none; 
}

.container {
      width: 100%; 
background-color: black;
  
    display: flex;
}

.sidebar1 {
    width: 25%;
    
   margin:10px 0 0 10px;
  color: aliceblue;
    background-color: #161414;
  
    margin-left: 10px;
    border-radius: 10px;
}
.menubar{
    display: none;
}
.sidebar1 a{
    color: white;
    text-decoration: none;
}
.sidebar1 ul li{
 font-size: 20px;
 font-weight: bold;
    padding: 30px 20px 20px 30px;
    background-color: #161414;
   list-style: none;
   cursor: pointer;
   color: rgb(197, 187, 175); 
}
.sidebar1 ul li:hover{
    color:white;
}
.sidebar1 ul li i{
    padding-right: 20px;
     color: rgb(197, 187, 175); 
}
.sidebar1 h1{
    padding-bottom: 20px;
    padding-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
   background-color:#161414 ;
  
}
.sidebar2{
   width: 100%;
  
    margin-top: 10px;
    margin-left: 10px;
    color:white;
    background-color:  #161414;
    border-radius: 10px;
}
.menubar{
    display: none;
}

.sidebar2 h1{
    font-size: 25px;
    margin:20px 0 0 20px;
    background-color:  #161414;
}

.cards {
    padding-bottom: 10px;
    margin-top: 0px;
    margin-right: 100px;
    background-color:  #161414;
    width: 100%;
   
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
    overflow-x: auto;
    }
.cards .card{
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 5px;
    height: 250px;
    width: 160px;
    cursor: pointer;
    border-radius: 10px;
    background-color:  #161414;
}
.cards img{
  
    background-size: cover;
    margin-top: 7px;
    border-radius: 50%;
    margin-left: 15px;
    height:130px;
    width:130px;
    margin-right: 10px;
}
.cards .card #id1 {
    font-family: Arial, Helvetica, sans-serif;
    color: bisque;
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
   font-weight: bold;
    cursor: pointer;
    
}
.cards .card #id2 {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(197, 187, 175);
    margin-top: 5px;
    margin-left: 20px;
    font-size:15px;
    cursor: pointer;
  
}
.cards .card:hover {
    background: rgb(43, 41, 41);
    transform: scale(1.05);
}
.sidebar2 .song {
    margin-top: 5px;
      width: 100%;
     
      height: 300px;
      
  }
  .song {
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      overflow-x: auto;
      background-color: #161414;
   
   
  }
  .song .crds img {
      height: 170px;
      width: 120px;
      margin: 15px;
      background-size: cover;
      border-radius:10px;
      
    
  }
  .song .crds {
      margin-top: 10px;
    margin-left: 20px;
      height: 280px;
      width: 150px;
     cursor: pointer;
      border-radius: 10px;
      
    
  }
  .song .crds:hover {
      background: rgb(43, 41, 41);
      transform: scale(1.05);
  }
  .song::-webkit-scrollbar {
      display: none; 
  }
  .song #id3,#id5{
    margin-left:15px; 
    font-family:sans-serif; 
    color: bisque; 
    font-weight: bold;
  }
  .song #id4,#id6{
    margin-left: 15px; 
    padding-top:7px; 
    font-size:13px; 
    font-family: sans-serif; 
    color: rgb(197, 187, 175);
  }
  
  .sidebar2 .row3 {
    margin-top: 5px;
      width: 100%;
   padding-bottom: 10px;
      
  }
  .row3 {
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      overflow-x: auto;
      background-color: #161414;
   
   
  }
  .row3 .row3_cards img {
      height: 170px;
      width: 120px;
      margin: 15px;
      background-size: cover;
      border-radius:10px;
      
    
  }
  .row3 .row3_cards {
      margin-top: 10px;
    margin-left: 20px;
      height: 270px;
      width: 150px;
     cursor: pointer;
      border-radius: 10px;
      
    
  }
  
  .row3 .row3_cards:hover {
      background: rgb(43, 41, 41);
      transform: scale(1.02);
  }
  .row3::-webkit-scrollbar {
      display: none; 
  }
  
  .foot {
    padding-top: 10px;
    margin-top: 0px;
    color: #F3F3F3;
    background-color: #161414;

    display: flex;
   justify-content: space-evenly;
}
ul p {

    font-weight: bold;
    font-family: sans-serif;
   
}
.foot ul a {
    font-size: 13px;
    display: flex;
   margin-top: 20px;
   color: gray;
   background-color: #161414;
   font-family: sans-serif;
  
}
ul {
    margin: 20px;
  
}
hr {
    width:90%;
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 30px;
  
}
.copy {
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
  
   
}
 .logo {
    margin-left: 230px;
     margin-top: 100px;
     color: white;
     font-family: sans-serif;
  
 }
 /*surface duo*/
 @media (max-width:550px){
    .container{
    background-color:black;
    }
    
     .cards{
      margin-right: 0px;
     }
  .sidebar1{
      display: none;
  }
   .menubar{
     
      width: 50%;
      height: 100vh;
     background-color: black;
      display: flex;
      flex-direction: column;
      color:white;
      position: fixed;
     display: non;
     right:0;
    
      
     h1{
      display: none;
     }
     #cross{
    
       margin: 0px 0 0 200px;
       font-size: 30px;
     }
      ul li{
          padding:20px 0px 20px 10px;
          list-style: none;
          color:white;
      }
     
      ul i{
          padding-right: 20px;
      }
  }
  
     .sidebar2{
      width:540px;
     border-radius: 0;
      margin-top: 0px;
      margin-left: 0px;
      color:white;
      background-color:  #161414;
     }
     .sidebar2 h1 i{
    margin-left:290px;
  }
  .sidebar2 h1{
      margin:20px 0 0 20px;
      background-color:  #161414;
  }
  .cards {
      margin-top: 0px;
    
      background-color:  #161414;
      width: 100%;
      margin-right: 100px;
      display: flex;
      justify-content: space-evenly;
      border-radius: 10px;
      overflow-x: auto;
      
      }
  .cards .card{
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 5px;
      height: 250px;
      width: 160px;
      cursor: pointer;
      border-radius: 10px;
      background-color:  #161414;
  }
  .cards img{
    
      background-size: cover;
      margin-top: 7px;
      border-radius: 50%;
      margin-left: 15px;
      height:130px;
      width:130px;
      margin-right: 10px;
  }
  .cards .card #id1{
      font-family: Arial, Helvetica, sans-serif;
      color: bisque;
      margin-top: 20px;
      margin-left: 15px;
      text-align: left;
      font-size: 20px;
      cursor: pointer;
      
  }
  .cards .card #id2 {
      font-family: Arial, Helvetica, sans-serif;
      color: rgb(197, 187, 175);
      margin-top: 5px;
      margin-left: 15px;
      font-size:15px;
      cursor: pointer;
    
  }
  
  .cards::-webkit-scrollbar {
      display:none ;
  }
  .cards .card:hover {
      background-color: #161414;
          transform: scale(0);
      
  }
  .song .crds:hover {
      background-color: #161414;
      transform: scale(0);
  }
  .row3 .row3_cards:hover {
      background-color: #161414;
      transform: scale(0);
  }
  .row3 {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
     
      background-color: #161414;
   
   
  }
  .row3 .row3_cards img {
      height: 140px;
      width: 120px;
      margin: 15px;
      background-size: cover;
      border-radius:10px;
      
    
  }
  .row3 .row3_cards {
      margin-top: 10px;
    margin-left: 0px;
      height: 240px;
      width: 150px;
     cursor: pointer;
      border-radius: 10px;
      
    
  }
  .row3 .row3_cards:hover {
     
      transform: scale(0);
  }
  .row3::-webkit-scrollbar {
      display: none; 
  }
  
  hr {
     
      margin-left: 20px;
      margin-bottom: 5px;
    
  }
   }
 
 /* iphone 14 pro*/
 @media (max-width:500px){
  .container{
  background-color: #161616;
  }
  
   .cards{
    margin-right: 0px;
   }
.sidebar1{
    display: none;
}
 .menubar{
   
    width: 50%;
    height: 100vh;
   background-color: black;
    display: flex;
    flex-direction: column;
    color:white;
    position: fixed;
   display: none;
   right:0;
  
    
   h1{
    display: none;
   }
   #cross{
  
     margin: 0px 0 0 150px;
     font-size: 30px;
   }
    ul li{
        padding:20px 0px 20px 10px;
        list-style: none;
        color:white;
    }
   
    ul i{
        padding-right: 20px;
    }
}

   .sidebar2{
    width:430px;
   border-radius: 0;
    margin-top: 0px;
    margin-left: 0px;
    color:white;
    background-color:  #161414;
   }
   .sidebar2 h1 i{
    margin-left: 180px;
}
.sidebar2 h1{
    margin:20px 0 0 20px;
    background-color:  #161414;
}
.cards {
    margin-top: 0px;
  
    background-color:  #161414;
    width: 100%;
    margin-right: 100px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
    overflow-x: auto;
    
    }
.cards .card{
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 5px;
    height: 250px;
    width: 160px;
    cursor: pointer;
    border-radius: 10px;
    background-color:  #161414;
}
.cards img{
  
    background-size: cover;
    margin-top: 7px;
    border-radius: 50%;
    margin-left: 15px;
    height:130px;
    width:130px;
    margin-right: 10px;
}
.cards .card #id1{
    font-family: Arial, Helvetica, sans-serif;
    color: bisque;
    margin-top: 20px;
    margin-left: 15px;
    text-align: left;
    font-size: 20px;
    cursor: pointer;
    
}
.cards .card #id2 {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(197, 187, 175);
    margin-top: 5px;
    margin-left: 15px;
    font-size:15px;
    cursor: pointer;
  
}

.cards::-webkit-scrollbar {
    display:none ;
}
.cards .card:hover {
    background-color: #161414;
        transform: scale(0);
    
}
.song .crds:hover {
    background-color: #161414;
    transform: scale(0);
}
.row3 .row3_cards:hover {
    background-color: #161414;
    transform: scale(0);
}
.row3 {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
   
    background-color: #161414;
 
 
}
.row3 .row3_cards img {
    height: 140px;
    width: 120px;
    margin: 15px;
    background-size: cover;
    border-radius:10px;
    
  
}
.row3 .row3_cards {
    margin-top: 10px;
  margin-left: 0px;
    height: 240px;
    width: 150px;
   cursor: pointer;
    border-radius: 10px;
    
  
}
.row3 .row3_cards:hover {
   
    transform: scale(0);
}
.row3::-webkit-scrollbar {
    display: none; 
}

hr {
   
    margin-left: 20px;
    margin-bottom: 5px;
  
}
 }
 /*iphone 12 pro*/
 @media (max-width:400px){
    .sidebar2{
        width:380px;
        height: 932px;
    
       }
       .sidebar2 h1 i{
        margin-left: 150px;
    }
    .menubar #cross{
  
        margin: 0px 0 0 130px;
        font-size: 30px;
      }
 }
 /*pixel 7*/
 @media (max-width:420px){
    .sidebar2{
        width:412px;
        height: 932px;
        margin-top: 0px;
        margin-left: 0px;
        color:white;
        background-color:  #161414;
       }
       .sidebar2 h1 i{
        margin-left: 170px;
    }
 }
 /*ipnone se*/
 @media (max-width:380px){
    .sidebar2{
        width:375px;
        height: 932px;
        margin-top: 0px;
        margin-left: 0px;
        color:white;
        background-color:  #161414;
    } 
   .menubar #cross{
  
        margin: 0px 0 0 130px;
        font-size: 30px;
      }
    .sidebar2 h1 i{
        margin-left: 170px;
    }
    .cards .card{
        height: 200px;
        width: 160px;
    }
    .cards img{
        height:100px;
        width: 100px;
    }
    .cards .card #id1 {
        font-size: 15px;
    }
    .cards .card #id2 {
       font-size: 15px;
    }
    .sidebar2 h1{
        font-size: 20px;
    }
    .sidebar2 .song{
        height: 270px;
    }
      .song .crds img {
          height: 120px;
          width: 80px;
      }
      .song .crds {
          height: 230px;
          width: 130px;
      }
     
    .row3 .row3_cards img {
        height: 100px;
        width: 80px;
        margin: 15px;
        background-size: cover;
        border-radius:10px;
        
      
    }
    .row3 .row3_cards {
       
        margin-top: 10px;
      margin-left: 0px;
        height: 240px;
        width: 110px;
       cursor: pointer;
        border-radius: 10px;  
    }
    

 }
 /*samsung galaxy s8*/
       @media (max-width:370px){
        .sidebar2{
            width:360px;
            height: 932px;
            margin-top: 0px;
            margin-left: 0px;
            color:white;
            background-color:  #161414;
           }
           .sidebar2 h1 i{
            margin-left: 155px;
        }
 }
 /*ipad mini*/
 @media (min-width:750px){
    .sidebar1{
        margin-bottom: 10px;
    }
    .sidebar1 h1{
        margin-left: 0px;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .sidebar2{
        width:548px;
        color:white;
        background-color:  #161414;
        margin-bottom: 10px;
      
       }
       .sidebar2 h1 i{
        display: none;
       }
       .sidebar1 ul li{
       
        font-weight: bold;
           padding: 30px 20px 20px 0px;
           background-color: #161414;
          list-style: none;
          cursor: pointer;
       }
       .sidebar1 ul li i{
           padding-right: 20px;
            color: rgb(197, 187, 175); 
       }
       
       .cards{
        overflow-y: auto;
       }
       .cards::-webkit-scrollbar {
        display: none; 
    }
    .row3{
        display: flex;
        flex-wrap: wrap;
        border-collapse: collapse;
      
    }
    .row3 .row3_cards img {
        height: 120px;
        width: 100px;
    }
    .row3 .row3_cards {
        margin-top: 10px;
      margin-left: 30px;
        height: 240px;
        width: 130px;
    }
    .cards .card:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .song .crds:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .row3 .row3_cards:hover {
        background-color: #161414;
        transform: scale(0);
    }
    
 }
 /*ipad air*/
 @media (min-width:800px){
    .sidebar1{
        margin-bottom: 10px;
    }
    .sidebar1 h1{
        margin-left: 0px;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .sidebar2{
        width:575px;
        color:white;
        background-color:  #161414;
        margin-bottom: 10px;
      
       }
       .cards{
        overflow-y: auto;
       }
       .cards::-webkit-scrollbar {
        display: none; 
    }
    .row3{
        display: flex;
        flex-wrap: wrap;
       
      
    }
    .row3 .row3_cards img {
        height: 120px;
        width: 100px;
        margin: 15px;
    
    }
    .row3 .row3_cards {
        margin-top: 10px;
      margin-left: 40px;
        height: 240px;
        width: 130px;
       
    }
    .cards .card:hover {
        background-color: #161414;
            transform: scale(0);
    }
    .song .crds:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .row3 .row3_cards:hover {
        background-color: #161414;
        transform: scale(0);
    }
 }
 /*ipad pro*/
@media (min-width:1000px){
    .sidebar1{
        margin-bottom: 10px;
    }
    .sidebar1 h1{
        margin-left: 0px;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .sidebar2{
        width:72%;
        color:white;
        background-color:  #161414;
        margin-bottom: 10px;
      
       }
       .cards{
        overflow-y: auto;
       }
       .cards::-webkit-scrollbar {
        display: none; 
    }
    .row3{
        display: flex;
        flex-wrap: wrap;
       
      
    }
    .row3 .row3_cards img {
        height: 120px;
        width: 100px;
        margin: 15px;
    
    }
    .row3 .row3_cards {
        margin-top: 10px;
      margin-left: 60px;
        height: 240px;
        width: 120px;
       
    }
    .cards .card:hover {
        background-color: #161414;
            transform: scale(0);
    }
    .song .crds:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .row3 .row3_cards:hover {
        background-color: #161414;
        transform: scale(0.1);

    }
  
 }
 /*surface pro 7*/
 @media (min-width:900px){
    .sidebar1{
        margin-bottom: 10px;
    }
    .sidebar1 h1{
        margin-left: 0px;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .sidebar2{
        width:72%;
        color:white;
        background-color:  #161414;
        margin-bottom: 10px;
      
       }
       .cards{
        overflow-y: auto;
       }
       .cards::-webkit-scrollbar {
        display: none; 
    }
    .row3{
        display: flex;
        flex-wrap: wrap;
       
      
    }
    .row3 .row3_cards img {
        height: 120px;
        width: 100px;
        margin: 15px;
    
    }
    .row3 .row3_cards {
        margin-top: 10px;
      margin-left: 60px;
        height: 240px;
        width: 130px;
       
    }
    .cards .card:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .song .crds:hover {
        background-color: #161414;
        transform: scale(0);
    }
    .row3 .row3_cards:hover {
        background-color: #161414;
        transform: scale(0);
    }
  
 }
 @media (min-width:1200px){
    .sidebar1{
        margin-bottom: 10px;
    }
    .sidebar1 h1{
        margin-left: 0;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    .sidebar2{
        width:73%;
        color:white;
        background-color:  #161414;
        margin-bottom: 10px;
      
       }
       .cards{
        overflow-y: auto;
       }
       .cards::-webkit-scrollbar {
        display: none; 
    }
    .row3 .row3_cards {
        margin-top: 10px;
      margin-left: 40px;
        height: 240px;
        width: 130px;
       
    }
   
        .song .crds:hover {
            background: rgb(43, 41, 41);
            transform: scale(1.05); 
    
        }
        .row3 .row3_cards:hover {
            background: rgb(43, 41, 41);
            transform: scale(1.02);
        }
        .cards .card:hover {
            background: rgb(43, 41, 41);
            transform: scale(1.05);
        }
 }






































