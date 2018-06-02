const button_show = document.querySelector('button.show')
button_show.addEventListener('click', show)

const button_hide = document.querySelector('button.hide')
button_hide.addEventListener('click', hide)

const svg_path_start = 'm-0.5,1080.5l-2421.0568,852.37141s2421.5568,-1932.87141 2445.75108,-878.45198c469.64406,46.90692 561.66275,-255.62705 1075.17573,-224.37127c513.51298,31.25578 134.30935,266.50318 902.05917,204.43143l-80.92918,46.02041l-1921,0z'
const svg_path_wave = 'm-0.5,1080.5l-864.68917,689.4304s865.18917,-1769.9304 1284.68917,-1471.99185c146.18046,452.82203 164.45115,-29.45473 681.13535,68.3965c516.68419,97.85123 207.49626,439.90354 953.0476,-75.65151l-133.18295,789.81646l-1921,0z'
const svg_path_end = 'm-0.5,1080.5l-1010.77422,-1074.82749s1011.27422,-5.67251 1445.63037,-35.65363c469.64406,46.90692 216.46659,-18.94118 729.97957,12.3146c513.51298,31.25578 7.53843,1.72403 775.28825,-60.34772l-19.12397,1158.51424l-1921,0z'

function show() {

	document.querySelector('#start').setAttribute('d', svg_path_start)
	document.querySelector('.animation').classList.remove('none')
	document.querySelector('#start').style.display='inline'
	TweenLite.to("#start", 1, {morphSVG:svg_path_wave})
	TweenLite.to("#start", 1, {morphSVG:svg_path_end}).delay(0.6)

	setTimeout(function () {
		button_show.classList.add('none')
		button_hide.classList.remove('none')
	}, 1600)
}

function hide() {

	// document.querySelector('#start').setAttribute('d', svg_path_end)
	// document.querySelector('#start').style.display='none'
	TweenLite.to("#start", 1, {morphSVG:svg_path_wave})
	TweenLite.to("#start", 1, {morphSVG:svg_path_start}).delay(0.6)

	setTimeout(function () {
		button_show.classList.remove('none')
		button_hide.classList.add('none')
	}, 1400)
}
