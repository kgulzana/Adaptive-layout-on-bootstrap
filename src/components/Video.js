import React from "react";

function Video() {
  return (
    <section className="container">
      <div className=" page__video video">
        <div className="video__header">
          <h2>Who We Are</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="video__content content">
          <div className="row">
            <div className="col-md-6 col-sm-12 content__left">
              <iframe
              className='content__video'
                src="https://www.youtube.com/embed/6MUuoNX6IdQ"
                title="Youtube video player"
                frameborder="0"
                allow="accelerometer; autoplay"
                clipboard-write
                encrypted-media
                gyroscope
                picture
                in
                picture
                allowfullscreen
              />
            </div>
            <div className="col-md-6 col-sm-12 content__text">
              <h2>Most trusted in our field</h2>
              <p>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule. Newton
                thought that light was made up of particles, but then it was
                discovered. They finally obtained a consistent description of
                the behaviour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
