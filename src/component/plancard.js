import React from "react";
import styled from "styled-components";
import PlanCardMap from "./planCardMap";

import Cafe from "../img/cafe.png";
import Meditation from "../img/meditation.png";
import Accomodation from "../img/accomodation.png";
import Mead from "../img/mead.png";
import Guitar from "../img/guitar.png";
import Dining from "../img/dining.png"

const Wrapper = styled.div`
  width : 300px;
  height : 373px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: rgba(241, 241, 241, 0.79);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InnerWrapper = styled.div`
  margin-right: 10px;
  margin-left: 10px; 
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: 100%;
`;

const PicContainer = styled.div`
  height: 200px;
  margin-top: 5px;
  /* background-color: aquamarine; */
`;

const DayContainer = styled.div`
  border-bottom: .8px solid #3D3D3D;
  height: 55px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
`;

const PlaceContainer = styled.div`
  height: 90px;
  display: flex;
  border-bottom: .8px solid #3D3D3D;
  flex-direction: column;
`;

const DayText = styled.span`
  font-size: 36px;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: #3D3D3D;
  margin-right: 10px;
`;

const LocationText = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  margin-top: 15px;
`;

const WhereText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-top: 16px;
`;


export function PlanCard(props){
  const prop =props['props']
  // const {day,type,location,where} = props;
  const month = prop['month'];
  const day = prop['day'];
  const location = prop['location'];
  const where = prop['where'];
  const type = prop['type'];
  const x = prop['x']
  const y = prop['y']
  var mapObj = new Object();
  mapObj['x'] = prop['x'];
  mapObj['y'] = prop['y'];
  
  const ImgSrc = (type)=>{
  
      if(type == "accomodation"){
        return Accomodation;
      }
      if(type === "cafe"){
        return Cafe;
      }
      if(type === "guitar"){
        return Guitar;
      }
      if(type === "mead"){
        return Mead;
      }
      if(type === "meditation"){
        return Meditation;
      }
      if(type=="dining"){
        return Dining;
      }
    
  }
  
  return (
    <Wrapper>
      <InnerWrapper>
        <PicContainer style={{"display":"flex", "justifyContent": "center" }}>
          <img
          style={{"width":"50%","marginTop":"15px","marginBottom":"15px"}}
            src={ImgSrc(type)}
            alt="imgae"/>
        </PicContainer>
          <DayContainer>
            <DayText>
            {month}월 {day}일
            </DayText>
            <span style={{'fontSize':'14px', 'fontWeight':600}}>
              {type}
            </span>
          </DayContainer>
        <PlaceContainer>
          <LocationText>
            {location}
          </LocationText>
          <WhereText>
            {where}
          </WhereText>
        </PlaceContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

export default PlanCard;