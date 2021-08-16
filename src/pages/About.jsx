import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <main>
      <PageHead>
        <PageTitle>ABOUT</PageTitle>
      </PageHead>
      <PageContent>
        <PageInner>
          <IconBox>
            <IconImage src="null" alt="icon" />
          </IconBox>
          <div>
            <p>吉野 翔</p>
            <p>Sho Yoshino</p>
            <p>
              千葉県在住。 <br />
              デザイナーを目指しています。
              <br />
              現在はWebサイトの保守、運用業務をしています。
            </p>
          </div>
        </PageInner>
      </PageContent>
    </main>
  );
};

export default About;

const PageHead = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
`;

const PageTitle = styled.h2`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: 700;
`;

const PageContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  padding-top: 80px;
`;

const PageInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const IconBox = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const IconImage = styled.img`
  width: 100%;
`;
