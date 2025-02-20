function createNavbar() {
    const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary"style="z-index: 999;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <img src="Source/IMG_04511.png" width="130" height="94"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a class="nav-link a"  href="./Index.html">หน้าเเรก</a>
          </li>
          <li class="nav-item">
            <a class="nav-link b" href="./Our_about.html">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              บริการเรา
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="รับทำบัญชี ปิดงบ ยืนภาษี.html">รับทำบัญชี ปิดงบ ยืนภาษี</a></li>
              <li><a class="dropdown-item" href="#">บริการสอบบัญชี</a></li>
              <li><a class="dropdown-item" href="#">รับวางระบบภาษี</a></li>
              <li><a class="dropdown-item" href="#">บริการงานทะเบียน</a></li>
              <li><a class="dropdown-item" href="#">บริการขอใบอนุญาติสถานที่เก็บอาหาร</a></li>
              <li><a class="dropdown-item" href="#">บริการงานจดทะเบียนบริษัท</a></li>
              <li><a class="dropdown-item" href="#">บริการขอใบอนุญาตินำเข้า-ส่งออก</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link d" href="./our_work.html">ผลงานเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link e" href="./info.html" >ข่าวสาร</a>
          </li>
          <li class="nav-item">
            <a class="nav-link f" href="./contact_us.html" >ติดต่อเรา</a>
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
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-left-1"><img src="Source/IMG_04511.png" alt="NRP Logo" class="logo"></div>
        <div class="footer-left-1"><p class="company-name">บริษัท เอ็นอาร์พี มายแอคเคาท์ จำกัด</p>
        <p class="address">
          115/8 หมู่บ้านพฤกษา รังสิต-วงแหวน หมู่2 ตำบลลำผักกูด อำเภอธัญบุรี ปทุมธานี<br>
          โทร 062-896-4535 อีเมล: info@nrpmyaccount.com
        </p></div>
      </div>
      <div class="footer-right">
        <div class="s-1">
        <div class="divider"></div>
        <div class="services">
          <ul>
            <a href="#" class=""><li>สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li>เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li>ระบบงบการเงิน</li></a>
          </ul>
        </div></div>
        <div class="s-1">
        <div class="divider"></div>
        <div class="services">
          <ul>
            <a href="#" class=""><li>สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li>เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li>ระบบงบการเงิน</li></a>
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