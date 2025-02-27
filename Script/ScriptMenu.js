function createNavbar() {
    const navbarHTML = `
    
  <nav class="navbar navbar-expand-lg bg-body-tertiary"style="z-index: 999; ">
    <div class="container-fluid scope_manu" style="--bs-gutter-x: 0.5rem;">
      <a class="navbar-brand" href="./index.html"> <img src="Source/IMG_04511.png" width="130" height="94"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a id="lang_Home" class="nav-link a"  href="./index.html">หน้าเเรก</a>
          </li>
          <li class="nav-item">
            <a id="lang_About" class="nav-link b" href="./Our_about.html">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              บริการเรา
            </a>
            <ul class="dropdown-menu" style="background: #caa31d; opacity:0.9;">
              <li><a id="lang_item1" class="dropdown-item" href="รับทำบัญชี ปิดงบ ยืนภาษี.html">รับทำบัญชี ปิดงบ ยืนภาษี</a></li>
              <li><a id="lang_item2" class="dropdown-item" href="บริการสอบบัญชี.html">บริการสอบบัญชี</a></li>
              <li><a id="lang_item3" class="dropdown-item" href="รับวางระบบภาษี.html">รับวางระบบภาษี</a></li>
              <li><a id="lang_item4" class="dropdown-item" href="บริการงานทะเบียน.html">บริการงานทะเบียน</a></li>
              <li><a id="lang_item5" class="dropdown-item" href="บริการขอใบอนุญาติสถานที่เก็บอาหาร.html">บริการขอใบอนุญาติสถานที่เก็บอาหาร</a></li>
              <li><a id="lang_item6" class="dropdown-item" href="บริการงานจดทะเบียนบริษัท.html">บริการงานจดทะเบียนบริษัท</a></li>
              <li><a id="lang_item7" class="dropdown-item" href="บริการขอใบอนุญาตินำเข้า-ส่งออก.html">บริการขอใบอนุญาตินำเข้า-ส่งออก</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a id="lang_Work" class="nav-link d" href="./our_work.html">ผลงานเรา</a>
          </li>
          <li class="nav-item">
            <a  id="lang_News" class="nav-link e" href="./info.html" >ข่าวสาร</a>
          </li>
          <li class="nav-item">
            <a id="lang_Contant" class="nav-link f" href="./contact_us.html" >ติดต่อเรา</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const navbar = document.querySelector('.navbar'); // เลือก element navbar
    new bootstrap.Collapse(navbar, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }

 
function createfooter() {
  const footerHTML = `
<footer style="border-top: 11px double #fff1bc94;" class = "FooterHTML">
    <div class="footer-container footer_background">
      <div class="footer-left">
        <div class="footer-left-1 footer_img"><img src="Source/IMG_04511.png" alt="NRP Logo" class="logo"></div>
        <div class="footer-left-1"><p  id="footer_1" class="company-name">บริษัท เอ็นอาร์พี มายแอคเคาท์ จำกัด</p>
        <p id="footer_2" class="address">
          115/8 หมู่บ้านพฤกษา รังสิต-วงแหวน หมู่2 ตำบลลำผักกูด อำเภอธัญบุรี ปทุมธานี</p>
          <p id="footer_2_1" class="address">
           โทร 062-896-4535 อีเมล: info@nrpmyaccount.com</p>
         
        </div>
      </div>
      <div class="footer-right">
        <div class="s-1">
        <div class="divider"></div>
        <div class="services">
          <ul >
            <a href="#" class=""><li id="footer_3">สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li id="footer_4">เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li id="footer_5">รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li id="footer_6">รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li id="footer_7">ระบบงบการเงิน</li></a>
          </ul>
        </div></div>
        <div class="s-1">
        <div class="divider"></div>
        <div class="services">
          <ul>
            <a href="#" class=""><li id="footer_8">สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li id="footer_9">เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li id="footer_10">รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li id="footer_11">รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li id="footer_12">ระบบงบการเงิน</li></a>
          </ul>
        </div></div>
      </div>
    </div>
  </footer>
  `;
  document.getElementById("footerHTML1").innerHTML = footerHTML;

  // Initialize Bootstrap JavaScript (สำคัญมาก)
  const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
  new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
    toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
  });
}