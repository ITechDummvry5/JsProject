let userInput = document.getElementById("date");

// Prevents selecting a future date (max = today)
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    // Extract birth day, month, year
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // +1 because months in JS start from 0
    let y1 = birthDate.getFullYear();

    // Extract today's day, month, year
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3; // Will hold final results (age)

    // Year difference (start with rough difference)
    y3 = y2 - y1;

    // Month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;                // Borrow 1 year
        m3 = 12 + m2 - m1;   // Convert to positive month difference
    }

    // Day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Borrow 1 month
        // Days in previous month (important for Feb, leap years, etc.)
        let daysInPrevMonth = new Date(y2, m2 - 1, 0).getDate();
        d3 = daysInPrevMonth + d2 - d1;
    }

    // Adjust if month becomes negative after borrowing
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Show result
    document.getElementById("result").textContent = 
        `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}
