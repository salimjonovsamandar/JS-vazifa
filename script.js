//1-misol
// let a = +prompt("Birinchi son");
// let b = +prompt("ikkinchi son");

// if (a > b) {
//   console.log(a ** 2);
// } else {
//   console.log(b ** 2);
// }

//2-misol
// let x = +prompt("Birinchi son");
// let y = +prompt("ikkinchi son");
// let z = +prompt("uchinchi son");

// console.log(Math.max(x, y, z));

//2-yo'li
// let x = +prompt("Birinchi son");
// let y = +prompt("ikkinchi son");
// let z = +prompt("uchinchi son");

// let max = x;
// if (max < y) {
//   max = y;
// }
// if (max < z) {
//   max = z;
// }
// console.log(max);

//3-misol
// let a = prompt("Sonni kiriting");

// if (a % 2 == 0) {
//   console.log("Juft son");
// } else {
//   console.log("Toq son");
// }

// 4-misol
// let a = prompt("Sonni kiriting");

// if (a % 5 == 0) {
//   console.log("Bu son beshga karrali");
// } else {
//   console.log("Bu son beshga karrali emas");
// }

// 5-misol
// let a = +prompt("Sonni kiriting");
// son = Math.trunc(a / 10);
// console.log(son);

// 6-misol
// let a = +prompt("Sonni kiriting");
// son = a % 10;
// console.log(son);

// 7-misol
// let a = +prompt("Sonni kiriting");
// onlar = Math.trunc(a / 10);
// birlar = a % 10;

// if (onlar > birlar) {
//   console.log("Rost");
// } else {
//   console.log("Yolg'on");
// }

// 8-misol
// let a = +prompt("Sonni kiriting");
// son = a % 10;

// if (son % 2 == 0) {
//   console.log("Rost");
// } else {
//   console.log("Yolg'on");
// }

// 9-misol
// let a = +prompt("Sonni kiriting");
// son = Math.trunc(a / 100);
// console.log(son);

// 10-misol
// let a = +prompt("Sonni kiriting");
// let max;
// let b = a % 10; // 7
// let o = ((a % 100) - b) / 10; // 3
// let y = (a / 100) - (a % 100) / 100; // 5

// if (b > o) {
//      max = b;
// } else {
//      max = o;
// }

// if (max < y) {
//      max = y;
// }

/////////////////////////////////////////////////////2 dars vazifa/////////////////////////////////////////////////////
// 1-misol
// let a = 57;
// let b = 67;

// let max;
// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }
// sum = max / 10 - (max % 10) / 10;
// console.log(sum);

//2-misol
// let a = 798;
// let min;
// let b = a % 10;
// let o = ((a % 100) - b) / 10;
// let y = (a / 100) - (a % 100) / 100;

// if (b < o) {
//      min = b;
// } else {
//      min = o;
// }

// if (min > y) {
//      min = y;
// }
// console.log(min);

//3-misol
// let a = 798;
// let res;
// let b = a % 10;
// let x = ((a % 100) - b) / 10;

// if (x % 3 == 0) {
//   res = "Rost";
// } else {
//   res = "yolg'on";
// }
// console.log(res);

//4-misol
// let x = 5;
// let y = 7;
// let z = 9;

// if (x < y) {
//   min = x;
// } else {
//   min = y;
// }
// if (min > z) {
//   min = z;
// }
// console.log(min ** 3);

//5-misol
// let x = 5;
// let y = 6;
// let z = 9;
// let t = 2;

// if (x < y) {
//   max = y;
// }else {
//   max = x;
// if (max < z) {
//   max = z;
// }
// if (max < t) {
//   max = t;
// }
// console.log(max);

//6-misol
// let x = 5;
// let y = 8;
// let z = 9;

// if (x < y) {
//   max = y;
// } else {
//   max = x;
// }
// if (max < z) {
//   max = z;
// }

// if (x < y) {
//   min = x;
// } else {
//   min = y;
// }
// if (min > z) {
//   min = z;
// }

// let sum = x + y + z;
// let res = sum - max - min;
// console.log(res);

//7-misol
// let x = 5;
// let y = 54;
// let z = 15;

// if (x < y) {
//   max = y;
// } else {
//   max = x;
// }
// if (max < z) {
//   max = z;
// }

// if (x < y) {
//   min = x;
// } else {
//   min = y;
// }
// if (min > z) {
//   min = z;
// }

// let sum = x + y + z;
// let res = sum - max - min;
// let answer = max + res;
// console.log(answer);

//8-misol
// let x = 5;
// let y = 45;
// let z = 15;
// res = 0;

// if (x % 3 == 0) {
//   res++;
// }
// if (y % 3 == 0) {
//   res++;
// }
// if (z % 3 == 0) {
//   res++;
// }
// console.log(res);

//9-misol
// let x = 5;
// let y = 43;
// let z = 15;
// res3 = 0;
// res = 0;

// if (x % 3 == 0) {
//   res3++;
// }
// if (y % 3 == 0) {
//   res3++;
// }
// if (z % 3 == 0) {
//   res3++;
// }

// if (x % 5 == 0) {
//   res++;
// }
// if (y % 5 == 0) {
//   res++;
// }
// if (z % 5 == 0) {
//   res++;
// }
// console.log(res3);
// console.log(res);

//10-misol
// let x = 5;
// let y = 45;
// let z = 15;

// if (x < y) {
//   max = y;
// } else {
//   max = x;
// }
// if (max < z) {
//   max = z;
// }

// if (x < y) {
//   min = x;
// } else {
//   min = y;
// }
// if (min > z) {
//   min = z;
// }

//11-misol
// let sum = x + y + z;
// let res = sum - max - min;
// let answer = max + res + min;
// console.log(answer);

//12-misol
// let x = 10;
// let y = -4;
// let z = 12;
// let rec = 0;
// let count = 0;
// if (x > 0) {
//   count++;
//   rec += x;
// }
// if (y > 0) {
//   count++;
//   rec += y;
// }
// if (z > 0) {
//   count++;
//   rec += z;
// }
// let sum = rec / count;

// console.log(sum);

////////////////////////////////////////////////4 vazifa////////////////////////////////////////////////

//1-misol
// let n = +prompt("safar uchun to'plangan summani kiriting");
// let doller = 750 * 1100.34;
// let evro = 120 * 12354.03;
// let sum = doller + evro;
// if (n > sum) {
//   console.log("oq yo'l, Alisher!");
// } else {
//   console.log("Alisher,ozigina sabir qilish kerak bolar ekan");
// }

////////////////////////////////////////////////5 vazifa////////////////////////////////////////////////

//1-misol  1dan n gacha bo'lgan barcha toq sonlar yiģindisini toping
// let n = +prompt("Sonni kiriting");
// let sum = 0;
// for (var i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log(sum);

//2-misol  n dan 1 gacha bo'lgan barcha 3 ga karrali sonlar ko'paytmasini  toping.
// let n = +prompt("Sonni kiriting");
// let sum = 1;
// for (var i = 1; i <= n; i++) {
//   if (i % 3 == 0) {
//     sum *= i;
//   }
// }
// console.log(sum);

//3-misol  a dan b gacha barcha 3 ga karrali sonlarning sonini toping.
// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 0;
// for (var i = a; i <= b; i++) {
//   if (i % 3 == 0) {
//     sum++;
//   }
// }
// console.log(sum);

//4-misol  a dan b gacha barcha 5 ga hamda 7 ga  karrali sonlar yig'indisini toping.
// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 0;
// for (var i = a; i <= b; i++) {
//   if (i % 5 == 0 && i % 7 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//5-misol  a dan b gacha barcha toq sonlar kvadratlarining yig‘indisini toping.
// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 0;
// for (var i = a; i <= b; i++) {
//   if (i % 2 == 1) {
//     sum +  = i ** 2;
//   }
// }
// console.log(sum);

//6-misol  b dan a gacha barcha juft sonlar kublarining ko‘paytmasini toping.
// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 1;
// for (var i = a; i <= b; i++) {
//   if (i % 2 == 0) {
//     sum *= i ** 3;
//   }
// }
// console.log(sum);

//7-misol  Ixtiyoriy sonning bo'luvchilarini ekranga chiqaruvchi algoritm tuzing.
// let n = +prompt("Sonni kiriting");
// for (var i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

//8-misol  Ixtiyoriy sonning bo'luvchilari sonini  ekranga chiqaruvchi algoritm yozing.
// let n = +prompt("Sonni kiriting");
// counter = 0
// for (var i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     counter ++
//   }
// }
// console.log(counter)

//9-misol  Ixtiyoriy sonning tub yoki tub emasligini aniqlovchi algoritmni yozing
// let n = +prompt("Sonni kiriting");
// let counter = 0
// let result;
// for (var i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     counter++;
//   }
// }
// if (counter == 2) {
//   result = "Bu son tub";
// } else {
//   result = "Bu son tub emas";
// }
// console.log(result);

//10-misol Sizga ikki natural son berilgan. Sizning vazifangiz shu sonlar orasidagi 3 ga bo'linadigan ammo 7 ga bo'linmaydigan sonlar yeg'indisini topish?

// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 0;
// for (var i = a; i <= b; i++) {
//   if (i % 3 == 0 && i % 7 != 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//11-misol Doskaga 1 dan n gacha sonlari yozib chiqdi. Ulardan  faqat 3, 5, 7 ga karralilari qolib qolganlari o'chirib tashlandi. o'sha qolgan sonlari yig'indisini toping
// let a = +prompt("A Sonni kiriting");
// let b = +prompt("B Sonni kiriting");
// let sum = 0;
// for (var i = a; i <= b; i++) {
//   if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//12-misol Tomonlari soni N bo'lgan qovariq ko'p burchakning ichki burchaklari yig'indisini toping
// let n = +prompt("Sonni kiriting");
// let sum = 180 * (n - 2);
// console.log(sum);

//13-misol Sizga selsiy shkalasi bo'yicha harorat beriladi.Uning Kelvin va Farangeyit  shkalasi bo'yicha haroratini topuvchi dastur tuzing.
// let t = +prompt("Temperaturani kiriting");
// let kelvin = t + 273.15;
// let Farangeyit = t * 1.8 + 32.0;
// console.log(`Kelvindagi qiymati ${kelvin}`);
// console.log(`Farangeyit qiymati ${Farangeyit.toFixed(5)}`);

//14-misol Kunlardan bir kuni Rohatoy bir ketma-ketlikni ko'rib qoldi  u quyidagicha: 1³+2³+3³+.....+N³ U ketma-ketlikni qiziqarli deb ataymiz qachonki uning bòluvchilar soni toq bo'lsa. Berilgan N uchun ketma-ketlik qiziqarli yoki yòqligini aniqlang
// let n = +prompt("Sonni kiriting");
// counter = 0;
// let sum = ((n * (n + 1)) / 2) ** 2;
// for (var i = 1; i <= sum; i++) {
//   if (sum % i == 0) {
//     counter++;
//   }
//   if (counter % 2 != 0) {
//     res = "Qiziqarli";
//   } else {
//     res = "qiziqarli emas";
//   }
// }
// console.log(res);
