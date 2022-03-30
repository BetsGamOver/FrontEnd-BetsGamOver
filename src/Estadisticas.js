import React from 'react';

class Estadisticas extends React.Component {
    constructor(props){
        super(props)
    }

    ligas(){
        let key = "ee800d25fb08acaf558f78710085d2cd6a8da52f726aa344e8fa7c4bc89cf5f7";
        fetch(`https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${key}`)
        .then(response => response.json());
    }


    //Devuelve los marcadores entre dos equipos, segun su ID.
    H2h(equipo1,equipo2){
        let key = "ee800d25fb08acaf558f78710085d2cd6a8da52f726aa344e8fa7c4bc89cf5f7";
        fetch(`https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=!_your_account_APIkey_!&firstTeamId=${equipo1}&secondTeamId=${equipo2}`)
        .then(response => response.json());
    }

    MarcadorEnVivo(){
        let key = "ee800d25fb08acaf558f78710085d2cd6a8da52f726aa344e8fa7c4bc89cf5f7";
        fetch(`https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${key}`)
        .then(response => response.json());
    }

    ObternerDatosJugadores(idJugador){
        let key = "ee800d25fb08acaf558f78710085d2cd6a8da52f726aa344e8fa7c4bc89cf5f7";
        fetch(`https://apiv2.allsportsapi.com/football/?&met=Players&playerId=${idJugador}&APIkey=${key}`)
        .then(response => response.json());
    }


    ObternerDatosEquipo(idEquipo){
        let key = "ee800d25fb08acaf558f78710085d2cd6a8da52f726aa344e8fa7c4bc89cf5f7";
        fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`)
        .then(response => response.json());
    }
    // eslint-disable-next-line react/no-typos
    Render(){
        return <></>
    }

export default Estadisticas;