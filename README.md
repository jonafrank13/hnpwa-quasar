## Hacker News Reader using Quasar Framework

#### [Link to Application](https://jonafrank13.github.io/hnpwa-quasar/)

A hacker news reader pwa (Progressive Web App) built using Quasar framework

### Features

* Performance Scores
  * LightHouse: 91/100 [LightHouse Link](https://googlechrome.github.io/lighthouse/viewer/?gist=00aed89c357bad82c285cc5f98349212)
  * Faster_3G: 5.6s [WebpPageTest Link](https://googlechrome.github.io/lighthouse/viewer/?gist=00aed89c357bad82c285cc5f98349212)
  * 3G_EM: 8.5s [WebpPageTest Link](https://googlechrome.github.io/lighthouse/viewer/?gist=00aed89c357bad82c285cc5f98349212)


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
