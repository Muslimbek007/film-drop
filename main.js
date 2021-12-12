    var arrayKino = [
        {
          "1id": 1,
          "tname": "Tinch Okean Daxshatlari",
          "qtitle": "title here",
          "qGendre": "Sciense Fiction",
        },
      ]
      var arrayKino1 = [
        {
          "2id": 1,
          "Sname": "Sonic the Hedgehog",
          "2title": "title here",
          "wGendre": "Fiction",
        },
      ]
    var arrayKino2 = [
      {
        "3id": 1,
        "qname": "Halo",
        "3title": "title here",
        "eGendre": "Comedy",
      },
    ]
    var arrayKino3 = [
      {
        "4id": 1,
        "wname": "Message Trailer",
        "4title": "title here",
        "rGendre": "Thriller",
      },
    ]
    var arrayKino4 = [
      {
        "5id": 1,
        "ename": "Operation Fortune Ruse de guerre",
        "5title": "title here",
        "tGendre": "Documantry",
      },
    ]
    var arrayKino5 = [
      {
        "6id": 1,
        "rname": "The Batman",
        "6title": "title here",
        "yGendre": "Fiction",
      },
    ]   
    var arrayKino6 = [
      {
        "6id": 1,
        "yname": "Trailer [OV]",
        "6title": "title here",
        "uGendre": "Sciens Fiction",
      },
    ]

    var arrayKino7 = [
      {
        "6id": 1,
        "uname": "Teaser Trailer",
        "6title": "title here",
        "iGendre": "Thriller",
      },
    ]
      var arrayKino8 = [
        {
          "7id": 1,
          "iname": "Reacher",
          "7title": "title here",
          "oGendre": "Horrible",
        },
      ]
     var arrayKino9 = [
      {
        "8id": 1,
        "oname": "Teaser Trailer",
        "8title": "title here",
        "pGendre": "Fiction",
      },
     ]
      var arrayKino10 = [
        {
          "9id": 1,
          "pname": "Pushpa Official Trailer",
          "9title": "title here",
          "aGendre": "Documantry",
        },
      ]
    var arrayKino11 = [
      {
        "10id": 1,
        "aname": "House of the Dragon",
        "10title": "title here",
        "sGendre": "Sciens Fiction",
      },
    ]
    var arrayKino12 = [
      {
        "11id": 1,
        "dname": "Jurassic World: Dominion",
        "11title": "title here",
        "dGendre": "Fiction",
      },
    ]
     var arrayKino13 = [
      {
        "12id": 1,
        "fname": "Official Trailer",
        "12title": "title here",
        "fGendre": "Horrible",
      },
     ]
       var arrayKino14 = [
        {
          "13id": 1,
          "gname": "American Underdog",
          "13title": "title here",
          "gGendre": "Thriller",
        },
       ]
       var arrayKino15 = [
        {
          "14id": 1,
          "hname": "Official Trailer",
          "14title": "title here",
          "hGendre": "Comedy",
        },
       ]
       var arrayKino16 = [
        {
          "15id": 1,
          "jname": "Garry Poter",
          "15title": "title here",
          "jGendre": "Horrible",
        },
       ]
      var arrayKino17 = [
        {
          "16id": 1,
          "kname": "",
          "16title": "title here",
          "kGendre": "Thriller",
        },
      ]
     var arrayKino18 = [
      {
        "17id": 1,
        "lname": "40 Qaroqchi",
        "title": "title here",
        "lGendre": "Sciens Fiction",
      },
     ]
       var arrayKino19 = [
        {
          "18id": 1,
          "zname": "",
          "18title": "title here",
          "zGendre": "Fiction",
        },
       ]
     
// first array
       var elp = document.querySelector('.content-info1');
       var poklenght = arrayKino.length;
       let text = " ";
       for (let i= 0; i < arrayKino.length; i++){
         text += arrayKino[i].tname + "<br>" + arrayKino[i].qGendre;
       }
       text += " ";
       
       document.querySelector(".content-info1").innerHTML = text;

// second array
       var elp1 = document.querySelector('.content-info2');
       var poklenght = arrayKino1.length;
       let text1 = " ";
       for (let i= 0; i < arrayKino1.length; i++){
         text1 += arrayKino1[i].Sname + "<br>" + arrayKino1[i].wGendre;
       }
       text1 += " ";
       
       document.querySelector(".content-info2").innerHTML = text1;

// third array
       var elp2 = document.querySelector('.content-info3');
       var poklenght = arrayKino2.length;
       let text2 = " ";
       for (let i= 0; i < arrayKino2.length; i++){
         text2 += arrayKino2[i].qname + "<br>" + arrayKino2[i].eGendre;
       }
       text2 += " ";
       
       document.querySelector(".content-info3").innerHTML = text2;

// // 4 array
       var elp3 = document.querySelector('.content-info4');
       var poklenght = arrayKino1.length;
       let text3 = " ";
       for (let i= 0; i < arrayKino3.length; i++){
         text3 += arrayKino3[i].wname + "<br>" + arrayKino3[i].rGendre;
       }
       text3 += " ";
       
       document.querySelector(".content-info4").innerHTML = text3;

// // 5 array
       var elp4 = document.querySelector('.content-info5');
       var poklenght = arrayKino4.length;
       let text4 = " ";
       for (let i= 0; i < arrayKino4.length; i++){
         text4 += arrayKino4[i].ename + "<br>" + arrayKino4[i].tGendre;
       }
       text4 += " ";
       
       document.querySelector(".content-info5").innerHTML = text4;

// // 6 array
       var elp5 = document.querySelector('.content-info6');
       var poklenght = arrayKino5.length;
       let text5 = " ";
       for (let i= 0; i < arrayKino5.length; i++){
         text5 += arrayKino5[i].rname + "<br>" + arrayKino5[i].yGendre;
       }
       text5 += " ";
       
       document.querySelector(".content-info6").innerHTML = text5;

// // 7 array
       var elp6 = document.querySelector('.content-info7');
       var poklenght = arrayKino6.length;
       let text6 = " ";
       for (let i= 0; i < arrayKino6.length; i++){
         text6 += arrayKino6[i].yname + "<br>" + arrayKino6[i].uGendre;
       }
       text6 += " ";
       
       document.querySelector(".content-info7").innerHTML = text6;

// // 8 array
       var elp7 = document.querySelector('.content-info8');
       var poklenght = arrayKino1.length;
       let text7 = " ";
       for (let i= 0; i < arrayKino7.length; i++){
         text7 += arrayKino7[i].uname + "<br>" + arrayKino7[i].iGendre;
       }
       text7 += " ";
       
       document.querySelector(".content-info8").innerHTML = text7;

// // 9 array
       var elp8 = document.querySelector('.content-info9');
       var poklenght = arrayKino1.length;
       let text8 = " ";
       for (let i= 0; i < arrayKino8.length; i++){
         text8 += arrayKino8[i].iname + "<br>" + arrayKino8[i].oGendre;
       }
       text8 += " ";
       
       document.querySelector(".content-info9").innerHTML = text8;

// // 10 array
       var elp9 = document.querySelector('.content-info10');
       var poklenght = arrayKino1.length;
       let text9 = " ";
       for (let i= 0; i < arrayKino9.length; i++){
         text9 += arrayKino9[i].oname + "<br>" + arrayKino9[i].pGendre;
       }
       text9 += " ";
       
       document.querySelector(".content-info10").innerHTML = text9;

// //11 array
       var elp10 = document.querySelector('.content-info11');
       var poklenght = arrayKino1.length;
       let text10 = " ";
       for (let i= 0; i < arrayKino10.length; i++){
         text10 += arrayKino10[i].pname + "<br>" + arrayKino10[i].aGendre;
       }
       text10 += " ";
       
       document.querySelector(".content-info11").innerHTML = text10;


// // 12 array
       var elp11 = document.querySelector('.content-info12');
       var poklenght = arrayKino1.length;
       let text11 = " ";
       for (let i= 0; i < arrayKino11.length; i++){
         text11 += arrayKino11[i].aname + "<br>" + arrayKino11[i].sGendre;
       }
       text11 += " ";
       
       document.querySelector(".content-info12").innerHTML = text11;

// //13 array
       var elp12 = document.querySelector('.content-info13');
       var poklenght = arrayKino12.length;
       let text12 = " ";
       for (let i= 0; i < arrayKino12.length; i++){
         text12 += arrayKino12[i].dname + "<br>" + arrayKino12[i].dGendre;
       }
       text12 += " ";
       document.querySelector(".content-info13").innerHTML = text12;
//  // 14 array      
       var elp13 = document.querySelector('.content-info14');
       var poklenght = arrayKino13.length;
       let text13 = " ";
       for (let i= 0; i < arrayKino13.length; i++){
         text13 += arrayKino13[i].fname + "<br>" + arrayKino13[i].fGendre;
       }
       text13 += " ";
       
       document.querySelector(".content-info14").innerHTML = text13;

// // 15 array
       var elp14 = document.querySelector('.content-info15');
       var poklenght = arrayKino1.length;
       let text14 = " ";
       for (let i= 0; i < arrayKino14.length; i++){
         text14 += arrayKino14[i].gname + "<br>" + arrayKino14[i].gGendre;
       }
       text14 += " ";
       document.querySelector(".content-info15").innerHTML = text14;


// //16array
       var elp15 = document.querySelector('.content-info16');
       var poklenght = arrayKino1.length;
       let text15 = " ";
       for (let i= 0; i < arrayKino15.length; i++){
         text15 += arrayKino15[i].hname + "<br>" + arrayKino15[i].hGendre;
       }
       text15 += " ";
       
       document.querySelector(".content-info16").innerHTML = text15;

// // 17 array
       var elp16 = document.querySelector('.content-info17');
       var poklenght = arrayKino1.length;
       let text16 = " ";
       for (let i= 0; i < arrayKino16.length; i++){
         text16 += arrayKino16[i].jname + "<br>" + arrayKino16[i].jGendre;
       }
       text16 += " ";
       
       document.querySelector(".content-info17").innerHTML = text16;

// // 18 array
    var elp18 = document.querySelector('.content-info18');
    var poklenght = arrayKino1.length;
    let text18 = " ";
    for (let i= 0; i < arrayKino18.length; i++){
      text18 += arrayKino18[i].lname + "<br>" + arrayKino17[i].kGendre;
    }
    text18 += " ";
    
    document.querySelector(".content-info18").innerHTML = text18;

 

    var anchor = document.querySelector(".myHref");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=RWXaOIEtrCk";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref1");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=f8WVGOQ81O8";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref2");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=tOqcHI-1yMU";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref3");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=06BE9SiWEwA";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref4");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=W8Sqk1GcqxY";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref5");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=mqqft2x_Aa4";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref6");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=jjICb0S9epc";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref7");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=6WrNoNra_2U";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref8");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=GSycMV-_Csw";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref9");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=YKSNBIlM_bY";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref10");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=pKctjlxbFDQ";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref11");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=fNwwt25mheo";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref12");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=7QOd91vtYaM";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref13");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=55FSKz9ZCB4";
    anchor.setAttributeNode(att);


    var anchor = document.querySelector(".myHref14");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=koqQnyGeKbs";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref15");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=nNpvWBuTfrc";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref16");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=lb5vN4mXmXI";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref17");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=ihursc3A6qQ";
    anchor.setAttributeNode(att);



    var anchor = document.querySelector(".myHref18");
    var att = document.createAttribute("href");
    att.value = "https://www.youtube.com/watch?v=fNwwt25mheo&t=12s";
    anchor.setAttributeNode(att);