// const BASE_URL = 'http://localhost/Application-Dashboarding/'

// class Alert{
//     constructor(){

//     }
//     confirm(callback){
//         Swal.fire({
//             title: 'Confirmation',
//             text: "Voulez-vous vraiment poursuivre ?",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#be123c',
//             cancelButtonColor: '#202124',
//             confirmButtonText: 'OUI',
//             cancelButtonText: 'NON'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 callback();
//             }
//         })
//     }
// }

// function loadImage(file,callback){
// 	let fr = new FileReader();
// 	fr.readAsDataURL(file);
// 	fr.onloadend = function (e) {
// 		base64 = fr.result;
//         callback(base64);
// 	};
// }
// function getExtension(filename){
//     let splited = filename.split(".");
//     let lastIndex = splited.length - 1;
//     return "." + splited[lastIndex];
// }

// function combineForm(form_1, form_2) {
//     for (var pair of form_2.entries()) {
//         form_1.append(pair[0], pair[1]);
//     }
//     return form_1;
// }

// function base_url(uri = '') {
//     return BASE_URL + uri;
// } 

// function scrollTobottom(elem) {
//     const dom = document.querySelector(elem);
//     dom.scrollTop = dom.scrollHeight;
// }
