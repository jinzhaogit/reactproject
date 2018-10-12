// 主页
import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native'
export default class Prodectlist extends Component{
    // 跳转商品列表页
    handlePress=(desPath)=>{
        this.props.navigation.navigate(desPath)
    }
    render(){
        return <ScrollView>  
            <Text style={myStyles.titleStyle}>管理页面</Text>
            <View style={{backgroundColor:'powderblue'}}>
                {/* 第一行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={myStyles.myCol}>
                        <Text style={myStyles.fontRedStyle}>200</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                    <View style={myStyles.myCol}>
                        <Text style={myStyles.fontGreenStyle}>230</Text>
                        <Text>移动端PV量</Text>
                    </View>
                </View>
                {/* 第二行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={myStyles.myCol}>
                        <Text style={myStyles.fontRedStyle}>1020</Text>
                        <Text>已完成订单总数</Text>
                    </View>
                    <View style={myStyles.myCol}>
                        <Text style={myStyles.fontGreenStyle}>2390</Text>
                        <Text>当日APP下载量</Text>
                    </View>
                </View>
                {/* 换行产生空格 */}
                <Text>{'\n\n'}</Text>
                {/* 第三行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={myStyles.mybotCol}>
                        <TouchableOpacity onPress={()=>this.handlePress('list')}>
                            <Image style={{width:90,height:90}} source={require("../../imgs/order.png")}></Image>
                            <Text style={{alignSelf:'center'}}>订单管理</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.mybotCol}>
                        <TouchableOpacity onPress={()=>this.handlePress('list')}>
                            <Image style={{width:90,height:90}} source={require("../../imgs/user.png")}></Image>
                            <Text style={{alignSelf:'center'}}>用户管理</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 第四行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={myStyles.mybotCol}>
                        <TouchableOpacity onPress={()=>this.handlePress('list')}>
                            <Image style={{width:90,height:90}} source={require("../../imgs/product.png")}></Image>
                            <Text style={{alignSelf:'center'}}>商品管理</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.mybotCol}>
                        <TouchableOpacity onPress={()=>this.handlePress('list')}>
                            <Image style={{width:90,height:90}} source={require("../../imgs/setting.png")}></Image>
                            <Text style={{alignSelf:'center'}}>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 换行产生空格 */}
                <Text>{'\n\n'}</Text>
            </View>
        </ScrollView>
    }
}
var myStyles=StyleSheet.create({
    titleStyle:{color:'#333',fontSize:28,alignSelf:'center'},
    myCol:{
        flex:1,height:100,
        justifyContent:'center',alignItems:'center',
        borderRightWidth:2,borderBottomWidth:2,borderColor:'white',
    }, 
    mybotCol:{
        flex:1,paddingBottom:30,
        justifyContent:'center',alignItems:'center',
    }, 
    fontGreenStyle:{fontSize:26,color:'green',},
    fontRedStyle:{fontSize:26,color:'red'}
})