import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 1080px;
  padding: 30px 0 0;
`;

export const HeaderTitle = styled.div`
  padding: 0 15px;
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
export const Search = styled.form`
  `;

export const MenuBar = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 60px;
`;
export const List = styled.ul`

  list-style: none;
  padding: 10px 0;
`;
export const Item = styled.li`
  padding: 15px;
  border-radius:10px;
  border:1px solid #EBEAED;
  margin: 0 0 30px 0px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0, 0.05);
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
  font-weight:bold;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  margin:0;
  padding:5px;
  border: 0px;
  min-width:50px;
  color: #F95E5A;
  font-size: 18px;
  &:hover,&:active{
    color: #F95E5A;
    background-color: transparent;
  }
`;
