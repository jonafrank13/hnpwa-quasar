## Hacker News Reader using Quasar Framework

#### [Link to Application](https://jonafrank13.github.io/hnpwa-quasar/)

A hacker news reader pwa (Progressive Web App) built using Quasar framework

### Features

* Performance Scores
  * LightHouse: 91/100 [LightHouse Link](https://googlechrome.github.io/lighthouse/viewer/?gist=00aed89c357bad82c285cc5f98349212)
  * Faster_3G: 6.287s [WebpPageTest Link](https://www.webpagetest.org/result/170924_K0_4518e4146eae5cf10f7aed11410812c6/)
  * 3G_EM: 9.457s [WebpPageTest Link](https://www.webpagetest.org/result/170924_7J_9dc0dfce6e9d0fa7ff13e709d328d57b/)


* Built using Quasar PWA starter kit

* Progressive Web App
  * app manifest
  * service worker using SWPrecachePlugin
  * app shell

* Hosted using 

* Uses [Official HackerNews API](https://github.com/HackerNews/API)

### Development

```
# install dependencies
$ npm install

# serve locally with quasar (8081 port)
$ quasar dev

# build for production
$ quasar build
```

### ToDo

- [ ] Server side rendering
- [ ] Add Tests
- [ ] Clean up poc version
