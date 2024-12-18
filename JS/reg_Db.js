// Function to toggle the side navigation
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle sidebar visibility
    function toggleNav() {
        var sidebar = document.getElementById("mySidenav");
        sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
    }

    // Function to hide sidebar when clicking outside of it
    document.addEventListener('click', function(e) {
        var sidebar = document.getElementById("mySidenav");
        var openbtn = document.querySelector('.openbtn');
        if (!sidebar.contains(e.target) && e.target !== openbtn) {
            sidebar.style.width = "0";
        }
    });
    
    // Function to show content based on sidebar link click (dummy function for example)
    function showContent(contentId) {
        console.log("Showing content for ID: " + contentId);
        // Replace with actual logic to show content based on ID
    }
});

// Function to show different content sections
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function showDefaultContent() {
    const defaultContent = document.querySelector('.default-content');
    defaultContent.style.display = 'block';
}

// ApexCharts setup
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        chart: {
            type: 'bar',
            height: 150,
            width: '100%'
        },
        series: [{
            name: 'Beds',
            data: [70, 15, 30, 40]
        }],
        xaxis: {
            categories: ['Total Beds', 'ICU Beds', 'FW Beds', 'MW Beds']
        },
        colors: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Bed Occupancy',
            align: 'center'
        }
    };

    const chart = new ApexCharts(document.querySelector("#totalBedsChartCard"), options);
    chart.render();

    const chart2 = new ApexCharts(document.querySelector("#icuBedsChartCard"), options);
    chart2.render();

    const chart3 = new ApexCharts(document.querySelector("#fwBedsChartCard"), options);
    chart3.render();

    const chart4 = new ApexCharts(document.querySelector("#mwBedsChartCard"), options);
    chart4.render();
});
