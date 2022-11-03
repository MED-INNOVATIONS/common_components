import styled from "styled-components";

const PluginContainer = styled.div`
    padding-left: ${(props) => (props.paddingLeft || "15px")};
    padding-top: ${(props) => (props.paddingTop || "15px")};
    padding-right: ${(props) => (props.paddingRight || "15px")};
    height: ${(props) => (props.height || "95vh")};
`;

export default PluginContainer;