
let galeryfill = document.querySelector('.gallery')

// console.log(galeryfill);

let releases_list = [
	
	{
		performer: 'здарова',
		desc: 'ну а дальше я хз че писать подписывайтесь на пабличек хе',
		link: 'https://vk.com/ridingthecoyote',
		date: '20.09.2020',
		imgurl: 'https://sun9-67.userapi.com/impg/aauRI2VnLj5VhIu3T0MgHyQ8HSi7kMYO8Mhr_A/pBA-k8RpfpU.jpg?size=607x587&quality=95&sign=3c21afdcbb0e4ad06d635ded585fa21c&type=album'
	},
	{
		performer: 'Lunder - Вальс',
		desc: 'Нашумевший своими переносами тречик наконец выходит!',
		link: 'https://onerpm.link/501004920012',
		date: '24.03.2023',
		imgurl: 'https://cloudinary-cdn.ffm.to/s--8RP8J0_1--/f_webp/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Fc5986c2f1ffde06c00f01d2c163daf85.png'
	},
	{
		performer: 'Isotwelve - Плёнка',
		desc: "Довольно простая и мелодичная песня, родившаяся спонтанно. Звуки синтезаторов, приятная драм-партия и воздушный вокал. Это - Плёнка, часть дебютного альбома Isotwelve 'Memoria'.",
		link: 'https://band.link/kEaH6',
		date: '03.03.2023',
		imgurl: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/79/84/8d/79848df9-ebdc-47a1-9fe2-ee15b8ea7efc/0.jpg/500x500bb.jpg'
	},
	{
		
		performer: 'Isotwelve - Wake Up',
		desc: 'Экспериментальный релиз, который предшествует грядущему альбому исполнителя. Обволакивающий уши эмбиент, который сменяется на спокойную, но, в то же время, напряженную композицию, разбавленную строчками. ',
		link: 'https://band.link/bIf6S',
		date: '03.02.2023',
		imgurl: 'https://cloudinary-cdn.ffm.to/s--R5pXop0V--/f_webp/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Feaaf4d740865b7c11f39846b173423eb.jpeg'
	}
];

const left_frames_fill = (release) => {
	return `
	<div class="frame">
    <div class="frame__content text-left">
      <h3>${release.performer}</h3>
      <p>${release.desc}</p>
      <a href="${release.link}">Слушать</a>
      <p style="display:inline" class = "data_p">${release.date}</p>
  	</div>
  </div>

  <div class="frame">
    <div class="frame__content">
      <div class="frame-media frame_media_right" style = "background-image: url(${release.imgurl});"></div>
    </div>
  </div>

  <div class = "frame frame_bg"></div>
	`
};

const right_frames_fill = (release) => {
	return `
	<div class="frame">
    <div class="frame__content text-right">
      <h3>${release.performer}</h3>
      <p>${release.desc}</p>
      <a href="${release.link}">Слушать</a>
      <p style="display:inline" class = "data_p">${release.date}</p>
  	</div>
  </div>

  <div class="frame">
    <div class="frame__content">
      <div class="frame-media frame_media_left" style = "background-image: url(${release.imgurl});"></div>
    </div>
  </div>

  <div class = "frame frame_bg"></div>
	`
};

const fill_releases = (items,block) => {
	let leftorright = 1;
	block.innerHTML = `
	<div class="frame">
                <div class="frame__content">
                    <!-- <h2>this is a temparary logo</h2> -->
										<img src = "img/logo.png" id = 'mainlogo_img'>
                </div>
            </div>

            <div class = "frame frame_bg"></div>
	`;
	for (let item of items) {
		
		
		if (leftorright == 1) 
		{
			block.innerHTML += left_frames_fill(item);
		}
		if (leftorright == 2)
		{
			block.innerHTML += right_frames_fill(item);
		}
		leftorright += 1;
		if (leftorright > 2) {leftorright = 1;}

		console.log('block filled' + leftorright);
	}

	block.innerHTML += 
	`
	<div class="frame">
                <div class="frame__content">
                    <h3>about us</h3>
                    <p>Смысл жизни не только в передаче наших генов. Мы можем оставить после себя намного больше, чем ДНК посредством языка, музыки, литературы и кино: всё то, что мы видим, слышим и чувствуем. Радость, печаль и куча эмоции - вот что мы можем сохранить для будущих поколений.</p>
                    <p>Контакты:</p>
                    <a href="https://instagram.com/san_smislom">Instagram</a>
                    <a href="https://t.me/isotwelve">Telegram</a>
                    <a href="https://vk.com/ridingthecoyote">VK</a>
                </div>
            </div>

            <div class = "frame">
                <div class = "frame__content">
                    <video class = "frame-media" src = "video/SPIN1690000-0150.mp4" autoplay loop muted></video>
                </div>
            </div>

            <div class = "frame">
                <div class="frame__content">
                    <p>gallery created by isotwelve, 2022</p>
                </div>
            </div>
	`
}

fill_releases(releases_list,galeryfill);

// 3d
console.log('script loaded suchki')

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function() {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
        if (opacity == 0) {
			setTimeout(() => {
				frame.style.visibility = 'collapse'
			}, 300)
		} else if(opacity == 1) {
			setTimeout(() => {
				frame.style.visibility = 'visible'
			}, 300)
		}
    })
}

window.scrollTo(0, 1)

//audio

let soundButton = document.querySelector('.buttonn')
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}

let body = document.body;

var totalframes = frames.length;
console.log(totalframes);

let totalwidth = Math.round(totalframes * 300);

console.log(totalwidth);

body.style.height = totalwidth + 'px';