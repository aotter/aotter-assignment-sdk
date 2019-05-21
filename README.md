# 題目
- 請設計一個 javascript sdk，讓開發者可以在自己的網站頁面中顯示廣告
- 
# 功能需求
- sdk 要透過 api 取得廣告資訊
    - 若有廣告，則在頁面上呈現廣告內容
    - 若沒廣告，則不顯示廣告
- sdk 必須提供廣告相關的事件供開發者監聽，事件類型有:
    - `on-ad-loaded` 廣告載入成功
    - `on-ad-failed` 廣告載入失敗
    - `on-ad-impression` 廣告出現在畫面上超過 50%至少一秒。
- sdk 在頁面載入後，可以自動在頁面上存在的廣告欄位中顯示廣告
- 必須要提供api以供開發者在 single page application 的網站中控制載入廣告的時機。
-  `server.js` 為廣告 api 範例，請按需求修改。  

# 廣告呈現方式
1. 可以直接在頁面上append html或是用iframe的形式呈現
2. 廣告的兩種類型，分別為 `VIDEO`, `BANNER` 


## 影片廣告

### 呈現畫面:
![](https://user-images.githubusercontent.com/1284568/58097483-137d3280-7c0a-11e9-978c-8cadc5d76419.png)

### response:
```
{  
  "id": 2,
  "type": "VIDEO",
  "title": "Google Pixel 3a XL使用一週心得 拍照有輸Pixel 3嗎？",
  "description": "Google新出的Pixel 3a系列，定位在中階機款，卻擁有OLED螢幕，和可比旗艦機的強悍拍照功能，那整體使用體驗到底是如何呢？使用體驗跟Pixel 3有差很多嗎？",
  "image": "https://agirls.aotter.net/media/60dcde35-6798-4784-8985-78323c7ec75b.jpg",
  "video_url": "https://www.youtube.com/embed/lquZJyVj3-I",
  "impression_url": "https://agirls.aotter.net?imp=2",
  "success": true
}
```

## 一般廣告
### 呈現畫面:

![](https://user-images.githubusercontent.com/1284568/58097704-94d4c500-7c0a-11e9-93f4-9ca2fe812d99.png)


### response:
```
{  
  "id": 1,
  "type": "BANNER",
  "title": "三星電視獨家搶先支援Apple TV App，手機還能一秒變遙控器！",
  "description": "好消息！三星在本週宣布~即日起旗下2019年全系列智慧電視、和2018年的指定機型將可透過更新支援Apple TV App以及Airplay2啦！",
  "image": "https://agirls.aotter.net/media/da724a8b-fe19-4f4e-8262-75c207ae038b.jpg",
  "url": "https://agirls.aotter.net/post/55419",
  "impression_url": "https://agirls.aotter.net?imp=1",
  "success": true
}
```

## 沒有廣告
### response
```
{  
  "success": false
}
```

# 規格需求
- javascript 必須要 minify
- sdk 不使用第三方套件，但可以使用 webpack 等 preprocessor。
- 瀏覽器支援:
    - The current version of Microsoft Edge (Windows)
    - Internet Explorer 10 and 11 (Windows)
    - The current and previous version of Firefox (Windows, macOS, Linux)
    - The current and previous version of Chrome (Windows, macOS, Linux)
    - The current and previous version of Safari (macOS)


# 交付項目
- ⼀個完成的實作專案，請 commit ⾄至 github 或 bitbucket 交付
- 需撰寫基本的 unit test
- 上線計畫書 — 假想這個專案應要正式上線，我們會問這些問題:
    - 我們要還需要經過哪些測試，才可以正式上線?
    - 有什麼方式可以搜集在使用者瀏覽器上遇到的錯誤?


