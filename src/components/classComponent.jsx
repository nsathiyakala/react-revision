import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    var {doginfo} = this.props
    var {color,breed}= doginfo
    return (
      <div>Iam a {color} {breed} dog</div>
    )
  }
}


