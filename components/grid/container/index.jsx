import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { RowWrap } from "../row"
import { ColWrap } from "../col"

const Container = ({ children, gutter = 16, type, ...props }) => {
  const styles = css({
    margin: "0 auto",
    paddingLeft: gutter,
    paddingRight: gutter,
    [`& > ${RowWrap}`]: {
      marginLeft: -gutter,
      marginRight: -gutter,
      [`& > ${ColWrap}`]: {
        paddingLeft: gutter,
        paddingRight: gutter,
      },
    },
  })

  let mw
  switch (type) {
    case "xl":
      mw = css`
        max-width: 1366px;
      `
      break
    case "lg":
      mw = css`
        max-width: 992px;
      `
      break
    case "md":
      mw = css`
        max-width: 765px;
      `
      break
    case "sm":
      mw = css`
        max-width: 576px;
      `
      break
    default:
      break
  }

  return (
    <div css={[styles, mw]} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Container
