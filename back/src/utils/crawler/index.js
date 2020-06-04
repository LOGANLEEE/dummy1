const Crawler = require('crawler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const sites = {
	Etoland: 'Etoland',
	Ilbe: 'Ilbe',
	Bobae: 'Bobae',
};

const start = () => {
	const c = new Crawler({
		// rateLimit: 1000,
		maxConnections: 10, //`maxConnections` will be forced to 1
		callback: async (error, res, done) => {
			let msg = '';
			if (error) {
				console.error(error);
			} else {
				const $ = res.$;
				const { from, order, link, prefix } = res.options;
				const isEtoland = from === sites.Etoland;

				// console.log(`start to crawl ${from} `);

				// console.log(`${$('title').text()}`);
				// description
				for (i = order[0]; i < order[1] + 1; i++) {
					let href = $(link(i)).attr('href') + '';
					// const href = $(link(i)).text();
					console.log(`i'm the ${i} : ${href}`);

					if (href) {
						if (isEtoland && href.startsWith('../')) {
							href = href.replace('../', '/');
						}
						if (isEtoland && href.includes('≀')) {
							href = href.replace('≀', '&wr_');
						}
						await prisma.target_links.create({
							data: {
								from,
								link: prefix + href,
							},
						});
					}
				}
				msg = 'done';
				done(console.log(msg));
			}
		},
	});
	c.queue(list);
};

const list = [
	{
		from: sites.Bobae, //60
		uri:
			'https://www.bobaedream.co.kr/list.php?code=best&s_cate=&maker_no=&model_no=&or_gu=10&or_se=desc&s_selday=&pagescale=70&info3=&noticeShow=&bestCode=&bestDays=&bestbbs=&vdate=&ndate=&nmdate=&s_select=Subject&s_key=',
		order: [1, 70],
		prefix: 'https://www.bobaedream.co.kr',
		link: (order) =>
			`#boardlist > tbody > tr:nth-child(${order}) > td.pl14 > a.bsubject`,
	},
	{
		from: sites.Ilbe, //70
		uri: 'https://www.ilbe.com/list/ilbe?listSize=60&listStyle=list',
		order: [9, 68],
		prefix: 'https://www.ilbe.com',
		link: (order) =>
			`#content-wrap > div.board-wrap > div.board-list > ul > li:nth-child(${order}) > span.title > a`,
	},
	{
		from: sites.Etoland,
		uri:
			'http://www.etoland.co.kr/bbs/board.php?bo_table=etohumor03&sfl=top_n&stx=day&sst=wr_hit&sod=desc',
		order: [4, 102],
		prefix: 'http://www.etoland.co.kr',
		link: (order) => {
			if (order % 2 === 0) {
				return `#fboardlist > table > tr:nth-child(${order}) > td.mw_basic_list_subject > a:nth-child(3)`;
			} else {
				return '';
			}
		},
	},
];

module.exports = {
	start,
};
