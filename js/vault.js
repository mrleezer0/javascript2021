const imageArray = [
  "https://cdn.shopify.com/s/files/1/0242/2815/products/electric-guitar-stand-31997977395399_1200x.jpg?v=1635824411",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-52fe60357e04e257__hmac-e57701b2ac5ecc42d4917c5a9e856f26b32da44f/images/items/750/GtrStd-large.jpg.auto.webp",
  "https://i.etsystatic.com/15286235/r/il/62a40b/2123009521/il_794xN.2123009521_7m3d.jpg",
  "https://i.etsystatic.com/30283618/r/il/15c47f/3292225395/il_340x270.3292225395_4d7n.jpg",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-e9ead552f2d0aad9__hmac-25fb14c0a0598a3c1fa23598f6548bfc9b3a4145/images/items/750/GS525B-large.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-224f76a33f6ff69a__hmac-34f393f928a1822e99eeb03635d3c4b632325e92/images/items/750/GS523-B-large.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-1b5909b36b5ddcd5__hmac-8921038755df896b8f15e9700036a247e500e242/images/items/750/GtrStdSm-large.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-ea228ac610b39e92__hmac-9d78d6bd28c1b681574b07913e1dfd812d88589d/images/items/750/GtrStdM-large.jpg.auto.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyiTlYklEGFB_lXyqnwFaO3UKiUURlu4n_w&usqp=CAU",
  "https://media.sweetwater.com/api/i/f-webp__b-original__w-215__h-215__bg-ffffff__q-85__ha-9bdc2bd0db8277b8__hmac-31e19e600786e521f38bb5ff6413628a9c97e96b/images/items/350/FloatStand.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__b-original__w-215__h-215__bg-ffffff__q-85__ha-9c6a866f646c9f0f__hmac-3fd40ea6a90b020a54d9d4aee0668daa10d17be3/images/items/350/0991017500.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__b-original__w-215__h-215__bg-ffffff__q-85__ha-2a817e36b96e169c__hmac-4f20d1086d7d8c275dd73ae98e73292368168c42/images/items/350/1401Stand.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__b-new__w-215__h-215__bg-ffffff__q-85__ha-3774db90a91dcfe0__hmac-8c6d4062207eaf9919ad10c3b57ab5089dbfc6cd/images/items/350/HangStdMpl.jpg.auto.webp",
  "https://media.sweetwater.com/api/i/f-webp__q-82__ha-9f4a279f9d17a2f1__hmac-2e84ef51e3a3378d2f12a88672dc73e813dd3019/images/items/750/FGHNGRSMBN-large.jpg.auto.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtkOqOwp0pdQj536bGuz6K-blcTE9FTKy4g&usqp=CAU",
  "https://www.guitarfetish.com/assets/images/thumbnails/L104_thumbnail.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length); 
  image.setAttribute("src", array[randomNum]);
}