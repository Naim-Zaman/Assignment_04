/////////-----------------Plus sign Design Left (Upper)--------------------///////
document.getElementById('fclass-ticket-Number-increase').addEventListener('click',function(){
    const fcamountCount = document.getElementById('fclass-amount-count');
    //-------value Convert
    const fcamountCountValue = parseInt(fcamountCount.value);
    //-------Value Increase
    const fcamountCountValueIncrease = fcamountCountValue + 1;
    //-------Value Set
    fcamountCount.value = fcamountCountValueIncrease;

    //-----------SubValue Set and value convert
    const fcticketInput = document.getElementById('fclass-amount-count').value;
    const convertTicketCount = parseInt(fcticketInput.value);
    const economyticketInput = document.getElementById('economy-amount-count').value;
    const converteconomyTicketCount = parseInt(economyticketInput.value);

    //----------Input Quentity * Amount
    const subTotalPrice = fcticketInput * 150 + economyticketInput * 100;
    document.getElementById("sub-total").innerText = "$" + subTotalPrice;

    //---------Tax calculation
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('taxvalue').innerText = "$" + tax;

    //---------Total Cost calculation
    const totalAmount = subTotalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
});

/////////-----------------Minus sign Design Right (Upper)--------------------///////
document.getElementById('fclass-ticket-Number-decrease').addEventListener('click',function(){
    const fcamountCount = document.getElementById('fclass-amount-count');
    //-------value Convert
    const fcamountCountValue = parseInt(fcamountCount.value);
    //-------Value Increase
    const fcamountCountValueIncrease = fcamountCountValue - 1;
    //-------Value Set
    fcamountCount.value = fcamountCountValueIncrease;
   
    //-----------SubValue Set and value convert
    const fcticketInput = document.getElementById('fclass-amount-count').value;
    const convertTicketCount = parseInt(fcticketInput.value);
    const economyticketInput = document.getElementById('economy-amount-count').value;
    const converteconomyTicketCount = parseInt(economyticketInput.value);

    //----------Input Quentity * Amount
    const subTotalPrice = fcticketInput * 150 + economyticketInput * 100;
    document.getElementById("sub-total").innerText = "$" + subTotalPrice;
    
    //---------Tax calculation
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('taxvalue').innerText = "$" + tax;

    //---------Total Cost calculation
    const totalAmount = subTotalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
});

/////////-----------------Plus sign Design Left (Lower)--------------------///////
document.getElementById('economy-ticket-Number-increase').addEventListener('click',function(){
    const economyAmountCount = document.getElementById('economy-amount-count');
    //-------value Convert
    const economyAmountCountValue = parseInt(economyAmountCount.value);
    //-------Value Increase
    const economyAmountCountValueIncrease = economyAmountCountValue + 1;
    //-------Value Set
    economyAmountCount.value = economyAmountCountValueIncrease;

    //-----------SubValue Set and value convert
    const fcticketInput = document.getElementById('fclass-amount-count').value;
    const convertTicketCount = parseInt(fcticketInput.value);
    const economyticketInput = document.getElementById('economy-amount-count').value;
    const converteconomyTicketCount = parseInt(economyticketInput.value);

    //----------Input Quentity * Amount
    const subTotalPrice = fcticketInput * 150 + economyticketInput * 100;
    document.getElementById("sub-total").innerText = "$" + subTotalPrice;
    
    //---------Tax calculation
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('taxvalue').innerText = "$" + tax;

    //---------Total Cost calculation
    const totalAmount = subTotalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
});

/////////-----------------Minus sign Design Right (Lower)--------------------///////
document.getElementById('economy-ticket-Number-decrease').addEventListener('click',function(){
    const economyAmountCount = document.getElementById('economy-amount-count');
    //-------value Convert
    const economyAmountCountValue = parseInt(economyAmountCount.value);
    //-------Value Increase
    const economyAmountCountValueIncrease = economyAmountCountValue - 1;
    //-------Value Set
    economyAmountCount.value = economyAmountCountValueIncrease;
    
    //-----------SubValue Set and value convert
    const fcticketInput = document.getElementById('fclass-amount-count').value;
    const convertTicketCount = parseInt(fcticketInput.value);
    const economyticketInput = document.getElementById('economy-amount-count').value;
    const converteconomyTicketCount = parseInt(economyticketInput.value);

    //----------Input Quentity * Amount
    const subTotalPrice = fcticketInput * 150 + economyticketInput * 100;
    document.getElementById("sub-total").innerText = "$" + subTotalPrice; 


    //---------Tax calculation
    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('taxvalue').innerText = "$" + tax;

    //---------Total Cost calculation
    const totalAmount = subTotalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
});

//-------------------Submit Condition Use 
var confirmationInfo = document.getElementById('confirmation');
confirmationInfo.addEventListener("click",function(){
    const loginArea = document.getElementById("body-area");
            loginArea.style.display = 'none';
            document.body.style.backgroundImage = 'none';
    const transactionArea = document.getElementById("successfully-message");
            transactionArea.style.display = "block";       
});


























    


