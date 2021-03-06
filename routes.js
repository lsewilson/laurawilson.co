import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// Main component
class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
         <nav>
            <ul>
               <li><Link to="/">About</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               <li><Link to="/blog">Blog</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
        { this.props.children }
      </div>
    )
  }
}

// Pages
class About extends Component {
  render(){
    return (
      <div>
        <h2>About me</h2>
        <div>Some home page content</div>
      </div>
    )
  }
}
class Projects extends Component {
  render(){
    return (
      <div>
        <h2>Projects</h2>
        <div>Some about page content</div>
      </div>
    )
  }
}
class Blog extends Component {
  render(){
    return (
      <div>
        <h2>Blog</h2>
        <div>Some work page content</div>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>Some contact page content</div>
      </div>
    )
  }
}
class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="projects" component={Projects}/>
    <Route path="blog" component={Blog}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
