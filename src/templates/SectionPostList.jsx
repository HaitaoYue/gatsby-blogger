import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import Small from "components/Typography/Small.jsx";
import Quote from "components/Typography/Quote.jsx";
import Pagination from "components/Pagination/Pagination.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import GridItem from "components/Grid/GridItem";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

class SectionPostList extends React.Component {
  render() {
    const { classes, pageContext } = this.props;

    const { group, index, first, last, pageCount } = pageContext;
    const previousUrl =
      index - 1 === 1 || index === 1
        ? "/blogs/"
        : `/blogs/${(index - 1).toString()}`;
    const nextUrl =
      index < pageCount
        ? `/blogs/${(index + 1).toString()}`
        : `/blogs/${pageCount === 1 ? "" : pageCount}`;

    const maxPageCount = 9;
    const pages = [
      {
        text: "PREV",
        to: previousUrl,
        disabled: first
      }
    ];
    let pageNumbers = [];
    const rawPageNumbers = [];
    for (let i = 1; i <= pageCount; i += 1) {
      rawPageNumbers.push(i);
    }
    if (pageCount <= maxPageCount) {
      pageNumbers = rawPageNumbers;
    } else {
      const middlePage = parseInt(pageCount / 2, 10);
      let restPageNumber = 0;
      if (index > middlePage) {
        restPageNumber = maxPageCount - (pageCount - index + 2 + 1);
        for (let i = 1; i <= restPageNumber; i += 1) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers = pageNumbers.concat(
          rawPageNumbers.slice(-(maxPageCount - restPageNumber))
        );
      } else {
        restPageNumber = maxPageCount - (index + 2);
        for (let i = 1; i <= index + 2; i += 1) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers = pageNumbers.concat(rawPageNumbers.slice(-restPageNumber));
      }
    }
    pageNumbers.map(pageNumber => {
      if (pageNumber === "...") {
        pages.push({
          text: pageNumber,
          to: "",
          disabled: true
        });
      } else {
        pages.push({
          text: pageNumber,
          active: index === pageNumber,
          to: pageNumber > 1 ? `/blogs/${pageNumber}` : "/blogs/"
        });
      }
      return pageNumber;
    });
    pages.push({
      text: "NEXT",
      to: nextUrl,
      disabled: last
    });
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>Posts</h2>
            </div>
            <GridContainer>
              {group.map(blog => (
                <div className={classes.typo} key={blog.node.id}>
                  <h2>
                    <Link to={`/posts${blog.node.fields.slug}`}>
                      {blog.node.frontmatter.title}
                    </Link>
                    <br />
                    <Small>{blog.node.frontmatter.date}</Small>
                  </h2>
                  <Quote text={blog.node.excerpt} author="Haitao Yue" />
                </div>
              ))}
              <GridItem xs={12} className={classes.paginationGridItem}>
                <Pagination buttonComponent={AdapterLink} pages={pages} />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

SectionPostList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(SectionPostList);
