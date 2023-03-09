$(function() {

    $('.tombolTambahData').on('click', function() {
        $('#FormModalLabel').html('Tambah Data Mahasiswa');
        $(".modal-footer button[type=submit").html("Tambah Data");
    });

    $('.modalUbah').on('click', function(){
        $( "#FormModalLabel" ).html( "Ubah Data Mahasiswa" );
        $(".modal-footer button[type=submit").html("Ubah Data");
        $(".modal-body form").attr('action', 'http://localhost:8080/phpmvc/public/mahasiswa/ubah');

        const id = $(this).data('id');
        
        $.ajax({
            url : 'http://localhost:8080/phpmvc/public/mahasiswa/getubah',
            data : {id : id},
            method : 'post',
            dataType : 'json',
            success : function(data) {
                $('#nama').val(data.nama);
                $('#nim').val(data.nim);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });
    });
});