import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import homeBackground from '../../assets/images/home-background.png';
import db from "../../firebase";
import { MovieContext, setMovie } from "../../store/MovieContextProvider";
import { UserContext } from "../../store/UserContextProvider";
import NewDisney from "./components/NewDisney";
import Originals from "./components/Originals";
import Recommends from "./components/Recommends";
import SliderImage from "./components/SliderImage";
import Trending from "./components/Trending";
import Viewers from "./components/Viewers";

const ContainerStyled = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  background: url(${homeBackground});
  // margin-top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

function Home() {
  const [movies, dispatch] = useContext(MovieContext)
  const [user] = useContext(UserContext)
  const userName = user.name

  useEffect(() => {
    let recommends = []
    let newDisneys = []
    let originals = []
    let trendings = []

    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, {id: doc.id, ...doc.data()}]
            break
          case 'new':
            newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
            break
          case 'original':
            originals = [...originals, {id: doc.id, ...doc.data()}]
            break
          case 'trending':
            trendings = [...trendings, {id: doc.id, ...doc.data()}]
            break
          default:
            throw new Error ('Invalid actions.')
        }
        return doc
      })

      dispatch(setMovie({
        recommends,
        newDisneys,
        originals,
        trendings
      }))
    })
  }, [userName])

  return (
    <ContainerStyled>
      <SliderImage />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </ContainerStyled>
  )
}

export default Home