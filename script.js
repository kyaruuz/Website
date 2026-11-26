
// SAFE/GUARD - Additional JavaScript Features

document.addEventListener("DOMContentLoaded", function () {

    // 1. Add Search Function to Tables
    const tables = document.querySelectorAll("table");

    tables.forEach(function (table) {

        const search = document.createElement("input");
        search.type = "text";
        search.placeholder = "Search in this table...";
        search.style.width = "100%";
        search.style.padding = "12px";
        search.style.marginBottom = "15px";
        search.style.border = "1px solid #ccc";
        search.style.borderRadius = "8px";
        search.style.boxSizing = "border-box";

        table.parentElement.insertBefore(search, table);

        search.addEventListener("input", function () {

            const searchValue = search.value.toLowerCase();
            const rows = table.querySelectorAll("tbody tr");

            rows.forEach(function (row) {
                const rowText = row.textContent.toLowerCase();

                if (rowText.includes(searchValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });

        });

    });


    // 2. Create Back-to-Top Button
    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.title = "Back to Top";

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "45px";
    topButton.style.height = "45px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#2563eb";
    topButton.style.color = "white";
    topButton.style.fontSize = "24px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.zIndex = "999";

    document.body.appendChild(topButton);


    // Show button when scrolling down
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });


    // Scroll smoothly to the top
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 3. Display Welcome Message in Console
    console.log("Welcome to SAFE/GUARD!");
    console.log("Safe Internet Browsing and Malware Prevention");

});
