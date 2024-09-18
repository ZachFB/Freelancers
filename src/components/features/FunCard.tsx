// Card.tsx
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper >
      <div className="container w-full ">
        <div className="palette w-full md:h-[200px] h-[140px]">
          <div className="color color1">
            <span className="lg:text-5xl md:text-3xl text-sm text-[#e1f1f9] font-M-medium">Créativité</span>
          </div>
          <div className="color color2">
            <span className="lg:text-5xl md:text-3xl text-sm text-[#071620] font-M-medium">Excellence</span>
          </div>
          <div className="color color3">
            <span className="lg:text-5xl md:text-3xl text-sm text-[#e1f1f9] font-M-medium">Engagement</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Card;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #071620;

  .container {
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
    background-color: #071620;
  }

  .palette {
    display: flex;
    transition: all 0.3s ease;
  }

  .color {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .color span {
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
  }

  .color:hover {
    flex: 1.5;
  }

  .color:hover span {
    opacity: 1;
  }

  .color1 {
    background-color: #92c4e70d;
    border-radius: 1em 0 0 1em;
  }

  .color2 {
    background-color: #d88b4f;
  }

  .color3 {
    background-color: #931f4233;
    border-radius: 0 1em 1em 0;
  }


  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
    color: #666;
    font-size: 14px;
    border-top: 1px solid #eaeaea;
  }

  .stats svg {
    fill: #666;
  }
     @media (max-width: 768px) {
    .color:hover {
      flex: 3; /* Largement plus grand sur mobile */
    }
  } `;
