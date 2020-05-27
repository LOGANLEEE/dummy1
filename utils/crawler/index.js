const Crawler = require('crawler');

const start = () => {
	const c = new Crawler({
		// rateLimit: 1000,
		maxConnections: 10, //`maxConnections` will be forced to 1
		callback: function (error, res, done) {
			let msg = '';
			if (error) {
				console.log(error);
			} else {
				const $ = res.$;
				const { order, link, prefix } = res.options;
				for (i = order[0]; i < order[1] + 1; i++) {
					const href = prefix + $(link(i)).attr('href');
					console.log(href);
				}
				msg = 'done';
			}
			done(console.log(msg));
		},
	});
	c.queue(list);
};

const list = [
	{
		url:
			'https://www.bobaedream.co.kr/list.php?code=best&s_cate=&maker_no=&model_no=&or_gu=10&or_se=desc&s_selday=&pagescale=70&info3=&noticeShow=&bestCode=&bestDays=&bestbbs=&vdate=&ndate=&nmdate=&s_select=Subject&s_key=',
		// order: [1, 70],
		order: [1, 1],
		prefix: 'https://www.bobaedream.co.kr/',
		link: (order) =>
			`#boardlist > tbody > tr:nth-child(${order}) > td.pl14 > a.bsubject`,
	},
];
module.exports = {
	start,
};
