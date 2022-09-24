import requests
import re
import execjs

headers = {
    # 如果被拦截，把headers补齐
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'

}

sess = requests.session()
url = 'https://www.cnvd.org.cn/flaw/list.htm'

def start():
    r =sess.get(url,headers=headers)
    text = r.text
    cookie = re.search('<script>document.cookie=(.*?);location',text).group(1)
    x = execjs.eval(cookie).split(';')[0].split('=')
    sess.cookies[x[0]] = x[1]
    print(x[0],x[1])

def then():
    '''获取第二次请求的cookie'''
    r1 = sess.get(url,headers=headers)
    text = r1.text
    data = re.search(';go\((.*?)\)</script>',text).group(1)
    hash = re.search('"ha":"(.*?)",',data).group(1)
    # get_cookie_2是执行JS，完整代码请下载
    cookie = get_cookie_2(data,hash).split(';')[0].split('=')
    sess.cookies[cookie[0]] =cookie[1]

def end(page=1):
    data = {'number': '请输入精确编号', 'startDate': '', 'endDate': '', 'field': '', 'order': '', 'numPerPage': '10', 'offset': page*10, 'max': '10'}
    r1 = sess.post('https://www.cnvd.org.cn/flaw/list.htm?flag=true',headers=headers,data=data,verify=False)
    print(r1)


def get_cookie_2(data,hash):
    node = execjs.get()
    path=f'./jsl动态cookie第二次请求{hash}.js'
    with open(path,'r',encoding='utf-8') as f:
        ctx = node.compile(f.read())
        funcName = f'go({data})'
        pwd = ctx.eval(funcName)
        return pwd


if __name__ == '__main__':
    start()
    then()
    end()