/**
 * Created by damon on 02/01/2017.
 */

import React, {Component, Porptypes} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

const TABS = {
    ORDERS:'ORDERS',
    HISTORY:'HISTORY',
    REPERTORY:'REPERTORY'
};

export default class TestTabBarIOS extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: TABS.ORDERS,
            ordersCount: 10
        }
    }

    render(){

        return (
            <TabBarIOS
                unselectedTintColor='yellow'
                tintColor='white'
                barTintColor='darkslateblue'
                style={{flex:1}}>

                <Icon.TabBarItemIOS
                    title="ORDERS"
                    iconName="shopping-cart"
                    selectedIconColor="red"
                    selected={this.state.selectedTab === TABS.ORDERS}
                    onPress={()=> {this.setState({selectedTab: TABS.ORDERS})}}
                    badge={this.state.ordersCount>0 ? this.state.ordersCount : undefined}>

                    <View style={{flex:1, backgroundColor:'#ccc', justifyContent:'center', alignItems:'center'}}>
                        <Text onPress={()=>{this.setState({ordersCount: --this.state.ordersCount})}}>{TABS.ORDERS}</Text>
                    </View>

                </Icon.TabBarItemIOS>

                <Icon.TabBarItemIOS
                    title="HISTORY"
                    iconName="book"
                    selectedIconColor="red"
                    selected={this.state.selectedTab === TABS.HISTORY}
                    onPress={()=>{this.setState({selectedTab:TABS.HISTORY})}}>

                    <View style={{flex:1, backgroundColor:'#ccc', justifyContent:'center', alignItems:'center'}}>
                        <Text>{TABS.HISTORY}</Text>
                    </View>

                </Icon.TabBarItemIOS>

                <Icon.TabBarItemIOS
                    title="REPERTORY"
                    iconName="dots-three-horizontal"
                    selectedIconColor="red"
                    selected={this.state.selectedTab === TABS.REPERTORY}
                    onPress={()=>{this.setState({selectedTab:TABS.REPERTORY})}}>

                    <View style={{flex:1, backgroundColor:'#ccc', justifyContent:'center', alignItems:'center'}}>
                        <Text>{TABS.REPERTORY}</Text>
                    </View>

                </Icon.TabBarItemIOS>

            </TabBarIOS>

        )
    }
}

