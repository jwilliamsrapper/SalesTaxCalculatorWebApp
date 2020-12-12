// Class variables



// clear button
document.getElementById("clearButton").onclick = () =>
{
    document.getElementById("textInput").value = "";
    document.getElementById("cartTotal").innerHTML = "Estimated cost is $0.00";
    document.getElementById("state").value = "None";
    
}


// twitter button
document.getElementById("twitter").onclick = () =>
{
    window.open("https://twitter.com/imjaewilliams");
}

// sales tax calculation button 
document.getElementById("cartButton").onclick = () => {
    var dollarAmount = parseFloat(document.getElementById("textInput").value);
    var getState = document.getElementById("state").value;
    

    
    if(isNaN(dollarAmount)){
        alert('Please enter in a value e.g 4.99');
        dollarAmount = 0;
    }

    if(getState == "None"){
        alert('Please select a state.');
    }

    // alabama
    if(getState == "AL"){

        stateTax = .13;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
     
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }
     // Alaska
    if(getState == "AK"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }
     // Arizona
    if(getState == "AZ"){

        stateTax = .107;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

    // Arkansas
    if(getState == "AR"){

        stateTax = .11;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

    // California
    if(getState == "CA"){

        stateTax = .102;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

     // Colorado
    if(getState == "CO"){

        stateTax = .09;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Connecticut
    if(getState == "CT"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



  
     // Delaware
    if(getState == "DE"){

        stateTax = 0;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

   // District Of Columbia
    if(getState == "DC"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

     // Florida
    if(getState == "FL"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

     // Georgia
    if(getState == "GA"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        alert("Your esitmated true cost is $" + dollarAmount).toFixed(2);
    }

    //  Hawai
    if(getState == "HI"){

        stateTax = .047;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


     // Idaho
    if(getState == "ID"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Illionois
    if(getState == "IL"){

        stateTax = .101;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Indiana 
    if(getState == "IN"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Iowa
    if(getState == "IA"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


 

      // Kansas
    if(getState == "KS"){

        stateTax = .101;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

    
    // Kentucky
    if(getState == "KY"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



     // Lousiana
    if(getState == "LA"){

        stateTax = .11;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Maine
    if(getState == "ME"){

        stateTax = .055;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


     // Maryland
    if(getState == "MD"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Massachusetts
    if(getState == "MA"){

        stateTax = .0625;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Michigan
    if(getState == "MI"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Minnesota
    if(getState == "MN"){

        stateTax = .072;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Mississippi
    if(getState == "MS"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }




    //  Missouri
    if(getState == "MO"){

        stateTax = .101;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Montana
    if(getState == "MT"){

        stateTax = 0;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Nebraska
    if(getState == "NE"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Nevada
    if(getState == "NV"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // New Hampshire
    if(getState == "NH"){

        stateTax = 0;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // New Jersey
    if(getState == "NJ"){

        stateTax = .06625;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // New Mexic0
    if(getState == "NM"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // New York
    if(getState == "NY"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // North Carolina
    if(getState == "NC"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // North Dakota
    if(getState == "ND"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Ohio
    if(getState == "OH"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Oklahoma
    if(getState == "OK"){

        stateTax = .11;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Oregon
    if(getState == "OR"){

        stateTax = 0;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Pennsylvania
    if(getState == "PA"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Rhode Island 
    if(getState == "RI"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // South Carolina
    if(getState == "SC"){

        stateTax = .09;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // South Dakota
    if(getState == "SD"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Tennessee
    if(getState == "TN"){

        stateTax = .09;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Texas
    if(getState == "TX"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Utah
    if(getState == "UT"){

        stateTax = .08;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }



    // Vermont
    if(getState == "VT"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

    // Virginia
    if(getState == "VA"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Washington
    if(getState == "WA"){

        stateTax = .101;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // West Virginia 
    if(getState == "WV"){

        stateTax = .07;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }

    
 
    // Wisconsin
    if(getState == "WI"){

        stateTax = .065;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }


    // Wyoming
    if(getState == "WY"){

        stateTax = .06;
        dollarAmount = dollarAmount + dollarAmount * stateTax;
        document.getElementById("cartTotal").innerHTML = "Estimated cost is $" + dollarAmount.toFixed(2);
    }
  

  
};










