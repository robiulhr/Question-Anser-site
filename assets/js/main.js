var main = document.querySelector(".card_container.main");
var theme_changer = document.querySelectorAll(".theme-changer");

var light_mode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" class="fk-secondary"></path><path fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" class="fk-primary"></path></g></svg>`;
var dark_mode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" class="fk-secondary"></path><path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z" class="fk-primary"></path></g></svg>`;

const dump_questions = () => {
	for (var i = 0; i < 20; i++) {
		main.innerHTML += `
		<div class="card card-lesson">
		  <div class="card-content">
		    <a href="./question.html">
		      <h3>Fulltext Search on Firebase with Meilisearch</h3>
		    </a>
		    
		    <p>Build and deploy a fulltext search engine for your Firestore data with Meilisearch.</p>


		    
		    <a href="/tags/pro"><span class="tag tag-sm tag-pro">#pro</span></a>

		    <a href="/tags/meilisearch"><span class="tag tag-sm tag-meilisearch">#meilisearch</span></a>

		    <a href="/tags/firestore"><span class="tag tag-sm tag-firestore">#firestore</span></a>

		    <a href="/tags/cloud-functions"><span class="tag tag-sm tag-cloud-functions">#cloud-functions</span></a>


		  </div>
		  

		</div>

		`;
	};
}
const chang_icon = (theme) => {
	let icon;
	if (theme == 'dark')
		icon = dark_mode
	else
		icon = light_mode
	theme_changer.forEach(changer => {
		changer.innerHTML = icon
	})
}
const chang_theme = () => {

	if (document.body.classList.contains('light-theme')) {
		localStorage.setItem('theme', 'dark')
		document.body.classList.remove('light-theme')
		document.body.classList.add('dark-theme')
		chang_icon('dark')
	}
	else {
		localStorage.setItem('theme', 'light')
		document.body.classList.add('light-theme')
		document.body.classList.remove('dark-theme')
		chang_icon('light')
	}

	// This works perfectly but this skip the animation for light-to-dark
	// document.body.classList.toggle('light-theme');
}

var theme = localStorage.getItem('theme')
document.body.classList.add(`${theme}-theme`)
for (var i = 0; i < theme_changer.length; i++) {
	theme_changer[i].addEventListener("click", () => {
		chang_theme()
	})

	theme_changer[i].innerHTML = theme == 'dark' ? dark_mode : light_mode;
}

// theme_changer[1].addEventListener("click",() => {
// 	chang_theme()
// })

// document.querySelector(".submit-answer").addEventListener("click",()=>{
// 	var markupStr = $('#summernote').summernote('code');
// 	console.log(markupStr);
// })

