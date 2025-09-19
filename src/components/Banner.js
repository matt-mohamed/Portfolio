import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Web Developer", "Student" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Matthew a `} <br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[  "SoftWare Engineer", "Web Developer", "Student"  ]'><span className="wrap">{text}</span></span></h1>
                <p>Aspiring Computer Science Major | Passionate about Problem-Solving and Coding. I am currently pursuing a BS in Computer Science with a minor in Cybersecurity at Stevens Institute of Technology. I have developed a strong foundation in programming and data structures. With hands-on experience in Java, JavaScript, C, and C++.</p>
                <button onClick={() => { window.location.href ="mailto:mattmohamed2005@gmail.com?subject=Hello from your portfolio&body=Hi Matthew,%0D%0A%0D%0AI saw your portfolio and would love to connect!";}}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}