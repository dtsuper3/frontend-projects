/* Equated Monthly Installment(EMI) calculator 
    E = P.r.(1+r)^T/(((1+r)^T)-1)
*/

// Listen for submit
document.getElementById("loan-form").addEventListener('submit', (e)=>{
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show loading
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults,1000);
    e.preventDefault();
});

//Calculate Results
function calculateResults(){
    console.log('Calculating...');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value)/100/12;
    const calculatePayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principle*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principle).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loading
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your numbers');
    }
}

//Show Error
function showError(error){

    // Hide results
    document.getElementById('results').style.display = 'none';

    // Hide loading
    document.getElementById('loading').style.display = 'none';
    // Create a div
    const errorDiv = document.createElement('div');
    
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {  
    document.querySelector('.alert').remove();
}