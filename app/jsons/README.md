### `header.json`

選單列 (AppBar) 的字串

### `sponsors.json`

About 頁的 hosts

### `venues.json`

Side event 的 venues

### `side_events.json`

- `img`: 圖片的檔名，圖片要放在 `app/images/sideevents/`

Side event host

```
          "host": [
            {
              "host_name": "g0v",
              "host_logo": "g0v-only.png"
            }
          ]
```

- `host_logo`: 主辦單位 logo，主辦單位是一個 "sponsor" ，所以 logo 必須要放在 `app/images/sponsors/`

### `partner.json`

```
{
  "en-US": [
    {
      "category": "hosts",
      "title": "Hosts",
      "sponsors": [
        {
          "name": "OCF",
          "logo": "OCF-LOGO-04.png",
          "url": "http://ocf.tw",
          "urlname": "",
          "brief": "",
          "desc": ""
        }
      ]
    }
  ]
}
```

- `url` : 圖片連結
