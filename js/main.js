// 
document.getElementById("Home").style.display = "block";

// 
function changeTab(evt, tabName) {
    let i;
    const tabContent = document.getElementsByClassName("content__right");
    const tabLink = document.getElementsByClassName("tab__link");
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
      }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}