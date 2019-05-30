import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { ColWrap } from "../col"

export const RowWrap = styled.div`
  label: row;
`

const Row = ({
  children,
  gutter,
  align,
  justify,
  flow,
  height,
  direction,
  ...props
}) => {
  const styles = css({
    alignItems: align,
    justifyContent: justify,
    display: "flex",
    boxSizing: "border-box",
    height,
    flex: "0 1 auto",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    flexDirection: direction,
    flexWrap: flow,
    [`& > ${ColWrap}`]: {
      paddingLeft: gutter,
      paddingRight: gutter,
    },
    marginLeft: -gutter,
    marginRight: -gutter
  })

  return (
    <RowWrap css={[styles]} {...props}>
      {children}
    </RowWrap>
  )
}

Row.propTypes = {
  /** Coloring alert, you can set to <b>primary</b>, <b>success</b>, <b>warning</b>, <b>danger</b> */
  gutter: PropTypes.number,
  /** Content inside alert */
  align: PropTypes.node.isRequired,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justify: PropTypes.string,
  flow: PropTypes.string,
}

Row.defaultProps = {
  gutter: 16,
  align: false,
  direction: "row",
  flow: "wrap",
}

export default Row
