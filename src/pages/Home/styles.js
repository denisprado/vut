import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 30px 0 0;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  button {
    border: 0px;
  }
`;
export const Search = styled.form``;
export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 10px 0;
`;
export const Item = styled.li`
  padding: 15px;
  border: 1px solid #000;
  background-color: #fff;
  margin: 10px 0px;
`;
export const Tags = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
`;
export const Tag = styled.li`
  margin: 0 10px 0 0;
`;
