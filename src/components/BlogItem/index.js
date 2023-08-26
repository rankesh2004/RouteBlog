import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li>
      <div className="blog-detail">
        <p className="title">{title}</p>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
