import { Button, Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../theme/foundations/textStyles";

interface BProps {
	text: string;
	bgColor?: string;
	colorScheme?: string;
	textColor?: string;
	borderColor?: string;
	width?: string;
	height?: string;
	borderRadius?: string;
	hoverBgColor?: string;
	hoverBorderColor?: string;
	border?: string;
	textStyle?: keyof typeof textStyles;
	variant?: string;
	onClick?: () => void;
}

export const RButton: FC<BProps> = ({
	text,
	bgColor,
	colorScheme = "brand",
	textColor,
	borderColor,
	width,
	height,
	borderRadius = "full",
	border = "1px",
	variant = "outline",
	textStyle,
	hoverBgColor = "brand.200",
	hoverBorderColor = "brand.200",
	onClick,
}) => {
	const textStyleObject: TextProps = textStyle ? textStyles[textStyle] : {};
	return (
		<Button
			colorScheme={colorScheme}
			bgColor={bgColor ? bgColor : "brand.200"}
			width={!width ? "140px" : width}
			height={!height ? "40px" : height}
			variant={variant}
			color={!textColor ? "white" : textColor}
			borderColor={borderColor ? borderColor : "brand.200"}
			borderRadius={borderRadius}
			border={border}
			_hover={{ bg: hoverBgColor, borderColor: hoverBorderColor }}
			textStyle={textStyle}
			onClick={onClick}>
			<Text {...textStyleObject}> {text} </Text>
		</Button>
	);
};
