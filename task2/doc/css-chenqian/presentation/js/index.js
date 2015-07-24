// define global variables
var currentArticlePage,
	currentSectionPage;

window.onload = function() {
	var themeNavUlLis = document.querySelectorAll(".theme-nav ul li");
	var contentNavUlLis = document.querySelectorAll(".content-nav ul li");
	currentArticlePage = 1;
	currentSectionPage = 1;
	//init add click listeners
	(function() {
		var i, len,
			body = document.querySelector("body");

		// theme-nav 
		len = themeNavUlLis.length;
		for(i = 0; i < len; i++) {
			themeNavUlLis[i].addEventListener("click", function() {
				var nextPage = this.dataset.page,
					localContentNavUlLis = document.querySelectorAll(".a" + currentArticlePage + " nav ul li"),
					articles = document.querySelectorAll("article");
				// reset current article section
				if(localContentNavUlLis.length != 0) {
					localContentNavUlLis[0].click();
				}
				// reset current section page
				currentSectionPage = 1;
				// active btn
				clearActive(themeNavUlLis);
				addClass(this, "active");
				// change page
				if(nextPage == currentArticlePage) {
					return ;
				}else {
					changePages(articles, nextPage, articles.length, currentArticlePage, "move-left", "move-right");
					currentArticlePage = nextPage;
				}
			}, false);
		}

		// content-nav
		len = contentNavUlLis.length;
		for(i = 0; i < len; i++) {
			contentNavUlLis[i].addEventListener("click", function() {
				var nextPage = this.dataset.page,
					localContentNavUlLis = document.querySelectorAll(".a" + currentArticlePage + " nav ul li"),
					sections = document.querySelectorAll(".a" + currentArticlePage + " section");
				// active btn
				clearActive(localContentNavUlLis);
				addClass(this, "active");
				//change page
				if(nextPage == currentSectionPage) {
					return ;
				}else {
					changePages(sections, nextPage, sections.length, currentSectionPage, "move-up", "move-down");
					currentSectionPage = nextPage;
				}
			}, false);
		}

		// add scroll event
		body.addEventListener("mousewheel", function(event) {
			var localContentNavUlLis = document.querySelectorAll(".a" + currentArticlePage + " nav ul li");

			// click upper 
			if(event.wheelDelta > 0) {
				if(currentSectionPage == 1) {
					return ;
				}
				if(localContentNavUlLis.length != 0) {
					localContentNavUlLis[currentSectionPage - 2].click();
				}
			}else {
				if(currentSectionPage == localContentNavUlLis.length) {
					return ;
				}
				if(localContentNavUlLis.length != 0) {
					localContentNavUlLis[currentSectionPage].click();
				}
			}
		}, false);

		// add keydown event
		body.addEventListener("keydown", function(event) {
			var themeNavUlLis = document.querySelectorAll(".theme-nav ul li"),
				localContentNavUlLis = document.querySelectorAll(".a" + currentArticlePage + " nav ul li"),
				len = themeNavUlLis.length;

			if(event.keyCode == 37) {	//left
				if(currentArticlePage == 1) {
					return ;
				}else {
					themeNavUlLis[currentArticlePage - 2].click();
				}
			}else if(event.keyCode == 38) { //up
				if(currentSectionPage == 1) {
					return ;
				}
				if(localContentNavUlLis.length != 0) {
					localContentNavUlLis[currentSectionPage - 2].click();
				}
			}else if(event.keyCode == 39) { //right
				if(currentArticlePage == len) {
					return ;
				}else {
					themeNavUlLis[currentArticlePage].click();
				}
			}else if(event.keyCode == 40) { //down
				if(currentSectionPage == localContentNavUlLis.length) {
					return ;
				}
				if(localContentNavUlLis.length != 0) {
					localContentNavUlLis[currentSectionPage].click();
				}
			}
		}, false);
	}());
};

function clearActive(arr) {
	var i, len;
	len = arr.length;
	for(i = 0; i < len; i++) {
		if(hasClass(arr[i], "active")) {
			removeClass(arr[i], "active");
		}
	}
}

function addClass(element, newClass){
	var originalClassName = element.className;
	if(originalClassName != "" || originalClassName != undefined) {
		originalClassName += " ";
	}
	element.className = originalClassName + newClass;
}

function removeClass(element, toBeRemoved){
	var oldClass = element.className;
	var start = oldClass.indexOf(toBeRemoved);
	if(start == -1)
		return ;
	if(start != 0){
		toBeRemoved=" "+toBeRemoved;
	}
	element.className=oldClass.replace(toBeRemoved, "");
}

function hasClass(element, toBeTest){
	var strs = element.className.split(" ");
	var len = strs.length,i;
	for(i = 0; i < len; i++){
		if(strs[i] == toBeTest){
			return true;
		}
	}
	return false;
}

function replaceClass(element, oldClass, newClass){
	removeClass(element,oldClass);
	addClass(element,newClass);
}

function changePages(cards, nextPage, totalPage, currentPage, attrIfSmall, attrIfBig) {
	var i;
	for(i = 0; i < totalPage; i++) {
		if(i == (currentPage - 1)) {
			if(currentPage < nextPage) {
				replaceClass(cards[i], "move-on", attrIfSmall);
				replaceClass(cards[nextPage - 1], attrIfBig, "move-on")
			}else if(currentPage > nextPage) {
				replaceClass(cards[i], "move-on", attrIfBig);
				replaceClass(cards[nextPage - 1], attrIfSmall, "move-on");
			}
		}else if(i < (nextPage - 1)) {
			if(hasClass(cards[i], attrIfBig)) {
				replaceClass(cards[i], attrIfBig, attrIfSmall);
			}
		}else if(i > (nextPage - 1)) {
			if(hasClass(cards[i], attrIfSmall)) {
				replaceClass(cards[i], attrIfSmall, attrIfBig);
			}
		}
	}
}