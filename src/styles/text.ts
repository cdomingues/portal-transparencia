import styled from '@emotion/styled';
import colors from './colors';

interface StyleTextProps {
    display?: string;
    flex?: number;
    alignItems?: string;
    justifyContent?: string;
    width?: number | string;
    height?: number | string;
    padding?: number;
    backgroundColor?: string;
    backgroundColorHover?: string;
    alignSelf?: string;
    justifySelf?: string;
    textAlign?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    letterSpacing?: number;
    marginTop?: number | string;
    marginRight?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    paddingTop?: number | string;
    paddingRight?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    borderRadius?: number;
    bold?: boolean;
    borderLeftWidth?: string;
    borderLeftColor?: string;
    paddingVertical?: number | string;
    paddingHorizontal?: number | string;
    marginVertical?: number | string;
    marginHorizontal?: number | string;
    opacity?: number;
    position?: string;
    flexDirection?: string;
    lineHeight?: number;
    minWidth?: string | number;
    maxWidth?: string | number;
    borderBottom?: string | number;
    noBorderBottom?: boolean;
    noBorderTop?: boolean;
    disabled?: boolean;
    cursor?: string;
  }

const baseHeading = styled.p<StyleTextProps>`
  display: ${(props) => props.display || 'flex'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  justify-self: ${(props) => props.justifySelf || 'auto'};
  text-align: ${(props) => props.textAlign || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
  color: ${(props) => props.color || colors.black};
  letter-spacing: ${(props) => props.letterSpacing || 0.4}px;
  -webkit-font-smoothing: antialiased !important;
`;

export const Heading1Regular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.813}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading1Medium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.813}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading1Bold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.813}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;


export const Heading2Regular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.37}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading2Medium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.37}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading2Bold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.37}rem;

  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading3Regular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.18}rem;
  line-height: ${(props) => props.lineHeight || 130}%;
`;

export const Heading3Medium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.18}rem;
  line-height: ${(props) => props.lineHeight || 130}%;
`;

export const Heading3Bold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.18}rem;
  line-height: ${(props) => props.lineHeight || 130}%;
`;

export const Heading4Regular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.063}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const Heading4Medium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.063}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const Heading4Bold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 1.063}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const Heading5Regular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.93}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading5Medium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.93}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const Heading5Bold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.93}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const ParagraphRegular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.875}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const ParagraphMedium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.875}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const ParagraphBold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.875}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const SmallRegular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.81}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const SmallMedium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.81}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const SmallBold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.81}rem;
  line-height: ${(props) => props.lineHeight || 120}%;
`;

export const SmallerRegular = styled(baseHeading)`
  font-family: 'Helvetica Now Display Regular', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.75}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const SmallerMedium = styled(baseHeading)`
  font-family: 'Helvetica Now Display Medium', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.75}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;

export const SmallerBold = styled(baseHeading)`
  font-family: 'Helvetica Now Display Bold', sans-serif !important;
  font-size: ${(props) => props.fontSize || 0.75}rem;
  line-height: ${(props) => props.lineHeight || 135}%;
`;
