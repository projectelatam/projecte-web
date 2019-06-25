import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projecte';
  constructor(private http: HttpClient){
    console.log(http)
  }
  public ngOnInit(): void{
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token',
        // 'htmlLogin': 'ChaseO',
        // 'password': 'Chase0324',
        // ":authority:": "my.vonagebusiness.com",
        // ":method:": "GET",
        // ":path:": "/appserver/rest/user/null?htmlLogin=ChaseO&htmlPassword=Chase0324",
        // ":scheme:": "https",
        // "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        // "accept-encoding": "gzip, deflate, br",
        // "accept-language": "en-US,en;q=0.9",
        // "cache-control": "no-cache",
        // "cookie": "AWSALB=TD9UnPw2JlDXWwtJAL3z9qVEB2mXpIyJFB+eIBTQuH04TkLBFg2ktBrNcYa0up2dbe9GHtMGKFOXviwZuipvM+Mf4BKQBzrVkxxZIHb2cW9fkE5Nhup2SWS6pgOf; HDAP-ID=AvPP2E%2FiwYT1tZ1EoYlsM4R0UvFE%2F5vpWMcWDaUgnEcwwu5OMTj%2B18TDFnDa0nlq7W3qhCQRz4gMJSOqT1Alrw%3D%3D",
        // "pragma": "no-cache",
        // "upgrade-insecure-requests": "1",
        // "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
        // 'withCredentials': 'true',
        // "x-amz-cf-id": "cnFoYPcXwMkLuKt1QBcg-TrLEE2r-A6NYrYG-hvA6LkvyYKOO9ggJg==",
        // "x-amz-cf-pop": "MIA3-C1"
      })
    };
    var url = "https://my.vonagebusiness.com/appserver/rest/user/null?htmlLogin=ChaseO&htmlPassword=Chase0324"
    this.http.get(url).subscribe( r => {
      console.log('response',r)
      this.http.get('https://dashboard.vonagebusiness.com/presence/rest/callhistory/404').subscribe( o => console.log(o));
    });
    // myReq.Headers.Add("login", username);
    // myReq.Headers.Add("password", password);
    // var wr = myReq.GetResponse();5
    // var receiveStream = wr.GetResponseStream();
    // var = new StreamReader(receiveStream, Encoding.UTF8);
    // var content = reader.ReadToEnd();
  }
}
