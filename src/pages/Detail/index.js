import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import playIcon from '../../assets/images/play-icon-black.png';
import trailerIcon from '../../assets/images/play-icon-white.png';
import groupIcon from '../../assets/images/group-icon.png';
import db from "../../firebase";


const ContainerStyled = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`
const BackgroundStyled = styled.div`
  position: fixed;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media(max-width: 768px) {
      width: initial;
    }
  }
`
const TitleStyled = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;

  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`
const ContentMetaStyled = styled.div`
  max-width: 874px;

`
const ControlStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 24px 0;
  min-height: 56px;
`
const PlayerStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`
const TrailerStyled = styled(PlayerStyled)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`
const AddlistStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 16px;
  height: 44px;
  width: 44px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    display: inline-block;
    background-color: rgb(249, 249, 249);

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`
const GroupWatchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 44px;
  border-radius: 50%;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 16px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function Detail() {
  const { id } = useParams()
  console.log(id);
  const [details, setDetails] = useState({})
  console.log(details);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetails(doc.data());
        } else {
          console.log("No such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  return (
    <ContainerStyled>
      <BackgroundStyled>
        <img 
          src={details.backgroundImg} 
          alt={details.title} 
        />
      </BackgroundStyled>

      <TitleStyled>
        <img 
          src={details.titleImg}
          alt={details.title}
        />
      </TitleStyled>

      <ContentMetaStyled>
        <ControlStyled>
          <PlayerStyled>
            <img src={playIcon} alt="not-found" />
            <span>Play</span>
          </PlayerStyled>
          <TrailerStyled>
            <img src={trailerIcon} alt="not-found" />
            <span>Trailer</span>
          </TrailerStyled>
          <AddlistStyled>
            <span></span>
            <span></span>
          </AddlistStyled>
          <GroupWatchStyled>
            <div>
              <img src={groupIcon} alt="" />
            </div>
          </GroupWatchStyled>
        </ControlStyled>

        <SubTitle>{details.subTitle}</SubTitle>
        <Description>{details.description}</Description>
      </ContentMetaStyled>
    </ContainerStyled>
  )
}

export default Detail