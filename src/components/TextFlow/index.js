import React from "react";

import "./TextFlowStyle.css";

import styled from "styled-components";
// const HeaderAlign = styled.div`
//   text-align:center
//   margin: 20px;
//   font-size:44px;
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `;

// const Scroller = styled.div`
//   max-width: 600px;
//   text-align:center
//   margin: 20px;
//   font-size:22px;`;

// const ScrollerInner = styled.div`
//   display: flex;
//   gap: 1rem;
//   padding-block: 1rem;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

// const Scroll = styled.div`
//   position: relative;
//   display: flex;
//   width: 700px;
//   overflow: hidden;
//   -webkit-mask-image: linear-gradient(
//     90deg,
//     transparent,
//     #fff 20%,
//     #fff 80%,
//     transparent
//   );
// `;

// const ScrollInner = styled.div`
//   white-space: nowrap;
//   animation: scroll var(--time) linear infinite;
//   animation-delay: calc(var(--time) * -1);
// `;

const SpanFlowItem = styled.span`
  display: inline-flex;
  margin: 10px;
  letter-spacing: 0.3em;
  font-size: 52px;
  font-weight: 600;
  padding: 5px 10px;
  color: ${({ theme }) => theme.primary};
`;

const TextFlow = () => {
  return (
    <div>
      <div className="scroll">
        <div>
          <marquee scrollamount="20">
            <SpanFlowItem>HTML</SpanFlowItem>
            <SpanFlowItem>CSS</SpanFlowItem>
            <SpanFlowItem>JavaScript</SpanFlowItem>
            <SpanFlowItem>ReactJS</SpanFlowItem>
            <SpanFlowItem>TailwindCSS</SpanFlowItem>
            <SpanFlowItem>PostCSS</SpanFlowItem>
            <SpanFlowItem>WebPack</SpanFlowItem>
            <SpanFlowItem>Frontend System Design</SpanFlowItem>
            <SpanFlowItem>UI/UX</SpanFlowItem>
            <SpanFlowItem>Figma</SpanFlowItem>
            <SpanFlowItem>Illustrator</SpanFlowItem>
            <SpanFlowItem>Photoshop</SpanFlowItem>
            <SpanFlowItem>Java</SpanFlowItem>
            <SpanFlowItem>Spring</SpanFlowItem>
            <SpanFlowItem>MVC</SpanFlowItem>
            <SpanFlowItem>SpringBoot</SpanFlowItem>
            <SpanFlowItem>PHP</SpanFlowItem>
            <SpanFlowItem>CodeIgniter</SpanFlowItem>
            <SpanFlowItem>Hibernate</SpanFlowItem>
            <SpanFlowItem>OOPS & AOP</SpanFlowItem>
            <SpanFlowItem>SOLID principles</SpanFlowItem>
            <SpanFlowItem>System Design</SpanFlowItem>
            <SpanFlowItem>Software Architecture</SpanFlowItem>
            <SpanFlowItem>Python</SpanFlowItem>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default TextFlow;
