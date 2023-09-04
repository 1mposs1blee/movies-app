import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 20px;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
`;

export const InfoWrapper = styled.div`
  text-align: left;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 20px;
`;

export const MovieName = styled.h1`
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  margin-bottom: 15px;
`;

export const OverviewTitle = styled.h2`
  margin-bottom: 10px;
`;

export const OverviewInfo = styled.p`
  max-width: 630px;
  margin-bottom: 15px;
`;

export const GenresTitle = styled.h2`
  margin-bottom: 10px;
`;

export const GenresInfo = styled.p`
  margin-bottom: 15px;
`;

export const CompaniesTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ProductionCompanyImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ProductionCompanyImg = styled.img`
  max-height: 95px;
  max-width: 200px;
  margin-right: 30px;
`;
