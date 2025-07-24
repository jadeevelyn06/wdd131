let participantCount = 1;

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const submitButton = document.getElementById("submitButton");
  const form = document.querySelector("form");

  addButton.addEventListener("click", addParticipant);
  form.addEventListener("submit", handleSubmit);
});

function addParticipant() {
  participantCount++;

  const newSection = document.createElement("section");
  newSection.classList.add(`participant${participantCount}`);
  newSection.innerHTML = `
    <p>Participant ${participantCount}</p>
    <div class="item">
      <label for="fname${participantCount}"> First Name<span>*</span></label>
      <input id="fname${participantCount}" type="text" name="fname${participantCount}" required>
    </div>
    <div class="item activities">
      <label for="activity${participantCount}">Activity #<span>*</span></label>
      <input id="activity${participantCount}" type="text" name="activity${participantCount}">
    </div>
    <div class="item">
      <label for="fee${participantCount}">Fee ($)<span>*</span></label>
      <input id="fee${participantCount}" type="number" name="fee${participantCount}">
    </div>
    <div class="item">
      <label for="date${participantCount}">Desired Date <span>*</span></label>
      <input id="date${participantCount}" type="date" name="date${participantCount}">
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
        <option selected disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  `;

  const fieldset = document.querySelector(".participants");
  const addButton = document.getElementById("add");
  fieldset.insertBefore(newSection, addButton);
}

function handleSubmit(event) {
  event.preventDefault();

  let totalFees = 0;
  for (let i = 1; i <= participantCount; i++) {
    const feeInput = document.getElementById(`fee${i}`) || document.getElementById("fee");
    if (feeInput && feeInput.value) {
      totalFees += parseFloat(feeInput.value);
    }
  }

  const adultName = document.getElementById("adult_name").value;
  const summary = document.getElementById("summary");

  document.querySelector("form").style.display = "none";

  summary.innerHTML = `
    <h2>Thank you, ${adultName}, for registering.</h2>
    <p>You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in fees.</p>
  `;
  summary.style.display = "block";
}
