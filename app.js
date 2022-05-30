let btn_m_1 = document.querySelector(".btn_1")
let btn_m_2 = document.querySelector(".btn_2")
let img = document.querySelector(".mac_reg")
let txt = document.querySelector("#clr_mc")
let btn_prc = document.querySelectorAll("._ssd_btn")
let inf = document.querySelector("#_m_r_b")

let price = 1999

btn_prc.forEach(btn => {
    btn.onclick = () => {
        btn_prc.forEach(btn => {
            btn.classList.remove("act_ssd")
        });
        inf.innerHTML = price + +btn.getAttribute("data-price")
        btn.classList.add("act_ssd")
    }
});
btn_m_1.onclick = () => {
    btn_m_1.classList.add("active")
    btn_m_2.classList.remove("active")
    txt.innerHTML = "White"
    img.setAttribute("src", "img_svg/Macbook_Pro_White.svg")
};
btn_m_2.onclick = () => {
    btn_m_2.classList.add("active")
    btn_m_1.classList.remove("active")
    txt.innerHTML = "Space Grey"
    img.setAttribute("src", "img_svg/Macbook_Pro_Space Gray.svg")
}
// btn_prc.forEach(btn => {
//     btn.onclick = () => {
//         btn_prc.getAttribute("data-price")
//     }
// });
// for (let i of btn_1) {
//     i.onclick = () => {
//         // img.setAttribute("src", "img/01.png")
//         img.src = i.getAttribute("data-info")
//         // if (btn_1.boder == "1px solid grey") {
//             // i.style.border = "1px solid grey"
//         // } else {
//             i.style.border = "3px solid #0071E3"
//         // }
//     }

// }



// for (let i of btn_ssd) {

//     btn_mac.onclick = () => {
//         i.classList.toggle("act_ssd")
//     }

// }

// btn_m.forEach(btn => {
//     btn.onclick = () => {
//         if (img.src.match("img_svg/Macbook_Pro_White.svg")) {
//             // btn.classList.add("active");
//             image.src = "img_svg/Macbook_Pro_Space Gray.svg";
//         } else {
//             // btn.classList.remove("active");
//             image.src = "img_svg/Macbook_Pro_Space Gray.svg";
//         }
//     }
// });

// function mac() {
//     btn_m.onclick = () => {
//         if (img.src.match("img_svg/Macbook_Pro_White.svg")) {
//             image.src = "img_svg/Macbook_Pro_Space Gray.svg";
//         } else {
//             image.src = "img_svg/Macbook_Pro_Space Gray.svg";
//         }
//     }
// }
