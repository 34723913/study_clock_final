class StudyTimer {
    constructor() {
        this.studyTime = 0;
        this.nextAlarmTime = 0;
        this.shortBreakTime = 0;
        this.longBreakTime = 0;
        this.quoteTime = 120; // 2分鐘換一次名言
        this.isRunning = false;
        this.isShortBreak = false;
        this.isLongBreak = false;
        this.alarmActive = false;
        this.maxAlarmTime = 0;
        this.customAudio = null;

        this.quotes = [
            "一日之計在於晨，一年之計在於春，一生之計在於勤。",
            "一句溫暖的話，就向往別人身上灑香水，自己也會沾到兩三滴。",
            "一旦我和敵人交上了朋友，也就擊敗了敵人。",
            "一定要抓緊每一秒鐘的時間來學習，要明白學習不是學生的專利。",
            "一個人不怕錯，就怕不改過，改錯並不難。",
            "一個人年輕的時候，不會思索，他將一事無成。",
            "一個人的快樂，不是因為他擁有的多，而是因為他計較的少。",
            "一個人的價值，應該看他貢獻什麼，而不是取得什麼",
            "一個人的價值在於他的才華，而不在他的衣飾",
            "一個真實的好友，勝過千百個泛泛之交。",
            "一個缺口的杯子，換一個角度仍然是圓的。",
            "一經打擊就灰心洩氣的人，永遠是失敗者。",
            "一點小疏忽，可能會釀成大禍害。",
            "人人是貴人，事事是要事。",
            "人不可貌相，海水不可斗量。",
            "人之氣質，本難變化，唯讀書則可變化氣質。",
            "人生不一定球球好球，但是有歷練的強打者，隨時都可以揮棒",
            "人生不可能總是順心如意，但持續朝著陽光走，影子就會躲在後面，刺眼，卻是對的方向。",
            "人生生活的真諦，是做一些有用的事。",
            "人生有許多事情，正如船後的波紋，總要過後才覺得美",
            "人生有夢，築夢踏實。",
            "人生沒有所有權，只有人生的使用權。",
            "人生若能減低慾望，生活便沒有什麼值得計較。",
            "人生最大的成就，是要從失敗中站起來。",
            "人的心是一畝田，土地沒有播下種子，也不會長出好果實。",
            "人的命運掌握在自己手中。",
            "人的眼睛長在前面，只看到別人的缺點，卻看不見自己的缺點。",
            "人非聖賢，熟能無過。",
            "人們缺乏的不是力量，而是意志",
            "人們愈少思考，說的話便愈多",
            "人退一步，愛人寬一寸，就會很快樂。",
            "人逢喜事精神爽。",
            "人逢順境不逞強，身處逆境不示弱。",
            "人應該相信自己，但不可執著。",
            "刀要石磨，人要事磨",
            "三人行必有我師焉，擇其善者而從之；其不善者而改之。",
            "三日不讀書便覺言語無味面目可憎。",
            "三個臭皮匠，勝過一個諸葛亮。",
            "上帝拿走了你一樣東西，說不定是把更好的給你",
            "凡流汗播種，必歡呼收割。",
            "千里之路必須從第一步開始，聖人的境域也是凡夫起步。",
            "口說好話、心想好意、身行好事。",
            "大丈夫能屈能伸。",
            "大膽假設，小心求證。",
            "小小的微笑，大大的增進人和人之間的感情。",
            "小事不做，大事難成",
            "工欲善其事，必先利其器。",
            "不入虎穴，焉得虎子",
            "不幸是一所最好的大學。",
            "不要小看自己，因為人有無限的可能",
            "不要只會問別人能為你做什麼，而要問自己能為別人做什麼。",
            "不要因為一次挫折，就放棄你原來決心要達到的目標",
            "不要灰心喪志，打得開鎖的總是你試的最後一把鑰匙。",
            "不要害怕迷惘 應該害怕的是， 除了迷惘 什麼也不做",
            "不揭人未愈的傷口，是真正的慈悲",
            "不敢下決定的人命運總是掌握在別人手裡。",
            "不經一事，不長一智。",
            "不聽老人言，吃虧在眼前。",
            "勿以善小而不為，勿以惡小而為之。",
            "天有不測風雲，人有旦夕禍福。",
            "太陽光大，父母恩大，君子量大，小人氣大。",
            "少壯不努力，老大徒傷悲",
            "心中之智慧，優於掌中之金錢。",
            "手心向下是助人，手心向上是求人，助人快樂，求人痛苦。",
            "世上有兩件事不能等：一是孝順，二是行善。",
            "世界上真正有價值的事物，需要熱情和犧牲才能完成。",
            "世界愈悲傷，我要愈快樂。當人心愈險惡，我要愈善良。當挫折來了，我要挺身面對。我要做一個樂觀向上，不退縮不屈不饒不怨天尤人的人，勇敢去接受人生所有挑戰的人",
            "付出愛就是福，能消除煩惱就是慧。",
            "以前不會，不代表現在不會，現在不會，不代表將來永遠都不會。",
            "以親切的心去關懷別人，這份愛便是造福的種子。",
            "只說好話、心想好意、自行好事。",
            "可愛之人必有可惡之處，可惡之人必有可愛之處。",
            "台上一分鐘，台下十年功。",
            "四神湯：知足、感恩、善解、包容。",
            "失足尚可挽回，失言無法補救",
            "失敗並不可恥，可恥的是無法記取教訓，從失敗中重新站起來。",
            "布施如播種，以歡喜心滋潤種子，才會發芽。",
            "未來社會中，文盲並非不識字的人，而是不能再學習的人。",
            "甘於平凡才能偉大，人生沒有永遠的巔峰。",
            "甘願做，歡喜受。",
            "生命中最值得投資的是自己。",
            "生命像一股激流，沒有岩石和暗礁，就激不起美麗的浪花",
            "生活沒有目的，猶如航海缺少羅盤。",
            "生活沒有目標，就像航海沒有指南針。",
            "生氣就是拿別人的過錯來懲罰自己。",
            "立志在堅定不在銳，成功在久不在速。",
            "任何一件事都是從一個決心開始。",
            "先為別人的快樂著想，是超人；先為自己的快樂著想，是凡人；使別人不快樂，自己也不快樂的，是笨人。",
            "再怎麼偉大的道理，說多了也會變成陳腔濫調",
            "吃飯是為了活著，但活著不是為了吃飯。",
            "在我的字典裏沒有難這個字",
            "地上種了菜，就不易長草；心中有善，就不易生惡。",
            "多一份付出，就能多一份成就。",
            "多不如話少，話少不如話好。",
            "好的開始是成功的一半",
            "如果有所付出，就想要有所回報，會招來煩惱。",
            "如果我們輕易放棄我們該做的，世界同樣也會放棄我們。",
            "成功的人找方法，失敗的人找藉口。",
            "成功的人是抓住時機的人",
            "成功的唯一密訣，是堅持到最後一分鐘。",
            "成功是一分的天才，加上九十九分的努力",
            "成功是優點的發揮、失敗是缺點的累績",
            "成功等於「艱苦的勤勞」加「正確的方法」加「少說空話」。",
            "成績滿分不是幸福人生的保證，紀律與自律才是成功的基石。",
            "有時當思無時苦，好天要積雨來糧。",
            "自己害自己，莫過於亂發脾氣。",
            "自信是成功的第一秘訣",
            "克服困難不要被困難克服。",
            "克服恐懼的最佳對策，就是勇敢地面對它。",
            "即使輸掉了一切，也不要輸掉微笑",
            "君子立恆志，小人恆立志。",
            "君子有成人之美。",
            "困難的背後，隱藏著通往成功的階梯。",
            "希望不一定都能實現，但動手去做，就多了一份可能性。",
            "忍小忿而就大謀。",
            "快樂的秘訣，不是做你所喜歜的事，而是喜歡你所做的事。",
            "我們有兩隻耳朵和一個嘴巴，目的在多聽少說",
            "我們得記得，只有智能是不夠的，智能加上品格，才是真正的目標。",
            "我們最大的敵人不是別人可能是自己。",
            "把你的燈提高一點，好照亮更多人的路。",
            "把活著的每一天都看作是生命的最後一天",
            "改變自己是自救，影響別人是救人。",
            "每天都是生命中的一張白紙，每一件事都是一篇生動的文章。",
            "求人不如求己。",
            "良藥苦口利於病，忠言逆耳利於行。",
            "見賢思齊，見不賢內自省。",
            "身在福中不知福",
            "事非經過不知難。",
            "受人點水之恩，需當湧泉以報。",
            "和你一同笑過的人，你可能把他忘掉；但是和你一同哭過的人，你卻永遠不忘",
            "幸福的人不是因為擁有的多，而是對所有平凡的事物都能感受得多。",
            "所謂的厲害 ，就是讓這個世界因為有了我 ，會有一點點差別",
            "明日復明日，明日何其多！我生待明日，萬事成蹉跎。",
            "東西可以亂吃，話不可以亂說。",
            "欣賞別人就是莊嚴自己。",
            "知之為知之，不知為不知，是知也。",
            "知足的人心量開闊，心量開闊，對人對事就不會計較。",
            "知其一，不知其二。",
            "知錯能改，善莫大焉。",
            "知識的基礎必須建立在閱讀上面。",
            "知識是一座寶庫，而實踐是開啟寶庫的鑰匙。",
            "知識要用心體會，才能變成自己的智慧。",
            "知識就是力量。",
            "近朱者赤，近墨者黑。",
            "金錢不是萬能，沒錢卻是萬萬不能。",
            "青雲有路志為梯，學海無涯勤是岸。",
            "信心、毅力、勇氣三者具備，則天下沒有做不成的事。",
            "信心是命運的主宰。",
            "前事不忘，後事之師。",
            "前腳走，後腳放，意即：昨天的事就讓他過去，把心神專注於今天該做的事。",
            "屋寬不如心寬",
            "活著就要學習，學習不是為了活著。",
            "流汗的錢，不會跑；流汗的孩子，不會倒。",
            "為人處世要小心、細心，但不要「小心眼」。",
            "為自己找藉口的人，永遠不會進步。",
            "為學好像金字塔，要能廣大要能高。",
            "皇天不負苦心人。",
            "看別人不順眼，是自己的修養不夠。",
            "苦難是人生的老師",
            "要用心不要煩心。",
            "要在生活中學習真本事，它永遠學不完。",
            "要批評別人時，先想想看自己是否完美無缺。",
            "要社會不淘汰你，你首先要不放棄自己。",
            "要為成功找方法，不要為失敗找藉口。",
            "要得到別人的信任，自己必須先值得信賴。",
            "面對光明，陰影就在我們身後。",
            "原諒別人就是善待自己。",
            "弱者坐待時機，強者製造時機",
            "時時好心就是時時好日。",
            "書本像降落傘一樣，要打開了才有作用。",
            "書到用時方恨少。",
            "書最大的影響力，就是可以刺激讀者自我思考。",
            "真正的友誼猶如健康，只有失去時，才會意識到它的價值。",
            "真正的衰退不是白髮和皺紋，而是停止了學習與進取",
            "真正的愛心，是照顧好自己的這顆心。",
            "真理不需要用色彩包裝；美麗不需要用文筆描畫",
            "站在半路比走到終點更辛苦。",
            "能善用時間的人，必能掌握自己的方向。",
            "財富並非永久的朋友，但朋友卻是永久的財富。",
            "逃避不一定躲得過；面對不一定最難過。",
            "偉大人物最明顯的標誌，就是他堅強的意志",
            "做人要在有疑處不疑；做學問要在不疑處有疑。",
            "做好事不能少我一人，做壞事不能多我一人。",
            "做該做的事是智慧，做不該做的事是愚蠢。",
            "堅決的信心，能使平凡的人，成就不平凡的事。",
            "堅其志，苦其力，事無大小，必有所成。",
            "宿命論是那些缺乏意志力的弱者的藉口",
            "得理要饒人，理直要和氣。",
            "從來不跌倒不算光彩，每次跌倒後能再站起來，才是最大的榮耀。",
            "接受我們不能改變的，改變我們能改變的。",
            "教育的目的，在於讓每一個人具備「做自己應該做的事」的意願。",
            "欲速則不達。",
            "理想的書籍是智慧的鑰匙。",
            "處順境必須謹慎，處逆境必須忍耐",
            "貪不但帶來痛苦，也使人墮落。",
            "麻雀雖小，五臟俱全。",
            "創造機會，不要等待機會。",
            "勝不驕，敗不餒。",
            "勝敗乃兵家常事",
            "善言能贏得聽眾，善聽才能贏得朋友",
            "最困難的時候，也就是我們離成功不遠的地方",
            "最美的面孔是帶著微笑發自內心的微笑。",
            "最痛苦的時候，就是快要成功的時候。",
            "無論多麼不重要的一件事，只要樂在其中，都會獲益無窮。",
            "無論哪一件事，只要從頭到尾徹底做成功，便是大事。",
            "猶豫不決會失掉一切。",
            "脾氣嘴巴不好，心地再好也不算好人。",
            "黑夜無論怎樣漫長，白晝總會到來",
            "意志永不屈服的人，沒有所謂失敗",
            "愛不是要求對方，而是要自由付出。",
            "歲月可以使人蒼老，但心靈卻可永保青春。",
            "當一個人沒有甚麼可以失去的時候，要勇敢是再容易不過了。",
            "萬事具備，只欠東風。",
            "話多不如話好，話少不如話好：多話不如說好話",
            "道德是提昇自我明燈，不應該是喝斥別人的鞭子。",
            "寧可努力一下子，也不要後悔一陣子；寧可辛苦一陣子，也不要吃苦一輩子。",
            "對父母要知恩、感恩、報恩。",
            "對淵博友，如讀異書；對風雅友，如讀名人詩文；對謹飭友，如讀聖賢經傳；對滑稽友，如閱傳奇小說。",
            "滴水成河，粒米成籮，勿輕己靈，勿以小善而不為。",
            "滴水能穿石不是靠力，而是因為它不捨晝夜",
            "與君一席話，勝讀十年書。",
            "說好話時，千萬要有一份誠懇的心。",
            "樂觀是成功之源，悲觀是失敗之因。",
            "熱衷於某一樣事物的人，就是有了能夠努力的資質。這樣的學生一旦集中精力的話，就能發揮很大的力量。",
            "皺眉和微笑都是一個表情，何不微笑？",
            "誰虛度年華，青春就會褪色，生命就會放棄他們。",
            "適者生存，不適者淘汰。",
            "學如逆水行舟，不進則退。",
            "學問好比腸胃裡的食物，裝下多少並不重要，吸收多少才重要。",
            "學習就是學著尋找樂趣。",
            "靜坐常思考過，閒談論莫非。",
            "懂得放心的人找到輕鬆，懂得遺忘的人找到自由，懂得關懷的人找到朋友。",
            "聰明的人想過才開口。",
            "謊言像一朵鮮花，外表美麗，生命短暫。",
            "壞事不能多我一人，做好事不能少我一人。",
            "識時務者為俊傑。",
            "嚴師出高徒",
            "嚴格也是一種慈悲。",
            "歡喜是一種涵養，能令周圍的人都有如沐春風的喜悅感。",
            "聽到好話要感恩，聽到壞話要善解。",
            "讀一本好書，就好像跟一位高尚的人說話。",
            "讀所獲得的最大快樂，是好像透過一面鏡子，看到自己的心靈。",
            "讀書破萬卷，下筆如有神。"
        ];

        this.currentQuoteIndex = 0;

        this.initializeElements();
        this.bindEvents();
        this.setNextAlarm();
        this.showRandomQuote();
    }

    initializeElements() {
        this.studyTimeEl = document.getElementById('studyTime');
        this.nextAlarmEl = document.getElementById('nextAlarm');
        this.shortBreakEl = document.getElementById('shortBreak');
        this.longBreakEl = document.getElementById('longBreak');
        this.statusEl = document.getElementById('status');
        this.quoteTextEl = document.getElementById('quoteText');

        // 進度條元素
        this.alarmProgressEl = document.getElementById('alarmProgress');
        this.longBreakProgressEl = document.getElementById('longBreakProgress');
        this.longBreakTextEl = document.getElementById('longBreakText');

        // 控制按鈕
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.breakBtn = document.getElementById('breakBtn');

        // 音效控制
        this.soundSelect = document.getElementById('soundSelect');
        this.customSoundInput = document.getElementById('customSound');
        this.testSoundBtn = document.getElementById('testSound');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.breakBtn.addEventListener('click', () => this.startShortBreak());
        this.testSoundBtn.addEventListener('click', () => this.playAlarmSound());

        this.soundSelect.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                this.customSoundInput.style.display = 'inline';
                this.customSoundInput.click();
            } else {
                this.customSoundInput.style.display = 'none';
            }
        });

        this.customSoundInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                this.customAudio = new Audio(url);
            }
        });
    }

    start() {
        this.isRunning = true;
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.statusEl.textContent = '學習中...';

        this.timer = setInterval(() => {
            this.studyTime++;
            this.nextAlarmTime--;
            this.quoteTime--;

            this.updateDisplay();
            this.updateProgressBars();

            // 檢查是否需要響鈴
            if (this.nextAlarmTime <= 0 && !this.alarmActive) {
                this.triggerAlarm();
            }

            // 檢查是否需要更換名言
            if (this.quoteTime <= 0) {
                this.showRandomQuote();
                this.quoteTime = 120; // 重置2分鐘
            }

            // 檢查是否需要長休息 (90分鐘 = 5400秒)
            if (this.studyTime > 0 && this.studyTime % 5400 === 0) {
                this.startLongBreak();
            }
        }, 1000);
    }

    pause() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.statusEl.textContent = '已暫停';
        clearInterval(this.timer);
    }

    reset() {
        this.isRunning = false;
        this.studyTime = 0;
        this.quoteTime = 120;
        this.isShortBreak = false;
        this.isLongBreak = false;
        this.alarmActive = false;

        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.breakBtn.disabled = true;

        this.setNextAlarm();
        this.updateDisplay();
        this.updateProgressBars();
        this.showRandomQuote();
        this.statusEl.textContent = '按下「開始學習」開始計時';

        clearInterval(this.timer);
        clearInterval(this.breakTimer);
    }

    setNextAlarm() {
        // 隨機設定3-5分鐘 (180-300秒)
        this.nextAlarmTime = Math.floor(Math.random() * (300 - 180 + 1)) + 180;
        this.maxAlarmTime = this.nextAlarmTime;
    }

    triggerAlarm() {
        this.alarmActive = true;
        this.breakBtn.disabled = false;
        this.statusEl.textContent = '🔔 響鈴！請按下休息按鈕開始10秒休息';
        this.statusEl.classList.add('alarm-active');

        this.playAlarmSound();
    }

    startShortBreak() {
        this.isShortBreak = true;
        this.shortBreakTime = 10;
        this.alarmActive = false;
        this.breakBtn.disabled = true;
        this.statusEl.classList.remove('alarm-active');
        this.statusEl.textContent = '短休息中...';

        this.breakTimer = setInterval(() => {
            this.shortBreakTime--;
            this.updateDisplay();

            if (this.shortBreakTime <= 0) {
                this.endShortBreak();
            }
        }, 1000);
    }

    endShortBreak() {
        this.isShortBreak = false;
        this.setNextAlarm();
        this.statusEl.textContent = '休息結束，繼續學習！';
        clearInterval(this.breakTimer);
    }

    startLongBreak() {
        this.isLongBreak = true;
        this.longBreakTime = 1200; // 20分鐘
        this.pause();
        this.statusEl.textContent = '開始20分鐘長休息...';

        this.breakTimer = setInterval(() => {
            this.longBreakTime--;
            this.updateDisplay();

            if (this.longBreakTime <= 0) {
                this.endLongBreak();
            }
        }, 1000);
    }

    endLongBreak() {
        this.isLongBreak = false;
        this.statusEl.textContent = '長休息結束，可以繼續學習！';
        clearInterval(this.breakTimer);
    }

    showRandomQuote() {
        this.currentQuoteIndex = Math.floor(Math.random() * this.quotes.length);
        this.quoteTextEl.textContent = this.quotes[this.currentQuoteIndex];
    }

    updateDisplay() {
        // 更新學習時間顯示
        this.studyTimeEl.textContent = this.formatTime(this.studyTime);

        // 更新下次響鈴倒數
        if (this.nextAlarmTime > 0) {
            this.nextAlarmEl.textContent = this.formatMinuteSecond(this.nextAlarmTime);
        } else {
            this.nextAlarmEl.textContent = '00:00';
        }

        // 更新短休息倒數
        if (this.isShortBreak) {
            this.shortBreakEl.textContent = this.shortBreakTime + '秒';
        } else {
            this.shortBreakEl.textContent = '--';
        }

        // 更新長休息倒數
        if (this.isLongBreak) {
            this.longBreakEl.textContent = this.formatMinuteSecond(this.longBreakTime);
        } else {
            this.longBreakEl.textContent = '--:--';
        }
    }

    updateProgressBars() {
        // 更新響鈴進度條
        if (this.maxAlarmTime > 0) {
            const alarmProgress = ((this.maxAlarmTime - this.nextAlarmTime) / this.maxAlarmTime) * 100;
            this.alarmProgressEl.style.width = Math.max(0, Math.min(100, alarmProgress)) + '%';
        }

        // 更新長休息進度條
        const studyMinutes = Math.floor(this.studyTime / 60);
        const longBreakProgress = (studyMinutes % 90) / 90 * 100;
        this.longBreakProgressEl.style.width = longBreakProgress + '%';
        this.longBreakTextEl.textContent = `${studyMinutes % 90}/90 分鐘`;
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    formatMinuteSecond(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    playAlarmSound() {
        const soundType = this.soundSelect.value;

        if (soundType === 'custom' && this.customAudio) {
            this.customAudio.play().catch(e => console.log('無法播放自定義音效:', e));
        } else {
            // 使用Web Audio API產生不同類型的聲音
            if ('AudioContext' in window || 'webkitAudioContext' in window) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const audioContext = new AudioContext();

                this.playBuiltInSound(audioContext, soundType);
            }
        }
    }

    playBuiltInSound(audioContext, soundType) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (soundType) {
            case 'bell':
                // 鈴聲效果
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
                break;
            case 'chime':
                // 風鈴聲效果
                oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.5);
                break;
            default: // beep
                oscillator.frequency.value = 800;
                break;
        }

        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

// 初始化計時器
document.addEventListener('DOMContentLoaded', () => {
    new StudyTimer();
});
