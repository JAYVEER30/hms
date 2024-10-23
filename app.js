$(document).ready(function(){
    // Extract text from paragraphs with class 'info' within each tab
    $(".service-info .info").each(function(){
        console.log($(this).text());
    });

    // Extract text from the tab headers
    $(".nav-tabs .nav-link").each(function(){
        console.log("Tab header: " + $(this).text());
    });

    // Traverse the DOM to find specific elements
    var firstServiceInfo = $("#book-appointment").find(".service-info .info").first().text();
    console.log("First service info text in 'Book Appointment': " + firstServiceInfo);

    var secondTabHeader = $(".nav-tabs .nav-link").eq(1).text();
    console.log("Second tab header text: " + secondTabHeader);
});
