import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const recipes = [
    {
      name: "Pad thai",
      info: "45 min | 2 servings",
      image: require("./src/assets/scaled1.jpg"),
    },
    {
      name: "Seared Scallops with Romesco",
      info: "24 min | 4 servings",
      image: require("./src/assets/pizza-margherita.jpg"),
    },
    {
      name: "Grilled Chicken with Lemon Butter",
      info: "60 min | 2 servings",
      image: require("./src/assets/pizzaa.jpg"),
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <RecipeBackgtound source={require("./src/assets/scaled.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#fff" />
              <Text styled={{ marginLeft: 16 }}>ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#fff" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Spicy Shrimp
            </Text>
            <Divider />
            <Text bold small>
              80 calories per 100g
            </Text>
            <Text>3g fat | 10g protein | 8 carbs</Text>
          </MainRecipe>
          <Button>
            <Text bold>LEARN MORE</Text>
          </Button>
        </SafeAreaView>
      </RecipeBackgtound>
      <RecipesContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark small>
          18 recipes available
        </Text>
        <Recipes>
          {recipes.map((recipe, index) => (
            <Recipe key={index}>
              <RecipeImage source={recipe.image} />
              <RecipeInfor>
                <Text dark bold>
                  {recipe.name}{" "}
                </Text>
                <Text dark small>
                  {recipe.info}{" "}
                </Text>
              </RecipeInfor>
              <AntDesign name="hearto" size={18} color="#000" />
            </Recipe>
          ))}
        </Recipes>
      </RecipesContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-family: "Roboto";

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}
`;

const RecipeBackgtound = styled.ImageBackground`
  width: 100%;
  height: 55%;
  position: relative;
`;
const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin-top: 34px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 100px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
`;

const Divider = styled.View`
  border-bottom-color: #ffff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
  position: relative;
`;

const Button = styled.TouchableOpacity`
  margin: 220px 0 52px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  width: 100%;
  margin-top: -25px;
  padding: 32px;
  background-color: #ffff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;
const RecipeInfor = styled.View`
  flex: 1;
  margin-left: 12px;
`;
