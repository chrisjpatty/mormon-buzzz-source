const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')
const orderBy = require('lodash/orderby')
const { getTop10Paths } = require('./analytics')
const { format } = require('date-fns')

function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.legacySlug || dataObj.data.slug || dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Format date
            dataObj.data.formattedDate = format(dataObj.data.date, 'MM/DD/YYYY')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

const getTopPostsFromPaths = (paths, posts) =>
  paths.map(path => posts.find(post => post.slug === path)).filter(p=>p)


export default {

  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    const postPreviews = orderBy(posts.map(post => post.data), ['date'], ['desc'])
    const topPaths = await getTop10Paths()
    const topPosts = getTopPostsFromPaths(topPaths, postPreviews)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts: postPreviews,
          topPosts
        }),
        children: posts.map(post => ({
          path: `/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        }))
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
