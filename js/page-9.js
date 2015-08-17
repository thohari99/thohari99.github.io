data = [
{
	link: "https://facebook.com",
	gambar: "http://s4.postimg.org/aeux94nzh/image.jpg",
	judul: "Facebook",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
},
{
	link: "https://twitter.com",
	gambar: "http://s8.postimg.org/bcomgpkmd/image.jpg",
	judul: "Twitter",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
},
{
	link: "http://kaskus.co.id",
	gambar: "http://s4.postimg.org/jf8pksyul/image.jpg",
	judul: "Kaskus",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
},
{
	link: "http://kompasiana.com",
	gambar: "http://s18.postimg.org/mirxhih6h/image.jpg",
	judul: "Kompasiana",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
},
{
	link: "http://japanesestation.com",
	gambar: "http://s22.postimg.org/ede6tfqc1/image.jpg",
	judul: "Japanese Station",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
},
{
	link: "http://infoastronomy.co.vu",
	gambar: "http://s27.postimg.org/mgxgefner/image.jpg",
	judul: "Info Astronomy",
	deskripsi: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}
]

for (i=0; i<data.length; i++){
	$(".row.list-iklan").prepend("<a href='"+data[i].link+"'><div class='iklan'><div class='gambar'><img src='"+data[i].gambar+"'></div><div class='tulisan'><h1>"+data[i].judul+"</h1><p>"+data[i].deskripsi+"</p></div></div><hr></a>");
}
