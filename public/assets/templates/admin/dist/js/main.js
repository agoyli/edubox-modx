function update_journal(){
  if ( $('#sub_class').val() != null && $('#class').val() != null && $('#subject').val() != null ) {
		$.ajax({
        url: "/ajax",
        type: "post",
			beforeSend: function() {
				$('.journal .overlay').show();
				$('.journal').show();
			},
        data: 
        {
			"id":"2",
	        "class":$('#class').val(), 
	        "sub_class":$('#sub_class').val(), 
	        "date":$('#date').val(), 
	        "quarter":$('#quarter').val(),
	        "journal":$('#journal').val(), 
	        "subject":$('#subject').val()
		},
        success: 
        function (response) {
	        if (response != false)
	        	{
	            window._data = JSON.parse(response);
	            
	            var month_count = 0;
	            $('#journal_day').html('');
				$('#journal_week').html('');
				$('#journal_month').html('<th class="column100 column1" data-column="column1" rowspan="3">ID</th><th rowspan="3">Ady</th><th rowspan="3">Familiýasy</th><th rowspan="3">Ortaça çärýek</th><th rowspan="3">Çärýek</th><th rowspan="3">Baha sany</th>');	
				$('#journal_evals tbody').html('');
				var last = _data[0]['evals'][0]['date'].split('-')[1];
				for (i=0; i<_data[0]['evals'].length; i++)
				{
					var day = _data[0]['evals'][i]['date'].split('-');
					var month = day[1];
					var year = day[2];
					day = day[0];
					var _month = month;
					if (last != _month) {$('#journal_month').append('<th class="column100 column1" data-column="column1" colspan="'+month_count+'">'+month_tm(last)+'</th>'); month_count = 0; last = _month;}
					month_count++;
					
					$('#journal_day').append('<th class="column100 column1" data-column="column1" >'+Number(day)+'</th>');
					$('#journal_week').append('<th class="column100 column1" data-column="column1" >'+week_tm(_data[0]['evals'][i]['week_global']).substr(0,2)+'</th>');
					//$('#lessons').append('<th id="lesson-id"><p id="title-lesson-id" hidden></p><p id="content-lesson-id" hidden></p><i class="fa fa-bookmark" title="Тема и домашнее задание"></i></th>');
				}
				$('#journal_month').append('<th class="column100 column1" data-column="column1" colspan="'+month_count+'">'+month_tm(last)+'</th>');
				for (i=0; i<_data.length; i++) {
					$("#journal_evals tbody").append('<tr class="row100 head"></tr>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column1" data-column="column1">'+_data[i]['uid']+'</td>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column2" data-column="column2">'+_data[i]['surname']+'</td>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column3" data-column="column3">'+_data[i]['name']+'</td>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column4" data-column="column4">'+_data[i]['quarter']+'</td>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column5" data-column="column5">'+_data[i]['quarter_r']+'</td>');
					$("#journal_evals tbody tr").eq(i).append('<td class="column100 column6" data-column="column6">'+_data[i]['eval_count']+'</td>');
					for (j=0; j<_data[i]['evals'].length; j++)
					{
						var _eval;
						if (_data[i]['evals'][j]['eval'] == undefined) {
							_eval = '‧';
							$("#journal_evals tbody tr").eq(i).append('<td class="journal_eval" onclick="'+"$('.eval_date').html( _data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['date'] ); $('.eval_pupil_fullname').html(_data[$(this).attr('pupil_array_id')]['surname']+' '+_data[$(this).attr('pupil_array_id')]['name']);  $('#eval_subject_id').val($('#subject').val());  $('.eval_subject').html($('#subject option[value='+$('#subject').val()+']').html()); $('#pupil_array_id').val($(this).attr('pupil_array_id')); $('#eval_array_id').val($(this).attr('eval_array_id')); $('#eval_type').val(1);  $('#eval_comment').val('');  $('#eval_comment').attr('disabled', false);  $('#eval_bl').attr('disabled', false);"+'" data-toggle="modal" data-target="#eval_maker" eval_array_id="'+j+'" pupil_array_id="'+i+'" >'+_eval+'</td>');
						} else if (_data[i]['evals'][j]['eval'] == 'BL') {
							_eval = html_eval(_data[i]['evals'][j]['eval']);
							$("#journal_evals tbody tr").eq(i).append('<td class="journal_eval" onclick="'+"$('.eval_date').html( _data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['date'] ); $('.eval_pupil_fullname').html(_data[$(this).attr('pupil_array_id')]['surname']+' '+_data[$(this).attr('pupil_array_id')]['name']);  $('#eval_subject_id').val($('#subject').val());  $('.eval_subject').html($('#subject option[value='+$('#subject').val()+']').html()); $('#pupil_array_id').val($(this).attr('pupil_array_id')); $('#eval_array_id').val($(this).attr('eval_array_id'));  $('#eval_type').val(1);  $('#eval_comment').val('"+_data[i]['evals'][j]['comment']+"');  $('#eval_comment').attr('disabled', true);  $('#eval_bl').attr('disabled', true);"+'" data-toggle="modal" data-target="#eval_maker"  eval_array_id="'+j+'" pupil_array_id="'+i+'">'+_eval+'</td>');
						} else {
							_eval = html_eval(_data[i]['evals'][j]['eval']);
							$("#journal_evals tbody tr").eq(i).append('<td class="journal_eval" onclick="'+"$('.eval_date').html(_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['date']);  $('.eval_pupil_fullname').html(_data[$(this).attr('pupil_array_id')]['surname']+' '+_data[$(this).attr('pupil_array_id')]['name']); $('.eval_subject').html($('#subject option[value='+$('#subject').val()+']').html());  $('#viewed_eval').html(_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['eval']); $('#viewed_eval_teacher').html(_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['teacher_fullname']); $('#viewed_eval_date').html(_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['createdon']); $('#viewed_eval_type').html($('#eval_type option[value='+_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['cause_id']+']').html()); $('#viewed_eval_comment').html(_data[$(this).attr('pupil_array_id')]['evals'][$(this).attr('eval_array_id')]['comment']) "+'" data-toggle="modal" data-target="#eval_viewer"  eval_array_id="'+j+'" pupil_array_id="'+i+'">'+_eval+'</td>');
						}
					}
				}
	            $('#footer_date tr.month').html( $('#header_date tr#month').html() );
	            $('#footer_date tr.day').html( $('#header_date tr#day').html() );
	            $('#footer_date tr.week').html( $('#header_date tr#week').html() );
	            
	            $('.journal .overlay').hide();
	        	} else {
	        		
	        	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
  }
}

function update_eval_report(){
	if ( $('#report_type').val() != undefined && $('#date').val() != undefined ) {
		$.ajax({
			url: "/ajax",
			type: "post",
			beforeSend: function() {
				$('.progress-chart .overlay').show();
				$('.subprogress-chart .overlay').show();
			},
	        data: {
				"id":"21",
				"type":$('#report_type').val(),
				"class":$('#class').val(),
				"sub_class":$('#sub_class').val(),
				"subject_id":$('#subject').val(),
				"date":$('#date').val(),
				"update":$('#update').val()
			},
	        success: function (response) {
				$('.progress-chart .overlay').hide();
				$('.subprogress-chart .overlay').hide();
				if (response == false || response == '') return false;
				$('.progress-chart').show();
				$('.subprogress-chart').show();
	        	window.report = JSON.parse(response);
	        	console.log(report);
	        	if (report[1]['name'] == null) return false;
	        	$('.subprogress-chart .box-body table tbody').html('');
	        	$('.progress-chart .box-body').html('<div class="text-center"><input type="text" class="knob" data-readOnly="true" value="'+Math.round(report[0]['report']['value'])+'" data-width="200" data-height="200" data-fgColor="#00a65a"><div class="knob-label">Jemi</div></div>');
	        	
        		report[0]['bas'] = (0);
        		report[0]['dort'] = (0);
        		report[0]['uc'] = (0);
        		report[0]['iki'] = (0);

	        	for (i=1; i<report.length; i++) {
	        		report[0]['bas'] += Number(report[i]['bas']);
	        		report[0]['dort'] += Number(report[i]['dort']);
	        		report[0]['uc'] += Number(report[i]['uc']);
	        		report[0]['iki'] += Number(report[i]['iki']);
	        	}
	        	$('.subprogress-chart .box-body table tbody').append('<tr><td><b>Jemi</b></td><td align="center">'+Math.round(report[0]['report']['value'])+'%</td><td>'+report[0]['bas']+'</td><td>'+report[0]['dort']+'</td><td>'+report[0]['uc']+'</td><td>'+report[0]['iki']+'</td></tr>');
			    for (i=1; i<report.length; i++){
			    	$('.subprogress-chart .box-body table tbody').append('<tr><td>'+report[i]['name']+'</td><td align="center">'+Math.round(report[i]['value'])+'%</td><td>'+report[i]['bas']+'</td><td>'+report[i]['dort']+'</td><td>'+report[i]['uc']+'</td><td>'+report[i]['iki']+'</td></tr>');
			    }
			    if (report[1]['max'] != undefined) $('#max_count').html(report[1]['max']);
			    if (report[0]['date_begin'] != undefined && report[0]['date_end'] != undefined)
			    	$('.progress-chart #dates').html(report[0]['date_begin'].replace('-','.').replace('-','.')+' - '+report[0]['date_end'].replace('-','.').replace('-','.'));

	        	draw_knob();
	        	$('#update').val(0);
	        },
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	}
}


function update_rel_report(){
	if ( $('#report_type').val() != null && $('#date').val() != null ) {
		$.ajax({
			url: "/ajax",
			type: "post",
			beforeSend: function() {
				$('.progress-chart .overlay').show();
				$('.subprogress-chart .overlay').show();
			},
	        data: {
				"id":"22",
				"type":$('#report_type').val(),
				"class":$('#class').val(),
				"sub_class":$('#sub_class').val(),
				"subject_id":$('#subject').val(),
				"date":$('#date').val(),
				"update":$('#update').val()
			},
	        success: function (response) {
	        	console.log(response+'a');
				$('.progress-chart .overlay').hide();
				$('.subprogress-chart .overlay').hide();
				if (response == false || response == '') return false;
				$('.progress-chart').show();
				$('.subprogress-chart').show();
	        	window.report = JSON.parse(response);
	        	if (report[1]['name'] == null) return false;
	        	$('.subprogress-chart .box-body table tbody').html('');
	        	$('.progress-chart .box-body').html('<div class="text-center"><input type="text" class="knob" data-readOnly="true" value="'+Math.floor(report[0]['report']['value'])+'" data-width="200" data-height="200" data-fgColor="#00a65a"><div class="knob-label">Jemi</div></div>');
				
				report[0]['count'] = 0;
				for (i=1; i<report.length; i++) {
	        		report[0]['count'] += Number(report[i]['count']);
	        	}

	        	$('.subprogress-chart .box-body table tbody').append('<tr><td><b>Jemi</b></td><td>'+Math.round(report[0]['report']['value'])+'%</td><td>'+report[0]['count']+'</td></tr>')
	        	if (report[1]['max_count'] != undefined) $('#max_count').html(report[1]['max_count']);
			    for (i=1; i<report.length; i++){
			    	$('.subprogress-chart .box-body table tbody').append('<tr><td>'+report[i]['name']+'</td><td>'+Math.round(report[i]['value'])+'%</td><td>'+report[i]['count']+'</td></tr>');
			    }

			    if (report[0]['date_begin'] != undefined && report[0]['date_end'] != undefined)
			    	$('.progress-chart #dates').html(report[0]['date_begin'].replace('-','.').replace('-','.')+' - '+report[0]['date_end'].replace('-','.').replace('-','.'));


	        	draw_knob();
	        	$('#update').val(0);
	        },
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	}
}


function get_rel_info(){
	if ($('#subject').val() != null && $('#pupil_id').val() != null && $('#report_type').val() != null && $('#date').val() != null ) {
		$.ajax({
			url: "/ajax",
			type: "post",
	        data: {
				"id":"25",
				"pupil_id":report[$('#pupil_id').val()]['uid'],
				"subject_id":$('#subject').val(),
				"type":$('#report_type').val(),
				"date":$('#date').val()
			},
	        success: function (response) {
	        	response = response.trim();
	        	if (response == '' || response == 'null') window.rel_data = []
	        	else window.rel_data = JSON.parse(response);
	        	$("#rel_count").html(rel_data.length);
	        	$("#pupil_fullname").html(report[$("#pupil_id").val()]['name']);
	        	$("#pupil_class").html($("#class option[value='"+$("#class").val()+"']").html());
	        	$("#pupil_sub_class").html($("#sub_class option[value='"+$("#sub_class").val()+"']").html());
	        	$("#rel_subject").html($("#subject option[value='"+$("#subject").val()+"']").html());
	        	for (i=0; i<rel_data.length; i++){
	        		$('#rel_list').append('<li>'+$("#subject option[value='"+$("#subject").val()+"']").html()+' dersinden '+rel_data[i]['date']+' gününde gelmedi </li>');
	        	}

	        },
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	}
}



function date_filter_holidays(_date){
	return _date;
}

function update_class(){
	$('.control .overlay').show();
	$('#class').html("<option disabled selected value=''>Synp</option>");
	$('#sub_class').html("<option disabled selected value=''>Synp 2</option>");
	$('#subject').html("<option disabled selected value=''>Ders</option>");
	var res = '';
	if (_classes == undefined) return false;
	for (i=0; i<_classes.length; i++)
		res += '<option value="'+_classes[i][0]['class']+'" data-id="'+i+'">'+_classes[i][0]['class']+'</option>';
	$('#class').html($('#class').html()+res);
	$('.control .overlay').hide();
}

function update_sub_class(){
	$('#sub_class').html("<option disabled selected value=''>Synp 2</option>");
	$('#subject').html("<option disabled selected value=''>Ders</option>");
	var res = '';
	if ($('#class').val() == -1 || _classes[$('#class_array_id').val()] == undefined) return false;
	for (i=0; i<_classes[$('#class_array_id').val()].length; i++)
		res += '<option value="'+_classes[$('#class_array_id').val()][i]['sub_class']+'" data-id="'+i+'">'+_classes[$('#class_array_id').val()][i]['sub_class']+'</option>';
	$('#sub_class').html($('#sub_class').html()+res);
}

function update_subject(){
	$('#subject').html("<option disabled selected value=''>Ders</option>");
	var res = '';
	if ($('#sub_class_array_id').val() == -1 || _classes[$('#class_array_id').val()][$('#sub_class_array_id').val()] == undefined) return false;
	for (i=0; i<_classes[$('#class_array_id').val()][$('#sub_class_array_id').val()]['subjects'].length; i++)
	{
		res += '<option value="'+_classes[$('#class_array_id').val()][$('#sub_class_array_id').val()]['subjects'][i]['id']+'">'+_classes[$('#class_array_id').val()][$('#sub_class_array_id').val()]['subjects'][i]['subject']+'</option>';
	}
	$('#subject').html($('#subject').html()+res);
}

function update_causes(){
	$.ajax({
	    url: "/ajax",
        type: "post",
        data: {
                "id":"19"
              },
        success: function (response) {
        	_data = JSON.parse(response);
        	var _res = '';
        	for (i=1; i<Number(Object.keys(_data).length); i++){
        		_res += '<option value="'+i+'">'+_data[i]+'</option>';
        	}
            $("#eval_type").html(_res);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
	});
}

function month_tm(month){
	month = Number(month);
	switch (month) {
		case 1: return 'Ýanwar';
		case 2: return 'Fewral';
		case 3: return 'Mart';
		case 4: return 'Aprel';
		case 5: return 'Maý';
		case 6: return 'Iýun';
		case 7: return 'Iýul';
		case 8: return 'Awgust';
		case 9: return 'Sentýabr';
		case 10: return 'Oktýabr';
		case 11: return 'Noýabr';
		case 12: return 'Dekabr';
		default: return 'Ýanwar';
	}
}

function week_tm(week){
	week = Number(week);
	switch (week) {
		case 1: return 'Duşenbe';
		case 2: return 'Sişenbe';
		case 3: return 'Çarşenbe';
		case 4: return 'Penşenbe';
		case 5: return 'Anna';
		case 6: return 'Şenbe';
		case 7: return 'Ýekşenbe';
		default: return 'Duşenbe';
	}
}

function html_eval(_eval){
	switch(_eval){
		case '2': return '<span class="badge bg-red">2</span>';
		case '3': return '<span class="badge bg-yellow">3</span>';
		case '4': return '<span class="badge bg-blue">4</span>';
		case '5': return '<span class="badge bg-green">5</span>';
		case 'GM': return '<span class="badge bg-default">GM</span>';
		case 'BL': return '<span class="badge bg-default">BL</span>';
	}
}



function change_journal(id){
	console.log(id);
  if (id == '1' || id == '2') {
      $('#quarter').css('display', 'none');
      $('#date').css('display', 'block');
  } else if (id == '3') {
      $('#date').css('display', 'none');
      $('#quarter').css('display', 'block');
  }
} 
function change_report(id){
  if (id == '1' || id == '2' || id == '0') {
      $('#date').attr('type', 'date');
      $('#date').attr('max', '');
      $('#date').attr('min', '');
      $('#date').val(window._date);
  } else if (id == '3') {
      $('#date').attr('type', 'number');
      $('#date').attr('max', '4');
      $('#date').attr('min', '1');
      $('#date').val(1);

  }
} 





function make_eval(evaluation){
  $.ajax({
    url: "/ajax",
        type: "post",
        data: {
                "id":"5", 
                "pupil_id":_data[$('#pupil_array_id').val()]['uid'], 
                "eval":evaluation, 
                "subject_id":$('#eval_subject_id').val(), 
                "cause":$('#eval_type').val(), 
                "week":_data[$('#pupil_array_id').val()]['evals'][$('#eval_array_id').val()]['week'], 
                "hour":_data[$('#pupil_array_id').val()]['evals'][$('#eval_array_id').val()]['hour'],
                "comment":$('#eval_comment').val()
              },
        success: function (response) {
        	console.log(response);
            update_journal();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
  });
}


function update_themes(){
  if ( $('#sub_class').val() != null && $('#class').val() != null && $('#subject').val() != null ) {
	$.ajax({
        url: "/ajax",
        type: "post",
			beforeSend: function() {
				$('.themes .overlay').show();
			},
        data: 
        {
			"id":"10",
	        "class":$('#class').val(), 
	        "sub_class":$('#sub_class').val(), 
	        "date":$('#date').val(), 
	        "quarter":$('#quarter').val(),
	        "themes":$('#themes').val(), 
	        "subject_id":$('#subject').val()
		},
        success: 
        function (response) {
	        if (response != false)
	        	{
		            window._data = JSON.parse(response);
		            $('.themes .box-body').html('<table class="table table-bordered" id="'+$('#class').val()+'_'+$('#sub_class').val()+'_'+_data[0]['subject_title']+'"></table>');
		            $('.themes .box-body .table').append('<thead><tr><td width="50px"></td><td></td><td width="150px"></td><td width="50px"></td></tr></thead>');
		            $('.themes .box-body .table thead tr td').eq(0).html('№');
		            $('.themes .box-body .table thead tr td').eq(1).html('Ady');
		            $('.themes .box-body .table thead tr td').eq(2).html('Sene');
		            $('.themes .box-body .table thead tr td').eq(3).html('Uytgetmek');
		            $('.themes .box-body .table').append('<tbody></tbody>');
		            var _header = $('#class').val() + ' "' + $('#sub_class').val() + '" ' + $('#subject option[value='+$('#subject').val()+']').html();
		            $('.themes .box-header .box-title').html(_header);
		            for (i=0; i<Number(Object.keys(_data).length); i++){
		            	$('.themes .box-body .table tbody').append('<tr><td></td><td></td><td></td><td></td><tr>');
		            	$('.themes .box-body .table tbody td').eq(i*4+0).html(i+1);
		            	$('.themes .box-body .table tbody td').eq(i*4+1).html(_data[i]['title']);
		            	$('.themes .box-body .table tbody td').eq(i*4+2).html(_data[i]['date']);
		            	$('.themes .box-body .table tbody td').eq(i*4+3).html('<ul class="pagination pagination-sm no-margin pull-right"><li><a href="javascript:void(0);" onclick="'+" $('#lesson_array_id').val($(this).attr('lesson_array_id')); update_editor();"+'" lesson_array_id="'+i+'"><i class="fa fa fa-pencil"></i></a></li></ul>');
		            }
		            
		            $('.themes .overlay').hide();
		            $('.themes').show();
		            update_url();
	        	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
  }
}

function get_lesson_editor(){
	var url_string = window.location.href; 
	var url = new URL(url_string);
	var url_week = url.searchParams.get("week");
	var url_hour = url.searchParams.get("hour");
	console.log(url_week+' '+url_hour);
	if (url_week != null && url_hour != null && $('#class').val() != null && $('#sub_class').val() != null && $('#subject').val() != null)
	{
		$.ajax({
	        url: "/ajax",
	        type: "post",
				beforeSend: function() {
					$('.editor').show(); 
					$('.control, .themes').hide();
					$('.themes .overlay').show();
				},
	        data: 
	        {
				"id":"11",
		        "class":$('#class').val(), 
		        "sub_class":$('#sub_class').val(),  
		        "subject_id":$('#subject').val(),
		        "week":url_week,
		        "hour":url_hour
			},
	        success: 
	        function (response) {
	        	if (response != false)
	        	{
	        		console.log(response);
	        		response = JSON.parse(response);

	        		var _date = response.split('-');
	        		console(_date);
	        		$('#date').val(_date[2]+'-'+_date[1]+'-'+_date[0]);
	        		update_themes();
	        	} 
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	            console.log(textStatus, errorThrown);
	        }
	    });	
	}
	update_questions();

}

function save_editor(){
	$.ajax({
	        url: "/ajax",
	        type: "post",
				beforeSend: function() {
					$('.editor .overlay').show();
				},
	        data: 
	        {
				"id":"12",
		        "class":$('#class').val(), 
		        "sub_class":$('#sub_class').val(),  
		        "subject_id":$('#subject').val(),
		        "title":$('.editor form input[name=title]').val(),
		        "content":$('iframe').eq(0).contents().find("body").html(),
		        "home_content":$('iframe').eq(1).contents().find("body").html(),
		        "week":_data[$('#lesson_array_id').val()]['week'],
		        "hour":_data[$('#lesson_array_id').val()]['hour']
			},
	        success: 
	        function (response) {
	        		//$('.editor .box-body').html(response+$('.editor .box-body').html());
	        		$('.editor .overlay').hide();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	            console.log(textStatus, errorThrown);
	        }
	    });
}




function update_editor(){
	if (_data[$('#lesson_array_id').val()]['id'] != undefined){
		$.ajax({
	        url: "/ajax",
	        type: "post",
				beforeSend: function() {
					$('.editor').show(); 
					$('.control, .themes').hide();
					$('.themes .overlay').show();
				},
	        data: 
	        {
				"id":"11",
		        "class":$('#class').val(), 
		        "sub_class":$('#sub_class').val(),  
		        "subject_id":$('#subject').val(),
		        "week":_data[$('#lesson_array_id').val()]['week'],
		        "hour":_data[$('#lesson_array_id').val()]['hour']
			},
	        success: 
	        function (response) {
		        	if (response != false)
		        	{
			            var _editor = JSON.parse(response);
			            $('._textarea').html('<textarea name="content" class="textarea" placeholder="Temanyň tekstini şu ýere ýazyň..." autofocus style="width: 100%; height: 400px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea><textarea name="home_content" class="textarea2" placeholder="Öý işiň tekstini şu ýere ýazyň..." autofocus style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>');
			            $('.editor .box-title').html($('#class').val()+' "'+$('#sub_class').val()+'" '+$('#subject option[value='+$('#subject').val()+']').html()+' '+_data[$('#lesson_array_id').val()]['date']);
			            if (_editor['title'] != undefined) $('.editor form input[name=title]').val(_editor['title']); else $('.editor form input[name=title]').val(''); 
			            if (_editor['content'] != undefined) $('.editor form textarea[name=content]').html(_editor['content']); else $('.editor form textarea[name=content]').html();
			            if (_editor['home_content'] != undefined) $('.editor form textarea[name=home_content]').html(_editor['home_content']); else $('.editor form textarea[name=home_content]').html();
		        		
						$('.textarea').wysihtml5();
						$('.textarea2').wysihtml5();
		        	} 
		        	update_url();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	            console.log(textStatus, errorThrown);
	        }
	    });	
	} else {
		$('._textarea').html('<textarea name="content" class="textarea" placeholder="Temanyň tekstini şu ýere ýazyň..." autofocus style="width: 100%; height: 400px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea><textarea name="home_content" class="textarea2" placeholder="Öý işiň tekstini şu ýere ýazyň..." autofocus style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>');
        $('.editor .box-title').html($('#class').val()+' "'+$('#sub_class').val()+'" '+$('#subject option[value='+$('#subject').val()+']').html()+' '+_data[$('#lesson_array_id').val()]['date']);
        $('.editor form input[name=title]').val(''); 
        $('.editor form textarea[name=content]').html();
        $('.editor form textarea[name=home_content]').html();
		
		$('.textarea').wysihtml5();
		$('.textarea2').wysihtml5();
	}
	update_questions();
}






		

function update_pupil_subject(){
	$('#subject').html("<option disabled selected value=''></option>");
	var res = '';	
	for (i=0; i<window._classes['subject'].length; i++)
	{
		res += '<option value="'+window._classes['subject'][i]['id']+'">'+window._classes['subject'][i]['subject']+'</option>';
	}
	$('#subject').html($('#subject').html()+res);
}

function update_pupil_themes (){
  if ( $('#subject').val() != null ) {
	$.ajax({
        url: "/ajax",
        type: "post",	
			beforeSend: function() {
				$('.themes .overlay').show();
				$('.themes').show();
			},
        data: 
        {
			"id":"14",
	        "date":$('#date').val(), 
	        "quarter":$('#quarter').val(),
	        "themes":$('#themes').val(), 
	        "subject_id":$('#subject').val()
		},
        success: 
        function (response) {
        	console.log(response);
	        	if (response != false)
	        	{
		            window._data = JSON.parse(response);
		            $('.themes .box-body').html('<table class="table table-bordered" id="'+$('#class').val()+'_'+$('#sub_class').val()+'_'+_data[0]['subject_title']+'"></table>');
		            $('.themes .box-body .table').append('<thead><tr><td width="50px"></td><td></td><td width="150px"></td><td width="50px"></td></tr></thead>');
		            $('.themes .box-body .table thead tr td').eq(0).html('№');
		            $('.themes .box-body .table thead tr td').eq(1).html('Ady');
		            $('.themes .box-body .table thead tr td').eq(2).html('Sene');
		            $('.themes .box-body .table thead tr td').eq(3).html('Okamak');
		            $('.themes .box-body .table').append('<tbody></tbody>');
		            var _header = $('#subject option[value='+$('#subject').val()+']').html();
		            $('.themes .box-header .box-title').html(_header);
		            for (i=0; i<Number(Object.keys(_data).length); i++){
		            	$('.themes .box-body .table tbody').append('<tr><td></td><td></td><td></td><td></td><tr>');
		            	$('.themes .box-body .table tbody td').eq(i*4+0).html(i+1);
		            	$('.themes .box-body .table tbody td').eq(i*4+1).html(_data[i]['title']);
		            	$('.themes .box-body .table tbody td').eq(i*4+2).html(_data[i]['date']);
		            	$('.themes .box-body .table tbody td').eq(i*4+3).html('<ul class="pagination pagination-sm no-margin pull-right"><li><a data-id="'+i+'" onclick="'+"$('.control, .themes').hide(); $('.reader').show(); $('#lesson_array_id').val($(this).attr('data-id')); update_reader();"+'"><i class="fa fa fa-bookmark"></i></a></logi></ul>');
		            }
		            
		            $('.themes .overlay').hide();
	        	} else {
	        		
	        	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
  }
}


function update_reader(){
	$.ajax({
        url: "/ajax",
        type: "post",
			beforeSend: function() {
				$('.themes .overlay').show();
			},
        data: 
        {
			"id":"15", 
	        "subject_id":$('#subject').val(),
	        "week":_data[$('#lesson_array_id').val()]['week'],
	        "hour":_data[$('#lesson_array_id').val()]['hour']
		},
        success: 
        function (response) {
	        	if (response != false)
	        	{
		            var _reader = JSON.parse(response);
		            console.log(_reader);
		            if (_reader['title'] != undefined) $('.reader .box-header .title').html(_reader['title'] + ' | ' + $('#subject option[value='+$('#subject').val()+']').html() + ' ' + _reader['date']); else $('.reader .box-header .title').html('Temanyň ady ýok' + ' | ' + $('#subject option[value='+$('#subject').val()+']').html() + ' ' + _reader['date']);
		            if (_reader['content'] != undefined) $('.reader .panel #content .box-body').html(_reader['content']); else $('.reader .panel #content .box-body').html('Temanyň teksti ýok');
		            if (_reader['home_content'] != undefined) $('.reader .panel #home_content .box-body').html(_reader['home_content']); else $('.reader .panel #home_content .box-body').html('Temanyň öý işi ýok');
					update_questions();


	        	} else {
	        		
	        	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}



function update_diary(){
	if ($('#date').val() != null) {
		$.ajax({
			url: '/ajax',
			type: 'post',
			data: {
				'id':'6',
				'date':$('#date').val()
			},
			beforeSend: function() {
				$('.diary .box .overlay').show();
			},
			success:function(response){
	        	if (response != false)
	        	{
	        		window._data = JSON.parse(response);
		            $('.diary').html('');
		            for (i=1; i<=Number(Object.keys(_data).length); i++){
		            	var left = 0;
		            	if (Number(Object.keys(_data).length)/2 >= i) left = 0;
		            	else left = 1;
		            	$('.diary').eq(left).append('<div class="box box-success"><div class="overlay"><i class="fa fa-spinner fa-spin"></i></div><div class="box-header"><h3 class="box-title">'+week_tm(i)+', '+_data[i][1]['subjects']['date']+'</h3></div></div>');
		            	$('.diary .box').eq(i-1).append('<div class="box-body no-padding"><table class="table"><tbody><tr><th style="width: 10px">№</th><th style="width: 110px">Ders</th><th>Tema</th><th style="width: 40px">Baha</th></tr></tbody></table>');
		            	for(j=1; j<8; j++){
		            		if (_data[i][j] == undefined) $('.diary .box .box-body .table tbody').eq(i-1).append('<tr><td>'+j+'.</td><td></td><td></td><td></td></tr>');
		            		else {
		            			var _eval = '';
		            			var _theme = '';
		            			//if (_data[i][j]['subjects']['eval']['eval'] != undefined) _eval = html_eval(_data[i][j]['subjects']['eval']['eval']);
								if (_data[i][j]['subjects']['eval']['eval'] != undefined) {
									_eval = '<td class="journal_eval" onclick="'+"$('.eval_date').html(_data["+i+"][1]['subjects']['date']); $('#viewed_eval').html(_data["+i+"]["+j+"]['subjects']['eval']['eval']);     $('#viewed_eval_teacher').html(_data["+i+"]["+j+"]['subjects']['eval']['teacher_fullname']); $('#viewed_eval_date').html(_data["+i+"]["+j+"]['subjects']['eval']['createdon']); $('#viewed_eval_type').html($('#eval_type option[value='+_data["+i+"]["+j+"]['subjects']['eval']['cause_id']+']').html()); $('#viewed_eval_comment').html(_data["+i+"]["+j+"]['subjects']['eval']['comment']) "+'" data-toggle="modal" data-target="#eval_viewer">'+html_eval(_data[i][j]['subjects']['eval']['eval'])+'</td>';
								} else {
									_eval = '<td></td>';
								}
		            			if (_data[i][j]['subjects']['lesson']['title'] != undefined) _theme = _data[i][j]['subjects']['lesson']['title'];

		            			$('.diary .box .box-body .table tbody').eq(i-1).append('<tr><td>'+j+'.</td><td>'+_data[i][j]['subjects']['subject']+'</td><td>'+_theme+'</td>'+_eval+'</tr>');
		            		}
		            	}
		            }
		            $('.diary .box .overlay').hide();
	        	} else {
	        		console.log('error');
	        	}
			}
		})
	}
}




function update_questions(){
	if ($('#lesson_array_id').val() != null && _data[$('#lesson_array_id').val()]['id'] != undefined)
	{
		$.ajax({
			url: "/ajax",
			type: "post",
			beforeSend: function(){$('.editor .overlay').show();},
			data: {
				"id":"17",
				"lesson_id":_data[$('#lesson_array_id').val()]['id']
			},success: function (response) {
				response = response.trim();
	        	if (response != false && response != 'false' && response != '')
	        	{
					_questions = JSON.parse(response);
					if (_questions[0]['comment'] != undefined){
						$('.questions .box-comments').html('');
						for (i=0; i<_questions.length; i++){
							var _left = 0;
							if (_questions[i]['parent_comment_id'] != 0) _left = 20;
							$('.questions .box-comments').append('<div class="box-comment" style="margin-left:'+_left+'px"><img class="img-circle img-sm" src="/'+_questions[i]['image']+'" alt="User Image"><div class="comment-text"><span class="username">'+_questions[i]['name']+'<span class="text-muted pull-right">'+_questions[i]['date']+'</span></span>'+_questions[i]['comment']+'</div></div>');
						}
					} else $('.questions .box-comments').html('Hiç kim sorag bermändir...');
				} else {
					$('.questions .box-comments').html('Hiç kim sorag bermändir...');
				}
				$('.editor .overlay').hide();
			},error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	} else {
		$('.questions .box-comments').html('Hiç kim sorag bermändir...');
	}
}


function post_question(){

	if ($('#lesson_array_id').val() != null)
	{
		$.ajax({
			url: "/ajax",
			type: "post",
			beforeSend: function(){$('.editor .overlay').show();},
			data: {
				"id":"18",
				"lesson_id":_data[$('#lesson_array_id').val()]['id'],
				"comment":$('.questions input[name=question]').val(),
				"parent_comment_id":"0"
			},success: function (response) {
				console.log(response);
				$('.questions input[name=question]').val('');
				update_questions();
				$('.editor .overlay').hide();
			},error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	}
}

		

function last_week(_date){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'7',
			'date':_date,
			'last':'true'
		},
		success:function(response){
			$('#date').val( response.trim() );
		}
	}).then(function(){
		update_diary();
	});
}
function now_week(){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'7',
			'last':'false'
		},
		success:function(response){
			$('#date').val( response.trim() );
			$('#date').val( '2019-01-14' );
			window._date = $('#date').val();
		}
	}).then(function(){
		update_diary();
	});
}
function next_day(_date){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'8',
			'date':_date
		},
		success:function(response){
			$('#date').val( response.trim() );
		}
	}).then(function(){
		update_journal();
	});
}
function last_day(_date){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'8',
			'date':_date,
			'last':'true'
		},
		success:function(response){
			$('#date').val( response.trim() );
		}
	}).then(function(){
		update_journal();
	});

}
function next_quarter(_quarter){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'9',
			'quarter':_quarter
		},
		success:function(response){
			$('#quarter').val( response.trim() );
		}
	}).then(function(){
		update_journal();
	});

}
function last_quarter(_quarter){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'9',
			'quarter':_quarter,
			'last':'true'
		},
		success:function(response){
			$('#quarter').val( response.trim() );
		}
	}).then(function(){
		update_journal();
	});

}

function next_week(_date){
	$.ajax({
		url: '/ajax',
		type: 'post',
		data: {
			'id':'7',
			'date':_date
		},
		success:function(response){
			$('#date').val( response.trim() );
		}
	}).then(function(){
		update_diary();
	});
}


function update_url(){
	var u = new URL(window.location.href);
	u.searchParams.set('themes', $('#themes option[value='+$('#themes').val()+']').val()); 
	if ($('#subject').val() != null) u.searchParams.set('subject', $('#subject option[value='+$('#subject').val()+']').val()); 
	if ($('#class').val() != null) u.searchParams.set('class', $('#class option[value='+$('#class').val()+']').val()); 
	if ($('#sub_class').val() != null) u.searchParams.set('sub_class', $('#sub_class option[value='+$('#sub_class').val()+']').val()); 

	if ($('#lesson_array_id').val() != "") {
		u.searchParams.set('hour', _data[$('#lesson_array_id').val()]['hour']); 
		u.searchParams.set('week', _data[$('#lesson_array_id').val()]['week']); 
	} else if ( typeof _data != 'undefined'	) {
		u.searchParams.set('hour', _data[0]['hour']);
		u.searchParams.set('week', _data[0]['week']);
	} 
	history.pushState('', '', u);
}


function update_pupils(){
	window._users = [];
	if ($('#class').val() != null || $('#sub_class').val() != null){
		$.ajax({
			url: '/ajax',
			type: 'post',
			data: {
				'id':'23',
				'class':$('#class').val(),
				'sub_class':$('#sub_class').val()
			},
			beforeSend: function(){
				$('#user_list .overlay').show();
			},
			success:function(response){
				window._users = JSON.parse(response);
				$('#user_list .box-body .users-list').html('');
				for (var i=0; i<_users.length; i++)
					$('#user_list .box-body .users-list').append('<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"><img class="profile-user-img img-responsive img-circle" src="/'+_users[i]['image']+'" alt="'+_users[i]['fullname']+'" title="'+_users[i]['fullname']+'"><h5 title="'+_users[i]['fullname']+'" class="text-center"><a href="javascript:void(0);" onclick="$('+"'#user_uid'"+').val($(this).attr('+"'data-id'"+')); $('+"'#user_info'"+').show(); $('+"'.control, #user_list'"+').hide(); update_user_info();" data-id="'+_users[i]['uid']+'">'+_users[i]['surname']+'<br>'+_users[i]['name']+'</a></h5></div>');
				$('#user_count').html(_users.length);
				$('#users_sub_class').html($('#sub_class').val());
				$('#users_class').html($('#class').val());
				$('#user_list .overlay').hide();

				
			}
		});
	}
}

function update_user_info(){
	if ($('#user_uid') != null || $('#user_uid') != '') {
		$.ajax({
			url: '/ajax',
			type: 'post',
			data: {
				'id':'24',
				'user_id':$('#user_uid').val(),
			},
			success:function(response){
				$('#user_info').show();
				window._user_info = JSON.parse(response);	
				$('#user_class').html(_user_info['class']+' '+_user_info['sub_class']);
				$('#user_fullname').html(_user_info['fullname']);
				$('#_user_uid').html(_user_info['uid']);
				$('#user_phone').html(_user_info['phone']);
				$('#user_parents_phone').html(_user_info['parent_phone']);
				$('#user_home_phone').html(_user_info['home_phone']);
				$('#user_address').html(_user_info['address']);
				$('#user_subject').html(_user_info['eval']);
				$('#user_eval').html(_user_info['subject']);
				$('#user_photo').attr('src', '/'+_user_info['image']);
			}
		});
	}
}






(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
})(jQuery);