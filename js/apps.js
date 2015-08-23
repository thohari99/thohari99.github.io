$(function(){
	for (i=0; i<data.length; i++){
		$(".list-iklan").prepend("<div class='col-md-4 col-sm-6 col-xs-12'><a target='_blank' href='"+data[i].link+"'><div class='box "+data[i].warna+"'><h4 class='text text-center'>"+data[i].judul+"</h4></div><p>"+data[i].deskripsi+"</p></a></div>");
	}
})

is_edit = location.search.match(/edit/gi)
if (is_edit){
	location.href = ubah_data
}
