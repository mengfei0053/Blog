const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const { XMLParser } = require('fast-xml-parser');
const sitemap = fs.readFileSync(path.resolve('build/sitemap.xml'),'utf-8');
const parser = new XMLParser()
const sitemapObj = parser.parse(sitemap);
const { urlset:{ url } } = sitemapObj;
const urls = url.map(i => i.loc);

(async() => {
    try {
        const res = await axios.default.post(`http://data.zz.baidu.com/urls?site=https://blog.mengfei0053.com&token=${process.env.BAIDU_ZZ}`, urls.join('\n'));
        const data = res.data;
        const isSuccess = typeof data.success === 'number' && typeof res.remain === 'number';
        if(!isSuccess){
            throw new Error(JSON.stringify(data));
        }
    } catch (error) {
        throw error
    }
})();








