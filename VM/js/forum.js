function toggleContent(postId) {
    var content = document.getElementById(postId);
    content.classList.toggle("collapsed");
    if(content.classList.contains("collapsed")) {
        document.getElementById("button-" + postId).innerHTML = "Read more";
    } else {
        document.getElementById("button-" + postId).innerHTML = "Read less";
    }
}

function toggleSidebar() {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("collapsed");
    if(sidebar.classList.contains("collapsed")) {
        document.getElementsByClassName("toggle-sidebar")[0].innerHTML = "<<";
        sidebar.getElementsByTagName("ul")[0].classList.add("collapsed");
    } else {
        document.getElementsByClassName("toggle-sidebar")[0].innerHTML = ">>";
        sidebar.getElementsByTagName("ul")[0].classList.remove("collapsed");
    }
}