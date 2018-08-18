const {google} = require('googleapis');

const PATH_TO_DEV_KEY = './KEY.json'
let KEY;

if(process.env.NODE_ENV === 'development'){
  KEY = require(PATH_TO_DEV_KEY)
}

const PRIVATE_KEY = process.env.NODE_ENV === 'development' ? KEY.private_key : process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.NODE_ENV === 'development' ? KEY.client_email : process.env.CLIENT_EMAIL;
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly'
const JWT = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, SCOPES)
const VIEW_ID = '98761893'

const getTop10Paths = () => (
  new Promise(async (resolve, reject) => {
    JWT.authorize()
    .then(() => {
      google.analytics('v3').data.ga.get({
        'auth': JWT,
        'ids': `ga:${  VIEW_ID}`,
        'start-date': '30daysAgo',
        'end-date': 'today',
        'dimensions': 'ga:pagePath',
        'metrics': 'ga:pageviews',
        'sort': 'ga:pageviews'
      })
      .then(result => {
        const nonPostRoutes = ['/', '/about/']
        const rows = result.data.rows
          .slice()
          .reverse()
          .map(arr => arr[0])
          .filter(path => !nonPostRoutes.includes(path))
          .map(path => path.replace(/\//g, ''))
          .slice(0, 10)
        resolve(rows)
      })
      .catch(err => {
        reject(err)
      })
    })
    .catch(err => {
      reject(err)
    })
  })
)

module.exports.getTop10Paths = getTop10Paths;
