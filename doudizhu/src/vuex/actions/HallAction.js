import {axGet} from'../../common/HttpBean'

export function getRoomList(form){
 axGet('/api/hall/getRoomList',{},function(res){
	alert(res.data);
	},function(err){
		alert(err);
});
}