function ValidateAndCalculate(){
    var figureArray = ["noinput", "Alice", "Anya & Yor","Chainsawman","Eren Yeager","Kaguya Shinomiya","Light Yagami & L","Matsumoto","Monkey D. Luffy","Sakura","Semiramis"];
    var figureImgArray = ["images/default-Home.gif", "images/Alice-Home.jpg", "images/AnyaxYor-Home.jpg","images/Chainsawman-Home.jpg","images/Eren-Home.jpg","images/Kaguya-Home.jpg","images/LightxL-Home.jpg","images/Matsumoto-Home.jpg","images/Luffy-Home.jpg","images/Sakura-Home.jpg","images/Semiramis-Home.jpg"];
    var figureBasePrices = [0.00, 79.60, 71.93,53.86,43.45,37.96,80.73,69.16,58.22,85.61,74.02];
    var countrysArray = ["nocountry", "Australia", "Bolivia","Chile","China","Costa Rica","Dominican Republic","El Salvador","Indonesia","Japan","Malaysia","Malta","Mexico","Panama","Peru","Philippines","Saudi Arabia","Singapore","Thailand","United Kingdom","U.S.A."];
    var deliveryCostsArray = [0.00, 4.00, 8.00,8.25,2.00,6.50,6.50,6.00,3.50,1.00,3.25,5.00,5.50,6.75,7.50,2.25,4.50,3.25,3.00,4.75,5.25];
    var figureChosen=document.getElementById("figureinput").value;
    var numOfI=document.getElementById("quantity").value;
    var countryChosen=document.getElementById("countrys").value;
    var figPos=figureArray.indexOf(figureChosen);
    var basePrice=figureBasePrices[figPos];
    var countryPos=countrysArray.indexOf(countryChosen);
    var deliveryCost=deliveryCostsArray[countryPos];
    var totalPrice=0;
    if((figPos!=0) && (document.getElementById("yesbut").checked || document.getElementById("nobut").checked) && (isNaN(numOfI)==false && numOfI<11 && numOfI>0 && (numOfI%1==0))&&(deliveryCost!=0)){
        totalPrice=basePrice    
        if(document.querySelector("input[name='2ndhand?']:checked").value=="yes"){
            totalPrice=(totalPrice*80)/100;
            totalPrice=totalPrice*numOfI;
            totalPrice+=deliveryCost; //only added once not for each item
            document.getElementById("Output").innerHTML="<u>Input Details: </u><br><br> Figure: "+figureChosen+", €"+basePrice.toFixed(2)+"<br> Second hand: Yes, figure 20% off <br> Quantity: "+numOfI+"<br> Country: "+countryChosen+", €"+deliveryCost.toFixed(2)+"<br> Total Price: €"+totalPrice.toFixed(2);
            document.getElementById("Output").style.display = "block";
        }else{
            totalPrice=totalPrice*numOfI;
            totalPrice+=deliveryCost; //only added once not for each item
            document.getElementById("Output").innerHTML="<u>Input Details: </u><br><br> Figure: "+figureChosen+", €"+basePrice.toFixed(2)+"<br> Second Hand: No <br> Quantity: "+numOfI+"<br> Country: "+countryChosen+", €"+deliveryCost.toFixed(2)+"<br> Total Price: €"+totalPrice.toFixed(2);
            document.getElementById("Output").style.display = "block";
        }
        document.getElementById("figurepic").src = figureImgArray[figPos];
    }else{
        document.getElementById("Output").style.display = "none";
        document.getElementById("Output").innerHTML="";
        document.getElementById("figurepic").src=figureImgArray[0];
        alert("Please check your inputs and try again.")
    }
}