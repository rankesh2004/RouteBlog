import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(eachItem => (
        <BlogItem blogItem={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
