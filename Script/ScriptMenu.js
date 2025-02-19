function createNavbar() {
    const navbarHTML = `
    <nav class="navbar bg-body-tertiary" style="opacity: 0.9;">
      <div class="container-fluid">
        <a class="navbar-brand" href="Index.html"> <img src="Source/IMG_04511.png" alt="Bootstrap" width="130" height="94"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="./Index.html">หน้าแรก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Our_about.html">เกี่ยวกับเรา</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" >บริการเรา</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ผลงานเรา</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" >ข่าวสาร</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#" >ติดต่อเรา</a>
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