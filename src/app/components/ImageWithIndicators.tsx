import React from "react";
import styled from "styled-components";

type Indicator = {
    startX: string; // Start point relative to the image (e.g., "30%")
    startY: string; // Start point relative to the image (e.g., "50%")
    endX: string;   // End point outside or inside the image (e.g., "120%")
    endY: string;   // End point relative to the image (e.g., "50%")
    label: string;  // Text label to display at the end
    color?: string; // Optional line color (default: black)
    rightSide?: boolean; // Optional indicator on the right side (default: false)
};

type ImageWithIndicatorsProps = {
    src: string;       // Image source
    alt: string;       // Image alt text
    indicators?: Indicator[]; // Optional indicators array
    margin?: string;   // Margin to reserve space for indicators (default: "2rem")
};

const ImageWithIndicators: React.FC<ImageWithIndicatorsProps> = ({
                                                                     src,
                                                                     alt,
                                                                     indicators = [],
                                                                     margin = "2rem",
                                                                 }) => {
    return (
        <Wrapper>
            <StyledImage src={src} alt={alt} margin={margin}/>
            {indicators.map((indicator, index) => (
                <IndicatorWrapper
                    key={index}
                    startX={indicator.startX}
                    startY={indicator.startY}
                    endX={indicator.endX}
                    endY={indicator.endY}
                    rightSide={indicator.rightSide}
                >
                    <IndicatorLabel style={{ left: indicator.endX, top: indicator.endY }}>
                        {indicator.label}
                    </IndicatorLabel>
                    <IndicatorLine
                        startX={indicator.startX}
                        startY={indicator.startY}
                        endX={indicator.endX}
                        endY={indicator.endY}
                        color={indicator.color || "#000"}
                    />
                </IndicatorWrapper>
            ))}
        </Wrapper>
    );
};

// Styled Components

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledImage = styled.img<{ margin: string }>`
  display: block;
  width: 100%;
  height: auto;
    margin: ${({ margin }) => margin};
`;

const IndicatorWrapper = styled.div<{
    startX: string;
    startY: string;
    endX: string;
    endY: string;
    rightSide?: boolean;
}>`
  position: absolute;
    display: flex;
    align-items: center;
    ${({ rightSide }) => rightSide ? "flex-direction: row-reverse;" : ""}
    left: ${({ startX }) => startX};
    top: ${({ startY }) => startY};
  height: 1px;
    width: calc(${({ endX }) => endX} - ${({ startX }) => startX});
    z-index: 10;
  pointer-events: none; // Allow clicks to pass through
`;

const IndicatorLine = styled.div<{
    startX: string;
    startY: string;
    endX: string;
    endY: string;
    color: string;
}>`
  height: 1px;
    width: 100%;
  background-color: ${({ color }) => color};
`;

const IndicatorLabel = styled.div`
  background: #fff;
  padding: 2px 6px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 0.8rem;
    width: max-content;
    height: max-content;
`;

export default ImageWithIndicators;
