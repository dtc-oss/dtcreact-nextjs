import styled from '@emotion/styled'

const common = {
  lineHeight: 1.499,
  position: 'relative',
  display: 'inline-block',
  fontWeight: 400,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  backgroundImage: 'none',
  border: '1px solid transparent',
  boxShadow: '0 2px 0 rgba(0,0,0,0.015)',
  cursor: 'pointer',
  transition: 'all .3s cubic-bezier(.645, .045, .355, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  height: 32,
  padding: '0 15px',
  fontSize: 14,
  borderRadius: 4,
  ['@media (min-width: 576px)']: {
    ['& + button:not(:first-of-type)']: {
      marginLeft: 10
    }
  },
  ['@media (max-width: 576px)']: {
    width: '100%',
    ['& + button:not(:first-of-type)']: {
      marginTop: 10
    }
  }
}

const _default = {
  color: 'rgba(0,0,0,0.65)',
  backgroundColor: '#fff',
  borderColor: '#d9d9d9',
  ['&:hover ']: {
    color: '#40a9ff',
    backgroundColor: '#fff',
    borderColor: '#40a9ff'
  }
}

const primary = {
  color: '#fff',
  backgroundColor: '#1890ff',
  borderColor: '#1890ff',
  boxShadow: '0 2px 0 rgba(0,0,0,0.045)',
  ['&:hover']: {
    color: '#fff',
    backgroundColor: '#40a9ff',
    borderColor: '#40a9ff'
  }
}

const Button = styled.button(
  {
    ...common
  },
  props => {
    switch (props.type) {
      case 'primary':
        return primary
      default:
        return _default
    }
  }
)

export default Button