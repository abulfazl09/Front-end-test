const questions = [
     "HTML چیست و چه کاربردی دارد؟",
     "css مخفف چیست؟",
     "جاوا اسکریپت چه کاربردی دارد؟",
     "چند المان html در جاوا اسکریپت به وسیله کلاس چگونه انتخاب میشوند؟",
     "زبان جاوا اسکریپت در کجا کاربرد دارد؟",
     "رویداد onfocus چه زمانی رخ میدهد؟",
     "رویداد onmouseleave چه زمانی رخ میدهد؟",
     "ویژگی display چه کاری انجام میدهد؟",
     "ویژگی position چه کاری انجام میدهد؟",
     "ویژگی color چه کاری انجام میدهد؟",
];

const answers = [
  [
    { yes: true, ans: "زبان نشانه گذاری برای طراحی صفحات وب" },
    { yes: false, ans: "زبان برنامه نویسی تحت وب" },
    { yes: false, ans: "زبان نشانه گذاری برای موبایل" },
    { yes: false, ans: "زبان نشانه گزاری برای طراحی صفحات وب" },
  ],
  [
    { yes: false, ans: "Code style sheet" },
    { yes: false, ans: "Create style sheet" },
    { yes: true, ans: "Cascading style sheet" },
    { yes: false, ans: "هیچکدام" },
  ],
  [
    { yes: false, ans: "ساخت بازی" },
    { yes: false, ans: "آنالیز داده ها" },
    { yes: false, ans: "ساخت محتوی وب" },
    { yes: true, ans: "ساخت برنامه های تعاملی مرورگر" },
  ],
  [
    { yes: true, ans: "getElementsByClassName" },
    { yes: false, ans: "getElementById" },
    { yes: false, ans: "getElementsByTagName" },
    { yes: false, ans: "querySelectorAll" },
  ],
  [
    { yes: false, ans: "در سمت کاربر" },
    { yes: false, ans: "در سمت سرور" },
    { yes: false, ans: "آپ موبایلی" },
    { yes: true, ans: "همه موارد" },
  ],
  [
    { yes: false, ans: "زمانی که کلیک انجام میدهیم" },
    { yes: true, ans: "زمانی که وارد یک input میشویم" },
    { yes: false, ans: "زمانی که از input خارج میشویم" },
    { yes: false, ans: "هیچکدام" },
  ],
  [
    { yes: false, ans: "زمانی که ماوس درون المان حرکت کند" },
    { yes: false, ans: "زمانی ماوس وارد المان میشود" },
    { yes: true, ans: "زمانی که ماوس از روی المان خارج شود" },
    { yes: false, ans: "هیچکدام" },
  ],
  [
    { yes: false, ans: "موقعیت المان ها" },
    { yes: true, ans: "نوع نمایش المان ها" },
    { yes: false, ans: "جهت متن" },
    { yes: false, ans: "پس زمینه" },
  ],
  [
    { yes: false, ans: "جهت چینش المان ها" },
    { yes: false, ans: "پس زمینه" },
    { yes: false, ans: "شناور کردن المان" },
    { yes: true, ans: "موقعیت المان" },
  ],
  [
    { yes: true, ans: "رنگ متن" },
    { yes: false, ans: "رنگ زمینه" },
    { yes: false, ans: "رنگ متن و زمینه" },
    { yes: false, ans: "هیچکدام" },
  ],
];

let statusAns = [];

let andis = 0;

quees.innerHTML = questions[0]
for(var i =0;i< 4;i++){
    radio[i].value=answers[0][i].yes
    radio[i].innerHTML=answers[0][i].ans
}

