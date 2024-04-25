import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import LoginInput from "../components/LoginInput";

export default HomeScreen =(props) => {
    
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#01505F",
				}}>
				<View 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 55,
						marginHorizontal: 24,
					}}>
					<View 
						style = {{
							width: 242,
							alignSelf: "flex-start",
							marginTop: 67,
							marginRight: 19,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 22,
							}}>
							<Image
								source = {require('../images/profilepic.png')} 
								resizeMode = {"stretch"}
								style = {{
									width: 78,
									height: 78,
								}}
							/>
							<View 
								style = {{
									width: 149,
								}}>
								<Text 
									style = {{
										color: "#FFFFFF",
										fontSize: 15,
										marginBottom: 5,
									}}>
									{"Welcome"}
								</Text>
								<Text 
									style = {{
										color: "#FFFFFF",
										fontSize: 20,
									}}>
									{" Mr.Abdul Qadir"}
								</Text>
							</View>
						</View>
						<Text 
							style = {{
								color: "#00E0B8",
								fontSize: 15,
							
							}}>
							{"LET'S FIND YOU A SPACE"}
						</Text>

      
					</View>
			
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						paddingTop: 76,
						paddingBottom: 127,
						paddingHorizontal: 47,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
						}}>
						<Text 
							style = {{
								color: "#00E0B8",
								fontSize: 15,
								marginRight: 4,
								flex: 1,
							}}>
							{"Road Users"}
						</Text>
						<Image
							source = {require('../images/not.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 17,
								height: 19,
								marginRight: 9,
							}}
						/>
						<Image
						source = {require('../images/set.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 19,
								height: 20,
							}}
						/>
					</View>
					<View 
						style = {{
							borderColor: "#01505F",
							borderWidth: 1,
							marginBottom: 15,
						}}>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 14,
							paddingHorizontal: 22,
							marginBottom: 16,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"Parking"}
						</Text>
						<Image
						source = {require('../images/parking.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 37,
								height: 26,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 15,
							paddingHorizontal: 21,
							marginBottom: 16,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"Salik"}
						</Text>
						<Image
						source = {require('../images/salik.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 27,
								height: 23,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 13,
							paddingHorizontal: 22,
							marginBottom: 16,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"Driving & Licensing"}
						</Text>
						<Image
						source = {require('../images/licence.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 36,
								height: 24,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 14,
							paddingHorizontal: 20,
							marginBottom: 16,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"Vechicles & Fines"}
						</Text>
						<Image
						source = {require('../images/car.png')}  
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 23,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 11,
							paddingHorizontal: 21,
							marginBottom: 16,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"Green Points"}
						</Text>
						<Image
						source = {require('../images/car2.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 26,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 10,
							paddingVertical: 13,
							paddingHorizontal: 22,
						}}>
						<Text 
							style = {{
								color: "#022830",
								fontSize: 13,
								marginRight: 4,
								flex: 1,
							}}>
							{"My Docs"}
						</Text>
						<Image
						source = {require('../images/docs.png')} 
							resizeMode = {"stretch"}
							style = {{
								width: 25,
								height: 24,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}