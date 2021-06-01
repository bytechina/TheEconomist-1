import os,requests,re,time
from bs4 import BeautifulSoup

def fetchAI(url):
    
    r = requests.get(url)
    doc = BeautifulSoup(r.content,features="lxml")
    
    # download background images in graphic-details
    for i in doc.findAll("img"):
        url = i.attrs['data-src']
        img = requests.get(url).content
        imgfile = './image/'+url.split('/')[-1]
        with open(imgfile,"wb") as f:
            f.write(img)
        i.attrs['src'] = '../image/'+url.split('/')[-1]
        i.attrs['data-src'] = '../image/'+url.split('/')[-1]
        
    # save css file specific for graphic-details
    for css in doc.findAll(rel="stylesheet"):
        cssURL = css.attrs['href']
        csstext = requests.get(cssURL).text
        cssfile = './assets/'+cssURL.split('/')[-2]+'.css'
        with open(cssfile,'w') as f:
            f.write(csstext)
        css.attrs['href'] = '../assets/'+cssURL.split('/')[-2]+'.css'
    
    # save js file 
    for script in doc.findAll('script'):
        scriptURL = script.attrs['src']
        scripttext = requests.get(scriptURL).text
        scriptfile = './assets/'+scriptURL.split('/')[-1]
        with open(scriptfile,'w') as f:
            f.write(scripttext)
        script.attrs['src'] = '../assets/'+scriptURL.split('/')[-1]

    # save as separate html file
    file = './html/'+url.split('/')[-2] + '_index.html'
    with open(file,'w') as f:
        f.write(str(doc.html))

    return

def fetchGraphic(link):
    r = requests.get(link)
    doc = BeautifulSoup(r.content,features="lxml")
    for i in doc.findAll('iframe'):
        fetchAI(i.attrs['src'])
    header = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-header")
    body = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-body")
    for i in body.findAll('iframe'):
        indexURL = i.attrs['src']
        # fetchAI(indexURL)
        i.attrs['src'] = indexURL.split('/')[-2]+'_index.html'
    body.find('aside').decompose()
    js = """<script>
    window.tedl = window.tedl || {};
    // Resize iframes on articles with interactives when they send a RESIZE message
    window.addEventListener('message', (event) => {
    if (event.data.type === 'RESIZE') {
    const height = parseInt(event.data.payload.height, 10);
    Array.prototype.forEach.call(document.getElementsByTagName('iframe'), function (element) {
    if (element.contentWindow === event.source) {
    element.style.height = height + 'px';
    }
    });
    }
    }, false);
    </script>"""
    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><link rel="stylesheet" href="../init.css"><title>Graphic Details</title></head><body>'+str(header)+str(body)+'</body>'+js+'</html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    return

def fetchArticle(link):
    r = requests.get(link)
    doc = BeautifulSoup(r.content,features="lxml")
    for i in doc.findAll("img"):
        url = i.attrs['src']
        img = requests.get(url).content
        imgfile = './image/'+url.split('/')[-1]
        with open(imgfile,"wb") as f:
            f.write(img)
        i.attrs['src'] = '../image/'+url.split('/')[-1]
        i.attrs['srcset'] = '../image/'+url.split('/')[-1]
    title = doc.find(class_="article__headline").text
    header = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-header")
    body = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-body")
    body.find('aside').decompose()
    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><link rel="stylesheet" href="../init.css"><title>'+title+'</title></head><body>'+str(header)+str(body)+'</body></html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    print('Fetching:'+ title)
    return

url = "https://www.economist.com/weeklyedition/"
r = requests.get(url)
doc = BeautifulSoup(r.content,features="lxml")
docu = doc.find(class_='layout-weekly-edition')
headerImgURL = docu.find(class_='weekly-edition-header__image').find('img').attrs['src']
graphicURL = docu.find('a',{'href': re.compile("graphic-detail")}).attrs['href']
img = requests.get(headerImgURL).content
with open('./image/cover.png',"wb") as f:
    f.write(img)
for i in docu.findAll(class_='weekly-edition-wtw__item'):
    link = i.find('a').attrs['href']
    fetchArticle("https://www.economist.com"+link)
    i.find('a').attrs['href'] = './html/'+link.split('/')[-1]+'.html'
#for i in docu.findAll(class_="headline-link"):
#    link = i.attrs['href']
#    fetchArticle("https://www.economist.com"+link)
#    i.attrs['href'] = './html/'+link.split('/')[-1]+'.html'
#    time.sleep(5)
for i in docu.findAll("img"):
    i.decompose()
fetchGraphic(graphicURL)
html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><link rel="stylesheet" href="init.css"><title>The Economist</title></head><body><img src="./image/cover.png">'+str(docu)+'</body></html>'
with open('index.html','w') as f:
    f.write(html)
