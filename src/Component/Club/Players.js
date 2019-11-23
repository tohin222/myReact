import React, { Component } from 'react'
import Player from './Player'

 class Players extends Component {
    state={
        players : [
            {name: 'messi',age: 27,goal: 455},
            {name: 'neymar',age: 27,goal: 455},
            {name: 'ronaldo',age: 27,goal: 455},
        ],
        naiKoiraDimu: true,
        buttonName: 'naiKoiraDimu'
    }
    myButton=()=>{
        this.setState({
            naiKoiraDimu: !this.state.naiKoiraDimu
        })
    }
    render() {
      const {players} = this.state
      const {naiKoiraDimu,buttonName} = this.state
        return (
            <div>
    <h1 onClick={this.myButton}>{
        naiKoiraDimu? 'naiKoiraDimu' : 'Dekaiyadimo'

    }</h1>
                 {
                     naiKoiraDimu ? (<table>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Goal</td>
                        </tr>
                        
                        {
                        players.map((myplayer,i)=>(
                            <tr>
                                <Player key={i}         
                                    player={myplayer}
                                />
                            </tr>
                        ))
                    }
                       
                     </table>  )
                     :null
                 }
            </div>
        )
    }
}
export default Players