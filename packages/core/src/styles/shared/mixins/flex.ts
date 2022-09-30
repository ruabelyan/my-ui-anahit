import CSS from 'csstype';

const flex = (
  justify?: CSS.Properties['justifyContent'],
  align?: CSS.Properties['alignItems'],
) => `
    display: flex;
    ${justify && `justify-content: ${justify}`};
    ${align && `align-items: ${align}`};
`;

export default flex;
