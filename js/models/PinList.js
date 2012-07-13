YUI.add('pinboard-pin-list', function (Y) {
	
	var WS_URL = 'http://localhost';
	
	PinList = Y.Base.create('pinList', Y.ModelList, [], {
		
		model: PinModel,
		
		initializer: function(){

		},
		
		// Custom sync layer
		sync: function(action, options, callback){
			var data;
			
			if(action === 'read'){
				callback(null, [
					{
						title: "Focus on sanity, as Norway gunman's trial opens",
						image: "http://l.yimg.com/bt/api/res/1.2/FMMqHzDvruWox_D4rX3orQ--/YXBwaWQ9eW5ld3M7Y2g9MTg3MTtjcj0xO2N3PTI0Mjc7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTE0NztxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/afp.com/000_Par6995552.jpg",
						source: "AFP"
					},
					{
						title: "Afghan-led forces beat back brazen Taliban attack",
						image: "http://l.yimg.com/bt/api/res/1.2/oh0VL08hf5fHjy2PFFPTtA--/YXBwaWQ9eW5ld3M7Y2g9MjcyODtjcj0xO2N3PTM5MDQ7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTEzMztxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/ap_webfeeds/a1a11cf1ac38e50a0c0f6a706700c41a.jpg",
						source: "AP"
					},
					{
						title: "Obama urges 'thorough' probe of Secret Service scandal ",
						image: "http://l.yimg.com/bt/api/res/1.2/2tyB2MntODRQeLA_FyvrIQ--/YXBwaWQ9eW5ld3M7Y2g9MjAwMDtjcj0xO2N3PTMwMDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTEyNztxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/afp.com/TRWas6309459.jpg",
						source: "ABC"
					},
					{
						title: "MLB honors Jackie Robinson with ballpark tributes",
						image: "http://l.yimg.com/bt/api/res/1.2/KkdXpGkh2RNAwlPXL5fT7g--/YXBwaWQ9eW5ld3M7Y2g9MzUxO2NyPTE7Y3c9NTEyO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0xMzE7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/Sports/ap/201204151327484248680-p2.jpeg",
						source: "Associated Press"
					},
					{
						title: "Fox News ‘Mole’ Joe Muto: ‘It’s pretty safe to say my career in cable news is over’",
						image: "http://l.yimg.com/bt/api/res/1.2/iJfjMHu1u7Q6bc7i_nijcQ--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMztweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/News/ap_webfeeds/882b4ea545a3870a0c0f6a706700bb52.jpg",
						source: "Associated Press"
					},
					{
						title: "Fox News fires 'Fox Mole' at Gawker",
						image: "http://l.yimg.com/bt/api/res/1.2/CeSu3YvEets2ppgtDKFbGg--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMztweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/News/ap_webfeeds/805b9f9046ae8b0a0c0f6a706700abe0.jpg",
						source: "AFP"
					},
					{
						title: "Women linked by Manson murders form odd friendship",
						image: "http://l.yimg.com/bt/api/res/1.2/phGgOO5RuGdnLsMTgAFWnw--/YXBwaWQ9eW5ld3M7Y2g9MjgxNDtjcj0xO2N3PTIxMzg7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTI1MTtxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/ap_webfeeds/cd7c9655add2ec0a0c0f6a7067002887.jpg",
						source: "AFP"
					},
					{
						title: "Secret Service Veteran Dismisses 'Blackmail' Concerns in Colombia Scandal",
						image: "http://l.yimg.com/bt/api/res/1.2/.lowh4egvz4r07CuVDWCsA--/YXBwaWQ9eW5ld3M7Y2g9MzYwO2NyPTE7Y3c9NjQwO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0xMDc7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/News/us.news.abcnews.otus/ht_bill_clinton_dan_emmett_jt_120415_wmain.jpg",
						source: "AFP"
					},
					{
						title: "Analysis: China currency move nails hard landing risk coffin",
						image: "http://l.yimg.com/bt/api/res/1.2/6cMxWIWAMQSh9hAuThLJAQ--/YXBwaWQ9eW5ld3M7Y2g9MzE2O2NyPTE7Y3c9NDUwO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0xMzQ7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/News/Reuters/2012-04-15T083413Z_3_CBRE83E0A4T00_RTROPTP_2_CNEWS-US-CHINA-ECONOMY-CURRENCY.JPG",
						source: "Associated Press"
					},
					{
						title: "Norway Shooter Anders Breivik Pleads Not Guilty, Cries in Court",
						image: "http://l.yimg.com/bt/api/res/1.2/09wzN5zj33znsegyTHJe_g--/YXBwaWQ9eW5ld3M7Y2g9MzYwO2NyPTE7Y3c9NjQwO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0xMDc7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/gma/us.abcnews.go.com/ap_anders_breivik_court_thg_120206_wmain.jpg",
						source: "Associated Press"
					},
					{
						title: "The K-E Diet: Brides-to-Be Using Feeding Tubes to Rapidly Shed Pounds",
						image: "http://l.yimg.com/bt/api/res/1.2/WQWeKUUQgV5R9Ro2ZUzSvA--/YXBwaWQ9eW5ld3M7Y2g9MTAzMjtjcj0xO2N3PTE3MTg7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTExNTtxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/ap_webfeeds/f0fd7d81ac7ce60a0c0f6a7067002cdb.jpg",
						source: "AFP"
					},
					{
						title: "Shelling in Syria as UN monitors begin mission",
						image: "http://l.yimg.com/bt/api/res/1.2/lHQSFmUdxH7GoG6gezji0g--/YXBwaWQ9eW5ld3M7Y2g9NjI1O2NyPTE7Y3c9NDc1O2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0yNTA7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/News/ap_webfeeds/41742e9eac01e40a0c0f6a706700297d.jpg",
						source: "AFP"
					},
					{
						title: "As ice cap melts, militaries vie for Arctic edge",
						image: "http://l.yimg.com/bt/api/res/1.2/HJcCWzK.ZOZ53jaoMa.vTw--/YXBwaWQ9eW5ld3M7Y2g9MjU5Mjtjcj0xO2N3PTM4NzI7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTEyODtxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/ap_webfeeds/d02dc9f1c4c6f70a0c0f6a7067002966.jpg",
						source: "AFP"
					},
					{
						title: "Kabul attack could spark US-Pakistan tension",
						image: "http://l.yimg.com/bt/api/res/1.2/EdwzfKBACep7lfxu9RVdKA--/YXBwaWQ9eW5ld3M7Y2g9MTk2Nztjcj0xO2N3PTMwMDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTEyNTtxPTg1O3c9MTkw/http://media.zenfs.com/en_us/News/ap_webfeeds/52bcba97c406f40a0c0f6a7067007d36.jpg",
						source: "AFP"
					},
					{
						title: "Pippa Middleton Caught in Gun-Wielding Scandal",
						image: "http://l.yimg.com/bt/api/res/1.2/tREt0GrMO.Zp.K0fi3Yvkg--/YXBwaWQ9eW5ld3M7Y2g9MTY4O2NyPTE7Y3c9MzAwO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0xMDc7cT04NTt3PTE5MA--/http://media.zenfs.com/en_us/gma/us.abcnews.gma.com/gty_pippa_middleton_mw_021108_wmain.jpg",
						source: "AFP"
					},
					{
						title: "The Far-Reaching Effects of the Generational …",
						image: "http://l.yimg.com/bt/api/res/1.2/J8bZkDS3NHObXEmFA.96NQ--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMztweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/gma/us.abcnews.gma.com/gty_pamela_anderson_jef_120413_main.jpg",
						source: "AFP"
					},
					{
						title: "Generations Faring Well in Expanded",
						image: "http://l.yimg.com/bt/api/res/1.2/mwlxkkaf2iopxV4wwdU8gw--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMztweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/News/ap_webfeeds/9e77ec265ca7920a0c0f6a706700c9e7.jpg",
						source: "AFP"
					},
					{
						title: "India factory building collapses",
						image: "http://l.yimg.com/bt/api/res/1.2/uEe5srR927KWc7uS6cRUdw--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMjtweG9mZj01MDtweW9mZj0wO3E9ODU7dz0xNTA-/http://l.yimg.com/os/152/2012/04/16/AP12041605474-jpg_154807.jpg",
						source: "AFP"
					},
					{
						title: "Siege in Kabul",
						image: "http://l.yimg.com/bt/api/res/1.2/xOpUHpm3XsLVDwv_65H3dA--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMjtweG9mZj01MDtweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/News/afp.com/000_Del6112472.jpg",
						source: "AFP"
					},
					{
						title: "Prayers mark Titanic centenary",
						image: "http://l.yimg.com/bt/api/res/1.2/Lar.hXiSAIShIylIZfQxVQ--/YXBwaWQ9eW5ld3M7Zmk9ZmlsbDtoPTExMjtweG9mZj01MDtweW9mZj0wO3E9ODU7dz0xNTA-/http://media.zenfs.com/en_us/News/ap_webfeeds/03b41735ab36e00a0c0f6a706700c8a0.jpg",
						source: "AFP"
					},
				]);
			}
		},
		
		listTest: function(){
			console.log('list test');
		}
		
	});
	
	Y.namespace('Pinboard').PinList = PinList;
	
}, '0.0.1', {
	requires: ['model-list', 'pinboard-pin-model']
});