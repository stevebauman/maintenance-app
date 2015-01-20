var current_uploader = new plupload.Uploader({
    filters: {
        mime_types : [
          { title : "Choose files", extensions : $('#upload-form').data('upload-ext') }
        ],
        max_file_size: "200mb",
        prevent_duplicates: true
    },
    runtimes:"html5, html4",
    browse_button:"current-browse-button",
    container:"current-container",
    url:$('#upload-form').data('upload-url'),
    headers:{"Accept":"application\/json"},
    chunk_size:"500kb",

    init: {
            PostInit: function(){
                    $('#current-start-upload').on('click', function(){
                            current_uploader.start();
                            return false;
                    });
            },
            FilesAdded: function(up, files){
                    plupload.each(files, function(file) {
                            $('#added-list').append(
                                    '<tr id="'+file.id+'">'+
                                            '<td>'+file.name+'</td>'+
                                            '<td>'+plupload.formatSize(file.size)+'</td>'+
                                            "<td><div class='progress progress-striped active'>"+
                                                "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>"+
                                                "</div>"+
                                            "</div></td>"+
                                            '<td><a href="#" class="remove btn btn-danger btn-xs">Remove</a></td>'+
                                    '</tr>'
                            );

                            $('#' + file.id + ' a.remove').first().on('click', function() {
                                    current_uploader.removeFile(file);
                                    $('#' + file.id).hide();
                                    return false;
                            });
                    });
            }
    }
});
        
current_uploader.init();

current_uploader.bind('FileUploaded', function(up, file, object) {
    var response;
    
    try {
        response = eval(object.response);
    } catch(err) {
        response = eval('(' + object.response + ')');
    }
    
    $('#uploaded-list').append(response.result.html);
    $('#'+file.id).hide();
    
});

current_uploader.bind('UploadProgress', function(up, file) {
    $('#'+file.id).find('.progress-bar').css('width',file.percent+'%');
});

$(document).on('click', '.delete-file-uploaded', function(e){
    e.preventDefault();
    
    var tr = $(this).parents().eq(1);
    var file_path = $(this).data('file-path');
    var file_folder = $(this).data('file-folder');
    var file_delete_url = $(this).data('file-delete-url');

    $.ajax({
        "type": "POST",
        "url": file_delete_url,
        "data": { file_path: file_path, file_folder: file_folder },
        "dataType": "json"
    }).done(function(result)
    {
        if(typeof result.message !== 'undefined')
        {
            showStatusMessage(result.message, result.messageType);

            if(result.messageType === 'success')
            {
                tr.remove();
            }
        }
        else if(typeof result.errorMessages !== 'undefined')
        {
            showRegisterFormAjaxErrors(result.errorMessages);
        }
    });

});