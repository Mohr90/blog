import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


function BlogPost({ data }) {
    const post= data.markdownRemark

    return(
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container main-content">
                <h1 className="title is-1">
                    {post.frontmatter.title}
                </h1>
                <small>
                    {post.frontmatter.date}
                </small>
                <div className="content is-size-5" dangerouslySetInnerHTML={{__html: post.html}}>

                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}


export const query = graphql`query BlogQuery($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug} }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
  `

export default BlogPost;