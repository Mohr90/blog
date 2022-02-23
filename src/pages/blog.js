import React from "react";
import "../styles/styles.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { graphql } from "gatsby";
import { Link } from "gatsby";

function Blog({data}) {
  const { posts } = data.blog;
  return (
    <React.Fragment>
      <Navbar/>
      <div className="main-content container">
      <h1 className="title is-1">Meine Blogeinträge </h1>
      {posts.map(post => (
        <article className="section is-small" key={post.id}>
          <Link to={"/blog" +post.fields.slug}>
          <h2 className="title">
            {post.frontmatter.title}
          </h2>
          </Link>
          <small>
          {post.frontmatter.author},  {post.frontmatter.date}
          </small>
          <p className="content">
            {post.excerpt}
          </p>
        </article>
      ))}
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export const pageQuery= graphql `
query pageQuery {
  blog: allMarkdownRemark {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        author
        date(fromNow: true)
        title
      }
      id
      excerpt
    }
  }
}
`

export default Blog;
