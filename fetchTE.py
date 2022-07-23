import os,requests,re,time,json
from bs4 import BeautifulSoup

def fetchArticle(link,n=1):
    print(link)
    
    r = requests.get(link)
    doc = BeautifulSoup(r.content,features="lxml")

    if not doc.find(class_="article__body-text"):
        return 'page-not-found'

    if doc.find('iframe'):
        if 'youtube' not in doc.find('iframe').attrs['src']:
            if 'acast' not in doc.find('iframe').attrs['src']:
                fetchGraphic(link)
                return link.split('/')[-1]

    # fetch article body
    body = doc.find(class_="article__body-text").parent
    for i in body.findAll('a',{'href':re.compile("^/")}):
        url = i.attrs['href']
        if 'https' in url:
            pass
        else:
            url = 'https://www.economist.com'+url
        if 'email' in url:
            continue
        if n!= 0:
            l = fetchArticle(url,0)
            i.attrs['href'] = './'+l+'.html'            
        else:
            i.attrs['href'] = './'+url.split('/')[-1]+'.html'

    fig_html = ''
    if doc.find('figure'):
        src = fetchImg(doc.find('figure').find('img').attrs['src'])
        fig_html = '<img id="myImg" src=".{}" width="auto" height="200">'.format(src)
    if body.find('img'):
        for i in body.findAll("img"):
            url = i.attrs['src']
            i.attrs['src'] = '.'+fetchImg(url)
            i.attrs['srcset'] = '.'+fetchImg(url)

    for i in doc.find('section').findAll('style'):
        i.decompose()
    header = doc.find('section')

    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="../init.css"></head><body>'+str(header)+fig_html+str(body)+'</body></html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    return link.split('/')[-1]

def fetchImg(url):
    if not os.path.isdir('image'):
        os.mkdir('image')
    if 'https' not in url:
        url = 'https://www.economist.com/'+url
    img = requests.get(url).content
    imgfile = './image/'+url.split('/')[-1]
    with open(imgfile,"wb") as f:
        f.write(img)
    return imgfile

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
        if 'player' in cssURL:
            cssURL = 'https://www.youtube.com'+cssURL
        if 'https' not in cssURL:
            cssURL = 'https://infographics.economist.com/2021/news-reviews/'+cssURL
        csstext = requests.get(cssURL).text
        cssfile = './assets/'+cssURL.split('/')[-2]+'.css'
        with open(cssfile,'w') as f:
            f.write(csstext)
        css.attrs['href'] = '../assets/'+cssURL.split('/')[-2]+'.css'
    
    # save js file 
    for script in doc.findAll('script'):
        if script.has_attr('src'):
            scriptURL = script.attrs['src']
            if 'player' in scriptURL:
                scriptURL = 'https://www.youtube.com'+scriptURL
            if 'https' not in scriptURL:
                scriptURL = 'https://infographics.economist.com/2021/news-reviews/'+scriptURL
            scriptURL = scriptURL.split('?')[0]
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
    if 'why-russia-has-never-accepted-ukrainian-independence' in link:
        return
    r = requests.get(link)
    doc = BeautifulSoup(r.content,features="lxml")
    for i in doc.findAll('iframe'):
        url = i.attrs['src']
        if 'https' not in url:
            if 'youtube' in url:
                url = 'https:'+url
            else:
                url = 'https://www.economist.com/'+url
        else:
            pass
        fetchAI(url)
    for i in doc.find('section').findAll('style'):
        i.decompose()
    header = doc.find('section')
    body = doc.find(class_="article__body-text").parent
    for i in body.findAll('iframe'):
        indexURL = i.attrs['src']
        # fetchAI(indexURL)
        i.attrs['src'] = indexURL.split('/')[-2]+'_index.html'
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
    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="../init.css"><title>Graphic Details</title></head><body>'+str(header)+str(body)+'</body>'+js+'</html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    return
def fetchSection(cl,docu):
    for i in docu.findAll(class_=cl):
        if i.find('a'):
            link = i.find('a').attrs['href']
            if 'https' not in link:
                link = "https://www.economist.com"+link
            fetchArticle(link)
            i.find('a').attrs['href'] = './html/'+link.split('/')[-1]+'.html'
            time.sleep(2)
        
url = "https://www.economist.com/weeklyedition/"
r = requests.get(url)
doc = BeautifulSoup(r.content,features="lxml")
docu = doc.find(class_='layout-weekly-edition')
headerImgURL = docu.find(class_='weekly-edition-header__image').find('img').attrs['src']
img = requests.get(headerImgURL).content
with open('./image/cover.png',"wb") as f:
    f.write(img)
fetchSection('weekly-edition-wtw__item',docu)
fetchSection('teaser-weekly-edition--leaders',docu)
fetchSection('teaser-weekly-edition--briefing',docu)
fetchSection('teaser-weekly-edition--headline-only',docu)
fetchSection('teaser-weekly-edition--cols',docu)
for i in docu.findAll("img"):
    i.decompose()
html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="init1.css"><title>The Economist</title></head><body><img src="./image/cover.png">'+str(docu)+'</body></html>'
with open('index.html','w') as f:
    f.write(html)
