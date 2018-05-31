/*   说明：
 *   插件文件：service.js
 *   作者：林刚   
 * */
export default {
	install: function(Vue, options) {
		// 添加的内容写在这个函数里面
		Vue.prototype.getUrlParams = function(key) {
			var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
			var result = window.location.search.substr(1).match(reg);
			    return result?decodeURIComponent(result[2]):null;
		}
		// 设置cookie  
		Vue.prototype.setCookie = function(c_name,value,expiremMinutes) {
			var exdate = new Date();  
			    exdate.setTime(exdate.getTime() + expiremMinutes * 60 * 1000);  
			    document.cookie= c_name + "=" + escape(value)+((expiremMinutes==null) ? "" : ";expires="+exdate.toGMTString());  
		}
		// 读取cookie  
		Vue.prototype.getCookie = function(c_name) {
			if (document.cookie.length>0){  
		    var c_start=document.cookie.indexOf(c_name + "=");  
			    if (c_start!=-1)  
			    {   
			    c_start=c_start + c_name.length+1;  
			    var c_end=document.cookie.indexOf(";",c_start);  
			    if (c_end==-1)   
			        c_end = document.cookie.length  
			        return unescape(document.cookie.substring(c_start, c_end))  
			    }  
			}  
			return ""  
		}
		// 删除cookie  
		Vue.prototype.delCookie = function(c_name) {
			var exp = new Date();  
		    exp.setTime(exp.getTime() - 1);  
		    var cval = this.getCookie(c_name);  
		    if(cval!=null){  
		        document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString();  
		    }  
		}
		//  注入组件，插件加载开始前提示
		Vue.mixin({
			created: function() {
				
			},
			methods: {
				test: function() {
					
				}
			}
		})

        Vue.prototype.$service = {
            //电话号码合法性检查
            telNumberCheck: (tel) => {
                var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
                return pattern.test(tel)
            }
        }

	}
};