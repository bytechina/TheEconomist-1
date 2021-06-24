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
        if 'player' in cssURL:
            cssURL = 'https://www.youtube.com'+cssURL
        csstext = requests.get(cssURL).text
        cssfile = './assets/'+cssURL.split('/')[-2]+'.css'
        with open(cssfile,'w') as f:
            f.write(csstext)
        css.attrs['href'] = '../assets/'+cssURL.split('/')[-2]+'.css'
    
    # save js file 
    for script in doc.findAll('script'):
        if script.has_attr('src'):
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
    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="../init.css"><title>Graphic Details</title></head><body>'+str(header)+str(body)+'</body>'+js+'</html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    return

def fetchArticle(link,n=1):
    r = requests.get(link)
    doc = BeautifulSoup(r.content,features="lxml")
    link = doc.find('meta',{'property':"og:url"}).attrs['content']
    body = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-body")
    if not body:
        return 'page-not-found'
    for i in body.findAll('a',{'href':re.compile("^/")}):
        url = i.attrs['href']
        if 'email' in url:
            continue
        if n!=0:
            l = fetchArticle('https://www.economist.com'+url,0)
            i.attrs['href'] = './'+l+'.html'            
        else:
            i.attrs['href'] = './'+url.split('/')[-1]+'.html'
    for i in doc.findAll("img"):
        url = i.attrs['src']
        img = requests.get(url).content
        imgfile = './image/'+url.split('/')[-1]
        with open(imgfile,"wb") as f:
            f.write(img)
        i.attrs['src'] = '../image/'+url.split('/')[-1]
        i.attrs['srcset'] = '../image/'+url.split('/')[-1]
    if doc.find(class_="react-audio-player"):
        audioURL = doc.find(class_="react-audio-player").attrs['src']
        audio = requests.get(audioURL).content
        audioname = './audio/'+link.split('/')[-1]+'.mp3'
        doc.find(class_="react-audio-player").attrs['src'] = '../audio/'+link.split('/')[-1]+'.mp3'
        with open(audioname,'wb') as f:
            f.write(audio)
    if doc.find('iframe'):
        if 'acast' in doc.find('iframe').attrs['src']:
            acastname0 = doc.find('iframe').attrs['src'].replace('embed','sphinx')
            acastname = acastname0.split('/')[-1]
            if 'https' not in acastname0:
                acastURL = 'https:'+acastname0+'/media.mp3'
            else:
                acastURL = acastname0+'/media.mp3'
            txt = BeautifulSoup('<audio class="react-audio-player" controls="" controlslist="nodownload" id="audio-player" preload="none" src="../audio/'+acastname+'.mp3" title=""><p></p></audio>',features="lxml")
            doc.find('iframe').replaceWith(txt)
            if not os.path.isfile('./audio/'+acastname+'.mp3'):
                acast = requests.get(acastURL).content
                with open('./audio/'+acastname+'.mp3','wb') as f:
                    f.write(acast)
    title = doc.find(class_="article__headline").text
    header = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-header")
    body = doc.find(class_="ds-layout-grid ds-layout-grid--edged layout-article-body")
    body.find('aside').decompose()
    html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="../init.css"><title>'+title+'</title></head><body>'+str(header)+str(body)+'</body></html>'
    htmlname = './html/'+link.split('/')[-1]+'.html'
    with open(htmlname,'w') as f:
        f.write(html)
    print('Fetching: '+ title)
    return link.split('/')[-1]

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
    fetchGraphic(graphicURL)
for i in docu.findAll(class_="headline-link"):
    link = i.attrs['href']
    if link in graphicURL:
        i.attrs['href'] = './html/'+link.split('/')[-1]+'.html'
    else:
        fetchArticle("https://www.economist.com"+link)
        i.attrs['href'] = './html/'+link.split('/')[-1]+'.html'
        #time.sleep(2)
for i in docu.findAll("img"):
    i.decompose()
html = '<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1" /><head><!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2VYEP6CXDE"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date());  gtag("config", "G-2VYEP6CXDE");</script><link rel="stylesheet" href="init.css"><title>The Economist</title></head><body><img src="./image/cover.png">'+str(docu)+'</body></html>'
with open('index.html','w') as f:
    f.write(html)
