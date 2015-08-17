data = [
{
	link: "https://facebook.com",
	gambar: "img/1.jpg",
	judul: "Facebook",
	deskripsi: "Dengan Facebook, Anda bisa menghubungkan relasi Anda yang sudah terpisah jauh."
},
{
	link: "https://twitter.com",
	gambar: "img/2.jpg",
	judul: "Twitter",
	deskripsi: "Cukup dengan @, kamu bisa berkomunikasi dengan siapa saja."
},
{
	link: "https://facebook.com",
	gambar: "img/3.jpg",
	judul: "Facebook",
	deskripsi: "Dengan Facebook, Anda bisa menghubungkan relasi Anda yang sudah terpisah jauh."
},
{
	link: "https://twitter.com",
	gambar: "img/4.jpg",
	judul: "Twitter",
	deskripsi: "Cukup dengan @, kamu bisa berkomunikasi dengan siapa saja."
},
{
	link: "https://facebook.com",
	gambar: "img/5.jpg",
	judul: "Facebook",
	deskripsi: "Dengan Facebook, Anda bisa menghubungkan relasi Anda yang sudah terpisah jauh."
},
{
	link: "https://twitter.com",
	gambar: "img/6.jpg",
	judul: "Twitter",
	deskripsi: "Cukup dengan @, kamu bisa berkomunikasi dengan siapa saja."
},
{
	link: "https://facebook.com",
	gambar: "img/7.jpg",
	judul: "Facebook",
	deskripsi: "Dengan Facebook, Anda bisa menghubungkan relasi Anda yang sudah terpisah jauh."
},
{
	link: "https://twitter.com",
	gambar: "img/8.jpg",
	judul: "Twitter",
	deskripsi: "Cukup dengan @, kamu bisa berkomunikasi dengan siapa saja."
},
]

for (i=0; i<data.length; i++){
	$(".row.list-iklan").prepend("<a href='"+data[i].link+"'><div class='iklan'><div class='gambar'><img src='"+data[i].gambar+"'></div><div class='tulisan'><h1>"+data[i].judul+"</h1><p>"+data[i].deskripsi+"</p></div></div><hr></a>");
}
