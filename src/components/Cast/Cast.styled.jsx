import styled from '@emotion/styled';

export const CastWrapper = styled.div``;

export const CastTitle = styled.h2`
  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const CastListItem = styled.li`
  text-align: center;
`;

export const ItemImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

export const InfoWrapper = styled.div`
  height: 120px;

  background-color: rgb(240, 240, 240);
  padding: 10px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-top: 5px;
`;

export const Character = styled.p`
  margin-top: 10px;
`;

export const Popularity = styled.p`
  margin-top: 10px;
`;
