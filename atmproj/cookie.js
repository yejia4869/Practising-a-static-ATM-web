function setCookie(cname, subName, value){
	/*为了简化，没有写path、dominan、expires等*/
	/*如果cname存在则在原来位置修改，如不在则创建*/

	var subCookies = this.getAllCookie(cname) || {};
	subCookies[subName] = value;

	this.setAllCookie(cname, subCookies);
}

function setAllCookie(cname, subcookies){
	var cookieText = cname + "=",
		subcookieParts = new Array(),
		subName;

	for(subName in subcookies){
		if(subName.length>0 && subcookies.hasOwnProperty(subName)){
			subcookieParts.push(subName + "=" + subcookies[subName]);
		}
	}

	if(subcookieParts.length>0){
		cookieText += subcookieParts.join("&");

	}

	document.cookie = cookieText;

}


function getCookie(cname, subName){
	var subCookies = this.getAllCookie(cname);
	if(subCookies){
		return subCookies[subName];
	}else{
		return null;
	}
}

//取出所有子cookie
function getAllCookie(cname){
	var cookieName= cname + "=",
		cookieStart = document.cookie.indexOf(cookieName),
		cookieEnd,
		cookieValue = null,
		subCookies,
		i,
		parts,
		results = {};

	if(cookieStart > -1){
		cookieEnd = document.cookie.indexOf(";", cookieStart);
		if(cookieEnd == -1){
			cookieEnd = document.cookie.length;
		}
		cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);

		if(cookieValue.length > 0){
			subCookies = cookieValue.split("&");

			for(i=0;i<subCookies.length;i++){
				parts = subCookies[i].split("=");
				results[parts[0]] = parts[1];

			}
			return results;
		}
	}

	
	return null;
}



