import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 26px;
  margin-top: 26px;
  align-items: center;
  flex-direction: row;
`;

export const UserName = styled.Text`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-weight: bold;
  align-self: flex-end;
  margin-right: 120px;
  text-align: right;
`;

export const List = styled.ScrollView`
  width: 100%;
  flex: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Description = styled.Text`
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 35px;
  margin-bottom: 20px;
  color: #333333;
  font-size: 18px;
  line-height: 28px;
`;

export const ItemCard = styled.View`
  width: 328px;
  background-color: #ededed;
  border-radius: 15px;
  margin-bottom: 24px;
  align-self: center;

  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: {
    width: 0px;
    height: 9px;
  }
  shadow-opacity: 0.5px;
  shadow-radius: 12.35px;
  elevation: 19px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const Date = styled.Text`
  margin: 16px 0 16px 16px;
  color: #8739b3;
  font-size: 16px;
  line-height: 26px;
`;

export const ItemLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px 24px 56px;
`;

export const ItemHour = styled.Text`
  color: #333333;
  font-size: 16px;
  line-height: 19px;
`;

export const LogoutContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: 16px;
`;

export const LogoutText = styled.Text`
  margin-left: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 28px;
`;

export const NoAppointmentsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoAppointmentsImage = styled.Image``;

export const NoAppointmentsMainText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 32px 56px 0 56px;

  text-align: center;

  color: #333333;
`;

export const NoAppointmentsSmallText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  text-align: center;

  color: #333333;
`;
