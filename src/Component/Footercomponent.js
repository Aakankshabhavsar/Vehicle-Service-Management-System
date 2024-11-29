import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
export default class Footercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          url: "https://twitter.com",
        },
        {
          id: 2,
          url: "https://linkedin.com/in"
        },
        {
          id: 3,
          url: "https://api.whatsapp.com/send?phone=918766671113&text=Hello%20Rishabh.%0d%0aHow%20are%20you%20%3f%0d%0aI%20am%20reaching%20you%20from%20your%20website.&source=&data=#"
        },
        {
          id: 4,
          url: "https://facebook.com"
        },
        {
          id: 5,
          url: "https://instagram.com"
        }
      ]
    }
  }
  render() {
    const { data } = this.state;

    return (
      <>
        <div className="footer container-fluid position:fixed bg-primary-subtle" style={{ minHeight: 75, alignContent: "center", position: 'absolute', bottom: '0' }} >
          <div className='row'>
            <div className='col-sm-0 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <span className='ms-5 ps-5' style={{ alignContent: "center" }}>
                {data.map((data) => {
                  return( <>
                  <SocialIcon url={data.url} key={data.id} />
                  &nbsp;&nbsp;&nbsp;
                  </>

                  )
                 
                })}
              </span>
              <span><h6 style={{ textAlign: "center", color: "gray" }}>All Rights Reserved 2024 @CDAC</h6></span>
             </div>
            <div className='col-sm-0 col-md-4'></div>
          </div>
        </div>
      </>
    )
  }
}
