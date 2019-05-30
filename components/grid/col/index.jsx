import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const ColWrap = styled.div`
  label: col;
`

const Col = ({
  children,
  basis,
  flex,
  width,
  sm,
  md,
  lg,
  xl,
  span,
  ...props
}) => {
  const breakPoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  }

  const cols = {
    col1: "8.3333333333",
    col2: "16.6666666667",
    col3: "25",
    col4: "33.3333333333",
    col5: "41.6666666667",
    col6: "50",
    col7: "58.3333333333",
    col8: "66.6666666667",
    col9: "75",
    col10: "83.3333333333",
    col11: "91.6666666667",
    col12: "100",
  }

  const classes = []

  let __spread = {}

  if (span || xl || lg || md || sm) {
    __spread = {
      flexBasis: basis,
      flex,
    }
  }

  const __col = css({
    width,
    ...__spread,
  })

  if (sm) {
    classes.push(
      `
        @media (min-width: ${breakPoints.sm}px) {
          flex-basis: ${cols[`col${sm}`]}%;
          max-width: ${cols[`col${sm}`]}%;
        }
      `
    )
  }

  if (md) {
    classes.push(
      `
        @media (min-width: ${breakPoints.md}px) {
          flex-basis: ${cols[`col${md}`]}%;
          max-width: ${cols[`col${md}`]}%;
        }
      `
    )
  }

  if (lg) {
    classes.push(
      `
        @media (min-width: ${breakPoints.lg}px) {
          flex-basis: ${cols[`col${lg}`]}%;
          max-width: ${cols[`col${lg}`]}%;
        }
      `
    )
  }

  if (xl) {
    classes.push(
      `
        @media (min-width: ${breakPoints.xl}px) {
          flex-basis: ${cols[`col${xl}`]}%;
          max-width: ${cols[`col${xl}`]}%;
        }
      `
    )
  }

  return (
    <ColWrap css={[__col, css(classes)]} {...props}>
      {children}
    </ColWrap>
  )
}

Col.propTypes = {
  children: PropTypes.node,
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flex: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Col.defaultProps = {
  basis: "100%",
}

export default Col
