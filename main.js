//메뉴바 열고 닫기
function openNav(){
    document.getElementById("open_menu").style.width = "250px"; //메뉴 버튼이 눌릴 시
  }
  function closeNav(){
    document.getElementById("open_menu").style.width = "0";//X버튼이 눌릴 시
  }
  //이벤트 생성
  document.getElementById("menu_button").addEventListener("click", openNav);
  document.getElementById("closebtn").addEventListener("click", closeNav);