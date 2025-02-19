document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up_down, .img_card, .color_block_r, .color_block_l,#typewriter");
  
    popUps.forEach(popUp => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            popUp.classList.add("show1");
            observer.unobserve(popUp);
          } else {
            popUp.classList.remove("show1"); // Consider removing this if you only want the animation to trigger once on entry
          }
        });
      });
  
      observer.observe(popUp);
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const ta_center_elements = document.querySelectorAll(".test");
    const body_bg_element = document.getElementById("body_bg"); // เลือก element ด้วย id
  
    ta_center_elements.forEach(ta_center_element => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            body_bg_element.classList.add("bg_1"); // เพิ่ม class ให้กับ body_bg
          } else {
            body_bg_element.classList.remove("bg_1"); // ลบ class ออก (ถ้าต้องการ)
          }
        });
      });
  
      observer.observe(ta_center_element);
    });
  });