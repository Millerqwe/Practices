import React, { Component } from 'react';

function logClockTime() {
    // Получение строки показания часов в гражданском формате
    var time = getClockTime();
    // Очистка показаний консоли и вывод показания часов  
    console.clear();
    console.log(time); 
}

function getClockTime() {
    // Получение текущего времени
    var date = new Date();
    var time = "";
    // Выстраивание последовательности показания часов  
    var time = {    
        hours: date.getHours(),    
        minutes: date.getMinutes(),    
        seconds: date.getSeconds(),    
        ampm: "AM"  
    }
    // Преобразование показания времени в гражданский формат  
    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;  
    }
    // Подстановка 0 к показанию часов, чтобы получалась пара цифр  
    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }
    // Подстановка 0 к показанию минут, чтобы получалась пара цифр
    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;  
    }
     // Подстановка 0 к показанию секунд, чтобы получалась пара цифр
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }
    // Придание показаниям часов формата строки "hh:mm:ss tt"
    return time.hours + ":" + 
        time.minutes + ":" +
        time.seconds + " " +
        time.ampm;
} 

class Clock extends Component {
    constructor() {
        super();
        this.state = getClockTime();
    }

    componentDidMount() {
        console.log("Starting clock");
        this.ticking = setInterval( () => 
            this.setState(getClockTime()),
            1000
        )
    }

    componentWillMount() {
        clearInterval(this.ticking);
        console.log("Stoping thinking");
    }

    render() {
        const { hours, minutes, seconds, timeOfDay } = this.state;
        
        return <div className="clock">
            <span>{hours}</span>
            <span>:</span>                
            <span>{minutes}</span>                
            <span>:</span>                
            <span>{seconds}</span>                
            <span>{timeOfDay}</span>
            <button onClick={this.props.onClose}>x</button>
        </div>
    }   
}

export default Clock;