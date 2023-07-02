let a=document.getElementById("btn1")
a.onmouseenter=()=>{
    setTimeout(()=>{
        a.style.backgroundColor="white"
        a.style.color="black"
    },100)
}
a.onmouseleave=()=>{
    a.style.backgroundColor="transparent"
    a.style.color="white"
}


let b=document.getElementById("menu")
let c=document.getElementById("mn")
let d=document.getElementById("con1")
let e=document.getElementById("vdo")
let f=document.getElementById("img1")
let g=document.getElementById("unord")
let h=document.getElementById("hdrs")
let i=document.getElementById("co2")
let j=document.getElementById("co3")
let k=document.getElementById("co4")
let l=document.getElementById("co5")
let m=document.getElementById("co6")
let n=document.getElementById("co7")
let o=document.getElementById("co7")



b.onclick=()=>{
    d.style.filter="blur(2px)";
    e.style.filter="blur(8px)";
    f.style.filter="blur(8px)";
    g.style.filter="blur(8px)";
    h.style.filter="blur(8px)";
    i.style.filter="blur(8px)";
    j.style.filter="blur(8px)";
    k.style.filter="blur(8px)";
    l.style.filter="blur(8px)";
    m.style.filter="blur(8px)";
    n.style.filter="blur(8px)";
    o.style.filter="blur(8px)";


    let con=document.createElement("div")
    con.setAttribute("class","edt-menu");

    let btn=document.createElement("button")
    btn.setAttribute("class","btnjs");
    btn.innerHTML="X";
    btn.style.fontWeight="bold"
    btn.style.border="none";
    btn.style.fontSize="25px"
    btn.style.marginTop="10px"
    btn.style.marginLeft="280px"


    btn.onclick=()=>{
        con.style.visibility="hidden"
        d.style.filter="blur(0)";
        e.style.filter="blur(0)";
        f.style.filter="blur(0)";
        g.style.filter="blur(0)";
        h.style.filter="blur(0)";
        i.style.filter="blur(0)";
        j.style.filter="blur(0)";
        k.style.filter="blur(0)";
        l.style.filter="blur(0)";
        m.style.filter="blur(0)";
        n.style.filter="blur(0)";
        o.style.filter="blur(0)";
    }

    let ul=document.createElement("ul")
    ul.setAttribute("class","ul1");
    let ihtml=""
    ihtml+=`
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-in</li>
                <li>Demo Drive</li>
                <li>Insurance</li>
                <li>Fleet</li>
                <li>Cybertruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Careers</li>
                <li>Find Us</li>
                <li>Events</li>
                <li>Support</li>
                <li>Investor Relations</li>
    `
    ul.innerHTML=ihtml

    con.append(btn,ul);
    c.append(con);
}


// window.addEventListener("scroll", ()=>{
//     document.getElementById("hd").style.color="black"
// })
// window.addEventListener("scroll", ()=>{
//     document.getElementsByTagName("a")[0].style.color="black"
//     document.getElementsByTagName("a")[1].style.color="black"
//     document.getElementsByTagName("a")[2].style.color="black"
// })

// var firstsec = document.getElementById('f');
// var secondsec = document.getElementById('s');
// document.onscroll = function scroll() {
//   secondsec.scrollIntoView({behavior: "smooth"});
//  }