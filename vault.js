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
  "https://images.unsplash.com/photo-1476547362848-ed2a9f99cd29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b4647c9e25267c25866936c916e4aa8&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9403f5d4ac23a5726bfc3c8308b31c01&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a85cb0d68de38ae2aa00d8a9663a320a&auto=format&fit=crop&w=1350&q=80"
];

const image = document.querySelector("image");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length); 
  image.setAttribute("src", array[randomNum]);
}