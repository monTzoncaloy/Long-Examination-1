function showStep(step) {
    let steps = document.querySelectorAll('.step');
    
    // Hide all steps
    steps.forEach(s => s.style.display = "none");

    // Show only the selected step
    document.getElementById(`step${step}`).style.display = "block";
}
