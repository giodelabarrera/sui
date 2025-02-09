import React, {Component} from 'react'
import PropTypes from 'prop-types'

import withStateValue from './withStateValue'

const withStateValueTags = BaseComponent => {
  const displayName = BaseComponent.displayName

  class BaseComponentWithState extends Component {
    static displayName = `withStateValueTags(${displayName})`

    static propTypes = {
      /** tags */
      tags: PropTypes.any, // tags,

      /** value */
      value: PropTypes.any, // valueInput

      /** onChange callback  */
      onChange: PropTypes.func, // onChangeValue

      /** onChangeTags callback  */
      onChangeTags: PropTypes.func // onChangeTags
    }

    static defaultProps = {
      onChange: () => {},
      onChangeTags: () => {},
      value: ''
    }

    state = {
      tags: this.props.tags || [] // valueInput
    }

    onChangeTags = (e, {tags, value}) => {
      const {onChangeTags, onChange} = this.props // eslint-disable-line react/prop-types
      this.setState({tags}, () => {
        onChangeTags(e, {tags})
        onChange(e, {value})
      })
    }

    onChange = (e, {value}) => {
      const {onChange} = this.props
      onChange(e, {value})
    }

    render() {
      const {tags} = this.state
      const {value} = this.props
      const {onChangeTags, onChange, props} = this

      return (
        <div>
          <BaseComponent
            {...props}
            tags={tags}
            value={value}
            onChangeTags={onChangeTags}
            onChange={onChange}
          />
        </div>
      )
    }
  }

  return withStateValue(BaseComponentWithState)
}

export default withStateValueTags
