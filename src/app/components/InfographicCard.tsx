import React from "react";
import { style } from "@/app/resources/config";
import { CarbonPictogramType } from "@carbon/pictograms-react"; // Import Carbon icon type for typing
import { Flex, GlitchFx } from "@/once-ui/components";
// Define available color options for type safety
type ColorOption = keyof typeof style.colors;

interface InfographicProps {
  heading: string;
  icon: CarbonPictogramType; // Type the icon prop as CarbonIconType
  body: string;
  color?: ColorOption;
}
interface InfoSectionProps {
  sectionTitle: string;
  color?: ColorOption;
}

const InfographicSection: React.FC<InfoSectionProps> = ({
  sectionTitle,
  color = "white",
}) => {
  const selectedColor = style.colors[color] || style.colors.white;

  return (
    <h2
      style={{
        color: selectedColor,
        borderBottom: `2px solid ${selectedColor}`,
        paddingBottom: "8px",
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      {sectionTitle}
    </h2>
  );
};

const InfographicTile: React.FC<InfographicProps> = ({
  heading,
  icon: Pictogram, // Destructure icon as Pictogram for rendering
  body,
  color = "white",
}) => {
  // Apply color based on color prop
  const selectedColor = style.colors[color] || style.colors.white;

  return (
    <Flex
      className="infographic-card surface-background"
      style={{ border: `2px solid ${selectedColor}`, borderRadius: 8 }}
      direction="column"
      padding="16"
      maxWidth={200}
    >
      {/* {React.cloneElement(icon as React.ReactElement, {
          fill: selectedColor,
        })} */}
      <GlitchFx speed="medium" interval={2500} trigger="hover">
        <Flex>
          <Pictogram
            aria-label={heading}
            style={{ fill: selectedColor, color: selectedColor }}
          />{" "}
          {/* Render the Carbon icon */}
          {/* <div style={{ color: selectedColor }}></div> */}
          <h3 className="text-lg ml-8" style={{ color: selectedColor }}>
            {heading}
          </h3>
        </Flex>
      </GlitchFx>

      <p>{body}</p>
    </Flex>
  );
};

export { InfographicTile, InfographicSection };
