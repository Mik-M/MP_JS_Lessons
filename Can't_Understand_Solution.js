// var i = 0; 
// var n = 0;
// while (i < 5) {
//   i++;
//   if (i == 3) {
//     continue;
//   }
//   n += i;
// }
// console.log(n);



// checkiandj: while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkj: while (j > 4) {
//       console.log(j);
//       j -= 1;
//       if (j % 2 != 0) {
//         continue checkj;
//       }
//       console.log(j + " чётное.");
//     }
//     console.log("i = " + i);
//     console.log("j = " + j);
//   }



let browser = "HI";   //Чому не працює?????????
if (browser === "Edge"){
    console.log("You've got the Edge!");
} else if (browser === "Chrome"||"Firefox"||"Safari"||"Opera"){
    console.log('Okay, we support this browser too');
} else {
    console.log('We hope this page looks ok!')
}


var services = {    //як тут прописати return, щоб додавав, а не склеював?
	haircut: "60",
	shaving: "80",
	hair_wash: "100",

    get price(){
        return 'The total of the servises provided is ' + parseInt(this.haircut) + parseInt(this.shaving) + parseInt(this.hair_wash) + '.'
    }
};

console.log(services.price);



const services = {   //як тут прописати return, щоб додавав, а не склеював?
    haircut: 60,
	shaving: 80,
	hair_wash: 100,

    get price(){
        return 'The total of the servises provided is ' + this.haircut + this.shaving + this.hair_wash + '.'
    }
};

console.log(services.price)