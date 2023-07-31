        
// Load the previous vote count from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
  let totalVotes = 0;

  for (let i = 1; i <= 6; i++) {
    const storedVotes = localStorage.getItem(`votes${i}`);
    if (storedVotes !== null) {
      const votesElement = document.getElementById(`votes${i}`);
      votesElement.innerText = storedVotes;
      totalVotes += parseInt(storedVotes);
    }
  }

  // Update the total votes and percentages for all candidates
  updateTotalVotes(totalVotes);
  updateAllPercentages();
});

// Function to update the total votes
function updateTotalVotes(totalVotes) {
  document.getElementById('totalVotes').innerText = totalVotes;
}

// Function to calculate and update the percentage for a single candidate

function updatePercentage(candidateId, votes, totalVotes) {
  const percentage = totalVotes === 0 ? 0 : ((votes / totalVotes) * 100).toFixed(2);
  document.getElementById(`percentage${candidateId}`).innerText = `${percentage}%`;
  // Store the updated percentage in local storage
  localStorage.setItem(`percentage${candidateId}`, percentage);
}

// Function to update the percentage for all candidates
function updateAllPercentages() {
  const totalVotes = parseInt(document.getElementById('totalVotes').innerText);

  for (let i = 1; i <= 6; i++) {
    const votes = parseInt(document.getElementById(`votes${i}`).innerText);
    const percentage = totalVotes === 0 ? 0 : ((votes / totalVotes) * 100).toFixed(2);
    document.getElementById(`percentage${i}`).innerText = `${percentage}%`;
    localStorage.setItem(`percentage${i}`, percentage);
  }
}
// ... (Other functions remain unchanged) ...
let currentCandidate = 0;
let votes = 0;

function openPopup(candidate) {
    currentCandidate = candidate;
    votes = 0;
    updatePopupData();
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'grid';
}


function closePopup() {
 

  if (votes === 0) {
    alert("You cannot proceed if number votes is zero or not valid. Please enter a valid number of votes.");
    return;
  } else {
    document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
  document.getElementById('payment-form').style.display = 'grid';
  document.getElementById('popupVotes').value = '';
  }

  // Update the total votes for the current candidate in both the interface and local storage
  const totalVotesElement = document.getElementById(`votes${currentCandidate}`);
  const totalVotes = parseInt(totalVotesElement.innerText) + votes;
  totalVotesElement.innerText = totalVotes;
  localStorage.setItem(`votes${currentCandidate}`, totalVotes);

  // Update the total votes displayed on the page
  const currentTotalVotes = parseInt(document.getElementById('totalVotes').innerText);
  const updatedTotalVotes = currentTotalVotes + votes;
  updateTotalVotes(updatedTotalVotes);

  // Update the percentage for all candidates
  updateAllPercentages();

  // Remove popupTotalPrice from local storage for the current candidate
  localStorage.removeItem(`popupTotalPrice${currentCandidate}`);
  
}
function submitPayment() {
    
    document.getElementById('confirm').style.display = 'grid';
    document.getElementById('payment-form').style.display = 'none';

    setTimeout(function() {
      document.getElementById('confirm').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }, 3000);

    const totalPrice = (votes * 0.5).toFixed(2);
    localStorage.setItem(`popupTotalPrice${currentCandidate}`, totalPrice);
  }


function updatePopupData() {
  // Ensure the input value appears as zero when no votes are entered
    document.getElementById('popupVotes').value = isNaN(votes) ? 0 : votes;

    const totalVotesElement = document.getElementById(`votes${currentCandidate}`);
    const totalVotes = parseInt(totalVotesElement.innerText) + votes;
    const totalPrice = (totalVotes * 0.5).toFixed(2);
    const candidateNameElement = document.querySelector(`#candidate${currentCandidate} h4`);
    const candidateName = candidateNameElement.innerText;

    document.getElementById('popupCandidate').innerText = candidateName;
    document.getElementById('popupVotes').innerText = votes;
    document.getElementById('popupTotalPrice').innerText = totalPrice;
    const totalPriceStore = (votes * 0.5).toFixed(2);
  document.getElementById('popupTotalPrice').innerText = totalPriceStore;
  localStorage.setItem(`popupTotalPrice${currentCandidate}`, totalPriceStore);

}
document.addEventListener('DOMContentLoaded', function () {
  let totalVotes = 0;

  for (let i = 1; i <= 6; i++) {
    const storedVotes = localStorage.getItem(`votes${i}`);
    if (storedVotes !== null) {
      const votesElement = document.getElementById(`votes${i}`);
      votesElement.innerText = storedVotes;
      totalVotes += parseInt(storedVotes);
    }

    // Load popupTotalPrice for each candidate if it exists in local storage
    const storedPopupTotalPrice = localStorage.getItem(`popupTotalPrice${i}`);
    if (storedPopupTotalPrice !== null) {
      const popupTotalPriceElement = document.getElementById('popupTotalPrice');
      popupTotalPriceElement.innerText = storedPopupTotalPrice;
    }
  }

  // Update the total votes and percentages for all candidates
  updateTotalVotes(totalVotes);
  updateAllPercentages();
});
function updatePopupVotes() {
  const inputVotes = parseInt(document.getElementById('popupVotes').value);
  if (!isNaN(inputVotes) && inputVotes >= 0) {
    votes = inputVotes;
    updatePopupData();
  }
}
function increaseVotes() {
  votes++;
  document.getElementById('popupVotes').value = votes;
  updatePopupData();
}

function decreaseVotes() {
  if (votes > 0) {
    votes--;
    document.getElementById('popupVotes').value = votes;
    updatePopupData();
  }

}

// Attach an event listener to the popupVotes input to update data on input change
document.getElementById('popupVotes').addEventListener('input', updatePopupVotes);


const closePopupDetails = document.querySelector(".close-popup");
closePopupDetails.addEventListener("click", function(){
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
})

  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paymentOption = document.querySelector('input[name="payment"]:checked');

    if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your email.');
        return false;
    }
    if (number.value < 10) {
        alert('Please a vlaid number');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    // If all validations pass, the form can be submitted
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
