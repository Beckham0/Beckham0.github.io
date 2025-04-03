function createNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="z-index: 999;">
    <div class="container-fluid scope_manu" style="--bs-gutter-x: 0rem; display: flex; align-items: center; justify-content: space-between;">
      <a class="navbar-brand" href="./index.html">
        <img src="Source/IMG_04511.png" width="100" height="74">
      </a>
      <a class="navbar-brand2 d-block d-lg-none" href="https://line.me/ti/p/VFOvK3sOYz" style="width: 150px; background-color: #d2a347; height: 40px; border-radius: 50px; margin-right: auto; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: 600; color: #fff;">
        ติดต่อเรา
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon">MENU</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="lang_Home" class="nav-link a" href="./index.html">หน้าเเรก</a>
          </li>
          <li class="nav-item">
            <a id="lang_About" class="nav-link b" href="./Our_about.html">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              บริการเรา
            </a>
            <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9;">
              <li><a id="lang_item1" class="dropdown-item c1" href="รับทำบัญชี ปิดงบ ยืนภาษี.html">รับทำบัญชี ปิดงบ ยืนภาษี</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="บริการสอบบัญชี.html">บริการสอบบัญชี</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="รับวางระบบบัญชีเเละตรวจสอบภายใน.html">รับวางระบบบัญชีเเละตรวจสอบภายใน</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="บริการงานทะเบียน.html">บริการงานทะเบียน</a></li>
              <li><a id="lang_item5" class="dropdown-item c5" href="บริการขอใบอนุญาติสถานที่เก็บอาหาร.html">บริการขอใบอนุญาติสถานที่เก็บอาหาร</a></li>
              <li><a id="lang_item7" class="dropdown-item c7" href="บริการขอใบอนุญาตินำเข้า-ส่งออก.html">บริการขอใบอนุญาตินำเข้า-ส่งออก</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a id="lang_Work" class="nav-link d" href="./our_work.html">ผลงานเรา</a>
          </li>
          <li class="nav-item">
            <a id="lang_News" class="nav-link e" href="./info.html">ข่าวสาร</a>
          </li>
          <li class="nav-item">
            <a id="lang_Contant" class="nav-link f" href="./contact_us.html">ติดต่อเรา</a>
          </li>
        </ul>
      </div>
      <a class="navbar-brand2 d-none d-lg-block" href="https://line.me/ti/p/VFOvK3sOYz" style="width: 250px; background-color: #d2a347; height: 50px; border-radius: 50px; margin: 0 30px; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: 600; color: #fff;">
        ติดต่อเรา
      </a>
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
    <style>

        .footer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
            background-color: #222;
            margin-left: 100px;
        }

        .footer-column {
            flex: 1;
            min-width: 200px;
            padding: 10px;
            text-align: left;
        }

        h3 {
            color: #f4b400;
            margin: 0;
            font-size: 35px;
            margin-bottom: 5px;
            font-weight: bold;
        }

        h4 {
            color: #ffffff;
            margin: 0;
            font-size: 20px;
            margin-bottom: 5px;
            font-weight: bold;
        }

        a {
          font-size: 19px;
          color: #ffffff;
          margin: 0;
          font-weight: bold;
        }

                a {
    text-decoration: none;
}

        p {
          font-size: 19px;
          color: #ffffff;
          margin: 0;
        }

        .logo {
          width: 200px;
  margin-bottom: 10px;
  margin-left: 50px;
        }

        .contact img {
          width: 139px;
          margin-right: 10px;
        }

        .qr-code {
            width: 80px;
            height: 139px;
        }

        /* สำหรับหน้าจอแคบลงเป็นแนวตั้ง */
        @media (max-width: 768px) {
            .footer {
                flex-direction: column;
                align-items: center;
                margin-left: 0;
            }

            .footer-column {
                width: 100%;
                text-align: center;
            }
        }

        /* สำหรับหน้าจอมือถือแบ่งเป็น 2 แถว 2 คอลัมน์ */
        @media (max-width: 480px) {
            .footer {
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: center;
                margin-left: 0;
            }

            .footer-column {
                width: 45%;
                text-align: left;
            }

  .logo {
    width: 155px;
    margin-bottom: 10px;
    margin-left: -6px;
  }

p {
  font-size: 15px;
  color: #ffffff;
  margin:
0;
}
        }
    </style>

  <footer class="footer">
      <!-- คอลัมน์แรก : โลโก้และข้อมูลบริษัท -->
      <div class="footer-column">
          <img src="Source/IMG_04511.ico" alt="โลโก้บริษัท" class="logo">
          <h4>บริษัท เอ็นอาร์พี มายแอคเคาท์ จำกัด</h4>
          <p style="font-size: 12px;">115/8 หมู่บ้านพฤกษา รังสิต-วงแหวน หมู่2 ต.ลำผักกูด อ.ธัญบุรี ปทุมธานี 12110</p>
          <h4>บริษัท เอ็นอาร์พี คอร์เพอเรท จำกัด</h4>
          <p style="font-size: 12px;">379/8 หมู่ที่ 3 ต.หนองขาม อ.ศรีราชา จ.ชลบุรี</p>
          <h4>บริษัท เอ็นอาร์พี การบัญชีเเละภาษี จำกัด</h4>
          <p style="font-size: 12px;">298/7 หมู่ที่ 12 ต.ไร่น้อย อ.เมืองอุบลราชธานี จ.อุบลราชธานี</p>
          <p>โทร: 061-9241629</p>
          <p>อีเมล: nrp.acc48@gmail.com</p>
      </div>
  
      <!-- คอลัมน์สอง : เมนู -->
      <div class="footer-column">
          <h3>เมนู</h3>
          <a href="./index.html"><p>หน้าเเรก</p></a>
          <a href="./Our_about.html"><p>เกี่ยวกับเรา</p></a>
          <a href="./info.html"><p><p>ข่าวสาร</p></p></a>
          <a href="./contact_us.html"><p>ติดต่อเรา</p></a>
      </div>
  
      <!-- คอลัมน์สาม : บริการของเรา -->
      <div class="footer-column">
          <h3>บริการเรา</h3>
          <a href="./รับทำบัญชี ปิดงบ ยืนภาษี.html"><p>● รับทำบัญชี ปิดงบ ยื่นภาษี</p></a>
          <a href="./บริการสอบบัญชี.html"><p>● บริการสอบบัญชี</p></a>
          <a href="./รับวางระบบบัญชีเเละตรวจสอบภายใน.html"><p>● รับวางระบบบัญชีเเละตรวจสอบภายใน</p></a>
          <a href="./บริการงานทะเบียน.html"><p>● บริการงานทะเบียน</p></a>
          <a href="./บริการขอใบอนุญาติสถานที่เก็บอาหาร.html"><p>● บริการขอใบอนุญาติสถานที่เก็บอาหาร</p></a>
          <a href="./บริการขอใบอนุญาตินำเข้า-ส่งออก.html"><p>● บริการขอใบอนุญาตินำเข้า-ส่งออก</p></a>
      </div>
  
      <!-- คอลัมน์สี่ : ข้อมูลการติดต่อ -->
      <div class="footer-column contact">
          <h3>ติดต่อเรา</h3>
          <p style="margin: 0;">โทร: 061-9241629</p>
          <p>Line ID: nrp_myacc</p>
          <img class="qr-code" src="Source/Qr.jpg" alt="QR Code">
          <a href="https://www.facebook.com/people/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%B5-%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%AD%E0%B8%84%E0%B9%80%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B9%8C-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/100070207682246/?rdid=DkqLQSuGREsL0orp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19tFBpR9mQ%2F"><img src="Source/facebook1.png" alt="Facebook" style="border-radius: 20px;padding: 10px;"></a>
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
 
