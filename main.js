const {VK} = require('vk-io'); // вк-ио
const {Keyboard} = require('vk-io');
const vk = new VK(); 
const {updates, api, snippets, upload} = vk; 
const fs = require('fs');
const base = require('./base.json'); // база данных с пользователями
const logs = require('./logs.json'); // логи пользователей
const chats = require('./chats.json'); // беседы пользователей
const Telegram = require('telegraf/telegram') // модуль телеграмма
const Telegraf = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu') // кнопки для телеграмма
const bot = new Telegraf("1178541113:AAEPVPO4OG2wbugMZhf8hKpSRyGtej8yWmE"); // токен телеграмм бота 
const telegram = new Telegram(`1178541113:AAEPVPO4OG2wbugMZhf8hKpSRyGtej8yWmE`) // токен тг бота
const moment = require('moment'); // модуль 
const clan = require('./clan.json') // база с кланами
const tlgrm = require('./tlgrm.json') // привязанные аккаунты пользователей
const request = require('request-promise');
const chalk = require('chalk'); // модуль 
const adminchat = 1; // беседа админов
const ver = `1.0` // версия бота 




var TelegramBot = require('node-telegram-bot-api');

	let startedproc = 1
	while(startedproc < 99) {
		startedproc += Number(1)
	console.log(chalk.keyword(`orange`).bold.underline(`» Starting Bot ${ver}...`) + chalk.red.bold.underline(`${startedproc}%`))
}

// Настройки бота //
const page = new VK(); // создание страничного бота
 page.setOptions({token: `7bc0b43a9114d0e1b509d2fa16e8eb3138281900a0b2d1177fef2882daabb054dc4024376e8ad67763754`}); // токен страницы

vk.setOptions({ 
	token: "ad293f4fb06ec5be36ac92d579b0734d909dbaf84979eb38c283745c1c7896eabfffdc53a664c93e7c0c9",  // токен группы
	apiMode: "parallel", // привед
	pollingGroupId: 195446175 // ид группы
});

const thisbotname = `MoodCare` // имя бота
const thisbotid = 195446175 // ид группы
const thistelegabot = `moodcare_bot` // ссылка на телеграмм бота
// Настройки бота //

// Обновление баз данных //
setInterval(function(){ 
        fs.writeFileSync("./clan.json", JSON.stringify(clan, null, "\t")) 
}, 2000);

setInterval(function(){ 
        fs.writeFileSync("./tlgrm.json", JSON.stringify(tlgrm, null, "\t")) 
}, 2000);

setInterval(function(){ 
        fs.writeFileSync("./base.json", JSON.stringify(base, null, "\t")) 
}, 2000);

setInterval(function(){ 
        fs.writeFileSync("./logs.json", JSON.stringify(logs, null, "\t")) 
}, 2000);

setInterval(function(){ 
        fs.writeFileSync("./chats.json", JSON.stringify(chats, null, "\t")) 
}, 2000);
// Обновление баз данных //


function rand(text) {
	let tts = Math.floor(text.length * Math.random())
	return text[tts]
}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings
}

function getRandomInRange(min, max) { 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}; //Функция выбора рандомного числа

function rand(text) {
	let tts = Math.floor(text.length * Math.random())
	return text[tts]
}

var now = new Date();
function addZero(num) { return ('0' + num).slice(-2); }

function nols(num) {
    if(num < 10) return('0' + num)
    if(num > 9) return(num)
}


fs.readFile('example_log.txt', function (err, logData) {});
updates.use(async (context, next) => {
 if(context.isGroup)  return
 if(context.isOutbox) return
if(!base.id[context.senderId]){
	base.context.id += Number(1)
	base.id[context.senderId] = {
		id: base.context.id
		}
	vk.api.call("users.get", {
    user_ids: context.senderId
  }).then(res => {
    let months = new Date().getMonth()
    let days = new Date().getDate()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
	base.bs[base.context.id] = {
		keyb: 0,
		keyb1: `1 кнопка`,
		keyb2: `2 кнопка`,
		keyb3: `3 кнопка`, 
		nick: `${res[0].first_name}`,
		nicknotify: true,
		subscribed: false,
		rank: 1,
		reg: `${nols(days)}.${nols(months)}.${new Date().getFullYear()}, ${nols(hour)}:${nols(minute)}:${nols(second)}`,
		platform: false,
		id: context.senderId,
		longnick: false,
		hide: false,
		banreason: ``,
		banned: false,
		bannedby: 0,
		click: 0,
		bandays: 0,
		banhours: 0,
		banminutes: 0,
		banseconds: 0,
		payban: false,
		lastactivity: `${nols(days)}.${nols(months)}.${new Date().getFullYear()}, ${nols(hour)}:${nols(minute)}:${nols(second)}`,
		shotscount: 0,
		notifications: true,
		tlgrmcode: 0,
		tlgrmid: 0,
		tlgrmpayacces: false,
		tlgrmpayid: 0,
		tlgrmpaycount: 0,
		tlgrmgivid: 0,
		tlgrmgivcount: 0,
		tlgrmblock: false,
		testthis: 0
		}
		let regby = false

			if(regby == false) vk.api.messages.send({chat_id: adminchat, message: `[#LOG]\n✅ *id${context.senderId} (${res[0].first_name}) Зарегистрировался в боте!\n🆔 ${base.id[context.senderId].id}`})
			
		return context.send({ 
message: `👋 Хей, *id${context.senderId} (${res[0].first_name}) !
✨ Меня зовут [club${thisbotid}|${thisbotname}]! И я твой эмоциональный помощник
😉 Тебе хочется улучшить своё эмоциональное состояние?Тогда ты по адресу!

Если ты честно будешь отвечать на мои вопросы, то вскоре я тебе помогу☺

Введи «Помощь» 👍

🌀Также советую привязать свой телеграм аккаунт командой - /tlgrm`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: '📚 Помощь', 
            color: Keyboard.POSITIVE_COLOR,
            payload: {
            	"command": "help"
            }
            })         
            
      ]
   ])
   .inline(false)
  }) 
	})
	}

if (context.text) {
let hour = new Date().getHours()
let minute = new Date().getMinutes()
let second = new Date().getSeconds()
if(!logs[base.id[context.senderId].id]) {
	logs[base.id[context.senderId].id] = {
		text: ``
		}
}
let chattext = ``
if(context.isChat) chattext = `👥 Беседа: №${context.chatId},`
let timesend = `[🕐 ${nols(hour)}:${nols(minute)}:${nols(second)}]`
logs[base.id[context.senderId].id].text += `\n${timesend}, ${chattext} ✉️ ${context.text.slice(0, 360)}`
base.bs[base.id[context.senderId].id].lastactivity = `${nols(hour)}:${nols(minute)}:${nols(second)}`

    }
if(context.text) {

if(base.bs[base.id[context.senderId].id].banned == true || base.bs[base.id[context.senderId].id].tlgrmblock == true) {
	let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]

	if(context.isChat) return
		if(base.bs[base.id[context.senderId].id].tlgrmblock == true) return context.send(`${nick}, Данный аккаунт отключён при помощи 🌀 Telegram, его можно включить написав <<menu>> в Telegram t.me/moodcare_bot`)
	return context.send(`${nick}, вы находитесь в бане от руки Администратора *id${base.bs[base.bs[base.id[context.senderId].id].bannedby].id} (${base.bs[base.bs[base.id[context.senderId].id].bannedby].nick})\n❓Причина: ${base.bs[base.id[context.senderId].id].banreason}\n⌚ Бан истекает через: ${nols(base.bs[base.id[context.senderId].id].bandays)}:${nols(base.bs[base.id[context.senderId].id].banhours)}:${nols(base.bs[base.id[context.senderId].id].banminutes)}:${nols(base.bs[base.id[context.senderId].id].banseconds)}`)
	
	
	}
	}

try {

        await next();
 } catch (err) { console.error(err)
                error = `${error} \n \n ${err}`}
    require('fs').writeFileSync('./base.json', JSON.stringify(base, null, '\t'));
});



/*=========================================================================================*/

vk.updates.use(async (message, next) => {

    // комментарий оставь
    await next(); 
});




setInterval(function (){
for(let a in base.bs){
if(base.bs[a].banned == true) {
if(base.bs[a].banseconds !== 0) {
base.bs[a].banseconds -= Number(1);
if(base.bs[a].banseconds == 0) {
	base.bs[a].banned = false
	vk.api.messages.send({user_id: base.bs[a].id, message: `🔔 Срок бана истёк! 😇`})
}
}
}
}
}, 1000); // бан секунд

setInterval(function (){
for(let a in base.bs){
if(base.bs[a].banned == true) {
if(base.bs[a].banminutes !== 0) {
base.bs[a].banminutes -= Number(1);
if(base.bs[a].banminutes == 0) {
base.bs[a].banned = false
	vk.api.messages.send({user_id: base.bs[a].id, message: `🔔 Срок бана истёк! 😇`})
}
}
}
}
}, 60000); // бан минут

setInterval(function (){
	for(let i in base.bs){
		if(base.bs[i].rank === 1){
			if(base.bs[i].energy !== 10){
				base.bs[i].energy += 1
			}
		}
		if(base.bs[i].rank === 2){
			if(base.bs[i].energy !== 15){
				base.bs[i].energy += 1
			}
		}
		if(base.bs[i].rank === 3){
			if(base.bs[i].energy !== 20){
				base.bs[i].energy += 1
			}
		}
		if(base.bs[i].rank === 4){
			if(base.bs[i].energy !== 25){
				base.bs[i].energy += 1
			}
		}
		if(base.bs[i].rank === 5){
			if(base.bs[i].energy !== 30){
				base.bs[i].energy += 1
			}
		}
	}
}, 300000); // бан минут

setInterval(function (){
for(let a in base.bs){
if(base.bs[a].banned == true) {
if(base.bs[a].banhours !== 0) {
base.bs[a].banhours -= Number(1);
if(base.bs[a].banhours == 0) {
base.bs[a].banned = false
	vk.api.messages.send({user_id: base.bs[a].id, message: `🔔 Срок бана истёк! 😇`})
}
}
}
}
}, 3600000); // бан часов

setInterval(function (){
for(let a in base.bs){
if(base.bs[a].banned == true) {
if(base.bs[a].bandays !== 0) {
base.bs[a].bandays -= Number(1);
if(base.bs[a].bandays == 0) {
base.bs[a].banned = false
	vk.api.messages.send({user_id: base.bs[a].id, message: `🔔 Срок бана истёк! 😇`})
}
}
}
}
}, 86400000); // бан дней




vk.updates.hear(/Факт про объятья/i, context => {
	
  var arr = ['Обнимая кого-то, мы чувствуем себя лучше. Когда мы заключаем другого человека в объятия, выделяется окситоцин (его так и называют — «гормон объятий»), благодаря которому мы по-настоящему ощущаем тепло и нежность💕',
  'Объятия снижают давление Гормоны, которые выделяются в организме, пока мы наслаждаемся объятиями, позитивно влияют не только на чувства, но и на соматическое здоровье😊',
  'Объятия защищают сердце от болезней. Крепче прижимайтесь друг к другу! Ведь объятия с любимыми — это бальзам для вашего сердца в прямом и переносном смысле.',
  'Объятия — естественный антистрессовый препарат. Чувствуете, что вы уже на последнем издыхании? Выжаты, как лимон, по которому еще и проехался асфальтоукладчик?😒 Срочно отправляйтесь на поиски того, кого можно затискать! Объятия резко снижают количество гормона стресса, кортизола.'];
  var rand = Math.round( Math.random() * 3);
  
  context.send( arr[ rand ] );
});

updates.hear(/Кликер$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ты уже накликал: ${user.click} кликов

Чтобы начать играть, жми кнопку "Жмяк"`, 
     keyboard: Keyboard.keyboard([   
            [             
            Keyboard.textButton({ 
            label: 'Жмяк', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'Я устал', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Жмяк$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let nick = ``
let user = base.bs[base.id[context.senderId].id]
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
	user.click += Number(1)
return context.send({ 
message: `Теперь у вас кликов: ${user.click}`, 
     keyboard: Keyboard.keyboard([   
      [             
            Keyboard.textButton({ 
            label: 'жмяк', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'Я устал', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]  	   
   ])
   .inline(platform)
  }) 
  })



updates.hear(/На сегодня всё, я устал👋$|Мне уже легче👋🏻$|Да мне всего хватает👋|На сегодня хватит👋|Я устал|Я и так не боюсь👋|Спасибо за помощь 😄|Нет, спасибо😜/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Всегда к твоим услугам! Когда снова буду нужен, просто напиши мне "Помощь" ✨

А пока можешь отдохнуть и поиграть в кликер😉

🌀Также советую привязать свой телеграм аккаунт командой - /tlgrm`, 
     keyboard: Keyboard.keyboard([   
            [             
            Keyboard.textButton({ 
            label: 'Кликер', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Не хочу рассказывать😶$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}

	return context.send({ 
message: `Ничего страшного, когда будешь готов поделиться, возвращайся, я буду ждать! ❤

А пока можешь отдохнуть и поиграть в кликер😉

🌀Также советую привязать свой телеграм аккаунт командой - /tlgrm`, 
     keyboard: Keyboard.keyboard([   
        [             
            Keyboard.textButton({ 
            label: 'Кликер', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ]      
   ])
   .inline(platform)
}) 
 


  })


updates.hear(/помощь$|📚$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `${nick}, я рад, что ты заинтересован(а) мной! Начнём с самого простого: как ты себя сейчас чувствуешь?`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Хорошо🙂', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Так себе😐', 
            color: Keyboard.PRIMARY_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Плохо😔', 
            color: Keyboard.NEGATIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

// так себе // 
updates.hear(/Так себе😐$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `${nick}, расскажи, что ты сейчас испытываешь? Я буду бороться за твое отличное настроение!`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Грусть😢', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Злость😤', 
            color: Keyboard.PRIMARY_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Устал...', 
            color: Keyboard.NEGATIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Давай дальше!🙂/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Чувство усталости является одним из самых распространённых симптомов. 

Однако борьба с ним не вызывает особой сложности☺

Усталость является нормальным явлением после физической нагрузки, длительного стресса или отсутствия сна. 

Для начала тебе нужно просто расслабиться, сесть поудобнее и выбрать из списка то, что могло вызвать твоё утомление:`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Мало сна 😩', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],  
		[
            Keyboard.textButton({ 
            label: 'Много работы 💼', 
            color: Keyboard.PRIMARY_COLOR,
            })
		],
		[
            Keyboard.textButton({ 
            label: 'Недостаток разнообразия в жизни⏳', 
            color: Keyboard.PRIMARY_COLOR,
            })
		], 		
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Мало сна 😩/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Как же так?

😱 Вот знал бы ты, как я люблю спать! 

Именно поэтому у меня крайне редко случаются сбои в работе внутренних систем😎 

Не забывай, что и твои системы тоже нуждаются в постоянном уходе, иначе могут возникнуть большие проблемы. 

Именно поэтому я разработал несколько полезных фактов про пользу сна.`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Хочу узнать их! 😍', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],  
		[
            Keyboard.textButton({ 
            label: 'Сон для слабаков👋', 
            color: Keyboard.PRIMARY_COLOR,
            })
		]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Хочу узнать их! 😍/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Недосып чреват серьезными последствиями, начиная от легкого невроза и риска появления лишних сантиметров на талии, и заканчивая более серьезными проблемами — болезнями сердца и повышенным риском заработать сахарный диабет. 

Да и в социальном плане в недосыпе нет никаких плюсов: нервоз может привести к разрыву межличностных отношений💔

Разве об этом ты мечтал?`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Конечно нет! 😓', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],      
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Сон для слабаков👋/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ошибочное утверждение😣 

Без сна наш организм неработоспособен.

Наверное,ты просто сегодня не выспался😴

Тебе стоит отдохнуть.

Когда закончишь – возвращайся,я буду ждать тебя здесь❤`, 
     keyboard: Keyboard.keyboard([      
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
// так себе // 
  // грусть //
  updates.hear(/Грусть😢$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `${nick}, на протяжении всей жизни мы встречаемся со многими преградами и испытаниями. 

Ты можешь грустить по разным причинам, но я этого не хочу. 

Оглянись вокруг, ведь жизнь прекрасна, цени каждый ее момент!🌸 

Не убедил? 

Тогда выбери цвет, который тебе больше всего нравится в списке!`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Красный', 
            color: Keyboard.NEGATIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Синий', 
            color: Keyboard.PRIMARY_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Зелёный', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

// красный //
  updates.hear(/Красный$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Отличный выбор! 

А ты знаешь, что красный цвет- цвет любви?❤

Я думаю, что тебе стоит пойти к близкому человеку, который может тебя поддержать и подарить свою любовь. 

Я бы обнял тебя, эх, жаль, что я так далеко😔`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Продолжить', 
            color: Keyboard.POSITIVE_COLOR,
            })],
	  [
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })
       ]      
   ])
   .inline(platform)
  }) 
  })
  updates.hear(/Продолжить$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я надеюсь, что ты все же обнял кого-то🤗

Вот тебе несколько интересный факт об объятьях:

Обнимая кого-то, мы чувствуем себя лучше.
Когда мы заключаем другого человека в объятия, выделяется окситоцин (его так и называют — «гормон объятий»), благодаря которому мы по-настоящему ощущаем тепло и нежность💕

Если хочешь узнать ещё пару фактов об объятьях, жми кнопку "Факт про объятья"
`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Факт про объятья', 
            color: Keyboard.POSITIVE_COLOR,
            })],
	  [
            Keyboard.textButton({ 
            label: 'Хватит фактов!', 
            color: Keyboard.PRIMARY_COLOR,
            })
       ],
	  [
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Хватит фактов!/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Как тебе факты, узнал что-то новое?
`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Ничего нового', 
            color: Keyboard.SECONDARY_COLOR,
            })],
	  [
            Keyboard.textButton({ 
            label: 'Узнал много нового🤗', 
            color: Keyboard.POSITIVE_COLOR,
            })
       ]      
   ])
   .inline(platform)
  }) 
  })  
  
 updates.hear(/Ничего нового/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;

	return context.send({ attachment: `photo469280198_457285896`,
message: `Вот это ты знаток!😱 

Я передам своим разработчикам, что им стоит придумать факты поинтереснее, чтобы уж точно удивить тебя. 

Надеюсь, я хоть как-то тебе помог! 

Всегда обращайся, буду рад помочь. Хорошего настроения! 

И вот тебе милая картиночка, улыбнись❤
`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })]     
   ])
   .inline(platform)
  }) 

  })
 
 updates.hear(/Узнал много нового🤗/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ну что ж, теперь ты знаешь несколько интересных фактов про объятия🤗. 

Больше обнимайся и физически взаимодействуй с любимыми людьми, это улучшит твое эмоциональное состояние.

А ты знаешь, что младенцы, лишенные в течение длительного времени физического контакта с людьми, деградируют и в конце концов погибают😔.

Вот на сколько важен физический контакт, ведь без него у тебя может начаться так называемый «сенсорный голод», он очень схож с пищевым голодом, причем не только в биологическом, а и в психологическом и социальном плане.

Могу тебе предложить веселую картиночку) хочешь?
`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Очень хочу😍', 
            color: Keyboard.POSITIVE_COLOR,
            })],
      [             
            Keyboard.textButton({ 
            label: 'Нет, спасибо😜', 
            color: Keyboard.SECONDARY_COLOR,
            })] 			
   ])
   .inline(platform)
  }) 
  })
  
 updates.hear(/Очень хочу😍/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({  attachment: `photo469280198_457285897`,
message: ``, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })] 			
   ])
   .inline(platform)
  }) 
  }) 

// красный //

// синий //
updates.hear(/Синий$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	context.send({ 
message: `Интересненько🙃 

А ты знаешь, что синий цвет в психологии- это цвет мудрых, рассудительных людей, стремящихся находить мирные решения проблем💙 

Да-да, это может звучать как комплимент. 

Попробуй подумать о причине своей грусти.

Выпиши в блокноте все, что тебя сейчас беспокоит, и подумай, как ты можешь это исправить🤔 

Это действительно может помочь, обязательно попробуй этот метод. 

Вдруг окажется, что ты грустишь по пустякам, которые совсем не стоят твоего внимания?😃`, 
     keyboard: Keyboard.keyboard([     
            [             
            Keyboard.textButton({ 
            label: 'Спасибо, мне уже лучше😄', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Не помогает😒', 
            color: Keyboard.NEGATIVE_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Спасибо, мне уже лучше😄/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	context.send({ 
message: `Вот ты молодец! 

Думаю, многие «глобальные» проблемы не такие уж глобальные, если их обдумать😉 

Не стоит тратить свое время на грусть и переживания, тем более, если оказывается, что это пустяки. 

Я рад, что помог тебе. 

Хорошего настроения!❤`, 
     keyboard: Keyboard.keyboard([     
	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Не помогает😒/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	context.send({ 
message: `Может, твоя грусть не проходит, если еще больше думать о её причине. 

Тогда тебе срочно нужно отвлечься😈! 

Предлагаю принять тебе ванную или душ🛀🚿 (девчонкам сделать масочки🙈). 

Хочешь узнать чем полезен прием ванны для здоровья?`, 
     keyboard: Keyboard.keyboard([     
            [             
            Keyboard.textButton({ 
            label: 'Очень хочу!😇', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Очень хочу!😇/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	context.send({ 
message: `-Исследования показали, что прием ванн значительно снижает кровяное давление и уменьшает риск развития инсульта, что очень актуально для людей с гипертонией. Также ванны улучшают зрение и благоприятно влияют на здоровье почек🙀

-Теплая ванна — что-то вроде хорошей тренировки для сердца❤: она заставляет его работать быстрее, тем самым улучшая кровообращение и усиливая потоотделение. А пот, как известно, помогает выводить токсины, вирусы и бактерии из организма😌.

-Теплая ванна согревает воспаленные мышцы, блокирует болевые рецепторы и облегчает боль. Холодная ванна после упражнений снижает уровень молочной кислоты, что позволяет быстро восстановить мышцы💪

-Исследование в Университете Вулвергемптона показало, что ежедневный прием ванны, обычно в конце дня, значительно улучшает настроение, уменьшает проявления стресса и тревоги☺

-Особенно полезны ванны не только при мышечных болях, но и при ревматизме, так как в воде уменьшается воздействие на суставы✌

-Хороший ночной сон тесно связан со всем, что происходит в нашем организме: от того, сколько мы весим, как себя чувствуем, как быстро восстанавливаемся и т.д. Теплая ванна перед сном, как известно, помогает расслабиться и быстрее уснуть😴 

Только не ложитесь спать сразу после процедуры, иначе можно добиться противоположного эффекта👎

Хочешь узнать правила приема ванны для расслабления?
`, 
     keyboard: Keyboard.keyboard([     
            [             
            Keyboard.textButton({ 
            label: 'Да👌😄', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Да👌😄/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	context.send({ 
message: `Принимать ванну следует не ранее, чем через два часа после еды (хотя многие любят есть вкусняшки во время этой процедуры🍓🍔). 

Ванна для релаксации перед сном рекомендована людям, у которых имеются трудности с засыпанием.

Температура воды должна быть близкой к температуре тела – около 37 °C. 

Такая температура приятна для кожи и лучше всего подходит для расслабления мышц в воде🛀 

Не нужно делать слишком горячую воду, поскольку она оказывает нагрузку на сердце. 

Длительность приема ванны – 20–30 минут⏰

На время процедуры стоит отложить все дела, убрать телефон, выключить телевизор и полностью сосредоточиться на процессе релаксации. 

Для большего эффекта можно включить медитативную или классическую музыку, отключить электрический (или приглушить его) свет и зажечь свечи🔥 

Также в ванную можно высыпать морскую соль и налить немного эфирного масла для лучшего эффекта🍀
`, 
     keyboard: Keyboard.keyboard([     
	  	  [             
            Keyboard.textButton({ 
            label: 'Спасибо за совет!😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]    
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Спасибо за совет!😄/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: `photo469280198_457285914`,
message: `Надеюсь, сейчас ты собираешься принять ванную (хотя можно и теплый душ, главное- расслабься). 

Отпусти все мысли и отдыхай😙, наслаждайся теплой водой. 

Всегда рад тебе помочь. Хорошего настроения❤
`, 
     keyboard: Keyboard.keyboard([     
	  	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]    
   ])
   .inline(platform)
  }) 
  })

// синий //  

 updates.hear(/Зеленый$|Зелёный/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Зеленый…💚

Цвет спокойствия и умиротворения. 

Это прекрасный выбор!😊 

А ты когда-нибудь пробовал медитировать?🤔 

Попробуй, тебе станет легче!

1. Найди тихое место
2. Удобно сядь расслабь все свои части тела, выпрями спину 😌
3. Сфокусируйся на своем дыхании. Вдыхать нужно носом, а выдыхать ртом, при этом дыша грудной клеткой.
4. С каждым выдохом отпускай все мысли, которые приходят в голову😇

Медитация может занять от 5 до 40 минут, но помни, что главное качество, а не количество. 

Также могу предложить тебе включить расслабляющую музыку, это поможет настроиться на дыхании.

Обязательно попробуй эту практику, она очень хорошо влияет на наше эмоциональное состояние 🙃`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'Я попробовал и мне помогло😉', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
		[             
            Keyboard.textButton({ 
            label: 'Мне не помогло😒', 
            color: Keyboard.NEGATIVE_COLOR,
            })             
       ],
		[             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ] 	   
   ])
   .inline(platform)
  }) 
  })
  
 updates.hear(/Я попробовал и мне помогло😉/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: `photo469280198_457285938`,
message: `А ты быстро учишься. 

Надеюсь, я тебе помог! 

Всегда обращайся, буду рад помочь😉

Хорошего настроения❤ 

И вот тебе милая картиночка, улыбнись`, 
     keyboard: Keyboard.keyboard([     
		[             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ] 	   
   ])
   .inline(platform)
  }) 
  })
 
 updates.hear(/Мне не помогло😒/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({
message: `Я надеюсь ты все же попробовал медитировать. 

Если медитация тебе не помогла, то с удовольствием хочу предложить тебе послушать музыку🎧 

Все любят разные жанры, поэтому, думаю, тебе стоит открыть свой плейлист и послушать что-нибудь для поднятия настроения. 

Просто расслабься.

Пой🎤
Танцуй🕺
Ты можешь делать что угодно.

Просто отдайся музыке, ведь она может подарить тебе прекрасное настроение😜`, 
     keyboard: Keyboard.keyboard([     
		[             
            Keyboard.textButton({ 
            label: 'Да, ты прав, это может помочь', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
		[             
            Keyboard.textButton({ 
            label: 'Я не люблю музыку', 
            color: Keyboard.NEGATIVE_COLOR,
            })             
       ],
		[             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
 
 updates.hear(/Да, ты прав, это может помочь/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: `photo469280198_457285896`,
message: `Музыка- это искусство.

Похоже что ты ценитель искусства, если музыка тебе помогает😏

Надеюсь, я тебе помог!

Всегда обращайся, буду рад помочь.

Хорошего настроения❤ 

И вот тебе милая картиночка, улыбнись`, 
     keyboard: Keyboard.keyboard([     
		[             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Я не люблю музыку/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({
message: `Тогда могу посоветовать тебе посмотреть какой-нибудь фильм. 

А ты знаешь, что в фильме "Пираты Карибского моря: На краю света" есть одна примечательная вещь - Пиратский кодекс, который служил сводом указаний для пиратов на все случаи жизни.

Он появился только в одной сцене и лишь на пару минут, но на его создание ушло в разы больше времени😅 

К процессу воссоздания подобной реликвии были привлечены эксперты по древним рукописям, а реквизиторы добавляли в нее все, что было можно: пятна от крови и вина, шелуха от семечек и пепел табака. 

А сама эта махина весила целых 36 кг😱! 

Вот тебе и повод посмотреть этот фильм! 

Но ты, конечно, можешь выбрать и другой.`, 
     keyboard: Keyboard.keyboard([     
		[             
            Keyboard.textButton({ 
            label: 'Пойду посмотрю😊', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Пойду посмотрю😊/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: `photo469280198_457285915`,
message: `Приятного тебе просмотра. 

Я всегда рад тебе помочь! 

Хорошего настроения❤`, 
     keyboard: Keyboard.keyboard([     
		[             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
 // грусть //
 
 // злость //
  updates.hear(/Злость😤$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ох, друг, как я тебя понимаю!

Знаешь, очень трудно справиться со злостью. 

Но ты молодец, что обратился ко мне, ведь это значит, что ты хочешь бороться с этой неприятной эмоцией. 

Я предлагаю тебе несколько вариантов, которые могут тебе помочь🤗 

Выбери один из них...`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Разобраться в проблеме🤔', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[ 
            Keyboard.textButton({ 
            label: 'Правильное дыхание😌', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[ 
            Keyboard.textButton({ 
            label: 'Отвлечение💯', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[
            Keyboard.textButton({ 
            label: 'Мне уже легче👋🏻', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
  updates.hear(/Разобраться в проблеме🤔/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `А ты отважный, если решил все же решить проблему😯 

Это правильный поступок, который действительно может тебе помочь. 

К сожалению, сами проблемы не решаются, тебе придется над ними работать.

Ты согласен со мной, друг?`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Я готов! 💪', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[
            Keyboard.textButton({ 
            label: 'Мне уже легче👋🏻', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Я готов! 💪/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Тогда давай разбираться🤔 

Твоя проблема, из-за которой ты злишься, может иметь абсолютно разный источник происхождения. 

Она может быть связана с семьей, друзьями, учебой или вовсе с каким-то пустяком. 

Но если ты злишься, значит, что ты явно чем-то очень сильно недоволен.

Позволь дать тебе несколько советов:

1) Определи свою причину злости. Например:нереализованность, усталость, душевные терзания.
2) Оцени здраво, насколько она весома.
3) Подумай, как можно ее решить.`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Дальше✨', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[
            Keyboard.textButton({ 
            label: 'Мне уже легче👋🏻', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Дальше✨/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Что ж, если ты определил проблему, пора с ней бороться👀 

Возможно, ты сейчас злишься на кого-то, возможно - на себя. 

В жизни бывают разные ситуации, но твои порывы злости могут обидеть кого-то, или же испортить тебе настроение, возможно, окружающим, ведь злость - очень сильная эмоциональная реакция (в большинстве случаев- бессмысленна).

Да, иногда стоит позлиться на самого себя, это поможет тебе расти и исправлять свои ошибки. 

Но злиться на кого-то- не имеет смысла. 

Не стоит тратить на это время⏳ 

В данной ситуации ты должен решить :принимать поступок, который совершил человек, и попытаться понять его, или же понять, что твоя злость на этого человека действительно обоснована и имеет причину💭

Тогда уже попытайся аргументированно переубедить его.

Велика ли причина твоей злости? 📊`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Нет😌', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],
		[
            Keyboard.textButton({ 
            label: 'Да😔', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Нет😌/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я очень рад! 

Значит, причина не очень значима, и портить себе настроение не стоит. 

Просто выдохни и отпусти эту плохую эмоцию😌 

Прости себя или человека, который вызвал твой гнев. 

Не трать жизнь на такой негатив, который заставляет чувствовать себя плохо.

А сейчас расслабься и подумай о чем-то приятном, займись чем-то важным, интересным. 

Ведь жизни слишком коротка, чтобы тратить ее на злость! 🤗`, 
     keyboard: Keyboard.keyboard([  
		[
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Да😔/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Мне очень жаль, что твоя злость возникла из-за весомой причины☹ 

Надеюсь, тебя не очень сильно обидели.

Но сначала хочу предложить тебе подумать:прав ли ты (если считаешь, что виноват другой человек). 

Попробуй встать на место своего оппонента и постарайся понять его позицию, может, он поступил так из-за трудных жизненных обстоятельств?😪

Сначала разберись в ситуации, а уже потом вини других, попробуй разобраться в себе.

Если тебя действительно сильно обидели и разозлили, то стоит подумать, нужно ли дальше общаться с этим человеком, или стоит огородить себя от него🙅‍♂🙅

Возможно, человек сделал это случайно, и в скором времени объяснит всю ситуацию. 

А если это было специально, то, скорее всего, такой человек не будет приносить тебе счастья в жизнь💔(тем более, если это не первый раз).`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Спасибо за советы☺', 
            color: Keyboard.POSITIVE_COLOR,
            })
		]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Спасибо за советы☺/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: `photo469280198_457285936`,
message: `Главное - сначала все обдумать, а уже потом выпускать свою злость. 

Подумай еще немного, возможно, неправ ты😧

Я очень надеюсь, что помог тебе. Желаю спокойствия и рассудительности☺ 

Обращайся ко мне, я всегда рад пообщаться с тобой!❤`, 
     keyboard: Keyboard.keyboard([  
		[
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
// Злость //

// устал //
updates.hear(/Конечно нет! 😓/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Вот и я так думаю!

Знаешь, сон - самое прекрасное место на Земле✨

Ведь там ты можешь увидеть просто фантастические виды🌆, окунуться в потрясающие и просто невообразимые истории🕵, воплотить свои мечты в реальность🌸

Видишь, как классно спать?

Я, конечно, понимаю, что сейчас у всех очень много работы и других забот,что банально может не хватать времени для того, чтобы выспаться🥺

Но сколько есть несчастных людей,которые испытывают недомогание просто из-за нехватки сна?! 

Зачастую, у них проявляется сонливость, излишняя злость и печаль, проблемы со здоровьем, а также трудности с пониманием происходящего😰
`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: '😱', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Мне уже легче👋🏻', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })

  
updates.hear(/Устал.../i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я тебя понимаю. 

Это очень неприятное ощущение😔 

Иногда кажется, что весь мир настроен против тебя, что тебя никто не понимает. 

Выдохни, ведь у тебя есть я, и я могу тебе помочь.`, 
     keyboard: Keyboard.keyboard([  
      [ 
            Keyboard.textButton({ 
            label: 'Давай дальше!🙂', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Мне уже легче👋🏻', 
            color: Keyboard.SECONDARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/😱/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Да-да, вот и я о том же.

Надеюсь теперь ты понял всю важность сна...

Оаоа🥱

От таких разговоров меня резко поклонило в сон. 

Ох, это работа так выматывает. 

Думаю, ты тоже устал. 

Не хочешь ли немного отдохнуть?

Но прежде посмотри это чудесное видео👇

По-моему, это лучший флешмоб😂

https://youtu.be/MjRa3m1uI-4
`, 
     keyboard: Keyboard.keyboard([  
      [      
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ]
   ])
   .inline(platform)
  }) 
  })  
// устал //

// плохо //
  updates.hear(/Плохо😔$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ужас! 

😱Как только ты это сказал, я сразу почувствовал эту боль в себе. 

Хоть я и бот, но уж поверь, я знаю, что такое ошибка в коде💻

Но речь сейчас не обо мне.Вернёмся к твоей проблеме🤔

Я уверен, что если порассуждать, то она окажется не так уж и страшна! 

Что тебя опечалило, мой друг?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Семья👪', 
            color: Keyboard.NEGATIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Учёба📖', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'Не хочу рассказывать😶', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Семья👪$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Семья - важнейший из феноменов, сопровождающий человека в течение всей его жизни. 

Значимость ее влияния на личность, ее сложность, многогранность и проблемность очень велики!

Семейные проблемы бывают у каждого. 

Даже у меня со своим создателем бывают личное недопонимание😢

И я тоже очень расстраиваюсь. 

Но они быстро решаемы, если каждая сторона ссоры будет хотеть этого и искать компромиссы. 

Ведь семья-самое дорогое, что у нас есть❤

Они никогда не посоветуют плохого, так как желают тебе лишь счастья!

Ты доверяешь своей семье?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Да!😌', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Не очень😔', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Да!😌/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Замечательно!) 

Значит проблем осталось намного меньше. 

Тебе надо просто успокоиться и поговорить со своими близкими. 

А пока можешь посмотреть это милое видео

https://youtu.be/Y6ID8OEcEpM
`, 
     keyboard: Keyboard.keyboard([    
      [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })


updates.hear(/Учёба📖$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Как же я тебя понимаю... 

Учёба... 

Даже страшно произносить😱 

Когда я был ботиком, который даже поздороваться не мог, то было очень тяжело.

На меня все нападали, что-то от меня хотели, а я не знал, чем помочь😒 

Но сейчас, спустя долгие годы учёбы и тренировок, я готов удивлять мир!!! 

Ну что же тебе мешает это сделать?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Лень😴', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Страх😣', 
            color: Keyboard.NEGATIVE_COLOR,
            })
      ],
      [             
            Keyboard.textButton({ 
            label: 'Я стараюсь, но ничего не получается😥', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ],	  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
 
// лень //
updates.hear(/Лень😴/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Каждый в какой-то момент говорит себе: " мне так лень, может завтра все сделаю, а сегодня полежу, посмотрю сериальчик".

 Не спорю, порой очень хочется забить на все и делать то, что тебе хочется.

 Хочешь приведу похожие примеры из литературы ?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Да🤤', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Да🤤/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Довольно много примером описано в нашей русской литературе📘 

Один из самых явных примеров "Обломов". 

Одна фамилия даёт о себе знать. 

Это тот человек, который начал жить с ленью, и закончил с нею жить🤢

Прожил он однако не очень интересно и долго , а знаешь почему? 

Да, ему помешала лень😐

Но мы же с тобой не такие, обязательно будем жить лучше и докажем чего мы стоим миру! 

Давай начнём?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Давай😋', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],  
		[
            Keyboard.textButton({ 
            label: 'Мне лень😑', 
            color: Keyboard.NEGATIVE_COLOR,
            })
      ],	  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Мне лень😑/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ох-хо-хо... 

Что же делать... 

Но если ты пришёл сюда, значит тебе не безразлично то, что лень это плохо. 

Значит давай-ка ещё подумаем. 

Тебе стоит вернуться назад. 

То что я рассказываю, должно помочь, ну пожалуйста, ради меня, всеми любимого соседа MoodCare😏`, 
     keyboard: Keyboard.keyboard([    
      [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  }) 
  
updates.hear(/Давай😋$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я очень рад, что ты так серьёзно взялся за дело. 

Мы уберём эту лень, всеми моими "электроштучками", обещаю! 

Но пока я ещё на далеко отошёл от русской литературы, то приведу одно очень интересное стихотворение Тургенева "Завтра! Завтра!

... Как пуст, и вял, и ничтожен почти всякий прожитой день! Как мало следов оставляет он за собою! Как бессмысленно глупо пробежали эти часы за часами!

И между тем человеку хочется существовать; он дорожит жизнью, он надеется на нее, на себя, на будущее... О, каких благ он ждет от будущего!

Но почему же он воображает, что другие, грядущие дни не будут похожи на этот только что прожитой день?

Да он этого и не воображает. Он вообще не любит размышлять — и хорошо делает.

«Вот завтра, завтра!» — утешает он себя, пока это «завтра» не свалит его в могилу.

Ну, а раз в могиле — поневоле размышлять перестанешь.

Ну, согласись, что после прочтения, уже что-то задело твою душу и уже не очень хочется лениться😚

Наверное, есть некие причины по которым ты ленишься. 

Давай же я предложу тебе одно интересное и важное правило🤗

Если ты будешь его выполнять, то лень проявляться не будет.`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Хочу узнать правило', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],  
			  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Хочу узнать правило/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Правило 25 минут🙃

Первое что я говорю своему мозгу: «Давай всего 25 минут поделаем, а потом поваляемся?». 

25 минут — это не так много, что становится намного легче сесть за компьютер и приступить к делу. 

Главное именно 25 минут, не пол часа, не час, они звучат уже устрашающе долго. 

А через 5-10 минут я уже забываю про лень и спокойно выполняю свою работу. 

Вот видишь, даже боты что-то делают, чтобы их не съедала лень!😏 

Помогло?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Да, помогло🤗', 
            color: Keyboard.POSITIVE_COLOR,
            })
		],  
			  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  }) 

updates.hear(/Да, помогло🤗/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Еее, оуу да🤗!! 

Я счастлив, что моя помощь оказалась полезной. 

А теперь давай договоримся, что ты будешь выполнять этот способ, и увидишь, что в учёбе, на работе все станет намного лучше. 

Я тебе обещаю💪!`, 
     keyboard: Keyboard.keyboard([  			  
      [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  }) 
// лень //
 
updates.hear(/Я стараюсь, но ничего не получается😥/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Какой ты молодец! 

Всем бы твоё упорство.

Я вот тоже постоянно тружусь, но иногда случаются и ошибки😔 

Безусловно, это очень расстраивает, но ведь без ошибок не бывает успеха!🤗

Они дают нам колоссальный опыт, направляют на верный жизненный путь и, конечно, помогают развиваться. 

Так что никогда не бойся совершать ошибки!

Веришь мне?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Конечно! 😊', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],	  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Конечно! 😊/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Как приятно☺

Спасибо!

Но вернёмся к ошибкам.

Во-первых, не стоит сильно переживать. 

Хотя некоторое волнение вполне естественно, но не дайте ему привести тебя к чувству разочарования, потерянности и к стрессу😓 

Нужно осознать, что допускать ошибки вполне нормально.

Альберт Эйнштейн когда-то сказал: «Тот, кто никогда не ошибался, никогда и не испытывал ничего нового». 

Мы растём только путем совершения ошибок и извлечения уроков из этого!`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Эйнштейн плохого не посоветует 😎', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],	  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Эйнштейн плохого не посоветует 😎/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ещё бы! Я вообще его кумир🥰

Так, про пользу ошибок мы поговорили, теперь стоит сказать про их принятие.

Каждый по-разному видит ситуацию и находит различные её решения. 

Человек, который занимается своим развитием, принимает свои ошибки, берет на себя ответственность за провалы и двигается дальше, не только быстрее растет – он приобретает большее уважение окружающих🌸

Главное, что нам нужно осознать, что все люди ошибаются и будут ошибаться всегда. 

Но при этом важно отставлять в сторону свое эго, признавать эти ошибки, двигаться по жизни дальше с высоко поднятой головой и ни в коем случае не опускать руки❗

Рано или поздно у тебя всё получится! 

Не сомневайся в этом и никогда не останавливайся на полпути к достижению своей цели!`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Я буду стараться! 💫', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],	  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Я буду стараться! 💫/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я рад, что сумел помочь тебе!

Продолжай покорять высота и идти к своей мечте! 

Я всегда желаю тебе только добра💖

Ты, наверное, устал. 

Отдохни и посмотри это милое видео, которое точно вызовет улыбку🤗

https://www.youtube.com/watch?v=Q-Nw8ZNeCcg`, 
     keyboard: Keyboard.keyboard([  	  
      [             
            Keyboard.textButton({ 
            label: 'Спасибо за помощь 😄', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

// страх //
updates.hear(/Страх😣$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Все чего-то боятся. 

Нет ни одного человека или бота, который был бы бесстрашным. 

Я готов тебе помочь в этом, но не забывай, что у тебя также есть друзья и близкие, которые помогут избавиться от страха. 

А вот интересный факт про страх🎭 

Он заставляет забывать, насколько ты силён и компетентен.

Страх сводит на нет твою уверенность. 

Возникающее чувство беспомощности вынуждает верить, что нет ресурса, чтобы перетерпеть лишения и оправиться от невзгод.

Как видишь, страх делает так, что мы забываем, что умеем и бьёт по самообладанию. 

Давай же исправим это, и вскоре ты поймёшь, что в учёбе страх совсем не является помощником!

Какой способ тебе поможет расслабиться и забыть про свой страх?`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'Интересный способ💡', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'Вкусняшки 🍬', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ],	   
      [             
            Keyboard.textButton({ 
            label: 'Я и так не боюсь👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ] 	   
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Вкусняшки 🍬/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ммм... Вкусняшка.... 🤤🤤🤤 

Жаль боты питаются только энергией, а так бы я с радостью с тобой испробовал разные вкусняшки🍑. 

Что ты больше любишь из этого?`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'Сладкое', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'Солёное', 
            color: Keyboard.NEGATIVE_COLOR,
            })             
       ],	   
      [             
            Keyboard.textButton({ 
            label: 'Кислое', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Сладкое/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Сладости эквивалентны объятиям, человеческому теплу, поддержке. 

Когда наши эмоции не находят отклика в сердцах окружающих, тогда мы ищем утешения в ближайшей кондитерской. 

С точки зрения эмоций, когда мы едим сладкое, то чувствуем заботу — как будто кто-то о нас заботится. 

В разумном количестве оно успокаивает ум и тело и дает ощущение стабильности

Советую посмотреть классное видео, оно тебе понравится!

https://youtu.be/d9XzKvSKwrA`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Солёное/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Соленый вкус способствует сохранению энергии. 

Надо бы и мне пойти, съесть что-то солененькое. 

Мне нужно очень много энергии, чтобы помочь тебе справится с твоими отрицательнымы эмоциями и достичь гармонии.

Советую посмотреть классное видео, оно тебе понравится!

https://youtu.be/d9XzKvSKwrA`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Кислое/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Кислый вкус способствует сосредоточению ума. 

Когда в жизни нам не хватает устойчивости и концентрации, нас тянет на кислое. 

Избыток же этого вкуса делает нас самих «кислыми». 

Представьте себе недозревший виноград!

Советую посмотреть классное видео, оно тебе понравится!

https://youtu.be/d9XzKvSKwrA`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Интересный способ💡$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Готов удивляться? 😏

Ты когда-то слышал про способ "избавление страха с бумагой"?

Звучит странно, но не бойся, я тебе сейчас всё расскажу! 

Тебе же ещё интересно?`, 
     keyboard: Keyboard.keyboard([  
      [             
            Keyboard.textButton({ 
            label: 'Очень интересно😍', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],	   
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Очень интересно😍$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ого! 

Я уже вижу, как ты серьёзно собрался избавится от страха, так давай же быстрее начнём! 

Способ с бумагой довольно интересный, вот тебе полная информация о нем :"Проведите полный анализ вашего страха, задавая вопросы и визуализируя ответы на бумаге".

Такая проработка ситуации до выступления поможет притупить страх во время самого действия, подсознание будет вытаскивать из памяти ассоциативные картинки, и появится чувство защищенности.`, 
     keyboard: Keyboard.keyboard([  	   
      [             
            Keyboard.textButton({ 
            label: 'Другой способ👉👈', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Другой способ👉👈/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Позволяй себе иногда бояться😳

Не стоит держать себя в слишком жестких рамках 😐 Постоянный стресс способствует большим срывам. Если Ты чувствуешь легкий страх, а не паническую атаку- значит Ты живой.

У меня тоже есть сейчас небольшой страх.. 

Я боюсь, что мои навыки тебе не помогут, но я выполняю те способы, которые предлагаю и знаю точно, что в итоге тебе станет лучше😇`, 
     keyboard: Keyboard.keyboard([  	   
      [             
            Keyboard.textButton({ 
            label: 'Следующий способ👉👈', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Следующий способ👉👈/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Визуализация 🦄

Представляй, как Ты стоишь перед своей аудиторией и не можешь связать двух слов, Тебе задают колкие вопросы или смеются. 

Продумывай свои действия до мелочей.

Нужно принять и осознать, что такая ситуация — это не конец света🌝 

Главная цель — выработать внутренний защитный механизм и снизить порог чувствительности. 

Во мне столько этих механизмов 🤖 , ты бы знал, жаль я тебе пару шестеренок️ не могу подкинуть⚙`, 
     keyboard: Keyboard.keyboard([  	   
      [             
            Keyboard.textButton({ 
            label: 'Ещё способ👉👈', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
 
updates.hear(/Ещё способ👉👈/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Собственноручный удар 👊

Если ты боишься публичного провала, подколов или смешков, выйди и примись за дело раньше всех. 

Посмейся над собой громче всех, покажи свои минусы, но при этом не забудь про жирные плюсы. 

Ха-Ха-Ха... 

Видишь, даже я смеюсь над собой. 

И мне совсем не страшно😜`, 
     keyboard: Keyboard.keyboard([  	   
      [             
            Keyboard.textButton({ 
            label: 'Итог😃', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня всё, я устал👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Итог😃/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Преодоление страхов — это навык, который требует времени и терпения в освоении😌

В один момент избавиться от своего страха не получится, но если ты прошел все способы, которые я тебе предложил , значит, первый шаг сделан и колеса установлены на правильный путь, осталось только поехать. 

Ну так давай вместе и поедем преодолевать невозможное!! 😏`, 
     keyboard: Keyboard.keyboard([  	   
      [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]	   
   ])
   .inline(platform)
  }) 
  })
// страх //
// плохо //

// хорошо //
updates.hear(/Хорошо🙂$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я рад, что тебе хорошо! 

Но если ты решил обратиться за моей помощью, значит всё же есть небольшие проблемы 🤔

Сейчас мы это легко исправим, ведь я просто профессионал по улучшению настроения до максимума - "лучше всех" 😉

На что ты больше всего сейчас настроен?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Еда😋', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Музыка🎧', 
            color: Keyboard.PRIMARY_COLOR,
            }),
            Keyboard.textButton({ 
            label: 'Фильмы😍', 
            color: Keyboard.PRIMARY_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'Да мне всего хватает👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Фильмы😍/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Многие воспринимают просмотр фильма как идеальный способ расслабиться, но, оказывается, это не такое простое развлечение. 

Кино воздействует на наш мозг 🧠 и тело🤸‍♂

Я не знаю, кто что смотрит. 

У всех разные вкусы.

Но могу рассказать про самые распространенные жанры фильмов, и как они влияют на наши эмоции. 

Хочешь узнать про жанры🤓? 

А может хочешь узнать интересные фильмы, которые должны посмотреть все😊?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Жанры!💖', 
            color: Keyboard.POSITIVE_COLOR,
            }),     
            Keyboard.textButton({ 
            label: 'Подборка👀', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]	  
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Жанры!💖/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Существует очень много разных жанров. Но твой бот расскажет тебе только самые интересные. Начнём с чего-то страшного... Бу😲! Страшна? Я очень испугался😇 Догадался? Да, я расскажу про хорроры.

Просмотр фильма ужасов😱 провоцирует выброс в организм химических веществ, способствующих учащению сердцебиения, увеличению кровяного давления, а также выработке пота. 

Специалисты утверждают, что добротный фильм ужасов так же благотворно действует на организм, как и купание в ледяной проруби, а фанаты этого жанра меньше болеют и дольше живут😳

А всё потому, что страх в умеренных дозах ускоряет обмен веществ, улучшает питание мозга, усиливает сопротивляемость болезням 😄 

А, может, узнаешь про комедии?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Да, комедии топ☺', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Да, комедии топ☺/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Мне уже не терпиться рассказать тебе про весёлый жанр 😜

Всё дело в эндорфине — гормоне радости, который высвобождает смех; он избавляет нас от грусти 😔и раздражения😠 

Кроме того, многочисленные исследования показали, что смех помогает иммунной системе. 

Он способствует выработке антител, защищающих нас от вирусов и бактерий, а также увеличивает количество лейкоцитов, которые борются с воспалениями 🤕

и даже онкологическими заболеваниями🤒`, 
     keyboard: Keyboard.keyboard([   
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Подборка👀/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Фильмы :
1. Назад в будущее
2. Побег из Шоушенка
3. Всегда говори Да
4. Тихое место
5. Достать ножи
6. Криминальное чтиво
7. Зелёная миля
8. Один дома
9. Пираты Карибского моря
10. Властелин колец
11. Гарри Поттер
12. 1+1
Мультфильмы:
1. Гадкий я
2. Корпорация монстров
3. Шрек
4. Тайна Коко
5. Лило и Стич
6. Тайна игрушек
7. Братец медвежонок
8. Мулан
9. Королина в стране кошмаров
10. Холодное сердце
Вот и моя подборочка😊 

Если начнёшь что-то из этого смотреть, то не пожалеешь. 

До встречи, твой MoodCare 😎`, 
     keyboard: Keyboard.keyboard([   
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
// музыка //
updates.hear(/Музыка🎧/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я безумно люблю музыку 🎶 

Конечно, у всех разные вкусы, но бывает и такое, что в песнях очень много всего интересного и душевного. 

Именно поэтому перед тем, как сказать, что песня тебе не нравится , вникни в её слова🤔

Как только речь идёт о музыке, я сразу вспоминаю короля 👑... Интересно?😋`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'ОЧЕНЬ интересно🥰', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/ОЧЕНЬ интересно🥰/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Elvis Presley (Элвис Пресли)!!! 

Таких, как он, уже не существует. 

Какие песни😍 

Каждый раз хочется танцевать 💃 

Это явно звезда прошедшего времени, даже боты знают его, хотят так же танцевать и кайфовать. 

Хочешь услышать подборку его лучших треков??`, 
     keyboard: Keyboard.keyboard([     
            [             
            Keyboard.textButton({ 
            label: 'Да, пора танцевать🥳', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Да, пора танцевать🥳/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({
message: `1. «Голубые замшевые ботинки» (1956 год) 😏

“Blue Suede Shoes” была написана и записана Карлом Перкинсоном в 1955 году, а для Элвиса ее немного переработали и ускорили темп. Однако она провалилась в хит-парадах. А ведь сейчас именно “Blue Suede Shoes” самая узнаваемая песня Пресли, и имеет звание национального гимна рок-н-ролла в США. А вторая песня более быстрая, я очень кайфую от нее.

«Тюремный рок» (1957 год) 😲

“Jailhouse Rock” вышла одновременно с одноимённым фильмом с участием певца и продержалась на первом месте в чартах 7 недель, а сингл продался тиражом более 2 миллионов копий, получив дважды платиновый статус. Позже песня не раз поднималась на первое место, когда в США её исполнил Карл Перкинс, а в Британии - Джон Стамп😌 Теперь ты узнал много интересного про создание самых популярных песней короля 👑

Понравилось?🤗`, 
     keyboard: Keyboard.keyboard([     
            [             
            Keyboard.textButton({ 
            label: 'Обязателтно их послушаю😍', 
            color: Keyboard.POSITIVE_COLOR,
            })             
       ],
	  [             
            Keyboard.textButton({ 
            label: 'Нет,это немного не моё🙃', 
            color: Keyboard.NEGATIVE_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })

updates.hear(/Обязателтно их послушаю😍/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ attachment: [`photo469280198_457285935`,`photo469280198_457285934`],
message: `Тогда мне остаётся пожелать тебе отличного музыкального вечера!

А я пойду придумывать новые идеи для твоего хорошего настроения🤗`, 
     keyboard: Keyboard.keyboard([     
	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })  

updates.hear(/Нет,это немного не моё🙃/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Ничего страшного ☺

Ведь у всех разные музыкальные вкусы.

Я обязательно передам своим разработчикам, чтобы они расписали другие жанры🤗

Всего хорошего! 

Не грусти💖`, 
     keyboard: Keyboard.keyboard([     
	  [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
// музыка //

// еда //
updates.hear(/Еда😋$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Я тоже люблю покушать😋

А вот ты знаешь, сколько в день я могу потребить калорий? 

Ха, поверил? 

Я же бот, я питаюсь только твоими эмоциями 😈

И я снова пошутил. 

Так, а ты знаешь очень интересный факт? 

Наклейки на фрукты абсолютно съедобны!

Управление по санитарному надзору за качеством пищевых продуктов и медикаментов рекомендует мыть фрукты перед едой, но при этом не запрещает есть наклейки на них. 

Эти наклейки, а также клей для них одобрены FDA и безопасны для проглатывания! 

Однако я всё же не советую их есть, не думаю, что они сильно утолят твой голод😉`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Хочу ещё факты! 😏', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Хочу ещё факты! 😏/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `Довольно интересное исследование провели ученые🤔 

Жаль, что я бот 🤖 , а то я бы всю жизнь посвятил этому. 

Национальная академия наук показывает, что хранение помидоров при температуре ниже 12 °С препятствует их способности вырабатывать вещества, которые способствуют аромату и вкусу 🍅 

Все дело в том, что холодная температура снижает функциональность генов, которые отвечают за аромат и созревание плодов. 

По этой причине помидоры лучше всего хранить в затемненном помещении при комнатной температуре. 

Я уверен, что ты этого не знал😉 

Но если знаешь, то, может, следующий факт удивит тебя?`, 
     keyboard: Keyboard.keyboard([  
		[ 
            Keyboard.textButton({ 
            label: 'Сейчас увидим 😏', 
            color: Keyboard.POSITIVE_COLOR,
            })
      ],    
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
  
updates.hear(/Сейчас увидим 😏/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(context.text.includes(`📚`) && context.messagePayload.command !== `help`) return;
	return context.send({ 
message: `ШО-КО-ЛАД 🍫

Слюнки текут 🤤 
 
Про этот продукт я тоже могу что-то рассказать интересное. 

«Шоколад бодрит, если его есть, и успокаивает, если вдыхать его аромат, — говорит британский психолог Нил Мартин.

 — Но речь идет только о настоящем шоколаде». 
 
Эта сладкая штука, кроме того, что вкусная , но и может помочь успокоиться🤙 

Если бы я мог , я бы весь мир заставил нюхать шоколад 😂`, 
     keyboard: Keyboard.keyboard([     
      [             
            Keyboard.textButton({ 
            label: 'На сегодня хватит👋', 
            color: Keyboard.SECONDARY_COLOR,
            })             
       ]      
   ])
   .inline(platform)
  }) 
  })
// еда //
// хорошо //


























updates.hear(/chatid$/i,async (context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	return context.send(context.chatId)
	})
updates.hear(/log ([0-9]+)$/i,async (context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(user.rank < 4) return
	if(context.isChat) return context.send(`${nick}, данная команда доступна только в лс! ✉️`)
	if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
	let file = `${context.$match[1]}_log.txt`
  async function run() {
  await fs.writeFileSync(`${context.$match[1]}_log.txt`, `${logs[context.$match[1]].text}`);
  await context.sendDocument({
                        value: `${context.$match[1]}_log.txt`,
                        filename: `${file}`,
                    }, {
                        message: `${nick}, логи *id${base.bs[context.$match[1]].id}:`
                    }) 
  await fs.unlinkSync(`${context.$match[1]}_log.txt`);
}
run();
	
	})
	
updates.hear(/проф|профиль$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
let task = `` 


let profile = `\n🔎 ID: ${base.id[context.senderId].id}`

if(user.rank == 1 && user.hide == false) profile += `\n Пользователь`
if(user.rank > 4 && user.hide == false) profile += `\n👑 Администратор`
profile += `\n\n📗 Дата регистрации: ${user.reg}`
return context.send({message: `${nick}, твой профиль: ${profile}`,
      keyboard: Keyboard.keyboard([   
      [             
            Keyboard.textButton({ 
            label: 'Помощь', 
            color: Keyboard.PRIMARY_COLOR,
            })             
       ]      
   ])
     .inline(platform)

})
})

updates.hear(/getbaninfo ([0-9]+)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = context.$match[1]
if(base.bs[task].banned == false) return context.send(`${nick}, пользователь не находится в бане! 😇`)
task = base.bs[context.$match[1]]
return context.send(`${nick}, пользователь *id${task.id} (${task.nick}) в бане на ${nols(task.bandays)}:${nols(task.banhours)}:${nols(task.banminutes)}:${nols(task.banseconds)} ⌚
⛔ Забанил: *id${base.bs[task.bannedby].id} (${base.bs[task.bannedby].nick})
❓ Причина: ${task.banreason}`)
	
})

updates.hear(/get ([0-9]+)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let admtext = `${nick}, информация о пользователе «*id${base.bs[context.$match[1]].id} (${base.bs[context.$match[1]].nick})»:`
let guser = base.bs[context.$match[1]]
let task = `` 

let profile = `\n🔎 ID: ${base.id[guser.id].id}`
profile += `\n👀 Ник: ${guser.nick}`
profile += `\n?? ВК ид: ${guser.id}`
if(guser.rank > 4) profile += `\n👑 Администратор`
profile += `\n📗 Дата регистрации: ${guser.reg}`
if(guser.banned == false) profile += `\n❎ Забанен: Нет`
if(guser.banned == true) profile += `\n❎ Забанен: Да`
profile += `\n⌚Последняя активнось: ${guser.lastactivity}`
return context.send({message: `${admtext} ${profile}`
})
})

updates.hear(/разбан ([0-9]+)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = base.bs[context.$match[1]]
if(task.banned == false) return context.send(`${nick}, пользователь не находится в бане! ??`)
task.banned = false
task.banreason = ``
task.bandays = 0
task.banseconds = 0
task.banminutes = 0
task.banhours = 0
vk.api.messages.send({user_id: task.id, message: `🔔 Администратор ${nick} — разблокировал вас! 😇`})
return context.send(`${nick}, пользователь *id${task.id} (${task.nick}) разбанен.`)
})


updates.hear(/бан ([0-9]+) ([0-9]+)с (.*)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = context.$match[1]
if(base.bs[context.$match[1]].banned == true) return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) уже находится в бане! 😯`)
let srok = context.$match[2]
base.bs[task].banseconds = Number(srok)
base.bs[task].banned = true
base.bs[task].bannedby = base.id[context.senderId].id
base.bs[task].banreason = `${context.$match[3]}`
vk.api.messages.send({user_id: base.bs[task].id, message: `🔔 Администратор *id${user.id} (${user.nick}) заблокировал вас на 00:00:00:${srok}\nПричина: ${context.$match[3]}`})
return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) заблокирован на 00:00:00:${srok}`)
})

updates.hear(/бан ([0-9]+) ([0-9]+)м (.*)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = context.$match[1]
if(base.bs[context.$match[1]].banned == true) return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) уже находится в бане! 😯`)
let srok = context.$match[2]
base.bs[task].banminutes = Number(srok)
base.bs[task].banned = true
base.bs[task].bannedby = base.id[context.senderId].id
base.bs[task].banreason = `${context.$match[3]}`
vk.api.messages.send({user_id: base.bs[task].id, message: `🔔 Администратор *id${user.id} (${user.nick}) заблокировал вас на 00:00:${srok}:00\nПричина: ${context.$match[3]}`})
return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) заблокирован на 00:00:${srok}:00`)
})

updates.hear(/бан ([0-9]+) ([0-9]+)ч (.*)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = context.$match[1]
if(base.bs[context.$match[1]].banned == true) return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) уже находится в бане! 😯`)
let srok = context.$match[2]
base.bs[task].banhours = Number(srok)
base.bs[task].banned = true
base.bs[task].bannedby = base.id[context.senderId].id
base.bs[task].banreason = `${context.$match[3]}`
vk.api.messages.send({user_id: base.bs[task].id, message: `🔔 Администратор *id${user.id} (${user.nick}) заблокировал вас на 00:${srok}:00:00\nПричина: ${context.$match[3]}`})
return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) заблокирован на 00:${srok}:00:00`)
})

updates.hear(/бан ([0-9]+) ([0-9]+)д (.*)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 4) return
if(!base.bs[context.$match[1]]) return context.send(`${nick}, ид указан неверно! 🔍`)
let task = context.$match[1]
if(base.bs[context.$match[1]].banned == true) return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) уже находится в бане! 😯`)
let srok = context.$match[2]
base.bs[task].bandays = Number(srok)
base.bs[task].banned = true
base.bs[task].bannedby = base.id[context.senderId].id
base.bs[task].banreason = `${context.$match[3]}`
vk.api.messages.send({user_id: base.bs[task].id, message: `🔔 Администратор *id${user.id} (${user.nick}) заблокировал вас на ${srok}:00:00:00\nПричина: ${context.$match[3]}`})
return context.send(`${nick}, пользователь *id${base.bs[task].id} (${base.bs[task].nick}) заблокирован на ${srok}:00:00:00`)
})


updates.hear(/delete$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	let uid = base.id[context.senderId].id
	delete base.bs[uid]
	delete base.id[context.senderId]
	return context.send(`Test >> Ты удалён с базы`)

})

updates.hear(/@sendtext (.*)$/i,(context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 10) return
let text = context.$match[1]
for(let o in base.bs){
if(base.bs[o].notifications == true) {
	vk.api.messages.send({user_id: base.bs[o].id, message: `${context.$match[1]}`
  })
}
}
for(let b in chats.ids){
	if(chats.ids[b].active !== 3) {
		vk.api.messages.send({chat_id: chats.ids[b].id, message: `${context.$match[1]}\n`, 
  })
	}
}
})

updates.hear(/getid (.*)$/i, async (context) => {
	let platform = false
	if(context.isChat) platform = true
	let user = base.bs[base.id[context.senderId].id]
	let nick = ``
	if(user.nicknotify == false) {
		nick = `${base.bs[base.id[context.senderId].id].nick}`
	}
	if(user.nicknotify == true) {
		nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
	}
	let myclan = clan[base.bs[base.id[context.senderId].id].clan]
	if(user.rank < 4) return
	let res = context.$match[1]
	while(res.includes(`vk.com`)){
		res = res.replace(`vk.com`,``)
	}
	while(res.includes(`/`)){
		res = res.replace(`/`,``)
	}
	while(res.includes(`https:`)){
		res = res.replace(`https:`,``)
	}
	try{
		var mine = await vk.api.users.get({
			user_ids: res
		});
	} catch(e){
		return context.send(`${nick}, вы указали некорректный ID.`)
	}
	if(!base.id[mine[0].id]) return context.send(`${nick}, данный ID не зарегистрирован.`)
	return context.send(
		`
		VK ID: *id${mine[0].id} (${mine[0].id}) | BOT ID: *id${mine[0].id} (${base.id[mine[0].id].id})
		`
		)
})

updates.hear(/\/(getid)$/i,async (context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(user.rank < 10) return
if(!context.forwards[0] && !context.hasReplyMessage) return context.send(`Пересланное сообщение не найдено.`)
if(context.forwards[0]) {
    let ASS1 = context.forwards[0].senderId
    if(!base.id[ASS1]) context.send("Данный пользователь не зарегистрирован!")
    let ASS = base.id[context.forwards[0].senderId].id
    return context.send(`VK ID: *id${ASS1} (${ASS1}) | BOT ID: *id${ASS1} (${ASS})`);
} 
if(context.hasReplyMessage) {
    let ASS1 = context.replyMessage.senderId
    if(!id.id[ASS1]) context.send("Данный пользователь не зарегистрирован!")
    let ASS = base.id[context.replyMessage.senderId].id
    if(ASS1 == -181892065) return context.send(`Вычислить меня хочешь пидОр? Ха-ха, я тебя щас вычислю и приеду к те!`)
    return context.send(`VK ID: *id${ASS1} (${ASS1}) | GAME ID: *id${ASS1} (${ASS})`)
}
}); //Получить айди

setInterval(function(){ 
for(let o in base.bs){
if(base.bs[o].tlgrmcode > 0) {
base.bs[o].tlgrmcode = Number(0)
}
}
}, 120000); // обновление кода

updates.hear(/tlgrm$/i, (context) => {

let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = ``
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
if(context.isChat) return context.send(`${nick}, для использования данной команды перейдите в личное сообщение со мной :((`)
if(user.tlgrmid < 1) {
let code = user.tlgrmcode
if(user.tlgrmcode < 1) {
code = getRandomInRange(1, 500000)
user.tlgrmcode = Number(code)
}
return context.send(`${nick}, у Вас нет привязанного телеграмма.
😙 Для привязки отправьте: <<привязать ${base.id[context.senderId].id} ${code}>>. нашему телеграмм боту: 
t.me/${thistelegabot}

@${thistelegabot}`)
}
return context.send(`${nick}, у вас привязан телеграмм аккаунт, для просмотра возможностей отправьте команду: <</menu>> Телеграмм боту:
t.me/${thistelegabot}

@${thistelegabot}
	`)
}) //Получение инструкций по привязке телеги к вк


/*  КОМАНДЫ ТЕЛЕГРАММ БОТА */   
bot.on('message', async (ctx, next) => {
	if(!tlgrm[ctx.from.id]) {
		tlgrm[ctx.from.id] = {
			"vkid": 0,
			"tlgrmid": ctx.from.id,
			"code": 0,
			"payacces": false,
			"codetype": 0
		}
	 ctx.reply(`${ctx.from.first_name}, Приветствую тебя! При помощи меня ты сможешь привязать свой аккаунт в vk.com/moodcare к своему телеграмм аккаунту и получить плюшки.
😙 Для получения инструкций по привязке напиши vk.com/moodcare смс с текстом: <</tlgrm>>`)
	}
    await next();
})

bot.hears(/привязать ([0-9]+) ([0-9]+)/i, (ctx) => {
if(tlgrm[ctx.from.id].vkid > 0) return ctx.reply(`${ctx.from.first_name}, у Вас уже привязан аккаунт - ${base.bs[tlgrm[ctx.from.id].vkid].nick}, используй: <<отвязать>>, для отвязки 😙`)
if(!base.bs[ctx.match[1]]) return ctx.reply(`${ctx.from.first_name}, <<${ctx.match[1]}>> - Не найден в базе данных\n😙 Для получения инструкций по привязке напиши vk.com/moodcare смс с текстом: <</tlgrm>>`)
if(base.bs[ctx.match[1]].tlgrmid > 0) return ctx.reply(`${ctx.from.first_name}, аккаунт ${base.bs[ctx.match[1]].nick} - уже привязан к другому телеграмм аккаунту 😙`)
let vod = Number(ctx.match[2])
let polzcod = Number(base.bs[ctx.match[1]].tlgrmcode)
if(polzcod !== vod) return ctx.reply(`${ctx.from.first_name}, код ${ctx.match[2]} - не является верным, отправьте <</tlgrm>> Боту повторно, для получения нового кода 😙`)
tlgrm[ctx.from.id].vkid = ctx.match[1]
base.bs[ctx.match[1]].tlgrmid = ctx.from.id
vk.api.messages.send({user_id: base.bs[ctx.match[1]].id, message: `🌀 Telegram аккаунт <<${ctx.from.first_name}>> - Был успешно привязан к вашему аккаунту  ✅`})
vk.api.messages.send({chat_id: adminchat, message: `[#LOG]\n🌀 ${base.bs[tlgrm[ctx.from.id].vkid].nick} Успешно привязал аккаунт к телеграму!\n🆔 ${ctx.match[1]}`})
return ctx.reply(`${ctx.from.first_name}, аккаунт ${base.bs[ctx.match[1]].nick} - успешно привязан к вашему телеграмм аккаунту, напишите vk.com/moodcare команду <</tlgrm>>, для просмотра доп.возможностей или команду /menu в этот диалог для управления своим аккаунтом. 😙`)
})
const menu = new TelegrafInlineMenu(ctx => `${ctx.from.first_name}, Используй кнопки для выбора нужно раздела`)
const block = new TelegrafInlineMenu(ctx => `${ctx.from.first_name}, используя кнопки ты можешь временно отключить/включить свой аккаунт в moodcare.`)
const settings = new TelegrafInlineMenu(ctx => `${ctx.from.first_name}, используй кнопки для настройки своего аккаунта.`)

var btn1 = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Помощь'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

var pomozh = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Кликер'}],
      [{ text: 'Помощь'}]
    ]
  })
};

var btnpomozh = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
      [{ text: 'Хорошо🙂'}],
	  [{ text: 'Так себе😐'}],
	  [{ text: 'Плохо😔'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

var btntaksebe = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
      [{ text: 'Грусть 😢'}],
	  [{ text: 'Злость 😤'}],
	  [{ text: 'Устал...'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

var btngrust = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
      [{ text: 'Красный'}],
	  [{ text: 'Синий'}],
	  [{ text: 'Зелёный'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

var btnzlostt = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
      [{ text: 'Разобраться в проблеме🤔'}],
	  [{ text: 'Правильное дыхание😌'}],
	  [{ text: 'Отвлечение💯'}],
	  [{ text: 'Мне уже легче👋🏻'}]
    ]
  })
};

var btnzlost = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
      [{ text: 'Давай дальше!🙂'}],
	  [{ text: 'Мне уже легче👋🏻'}]
    ]
  })
};

var btnred = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Продолжить'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

var btngreen = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Я попробовал и мне помогло😉'}],
	  [{ text: 'Мне не помогло😒'}],
	  [{ text: 'На сегодня всё, я устал👋'}]
    ]
  })
};

// синий //
var btnblue = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Спасибо, мне уже лучше😄'}],
	  [{ text: 'Не помогает😒'}]
    ]
  })
};

var btnnepoogaet = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Очень хочу!😇'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnkonechnonet = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: '😱'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnsmail = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Помощь'}]
    ]
  })
};

var btnochenhhochu = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да👌😄'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnfilms = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Жанры!💖'}],
	  [{ text: 'Подборка👀'}],
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btncomedis = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да, комедии топ☺'}],
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btndacomedis = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};
// синий //

var btnploho = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Семья👪'}],
	  [{ text: 'Учёба📖'}],
	  [{ text: 'Не хочу рассказывать😶'}]
    ]
  })
};

var btnucheba = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Лень😴'}],
	  [{ text: 'Страх😣'}],
	  [{ text: 'Я стараюсь, но ничего не получается😥'}],
	  [{ text: 'Не хочу рассказывать😶'}]
    ]
  })
};

var btniastaraus = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Конечно! 😊'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnkonechnoo = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Эйнштейн плохого не посоветует 😎'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnenchtein = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Я буду стараться! 💫'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnustrahh = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Интересный способ💡'}],
	  [{ text: 'Вкусняшки 🍬'}],
	  [{ text: 'Я и так не боюсь уже👋'}]
    ]
  })
};

var btnintsposob = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Очень интересно😍'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnvkusn = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Сладкое'}],
	  [{ text: 'Солёное'}],
	  [{ text: 'Кислое'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnochint = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Другой способ👉👈'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};
var btnsemia = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да!😌'}],
	  [{ text: 'Не очень😔'}],
	  [{ text: 'Не хочу рассказывать😶'}]
    ]
  })
};

var btnhorosho = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Покушать😋'}],
	  [{ text: 'Музыка🎧'}],
	  [{ text: 'Фильмы😍'}],
	  [{ text: 'Мне всего хватает👋'}]
    ]
  })
};

var btnpokushat = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Хочу ещё факты!😏'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnprodol = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Факт про объятья'}],
	  [{ text: 'Хватит фактов'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnclick = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Жмяк'}],
	  [{ text: 'Я устал👋'}]
    ]
  })
};

var btnhvfaktov = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Ничего нового'}],
	  [{ text: 'Узнал много нового🤗'}]
    ]
  })
};

var btnnichegonvg = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btndrugoisposp = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Следующий способ👉👈'}],
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btnsledsposb = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Ещё способ👉👈'}],
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btneshesposbn = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Итог😃'}],
	  [{ text: 'Спасибо за помощь🤗'}]
    ]
  })
};

var btnianelublumusic = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Пойду посмотрю😊'}]
    ]
  })
};

var btnmnenepomoglo = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да, ты прав, это может помочь'}],
	  [{ text: 'Я не люблю музыку'}],
	  [{ text: 'Я устал👋'}]
    ]
  })
};

var btnmnogonovogo = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnustal = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Мало сна 😩'}],
	  [{ text: 'Много работы 💼'}],
	  [{ text: 'Недостаток разнообразия в жизни⏳'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};


var btnmalosna = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Хочу узнать! 😍'}],
	  [{ text: 'Сон для слабаков👋'}]
    ]
  })
};

var btneshophakntu = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Сейчас увидим 😏'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnseichasuvidem = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnmusnmusic = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'ОЧЕНЬ интересно🥰'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnocinter = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да, пора танцевать🥳'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btndaporatanch = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Обязателтно послушаю😍'}],
	  [{ text: 'Нет,это немного не моё🙃'}]
    ]
  })
};

var btnentnemoe = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Помощь'}]
    ]
  })
};

var btnrazobratsa = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Я готов! 💪'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btniagotobv = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Дальше✨'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btndalse = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Нет😌'}],
	  [{ text: 'Да😔'}]
    ]
  })
};

var btnday = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Спасибо за советы☺'}]
    ]
  })
};

var btnmnhochuuznat = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Конечно нет! 😓'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

// лень //
var btnlenin = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да🤤'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btndaun = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Давай😋'}],
	  [{ text: 'Мне лень😑'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btnhochuuznatprabilo = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Да, помогло🤗'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};

var btndavay = {
  reply_markup: JSON.stringify({
	resize_keyboard: true,
    keyboard: [
	  [{ text: 'Хочу узнать правило'}],
	  [{ text: 'На сегодня хватит👋'}]
    ]
  })
};
// лень //

menu.setCommand('menu')
block.setCommand('sdjjdsjdjs')


//телеграм кнопки

menu.button(`Начать`, `cmzmczmcmzmkck`, {
  doFunc: ctx => {
  	if(tlgrm[ctx.from.id].vkid < 1) return ctx.reply(`${ctx.from.id}, у Вас не привязан аккаунт.
😙 Для получения инструкций по привязке напиши vk.com/moodcare смс с текстом: <</tlgrm>>`)
  	let user = base.bs[tlgrm[ctx.from.id].vkid]
let task = `` 
return ctx.reply(`👋 Хей, ${ctx.from.first_name}!
✨ Меня зовут ${thisbotname}! И я твой эмоциональный помощник
😉 Тебе хочется улучшить своё эмоциональное состояние?Тогда ты по адресу!

Если ты честно будешь отвечать на мои вопросы, то вскоре я тебе помогу☺

Жми на кнопку "Помощь"`, btn1)
  }
})


menu.urlButton('moodcare', `vk.com/moodcare`)


bot.use(menu.init())
bot.startPolling()

//телеграм кнопки

bot.hears(/Помощь/, (ctx) => {
  return ctx.reply(`Я рад, что ты заинтересован(а) мной! Начнём с самого простого: как ты себя сейчас чувствуешь?`, btnpomozh);

});

bot.hears(/На сегодня всё, я устал👋|Мне уже легче👋🏻|На сегодня хватит👋|Мне всего хватает👋|Я устал👋|Я и так не боюсь уже👋|Спасибо за помощь🤗|Нет, спасибо😜/, (ctx) => {
  return ctx.reply(`Всегда к твоим услугам! Когда снова буду нужен, просто напиши мне "Помощь" ✨
  
  А пока можешь отдохнуть и поиграть в кликер😉`, pomozh);

});

bot.hears(/Так себе😐/, (ctx) => {
  return ctx.reply(`Расскажи, что ты сейчас испытываешь? Я буду бороться за твое отличное настроение!`, btntaksebe);

});

// грусть //
bot.hears(/Грусть 😢/, (ctx) => {
  return ctx.reply(`На протяжении всей жизни мы встречаемся со многими преградами и испытаниями. 

Ты можешь грустить по разным причинам, но я этого не хочу. 

Оглянись вокруг, ведь жизнь прекрасна, цени каждый ее момент!🌸 

Не убедил? 

Тогда выбери цвет, который тебе больше всего нравится в списке!`, btngrust);

});

bot.hears(/Красный/, (ctx) => {
  return ctx.reply(`Отличный выбор! 
 
А ты знаешь, что красный цвет- цвет любви?❤

Я думаю, что тебе стоит пойти к близкому человеку, который может тебя поддержать и подарить свою любовь.

Я бы обнял тебя, эх, жаль, что я так далеко😔`, btnred);

});

bot.hears(/Зеленый|Зелёный/, (ctx) => {
  return ctx.reply(`Зеленый…💚

Цвет спокойствия и умиротворения. 

Это прекрасный выбор!😊 

А ты когда-нибудь пробовал медитировать?🤔 

Попробуй, тебе станет легче!

1. Найди тихое место
2. Удобно сядь расслабь все свои части тела, выпрями спину 😌
3. Сфокусируйся на своем дыхании. Вдыхать нужно носом, а выдыхать ртом, при этом дыша грудной клеткой.
4. С каждым выдохом отпускай все мысли, которые приходят в голову😇

Медитация может занять от 5 до 40 минут, но помни, что главное качество, а не количество. 

Также могу предложить тебе включить расслабляющую музыку, это поможет настроиться на дыхании.

Обязательно попробуй эту практику, она очень хорошо влияет на наше эмоциональное состояние 🙃`, btngreen);

});
// грусть //

// злость //
bot.hears(/Злость 😤/, (ctx) => {
  return ctx.reply(`Ох, друг, как я тебя понимаю!

Знаешь, очень трудно справиться со злостью. 

Но ты молодец, что обратился ко мне, ведь это значит, что ты хочешь бороться с этой неприятной эмоцией. 

Я предлагаю тебе несколько вариантов, которые могут тебе помочь🤗 

Выбери один из них...`, btnzlostt);

});

bot.hears(/Разобраться в проблеме🤔/, (ctx) => {
  return ctx.reply(`А ты отважный, если решил все же решить проблему😯 
  
Это правильный поступок, который действительно может тебе помочь. 

К сожалению, сами проблемы не решаются, тебе придется над ними работать.

Ты согласен со мной, друг?`, btnrazobratsa);

});

bot.hears(/Я готов! 💪/, (ctx) => {
  return ctx.reply(`Тогда давай разбираться🤔 
  
Твоя проблема, из-за которой ты злишься, может иметь абсолютно разный источник происхождения. 

Она может быть связана с семьей, друзьями, учебой или вовсе с каким-то пустяком. 

Но если ты злишься, значит, что ты явно чем-то очень сильно недоволен.

Позволь дать тебе несколько советов:

1) Определи свою причину злости. Например:нереализованность, усталость, душевные терзания.
2) Оцени здраво, насколько она весома.
3) Подумай, как можно ее решить.
`, btniagotobv);

});

bot.hears(/Дальше✨/, (ctx) => {
  return ctx.reply(`Что ж, если ты определил проблему, пора с ней бороться👀 
  
Возможно, ты сейчас злишься на кого-то, возможно - на себя. 

В жизни бывают разные ситуации, но твои порывы злости могут обидеть кого-то, или же испортить тебе настроение, возможно, окружающим, ведь злость - очень сильная эмоциональная реакция (в большинстве случаев- бессмысленна).

Да, иногда стоит позлиться на самого себя, это поможет тебе расти и исправлять свои ошибки. 

Но злиться на кого-то- не имеет смысла. 

Не стоит тратить на это время⏳ 

В данной ситуации ты должен решить :принимать поступок, который совершил человек, и попытаться понять его, или же понять, что твоя злость на этого человека действительно обоснована и имеет причину💭

Тогда уже попытайся аргументированно переубедить его.

Велика ли причина твоей злости? 📊
`, btndalse);

});

bot.hears(/Нет😌/, (ctx) => {
  return ctx.reply(`Я очень рад! 
  
Значит, причина не очень значима, и портить себе настроение не стоит. 

Просто выдохни и отпусти эту плохую эмоцию😌 

Прости себя или человека, который вызвал твой гнев. 

Не трать жизнь на такой негатив, который заставляет чувствовать себя плохо.

А сейчас расслабься и подумай о чем-то приятном, займись чем-то важным, интересным. 

Ведь жизни слишком коротка, чтобы тратить ее на злость! 🤗
`, btnentnemoe);

});

bot.hears(/Да😔/, (ctx) => {
  return ctx.reply(`Мне очень жаль, что твоя злость возникла из-за весомой причины☹ 
  
Надеюсь, тебя не очень сильно обидели.

Но сначала хочу предложить тебе подумать:прав ли ты (если считаешь, что виноват другой человек). Попробуй встать на место своего оппонента и постарайся понять его позицию, может, он поступил так из-за трудных жизненных обстоятельств?😪

Сначала разберись в ситуации, а уже потом вини других, попробуй разобраться в себе.

Если тебя действительно сильно обидели и разозлили, то стоит подумать, нужно ли дальше общаться с этим человеком, или стоит огородить себя от него🙅‍♂🙅

Возможно, человек сделал это случайно, и в скором времени объяснит всю ситуацию. 

А если это было специально, то, скорее всего, такой человек не будет приносить тебе счастья в жизнь💔 (тем более, если это не первый раз).
`, btnday);

});

bot.hears(/Спасибо за советы☺/, (ctx) => {
  return ctx.reply(`Главное - сначала все обдумать, а уже потом выпускать свою злость. 
  
Подумай еще немного, возможно, неправ ты😧

Я очень надеюсь, что помог тебе. 

Желаю спокойствия и рассудительности☺ Обращайся ко мне, я всегда рад пообщаться с тобой!❤
`, btnentnemoe);

});
// злость //

// Устал... //
bot.hears(/Устал.../, (ctx) => {
  return ctx.reply(`Я тебя понимаю. 
  
Это очень неприятное ощущение😔 

Иногда кажется, что весь мир настроен против тебя, что тебя никто не понимает. 

Выдохни, ведь у тебя есть я, и я могу тебе помочь.`, btnzlost);

});
// Устал... //

bot.hears(/Не хочу рассказывать😶/, (ctx) => {
  return ctx.reply(`Ничего страшного, когда будешь готов поделиться, возвращайся, я буду ждать!❤
  
  А пока можешь отдохнуть и поиграть в кликер😉`, pomozh);

});

// плохо //
bot.hears(/Плохо😔/, (ctx) => {
  return ctx.reply(`Ужас! 
  
😱Как только ты это сказал, я сразу почувствовал эту боль в себе.

Хоть я и бот, но уж поверь, я знаю, что такое ошибка в коде💻

Но речь сейчас не обо мне.

Вернёмся к твоей проблеме🤔

Я уверен, что если порассуждать, то она окажется не так уж и страшна! 

Что тебя опечалило, мой друг?`, btnploho);

});

bot.hears(/Учёба📖/, (ctx) => {
  return ctx.reply(`Как же я тебя понимаю... 
  
Учёба... 

Даже страшно произносить😱 

Когда я был ботиком, который даже поздороваться не мог, то было очень тяжело.

На меня все нападали, что-то от меня хотели, а я не знал, чем помочь😒

Но сейчас, спустя долгие годы учёбы и тренировок, я готов удивлять мир!!! 

Ну что же тебе мешает это сделать?`, btnucheba);

});

bot.hears(/Я стараюсь, но ничего не получается😥/, (ctx) => {
  return ctx.reply(`Какой ты молодец! 
  
Всем бы твоё упорство.

Я вот тоже постоянно тружусь, но иногда случаются и ошибки😔 

Безусловно, это очень расстраивает, но ведь без ошибок не бывает успеха!🤗

Они дают нам колоссальный опыт, направляют на верный жизненный путь и, конечно, помогают развиваться. 

Так что никогда не бойся совершать ошибки!

Веришь мне?`, btniastaraus);

});

bot.hears(/Конечно! 😊/, (ctx) => {
  return ctx.reply(`Как приятно☺ 
  
Спасибо! 

Но вернёмся к ошибкам.

Во-первых, не стоит сильно переживать. 

Хотя некоторое волнение вполне естественно, но не дайте ему привести тебя к чувству разочарования, потерянности и к стрессу😓 

Нужно осознать, что допускать ошибки вполне нормально.

Альберт Эйнштейн когда-то сказал: «Тот, кто никогда не ошибался, никогда и не испытывал ничего нового». 

Мы растём только путем совершения ошибок и извлечения уроков из этого!`, btnkonechnoo);

});

bot.hears(/Эйнштейн плохого не посоветует 😎/, (ctx) => {
  return ctx.reply(`Ещё бы! 
  
Я вообще его кумир🥰

Так, про пользу ошибок мы поговорили, теперь стоит сказать про их принятие.

Каждый по-разному видит ситуацию и находит различные её решения. 

Человек, который занимается своим развитием, принимает свои ошибки, берет на себя ответственность за провалы и двигается дальше, не только быстрее растет – он приобретает большее уважение окружающих🌸

Главное, что нам нужно осознать, что все люди ошибаются и будут ошибаться всегда. 

Но при этом важно отставлять в сторону свое эго, признавать эти ошибки, двигаться по жизни дальше с высоко поднятой головой и ни в коем случае не опускать руки❗

Рано или поздно у тебя всё получится! 

Не сомневайся в этом и никогда не останавливайся на полпути к достижению своей цели!`, btnenchtein);

});

bot.hears(/Я буду стараться! 💫/, (ctx) => {
  return ctx.reply(`Я рад, что сумел помочь тебе! 
  
Продолжай покорять высота и идти к своей мечте! 

Я всегда желаю тебе только добра💖

Ты, наверное, устал. Отдохни и посмотри это милое видео, которое точно вызовет улыбку🤗

https://www.youtube.com/watch?v=Q-Nw8ZNeCcg`, btnnichegonvg);

});

bot.hears(/Страх😣/, (ctx) => {
  return ctx.reply(`Все чего-то боятся. 
  
Нет ни одного человека или бота, который был бы бесстрашным. 

Я готов тебе помочь в этом, но не забывай, что у тебя также есть друзья и близкие, которые помогут избавиться от страха. 

А вот интересный факт про страх🎭 

Он заставляет забывать, насколько ты силён и компетентен.

Страх сводит на нет твою уверенность. 

Возникающее чувство беспомощности вынуждает верить, что нет ресурса, чтобы перетерпеть лишения и оправиться от невзгод.

Как видишь, страх делает так, что мы забываем, что умеем и бьёт по самообладанию. 

Давай же исправим это, и вскоре ты поймёшь, что в учёбе страх совсем не является помощником!

Какой способ тебе поможет расслабиться и забыть про свой страх?`, btnustrahh);

});

bot.hears(/Интересный способ💡/, (ctx) => {
  return ctx.reply(`Готов удивляться? 😏
  
Ты когда-то слышал про способ "избавление страха с бумагой"? 

Звучит странно, но не бойся, я тебе сейчас всё расскажу! 

Тебе же ещё интересно?`, btnintsposob);

});

bot.hears(/Очень интересно😍/, (ctx) => {
  return ctx.reply(`Ого! 
  
Я уже вижу, как ты серьёзно собрался избавится от страха, так давай же быстрее начнём! 

Способ с бумагой довольно интересный, вот тебе полная информация о нем :"Проведите полный анализ вашего страха, задавая вопросы и визуализируя ответы на бумаге".

Такая проработка ситуации до выступления поможет притупить страх во время самого действия, подсознание будет вытаскивать из памяти ассоциативные картинки, и появится чувство защищенности.`, btnochint);

});

bot.hears(/Другой способ👉👈/, (ctx) => {
  return ctx.reply(`Позволяй себе иногда бояться😳

Не стоит держать себя в слишком жестких рамках 😐 Постоянный стресс способствует большим срывам. Если Ты чувствуешь легкий страх, а не паническую атаку- значит Ты живой.

У меня тоже есть сейчас небольшой страх..

Я боюсь, что мои навыки тебе не помогут, но я выполняю те способы, которые предлагаю и знаю точно, что в итоге тебе станет лучше😇`, btndrugoisposp);

});

bot.hears(/Следующий способ👉👈/, (ctx) => {
  return ctx.reply(`Визуализация 🦄

Представляй, как Ты стоишь перед своей аудиторией и не можешь связать двух слов, Тебе задают колкие вопросы или смеются.

Продумывай свои действия до мелочей.

Нужно принять и осознать, что такая ситуация — это не конец света🌝

Главная цель — выработать внутренний защитный механизм и снизить порог чувствительности.

Во мне столько этих механизмов 🤖 , ты бы знал, жаль я тебе пару шестеренок не могу подкинуть⚙`, btnsledsposb);

});

bot.hears(/Ещё способ👉👈/, (ctx) => {
  return ctx.reply(`Собственноручный удар 👊

Если ты боишься публичного провала, подколов или смешков, выйди и примись за дело раньше всех.

Посмейся над собой громче всех, покажи свои минусы, но при этом не забудь про жирные плюсы.

Ха-Ха-Ха...

Видишь, даже я смеюсь над собой.

И мне совсем не страшно😜`, btneshesposbn);

});

bot.hears(/Итог😃/, (ctx) => {
  return ctx.reply(`Преодоление страхов — это навык, который требует времени и терпения в освоении😌

В один момент избавиться от своего страха не получится, но если ты прошел все способы, которые я тебе предложил , значит, первый шаг сделан и колеса установлены на правильный путь, осталось только поехать.

Ну так давай вместе и поедем преодолевать невозможное!! 😏`, btnnichegonvg);

});
// плохо //

bot.hears(/Семья👪/, (ctx) => {
  return ctx.reply(`Семья - важнейший из феноменов, сопровождающий человека в течение всей его жизни. 
  
Значимость ее влияния на личность, ее сложность, многогранность и проблемность очень велики!

Семейные проблемы бывают у каждого. 

Даже у меня со своим создателем бывают личное недопонимание😢

И я тоже очень расстраиваюсь. 

Но они быстро решаемы, если каждая сторона ссоры будет хотеть этого и искать компромиссы. 

Ведь семья-самое дорогое, что у нас есть❤

Они никогда не посоветуют плохого, так как желают тебе лишь счастья!

Ты доверяешь своей семье?`, btnsemia);

});

bot.hears(/Хорошо🙂/, (ctx) => {
  return ctx.reply(`Я рад, что тебе хорошо! 
  
Но если ты решил обратиться за моей помощью, значит всё же есть небольшие проблемы 🤔

Сейчас мы это легко исправим, ведь я просто профессионал по улучшению настроения до максимума - "лучше всех" 😉

На что ты больше всего сейчас настроен?`, btnhorosho);

});

bot.hears(/Покушать😋/, (ctx) => {
  return ctx.reply(`Я тоже люблю покушать😋
  
А вот ты знаешь, сколько в день я могу потребить калорий? 

Ха, поверил? 

Я же бот, я питаюсь только твоими эмоциями 😈

И я снова пошутил. 

Так, а ты знаешь очень интересный факт? Наклейки на фрукты абсолютно съедобны!

Управление по санитарному надзору за качеством пищевых продуктов и медикаментов рекомендует мыть фрукты перед едой, но при этом не запрещает есть наклейки на них. 

Эти наклейки, а также клей для них одобрены FDA и безопасны для проглатывания! 

Однако я всё же не советую их есть, не думаю, что они сильно утолят твой голод😉`, btnpokushat);

});

bot.hears(/Хочу ещё факты!😏/, (ctx) => {
  return ctx.reply(`Довольно интересное исследование провели ученые🤔 
  
Жаль, что я бот 🤖 , а то я бы всю жизнь посвятил этому. 

Национальная академия наук показывает, что хранение помидоров при температуре ниже 12 °С препятствует их способности вырабатывать вещества, которые способствуют аромату и вкусу 🍅 

Все дело в том, что холодная температура снижает функциональность генов, которые отвечают за аромат и созревание плодов. 

По этой причине помидоры лучше всего хранить в затемненном помещении при комнатной температуре. 

Я уверен, что ты этого не знал😉 Но если знаешь, то, может, следующий факт удивит тебя?`, btneshophakntu);

});

bot.hears(/Сейчас увидим 😏/, (ctx) => {
  return ctx.reply(`ШО-КО-ЛАД 🍫 ... 
  
Слюнки текут 🤤 

Про этот продукт я тоже могу что-то рассказать интересное. 

«Шоколад бодрит, если его есть, и успокаивает, если вдыхать его аромат, — говорит британский психолог Нил Мартин.

 — Но речь идет только о настоящем шоколаде». 
 
Эта сладкая штука, кроме того, что вкусная , но и может помочь успокоиться🤙 

Если бы я мог , я бы весь мир заставил нюхать шоколад 😂`, btnseichasuvidem);

});

bot.hears(/Музыка🎧/, (ctx) => {
  return ctx.reply(`Я безумно люблю музыку 🎶 
  
Конечно, у всех разные вкусы, но бывает и такое, что в песнях очень много всего интересного и душевного. 

Именно поэтому перед тем, как сказать, что песня тебе не нравится , вникни в её слова🤔

Как только речь идёт о музыке, я сразу вспоминаю короля 👑

Интересно?😋`, btnmusnmusic);

});

bot.hears(/ОЧЕНЬ интересно🥰/, (ctx) => {
  return ctx.reply(`Elvis Presley (Элвис Пресли)!!! 
  
Таких, как он, уже не существует. 

Какие песни😍 

Каждый раз хочется танцевать 💃 

Это явно звезда прошедшего времени, даже боты знают его, хотят так же танцевать и кайфовать. 

Хочешь услышать подборку его лучших треков??`, btnocinter);

});

bot.hears(/Да, пора танцевать🥳/, (ctx) => {
  return ctx.reply(`1. «Голубые замшевые ботинки» (1956 год) 😏

“Blue Suede Shoes” была написана и записана Карлом Перкинсоном в 1955 году, а для Элвиса ее немного переработали и ускорили темп. Однако она провалилась в хит-парадах. А ведь сейчас именно “Blue Suede Shoes” самая узнаваемая песня Пресли, и имеет звание национального гимна рок-н-ролла в США. А вторая песня более быстрая, я очень кайфую от нее.

«Тюремный рок» (1957 год) 😲

“Jailhouse Rock” вышла одновременно с одноимённым фильмом с участием певца и продержалась на первом месте в чартах 7 недель, а сингл продался тиражом более 2 миллионов копий, получив дважды платиновый статус. Позже песня не раз поднималась на первое место, когда в США её исполнил Карл Перкинс, а в Британии - Джон Стамп😌 Теперь ты узнал много интересного про создание самых популярных песней короля 👑

Понравилось?🤗
`, btndaporatanch);

});

bot.hears(/Нет,это немного не моё🙃/, (ctx) => {
  return ctx.reply(`Ничего страшного ☺
  
Ведь у всех разные музыкальные вкусы. 

Я обязательно передам своим разработчикам, чтобы они расписали другие жанры🤗

Всего хорошего! 

Не грусти💖
`, btnentnemoe);

});

bot.hears(/Обязателтно послушаю😍/, (ctx) => {
  return ctx.reply(`Здорово!☺

Тогда мне остаётся пожелать тебе отличного музыкального вечера!

А я пойду придумывать новые идеи для твоего хорошего настроения🤗
`, btnentnemoe);

});

bot.hears(/Хватит фактов/, (ctx) => {
  return ctx.reply(`Как тебе факты, узнал что-то новое?`, btnhvfaktov);

});

bot.hears(/Продолжить/, (ctx) => {
  return ctx.reply(`Я надеюсь, что ты все же обнял кого-то🤗

Вот тебе несколько интересный факт об объятьях:

Обнимая кого-то, мы чувствуем себя лучше.
Когда мы заключаем другого человека в объятия, выделяется окситоцин (его так и называют — «гормон объятий»), благодаря которому мы по-настоящему ощущаем тепло и нежность💕

Если хочешь узнать ещё пару фактов об объятьях, жми кнопку "Факт про объятья"`, btnprodol);

});

bot.hears(/Ничего нового/, (ctx) => {
  return ctx.reply(`Вот это ты знаток!😱 
  
Я передам своим разработчикам, что им стоит придумать факты поинтереснее, чтобы уж точно удивить тебя. 

Надеюсь, я хоть как-то тебе помог! Всегда обращайся, буду рад помочь. 

Хорошего настроения🙃 
`, btnnichegonvg);

});

bot.hears(/Сладкое/, (ctx) => {
  return ctx.reply(`Сладости эквивалентны объятиям, человеческому теплу, поддержке. 
  
Когда наши эмоции не находят отклика в сердцах окружающих, тогда мы ищем утешения в ближайшей кондитерской. 

С точки зрения эмоций, когда мы едим сладкое, то чувствуем заботу — как будто кто-то о нас заботится. 

В разумном количестве оно успокаивает ум и тело и дает ощущение стабильности`, btnnichegonvg);

});

bot.hears(/Солёное/, (ctx) => {
  return ctx.reply(`Соленый вкус способствует сохранению энергии. 

Надо бы и мне пойти, съесть что-то солененькое. 

Мне нужно очень много энергии, чтобы помочь тебе справится с твоими отрицательнымы эмоциями и достичь гармонии.`, btnnichegonvg);

});

bot.hears(/Кислое/, (ctx) => {
  return ctx.reply(`Кислый вкус способствует сосредоточению ума. 
  
Когда в жизни нам не хватает устойчивости и концентрации, нас тянет на кислое. 

Избыток же этого вкуса делает нас самих «кислыми». 

Представьте себе недозревший виноград!`, btnnichegonvg);

});

bot.hears(/Узнал много нового🤗/, (ctx) => {
  return ctx.reply(`Ну что ж, теперь ты знаешь несколько интересных фактов про объятия🤗. 

Больше обнимайся и физически взаимодействуй с любимыми людьми, это улучшит твое эмоциональное состояние.

А ты знаешь, что младенцы, лишенные в течение длительного времени физического контакта с людьми, деградируют и в конце концов погибают😔.

Вот на сколько важен физический контакт, ведь без него у тебя может начаться так называемый «сенсорный голод», он очень схож с пищевым голодом, причем не только в биологическом, а и в психологическом и социальном плане.
`, btnmnogonovogo);

});

bot.hears(/Вкусняшки 🍬/, (ctx) => {
  return ctx.reply(`Ммм... Вкусняшка.... 🤤🤤🤤 
  
Жаль боты питаются только энергией, а так бы я с радостью с тобой испробовал разные вкусняшки🍑. 
  
Что ты больше любишь из этого выбора?`, btnvkusn);

});

bot.hears(/Давай дальше!🙂/, (ctx) => {
  return ctx.reply(`Чувство усталости является одним из самых распространённых симптомов. 
  
Однако борьба с ним не вызывает особой сложности☺

Усталость является нормальным явлением после физической нагрузки, длительного стресса или отсутствия сна. 

Для начала тебе нужно просто расслабиться, сесть поудобнее и выбрать из списка то, что могло вызвать твоё утомление:`, btnustal);

});

bot.hears(/Мало сна 😩/, (ctx) => {
  return ctx.reply(`Как же так?😱 
  
Вот знал бы ты, как я люблю спать! 

Именно поэтому у меня крайне редко случаются сбои в работе внутренних систем😎 

Не забывай, что и твои системы тоже нуждаются в постоянном уходе, иначе могут возникнуть большие проблемы. 

Именно поэтому я разработал несколько полезных фактов про пользу сна.`, btnmalosna);

});

bot.hears(/Я попробовал и мне помогло😉/, (ctx) => {
  return ctx.reply(`А ты быстро учишься. 
  
Надеюсь, я тебе помог! 

Всегда обращайся, буду рад помочь😉

Хорошего настроения❤`, btnnichegonvg);

});

bot.hears(/Мне не помогло😒/, (ctx) => {
  return ctx.reply(`Я надеюсь ты все же попробовал медитировать. 
  
Если медитация тебе не помогла, то с удовольствием хочу предложить тебе послушать музыку🎧

Все любят разные жанры, поэтому, думаю, тебе стоит открыть свой плейлист и послушать что-нибудь для поднятия настроения. 

Просто расслабься. 

Пой🎤
Танцуй🕺 

Ты можешь делать что угодно. 

Просто отдайся музыке, ведь она может подарить тебе прекрасное настроение😜`, btnmnenepomoglo);

});

bot.hears(/Да, ты прав, это может помочь/, (ctx) => {
  return ctx.reply(`Музыка- это искусство.

Похоже что ты ценитель искусства, если музыка тебе помогает😏

Надеюсь, я тебе помог!

Всегда обращайся, буду рад помочь.

Хорошего настроения❤ `, btnnichegonvg);

});

bot.hears(/Я не люблю музыку/, (ctx) => {
  return ctx.reply(`Тогда могу посоветовать тебе посмотреть какой-нибудь фильм. 
  
А ты знаешь, что в фильме "Пираты Карибского моря: На краю света" есть одна примечательная вещь - Пиратский кодекс, который служил сводом указаний для пиратов на все случаи жизни. 

Он появился только в одной сцене и лишь на пару минут, но на его создание ушло в разы больше времени😅 

К процессу воссоздания подобной реликвии были привлечены эксперты по древним рукописям, а реквизиторы добавляли в нее все, что было можно: пятна от крови и вина, шелуха от семечек и пепел табака. 

А сама эта махина весила целых 36 кг😱! 

Вот тебе и повод посмотреть этот фильм! 

Но ты, конечно, можешь выбрать и другой.`, btnianelublumusic);

});

bot.hears(/Пойду посмотрю😊/, (ctx) => {
  return ctx.reply(`Приятного тебе просмотра. 
  
Я всегда рад тебе помочь! 

Хорошего настроения❤`, btnnichegonvg);

});

bot.hears(/Сон для слабаков👋/, (ctx) => {
  return ctx.reply(`Ошибочное утверждение😣 
  
Без сна наш организм неработоспособен.

Наверное,ты просто сегодня не выспался😴

Тебе стоит отдохнуть.

Когда закончишь – возвращайся,я буду ждать тебя здесь❤`, btnnichegonvg);

});

bot.hears(/Очень хочу😍/, (ctx) => {
  return ctx.reply(`Недосып чреват серьезными последствиями, начиная от легкого невроза и риска появления лишних сантиметров на талии, и заканчивая более серьезными проблемами — болезнями сердца и повышенным риском заработать сахарный диабет. 
  
  Да и в социальном плане в недосыпе нет никаких плюсов: нервоз может привести к разрыву межличностных отношений💔
  
  Разве об этом ты мечтал?`, btnmnhochuuznat);

});

// лень //
bot.hears(/Лень😴/, (ctx) => {
  return ctx.reply(`Каждый в какой-то момент говорит себе: " мне так лень, может завтра все сделаю, а сегодня полежу, посмотрю сериальчик".

Не спорю, порой очень хочется забить на все и делать то, что тебе хочется.

Хочешь приведу похожие примеры из литературы ?`, btnlenin);

});

bot.hears(/Да🤤/, (ctx) => {
  return ctx.reply(` Довольно много примером описано в нашей русской литературе📘 
  
Один из самых явных примеров "Обломов". 
  
Одна фамилия даёт о себе знать. Это тот человек, который начал жить с ленью, и закончил с нею жить🤢
  
Прожил он однако не очень интересно и долго , а знаешь почему? 
  
Да, ему помешала лень😐
  
Но мы же с тобой не такие, обязательно будем жить лучше и докажем чего мы стоим миру! 

Давай начнём?`, btndaun);

});

bot.hears(/Давай😋/, (ctx) => {
  return ctx.reply(`Я очень рад, что ты так серьёзно взялся за дело. 

Мы уберём эту лень, всеми моими "электроштучками", обещаю! 

Но пока я ещё на далеко отошёл от русской литературы, то приведу одно очень интересное стихотворение Тургенева "Завтра! Завтра!

... Как пуст, и вял, и ничтожен почти всякий прожитой день! Как мало следов оставляет он за собою! Как бессмысленно глупо пробежали эти часы за часами!

И между тем человеку хочется существовать; он дорожит жизнью, он надеется на нее, на себя, на будущее... О, каких благ он ждет от будущего!

Но почему же он воображает, что другие, грядущие дни не будут похожи на этот только что прожитой день?

Да он этого и не воображает. Он вообще не любит размышлять — и хорошо делает.

«Вот завтра, завтра!» — утешает он себя, пока это «завтра» не свалит его в могилу.

Ну, а раз в могиле — поневоле размышлять перестанешь.

Ну, согласись, что после прочтения, уже что-то задело твою душу и уже не очень хочется лениться😚

Наверное, есть некие причины по которым ты ленишься. 

Давай же я предложу тебе одно интересное и важное правило🤗

Если ты будешь его выполнять, то лень проявляться не будет.`, btndavay);

});

bot.hears(/Хочу узнать правило/, (ctx) => {
  return ctx.reply(`Правило 25 минут🙃

Первое что я говорю своему мозгу: «Давай всего 25 минут поделаем, а потом поваляемся?». 

25 минут — это не так много, что становится намного легче сесть за компьютер и приступить к делу. 

Главное именно 25 минут, не пол часа, не час, они звучат уже устрашающе долго. 

А через 5-10 минут я уже забываю про лень и спокойно выполняю свою работу. 

Вот видишь, даже боты что-то делают, чтобы их не съедала лень!😏 

Помогло?`, btnhochuuznatprabilo);

});

bot.hears(/Да, помогло🤗/, (ctx) => {
  return ctx.reply(`Еее, оуу да🤗!! 
  
Я счастлив, что моя помощь оказалась полезной. 

А теперь давай договоримся, что ты будешь выполнять этот способ, и увидишь, что в учёбе, на работе все станет намного лучше. 

Я тебе обещаю💪!`, btnmnogonovogo);

});

bot.hears(/Мне лень😑/, (ctx) => {
  return ctx.reply(`Ох-хо-хо... 

Что же делать... 

Но если ты пришёл сюда, значит тебе не безразлично то, что лень это плохо. 

Значит давай-ка ещё подумаем. 

Тебе стоит вернуться назад. 

То что я рассказываю, должно помочь, ну пожалуйста, ради меня, всеми любимого соседа MoodCare😏`, btnmnogonovogo);

});
// лень //

// синий //
bot.hears(/Синий/, (ctx) => {
  return ctx.reply(`Интересненько🙃 

А ты знаешь, что синий цвет в психологии- это цвет мудрых, рассудительных людей, стремящихся находить мирные решения проблем💙 

Да-да, это может звучать как комплимент. 

Попробуй подумать о причине своей грусти.

Выпиши в блокноте все, что тебя сейчас беспокоит, и подумай, как ты можешь это исправить🤔 

Это действительно может помочь, обязательно попробуй этот метод. 

Вдруг окажется, что ты грустишь по пустякам, которые совсем не стоят твоего внимания?😃`, btnblue);

});

bot.hears(/Не помогает😒/, (ctx) => {
  return ctx.reply(`Может, твоя грусть не проходит, если еще больше думать о её причине. 

Тогда тебе срочно нужно отвлечься😈! 

Предлагаю принять тебе ванную или душ🛀🚿 (девчонкам сделать масочки🙈). 

Хочешь узнать чем полезен прием ванны для здоровья?`, btnnepoogaet);

});

bot.hears(/Очень хочу!😇/, (ctx) => {
  return ctx.reply(`-Исследования показали, что прием ванн значительно снижает кровяное давление и уменьшает риск развития инсульта, что очень актуально для людей с гипертонией. Также ванны улучшают зрение и благоприятно влияют на здоровье почек🙀

-Теплая ванна — что-то вроде хорошей тренировки для сердца❤: она заставляет его работать быстрее, тем самым улучшая кровообращение и усиливая потоотделение. А пот, как известно, помогает выводить токсины, вирусы и бактерии из организма😌.

-Теплая ванна согревает воспаленные мышцы, блокирует болевые рецепторы и облегчает боль. Холодная ванна после упражнений снижает уровень молочной кислоты, что позволяет быстро восстановить мышцы💪

-Исследование в Университете Вулвергемптона показало, что ежедневный прием ванны, обычно в конце дня, значительно улучшает настроение, уменьшает проявления стресса и тревоги☺

-Особенно полезны ванны не только при мышечных болях, но и при ревматизме, так как в воде уменьшается воздействие на суставы✌

-Хороший ночной сон тесно связан со всем, что происходит в нашем организме: от того, сколько мы весим, как себя чувствуем, как быстро восстанавливаемся и т.д. Теплая ванна перед сном, как известно, помогает расслабиться и быстрее уснуть😴 

Только не ложитесь спать сразу после процедуры, иначе можно добиться противоположного эффекта👎

Хочешь узнать правила приема ванны для расслабления?`, btnochenhhochu);

});

bot.hears(/Хочу узнать! 😍/, (ctx) => {
  return ctx.reply(`Вот и я так думаю!

Знаешь, сон - самое прекрасное место на Земле✨

Ведь там ты можешь увидеть просто фантастические виды🌆, окунуться в потрясающие и просто невообразимые истории🕵, воплотить свои мечты в реальность🌸

Видишь, как классно спать?

Я, конечно, понимаю, что сейчас у всех очень много работы и других забот,что банально может не хватать времени для того, чтобы выспаться🥺

Но сколько есть несчастных людей,которые испытывают недомогание просто из-за нехватки сна?!

Зачастую, у них проявляется сонливость, излишняя злость и печаль, проблемы со здоровьем, а также трудности с пониманием происходящего😰`, btnkonechnonet);

});

bot.hears(/😱/, (ctx) => {
  return ctx.reply(`Да-да, вот и я о том же.

Надеюсь теперь ты понял всю важность сна...

Оаоа🥱

От таких разговоров меня резко поклонило в сон.

Ох, это работа так выматывает.

Думаю, ты тоже устал.

Не хочешь ли немного отдохнуть?

Но прежде посмотри это чудесное видео👇

По-моему, это лучший флешмоб😂

https://youtu.be/MjRa3m1uI-4`, btnsmail);

});

bot.hears(/Да👌😄/, (ctx) => {
  return ctx.reply(`Принимать ванну следует не ранее, чем через два часа после еды (хотя многие любят есть вкусняшки во время этой процедуры🍓🍔). 

Ванна для релаксации перед сном рекомендована людям, у которых имеются трудности с засыпанием.

Температура воды должна быть близкой к температуре тела – около 37 °C. 

Такая температура приятна для кожи и лучше всего подходит для расслабления мышц в воде🛀 

Не нужно делать слишком горячую воду, поскольку она оказывает нагрузку на сердце. 

Длительность приема ванны – 20–30 минут⏰

На время процедуры стоит отложить все дела, убрать телефон, выключить телевизор и полностью сосредоточиться на процессе релаксации. 

Для большего эффекта можно включить медитативную или классическую музыку, отключить электрический (или приглушить его) свет и зажечь свечи🔥 

Также в ванную можно высыпать морскую соль и налить немного эфирного масла для лучшего эффекта🍀`, btnnichegonvg);

});

bot.hears(/Спасибо за совет!😄/, (ctx) => {
  return ctx.reply(`Надеюсь, сейчас ты собираешься принять ванную (хотя можно и теплый душ, главное- расслабься).

Отпусти все мысли и отдыхай😙, наслаждайся теплой водой.

Всегда рад тебе помочь. Хорошего настроения❤`, btnnichegonvg);

});

bot.hears(/Спасибо, мне уже лучше😄/, (ctx) => {
  return ctx.reply(`Вот ты молодец! 
  
Думаю, многие «глобальные» проблемы не такие уж глобальные, если их обдумать😉 

Не стоит тратить свое время на грусть и переживания, тем более, если оказывается, что это пустяки. 

Я рад, что помог тебе. 

Хорошего настроения!❤`, btnnichegonvg);

});

bot.hears(/Да!😌/, (ctx) => {
  return ctx.reply(`Замечательно!) 

Значит проблем осталось намного меньше. 

Тебе надо просто успокоиться и поговорить со своими близкими. 

А пока можешь посмотреть это милое видео

https://youtu.be/Y6ID8OEcEpM
`, btnnichegonvg);

});

bot.hears(/Фильмы😍/, (ctx) => {
  return ctx.reply(`Многие воспринимают просмотр фильма как идеальный способ расслабиться, но, оказывается, это не такое простое развлечение. 

Кино воздействует на наш мозг 🧠 и тело🤸‍♂

Я не знаю, кто что смотрит. 

У всех разные вкусы.

Но могу рассказать про самые распространенные жанры фильмов, и как они влияют на наши эмоции. 

Хочешь узнать про жанры🤓? 

А может хочешь узнать интересные фильмы, которые должны посмотреть все😊?
`, btnfilms);

});

bot.hears(/Жанры!💖/, (ctx) => {
  return ctx.reply(`Существует очень много разных жанров. Но твой бот расскажет тебе только самые интересные. Начнём с чего-то страшного... Бу😲! Страшна? Я очень испугался😇 Догадался? Да, я расскажу про хорроры.

Просмотр фильма ужасов😱 провоцирует выброс в организм химических веществ, способствующих учащению сердцебиения, увеличению кровяного давления, а также выработке пота. 

Специалисты утверждают, что добротный фильм ужасов так же благотворно действует на организм, как и купание в ледяной проруби, а фанаты этого жанра меньше болеют и дольше живут😳

А всё потому, что страх в умеренных дозах ускоряет обмен веществ, улучшает питание мозга, усиливает сопротивляемость болезням 😄 

А, может, узнаешь про комедии?
`, btncomedis);

});

bot.hears(/Да, комедии топ☺/, (ctx) => {
  return ctx.reply(`Мне уже не терпиться рассказать тебе про весёлый жанр 😜

Всё дело в эндорфине — гормоне радости, который высвобождает смех; он избавляет нас от грусти 😔и раздражения😠 

Кроме того, многочисленные исследования показали, что смех помогает иммунной системе. 

Он способствует выработке антител, защищающих нас от вирусов и бактерий, а также увеличивает количество лейкоцитов, которые борются с воспалениями 🤕

и даже онкологическими заболеваниями🤒
`, btndacomedis);

});

bot.hears(/Подборка👀/, (ctx) => {
  return ctx.reply(`Фильмы :
1. Назад в будущее
2. Побег из Шоушенка
3. Всегда говори Да
4. Тихое место
5. Достать ножи
6. Криминальное чтиво
7. Зелёная миля
8. Один дома
9. Пираты Карибского моря
10. Властелин колец
11. Гарри Поттер
12. 1+1
Мультфильмы:
1. Гадкий я
2. Корпорация монстров
3. Шрек
4. Тайна Коко
5. Лило и Стич
6. Тайна игрушек
7. Братец медвежонок
8. Мулан
9. Королина в стране кошмаров
10. Холодное сердце
Вот и моя подборочка😊 

Если начнёшь что-то из этого смотреть, то не пожалеешь. 

До встречи, твой MoodCare 😎
`, btndacomedis);

});

// синий //

bot.hears(/Факт про объятья/, (ctx) => {
  var arr = ['Обнимая кого-то, мы чувствуем себя лучше. Когда мы заключаем другого человека в объятия, выделяется окситоцин (его так и называют — «гормон объятий»), благодаря которому мы по-настоящему ощущаем тепло и нежность💕',
  'Объятия снижают давление Гормоны, которые выделяются в организме, пока мы наслаждаемся объятиями, позитивно влияют не только на чувства, но и на соматическое здоровье😊',
  'Объятия защищают сердце от болезней. Крепче прижимайтесь друг к другу! Ведь объятия с любимыми — это бальзам для вашего сердца в прямом и переносном смысле.',
  'Объятия — естественный антистрессовый препарат. Чувствуете, что вы уже на последнем издыхании? Выжаты, как лимон, по которому еще и проехался асфальтоукладчик?😒 Срочно отправляйтесь на поиски того, кого можно затискать! Объятия резко снижают количество гормона стресса, кортизола.'];
  var rand = Math.round( Math.random() * 3);
         ctx.reply( arr[ rand ] );
});


// кликер //
bot.hears(/Жмяк/, (ctx) => {
let user = base.bs[tlgrm[ctx.from.id].vkid]
user.click += Number(1)
return ctx.reply(`Теперь у вас кликов: ${user.click}`, btnclick);

});

bot.hears(/Кликер/, (ctx) => {
let user = base.bs[tlgrm[ctx.from.id].vkid]
return ctx.reply(`Ты уже накликал: ${user.click} кликов

Чтобы начать играть, жми кнопку "Жмяк`, btnclick);

});
// кликер //
/* ↑↑↑ */
/*  КОМАНДЫ ТЕЛЕГРАММ БОТА */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     																											

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              																									
/* РЕАКЦИЯ НА НЕНАЙДЕННУЮ КОМАНДУ */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 																														                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
updates.hear(/([^])/, (context) => {
let platform = false
if(context.isChat) platform = true
let user = base.bs[base.id[context.senderId].id]
let nick = `` 
if(user.nicknotify == false) {
	nick = `${base.bs[base.id[context.senderId].id].nick}`
}
if(user.nicknotify == true) {
	nick = `*id${context.senderId} (${base.bs[base.id[context.senderId].id].nick})`
}
let myclan = clan[base.bs[base.id[context.senderId].id].clan]
    if(!context.isChat) {
let task = ``
let ans = `Слишком сложно, я вас не понимаю😢

	Извините, этот раздел ещё в разработке, приношу свои извинения за доставленые неудобства

Пожалуйста, выберете один из предложенных вариантов ответа🙏`
if(context.text.includes(`tl`)) {
	task += `\n⠀➖ /tlgrm`
}
if(context.text.includes(`по`)) {
	task += `\n⠀➖ Помощь`
}
if(context.text.includes(`пмщ`)) {
	task += `\n⠀➖ Помощь`
}
if(task !== ``) ans += `\n▶ Возможно вы имели в виду:${task}`
context.send(ans)
vk.api.messages.send({chat_id: adminchat, message: `[#LOG]\n✅ @id${user.id}(${user.nick}) ввёл неверную команду, возможно ему нужна помощь!\n🆔 ${base.id[context.senderId].id}`}) 
  	return context.send({ 
message: ``, sticker_id: 12482})
    }
})

// Created by https://vk.com/nuriboy

/*======================================Консоль=======================================*/
async function run() {
    await vk.updates.startPolling();
    console.log(chalk.red(">_ Started"));
    console.log(chalk.red.bold.underline(`> Created by https://vk.com/nuriboy`))
}
 
run().catch(console.error);
// Получаем UnixDate в секундах
function getUnix() {
    return Math.floor(Date.now() / 1000);
}
bot.launch()    
/*=========================================================================================*/																																																																		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 