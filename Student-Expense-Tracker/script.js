let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;

    if (date === "" || category === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let expense = {
        date: date,
        category: category,
        amount: Number(amount)
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";

    loadExpenses();
}

function loadExpenses() {
    let table = document.getElementById("expenseTable");
    table.innerHTML = "";

    let total = 0;

    expenses.forEach(exp => {
        let row = `<tr>
            <td>${exp.date}</td>
            <td>${exp.category}</td>
            <td>${exp.amount}</td>
        </tr>`;
        table.innerHTML += row;
        total += exp.amount;
    });

    document.getElementById("total").innerText = total;
}

loadExpenses();
