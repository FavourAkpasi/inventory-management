import styled from "styled-components";

export const Nav = styled.nav<any>`
  width: 100vw;
  border: ${(props) => props.border};
  background: ${(props) => props.bg};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const Container = styled.div<any>`
  max-width: 1300px;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  align-items: ${(props) =>
    props.Ycenter
      ? "center"
      : props.Yaround
      ? "space-around"
      : props.Ybetween
      ? "space-between"
      : ""};
  justify-content: ${(props) =>
    props.Xcenter
      ? "center"
      : props.Xaround
      ? "space-around"
      : props.Xbetween
      ? "space-between"
      : ""};
  margin: auto;
  gap: ${(props) => props.gap};
`;

export const Form = styled.form<any>`
  width: ${(props) => (props.modalForm ? "100%" : props.w)};
  border: ${(props) => props.border};
  height: ${(props) => props.h};
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  padding: ${(props) => (props.modalForm ? "2rem" : props.p)};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  background: ${(props) => (props.modalForm ? "grey" : props.bg)};
  border-radius: ${(props) => (props.modalForm ? "8px" : props.radius)};
  gap: ${(props) => (props.modalForm ? "15px" : props.gap)};
`;

export const Input = styled.input<any>`
  width: ${(props) => (props.modalInput ? "100%" : props.w)};
  height: ${(props) => (props.modalInput ? "50px" : props.h)};
  border-radius: ${(props) =>
    props.modalInput
      ? "8px"
      : props.radius === "rounded"
      ? "5px"
      : props.radius === "left"
      ? "5px 0 0 5px"
      : props.radius === "right"
      ? "0 5px 5px 0"
      : ""};
  outline: none;
  border: ${(props) => (props.border ? props.border : "none")};
  padding-left: 15px;
  margin: ${(props) => props.m};
  background: ${(props) => props.bg};
`;

export const Button = styled.button<any>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => props.p};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? props.border : "none")};
  outline: none;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: pointer;
  border-radius: ${(props) =>
    props.radius === "rounded"
      ? "5px"
      : props.radius === "left"
      ? "5px 0 0 5px"
      : props.radius === "right"
      ? "0 5px 5px 0"
      : ""};
  margin: ${(props) => props.m};
  position: ${(props) => props.modalBtn && "absolute"};
  top: ${(props) => props.modalBtn && "2rem"};
  right: ${(props) => props.modalBtn && "2rem"};
  font-size: ${(props) => (props.modalBtn ? "25px" : props.fx)};
`;

export const Box = styled.div<any>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  position: ${(props) => props.pos};
  background: ${(props) => (props.card ? "#f7f7f7" : props.bg)};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => (props.card ? "1rem" : props.p)};
  border-radius: ${(props) => props.radius};
  border: ${(props) => (props.card ? "2px solid #dfdfdf" : props.border)};
  transition: all 0.5s ease;
  z-index: ${(props) => props.zi};
  margin: ${(props) => props.m};
  display: ${(props) => (props.card ? "flex" : props.flex)};
  flex-direction: ${(props) => (props.card ? "column" : props.direction)};
  gap: ${(props) => (props.card ? "10px" : props.gap)};
  align-items: ${(props) =>
    props.Ycenter
      ? "center"
      : props.Yaround
      ? "space-around"
      : props.Ybetween
      ? "space-between"
      : ""};
  justify-content: ${(props) =>
    props.Xcenter
      ? "center"
      : props.Xaround
      ? "space-around"
      : props.Xbetween
      ? "space-between"
      : ""};
  cursor: ${(props) => (props.card ? "pointer" : props.cursor)};
  &:hover {
    transform: ${(props) => (props.card ? "scale(1.05)" : "")};
  }
`;

export const DropdownBox = styled.div<any>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  position: ${(props) => props.pos};
  background: ${(props) => props.bg};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.radius};
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.active ? "transform: translateY(0)" : "translateY(-100%)"};
  z-index: -1;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  margin: ${(props) => props.m};
`;

export const List = styled.ul<any>`
  width: ${(props) => props.w};
  max-height: ${(props) => props.maxH};
  overflow-y: ${(props) =>
    props.scroll ? "scroll" : props.hidden ? "hidden" : "auto"};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  border: ${(props) => (props.border ? props.border : "none")};
`;

export const ListItem = styled.li<any>`
  list-style-type: none;
  width: ${(props) => props.w};
  margin: ${(props) => props.m};
  padding: ${(props) => (props.navItem ? "10px 15px" : props.p)};
  background: ${(props) => (props.navItem ? "none" : props.bg)};
  color: ${(props) => (props.navItem ? "#fff" : props.color)};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.center
      ? "center"
      : props.around
      ? "space-around"
      : props.between
      ? "space-between"
      : ""};
  cursor: ${(props) => props.navItem && "pointer"};
  overflow: ${(props) => (props.navItem ? "hidden" : props.overflow)};
`;

export const ModalWrapper = styled.div<any>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 2rem 0;
  top: 0;
  right: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const Modal = styled.div<any>`
  max-width: 650px;
  width: 100%;
  padding: 5rem 2rem;
  background: #fff;
  position: relative;
  border-radius: 8px;
  margin: auto;
`;

export const Select = styled.select<any>`
  width: ${(props) => (props.modalSelect ? "100%" : props.w)};
  height: ${(props) => (props.modalSelect ? "50px" : props.h)};
  border-radius: ${(props) =>
    props.modalSelect
      ? "8px"
      : props.radius === "rounded"
      ? "5px"
      : props.radius === "left"
      ? "5px 0 0 5px"
      : props.radius === "right"
      ? "0 5px 5px 0"
      : ""};
  outline: none;
  border: ${(props) => (props.border ? props.border : "none")};
  padding-left: 15px;
  margin: ${(props) => props.m};
  background: ${(props) => props.bg};
`;
