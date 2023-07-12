import React from "react";
function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(65 77 86)':'white'
}
  return (
    <div className="container" >
      <div className="accordion my-4 px-5" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              About Text Editor
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
              As the name says Text Editor is designed for editing your text, make it either Capital or Smaller in character, You can also Remove the Extra spaces between the text and copy it and take it with you.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
             About Myself
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              I am Vivek Kumar, this is my first website using React. I am currently learning React.js and for practice purpose i made this website, in the month of july 2023.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              More
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
             I know this may not be one of amazing websites you see but this is technically my first website. I made it using bootstrap and react.js and lastly i am learning from youtube, so basically i am self-taught.
             If you want to tell me some flaws or recommand something email me :- thakurvivekjasavat31@gmail.com
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default About;