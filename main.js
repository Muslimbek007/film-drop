    var arrayKino = [
        {
          "1id": 1,
          "tname": "Tinch Okean Daxshatlari",
          "1youtubeId": "Id here",
          "1title": "title here",
          "1Gendre": "Sciens Fiction",
        },
      ]
      var arrayKino1 = [
        {
          "2id": 1,
          "Sname": "Sonic the Hedgehog 2",
          "2youtubeId": "Id here",
          "2title": "title here",
          "2Gendre": "Sciens Fiction",
        },
      ]
    var arrayKino2 = [
      {
        "3id": 1,
        "qname": "Halo",
        "3youtubeId": "Id here",
        "3title": "title here",
        "3Gendre": "Sciens Fiction",
      },
    ]
    var arrayKino3 = [
      {
        "4id": 1,
        "wname": "Message Trailer",
        "4youtubeId": "Id here",
        "4title": "title here",
        "4Gendre": "Sciens Fiction",
      },
    ]
    var arrayKino4 = [
      {
        "5id": 1,
        "ename": "Operation Fortune Ruse de guerre",
        "5youtubeId": "Id here",
        "5title": "title here",
        "5Gendre": "Sciens Fiction",
      },
    ]
    var arrayKino5 = [
      {
        "6id": 1,
        "rname": "The Batman",
        "6youtubeId": "Id here",
        "6title": "title here",
        "6Gendre": "Sciens Fiction",
      },
    ]   
    var arrayKino6 = [
      {
        "6id": 1,
        "yname": "Trailer [OV]",
        "6youtubeId": "Id here",
        "6title": "title here",
        "6Gendre": "Sciens Fiction",
      },
    ]

    var arrayKino7 = [
      {
        "6id": 1,
        "uname": "Teaser Trailer",
        "6youtubeId": "Id here",
        "6title": "title here",
        "6Gendre": "Sciens Fiction",
      },
    ]
      var arrayKino8 = [
        {
          "7id": 1,
          "iname": "Reacher",
          "7youtubeId": "Id here",
          "7title": "title here",
          "7Gendre": "Sciens Fiction",
        },
      ]
     var arrayKino9 = [
      {
        "8id": 1,
        "oname": "Teaser Trailer",
        "8youtubeId": "Id here",
        "8title": "title here",
        "8Gendre": "Sciens Fiction",
      },
     ]
      var arrayKino10 = [
        {
          "9id": 1,
          "pname": "Pushpa Official Trailer",
          "9youtubeId": "Id here",
          "9title": "title here",
          "9Gendre": "Sciens Fiction",
        },
      ]
    var arrayKino11 = [
      {
        "10id": 1,
        "aname": "House of the Dragon",
        "syoutubeId": "Id here",
        "10title": "title here",
        "10Gendre": "Sciens Fiction",
      },
    ]
    var arrayKino12 = [
      {
        "11id": 1,
        "dname": "Jurassic World: Dominion",
        "11youtubeId": "Id here",
        "11title": "title here",
        "11Gendre": "Sciens Fiction",
      },
    ]
     var arrayKino13 = [
      {
        "12id": 1,
        "fname": "Official Trailer",
        "12youtubeId": "Id here",
        "12title": "title here",
        "12Gendre": "Sciens Fiction",
      },
     ]
       var arrayKino14 = [
        {
          "13id": 1,
          "gname": "American Underdog",
          "13youtubeId": "Id here",
          "13title": "title here",
          "13Gendre": "Sciens Fiction",
        },
       ]
       var arrayKino15 = [
        {
          "14id": 1,
          "hname": "Official Trailer",
          "14youtubeId": "Id here",
          "14title": "title here",
          "14Gendre": "Sciens Fiction",
        },
       ]
       var arrayKino16 = [
        {
          "15id": 1,
          "jname": "Garry Poter",
          "15youtubeId": "Id here",
          "15title": "title here",
          "15Gendre": "Sciens Fiction",
        },
       ]
      var arrayKino17 = [
        {
          "16id": 1,
          "kname": "",
          "16youtubeId": "Id here",
          "16title": "title here",
          "16Gendre": "Sciens Fiction",
        },
      ]
     var arrayKino18 = [
      {
        "17id": 1,
        "lname": "40 Qaroqchi",
        "17youtubeId": "Id here",
        "17title": "title here",
        "17Gendre": "Sciens Fiction",
      },
     ]
       var arrayKino19 = [
        {
          "18id": 1,
          "zname": "",
          "18youtubeId": "Id here",
          "18title": "title here",
          "18Gendre": "Sciens Fiction",
        },
       ]
     
// first array
       var elp = document.querySelector('.content-info1');
       var poklenght = arrayKino.length;
       let text = " ";
       for (let i= 0; i < arrayKino.length; i++){
         text += arrayKino[i].tname;
       }
       text += " ";
       
       document.querySelector(".content-info1").innerHTML = text;

// second array
       var elp1 = document.querySelector('.content-info2');
       var poklenght = arrayKino1.length;
       let text1 = " ";
       for (let i= 0; i < arrayKino1.length; i++){
         text1 += arrayKino1[i].Sname;
       }
       text1 += " ";
       
       document.querySelector(".content-info2").innerHTML = text1;

// third array
       var elp2 = document.querySelector('.content-info3');
       var poklenght = arrayKino2.length;
       let text2 = " ";
       for (let i= 0; i < arrayKino2.length; i++){
         text2 += arrayKino2[i].qname;
       }
       text2 += " ";
       
       document.querySelector(".content-info3").innerHTML = text2;

// // 4 array
       var elp3 = document.querySelector('.content-info4');
       var poklenght = arrayKino1.length;
       let text3 = " ";
       for (let i= 0; i < arrayKino3.length; i++){
         text3 += arrayKino3[i].wname;
       }
       text3 += " ";
       
       document.querySelector(".content-info4").innerHTML = text3;

// // 5 array
       var elp4 = document.querySelector('.content-info5');
       var poklenght = arrayKino4.length;
       let text4 = " ";
       for (let i= 0; i < arrayKino4.length; i++){
         text4 += arrayKino4[i].ename;
       }
       text4 += " ";
       
       document.querySelector(".content-info5").innerHTML = text4;

// // 6 array
       var elp5 = document.querySelector('.content-info6');
       var poklenght = arrayKino5.length;
       let text5 = " ";
       for (let i= 0; i < arrayKino5.length; i++){
         text5 += arrayKino5[i].rname;
       }
       text5 += " ";
       
       document.querySelector(".content-info6").innerHTML = text5;

// // 7 array
       var elp6 = document.querySelector('.content-info7');
       var poklenght = arrayKino6.length;
       let text6 = " ";
       for (let i= 0; i < arrayKino6.length; i++){
         text6 += arrayKino6[i].yname;
       }
       text6 += " ";
       
       document.querySelector(".content-info7").innerHTML = text6;

// // 8 array
       var elp7 = document.querySelector('.content-info8');
       var poklenght = arrayKino1.length;
       let text7 = " ";
       for (let i= 0; i < arrayKino7.length; i++){
         text7 += arrayKino7[i].uname;
       }
       text7 += " ";
       
       document.querySelector(".content-info8").innerHTML = text7;

// // 9 array
       var elp8 = document.querySelector('.content-info9');
       var poklenght = arrayKino1.length;
       let text8 = " ";
       for (let i= 0; i < arrayKino8.length; i++){
         text8 += arrayKino8[i].iname;
       }
       text8 += " ";
       
       document.querySelector(".content-info9").innerHTML = text8;

// // 10 array
       var elp9 = document.querySelector('.content-info10');
       var poklenght = arrayKino1.length;
       let text9 = " ";
       for (let i= 0; i < arrayKino9.length; i++){
         text9 += arrayKino9[i].oname;
       }
       text9 += " ";
       
       document.querySelector(".content-info10").innerHTML = text9;

// //11 array
       var elp10 = document.querySelector('.content-info11');
       var poklenght = arrayKino1.length;
       let text10 = " ";
       for (let i= 0; i < arrayKino10.length; i++){
         text10 += arrayKino10[i].pname;
       }
       text10 += " ";
       
       document.querySelector(".content-info11").innerHTML = text10;


// // 12 array
       var elp11 = document.querySelector('.content-info12');
       var poklenght = arrayKino1.length;
       let text11 = " ";
       for (let i= 0; i < arrayKino11.length; i++){
         text11 += arrayKino11[i].aname;
       }
       text11 += " ";
       
       document.querySelector(".content-info12").innerHTML = text11;

// //13 array
       var elp12 = document.querySelector('.content-info13');
       var poklenght = arrayKino12.length;
       let text12 = " ";
       for (let i= 0; i < arrayKino12.length; i++){
         text12 += arrayKino12[i].dname;
       }
       text12 += " ";
       document.querySelector(".content-info13").innerHTML = text12;
//  // 14 array      
//        var elp1 = document.querySelector('.content-info14');
//        var poklenght = arrayKino1.length;
//        let text1 = " ";
//        for (let i= 0; i < arrayKino1.length; i++){
//          text1 += arrayKino1[i].Sname;
//        }
//        text1 += " ";
       
//        document.querySelector(".content-info14").innerHTML = text1;

// // 15 array
//        var elp1 = document.querySelector('.content-info15');
//        var poklenght = arrayKino1.length;
//        let text1 = " ";
//        for (let i= 0; i < arrayKino1.length; i++){
//          text1 += arrayKino1[i].Sname;
//        }
//        text1 += " ";
//        document.querySelector(".content-info15").innerHTML = text1;


// //16array
//        var elp1 = document.querySelector('.content-info16');
//        var poklenght = arrayKino1.length;
//        let text1 = " ";
//        for (let i= 0; i < arrayKino1.length; i++){
//          text1 += arrayKino1[i].Sname;
//        }
//        text1 += " ";
       
//        document.querySelector(".content-info16").innerHTML = text1;

// // 17 array
//        var elp1 = document.querySelector('.content-info17');
//        var poklenght = arrayKino1.length;
//        let text1 = " ";
//        for (let i= 0; i < arrayKino1.length; i++){
//          text1 += arrayKino1[i].Sname;
//        }
//        text1 += " ";
       
//        document.querySelector(".content-info17").innerHTML = text1;

// // 18 array
//     var elp1 = document.querySelector('.content-info18');
//     var poklenght = arrayKino1.length;
//     let text1 = " ";
//     for (let i= 0; i < arrayKino1.length; i++){
//       text1 += arrayKino1[i].Sname;
//     }
//     text1 += " ";
    
//     document.querySelector(".content-info18").innerHTML = text1;

 

